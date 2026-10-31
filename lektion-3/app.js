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

console.log(teams);  
