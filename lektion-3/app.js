const nameInput = document.getElementById("team-name-input");
const changeNameBtn = document.getElementById("change-name-btn");
const addPlayerBtn = document.getElementById("add-player-btn");
const messageEl = document.getElementById("message");

const teams = {
    A: {
        list: document.getElementById("team-A"),
        count: document.getElementById("count-A"),
        name: document.getElementById("team-name-A"),
        article: document.querySelector(".team-a"),
    },

    B: {
        list: document.getElementById("team-B"),
        count: document.getElementById("count-B"),
        name: document.getElementById("team-name-B"),
        article: document.querySelector(".team-b"),
    }
};

function getChosenTeam() {
    return document.querySelector('input[name="team"]:checked').value;
}

function getTeamOf(playerEl) {
    return playerEl.parentElement === teams.A.list ? "A" : "B";
}

function updateCount(team) {
    const n = teams[team].list.children.length;
    teams[team].count.textContent = n;
    teams[team].article.classList.toggle("full", n >= 5);
}

function createPlayer(username) {
    const li = document.createElement("li");
    li.classList.add("player");

    const nameSpan = document.createElement("span");
    nameSpan.classList.add("player-name");
    nameSpan.textContent = username;

    const actions = document.createElement("div");
    actions.classList.add("player-actions");

    const changeBtn = document.createElement("button");
    changeBtn.classList.add("btn-small", "change-btn");
    changeBtn.textContent = "Change Team";
    changeBtn.addEventListener("click", function () {
        const from = getTeamOf(li);
        const to = from === "A" ? "B" : "A";

        if (teams[to].list.children.length >= 5) {
            messageEl.textContent = "Det andra laget är fullt!";
            return;
        }

        teams[to].list.appendChild(li);
        updateCount(from);
        updateCount(to);
        messageEl.textContent = "";
    });

    const leaveBtn = document.createElement("button");
    leaveBtn.classList.add("btn-small", "leave-btn");
    leaveBtn.textContent = "Leave Team";
    leaveBtn.addEventListener("click", function () {
        const team = getTeamOf(li);
        li.remove();
        updateCount(team);
        messageEl.textContent = "";
    });

    actions.append(changeBtn, leaveBtn);
    li.append(nameSpan, actions);
    return li;
}

changeNameBtn.addEventListener("click", function () {
    const chosen = getChosenTeam();

    if (nameInput.value.trim() === "") {
        messageEl.textContent = "Please enter a name!";
        return;
    }

    teams[chosen].name.textContent = nameInput.value;
    messageEl.textContent = "";
    nameInput.value = "";
});

addPlayerBtn.addEventListener("click", async function () {
    const chosen = getChosenTeam();

    if (teams[chosen].list.children.length >= 5) {
        messageEl.textContent = "Laget är fullt!";
        return;
    }

    try {
        const res = await fetch("https://randomuser.me/api");
        const data = await res.json();
        const username = data.results[0].login.username;

        teams[chosen].list.appendChild(createPlayer(username));
        updateCount(chosen);
        messageEl.textContent = "";
    } catch (error) {
        messageEl.textContent = "Kunde inte hämta spelare, försök igen.";
    }
});   