// Övningsuppgift #3: Todo-list 
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const message = document.getElementById("message");

addBtn.addEventListener("click", function () {
    const text = todoInput.value;

    if (text === "") {
        return;
    }

    if (todoList.children.length >= 5) {
        message.textContent = "Du kan max ha fem ärenden i listan.";
        return;
    }

    message.textContent = "";

    const li = document.createElement("li");
    li.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Radera";

    deleteBtn.addEventListener("click", function () {
        li.remove();
        message.textContent = "";
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    todoInput.value = "";

});

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const calcAddBtn = document.getElementById("calcAddBtn");
const result = document.getElementById("result");
const calcMulBtn = document.getElementById("calcMulBtn");
const calcSubBtn = document.getElementById("calcSubBtn");

calcAddBtn.addEventListener("click", function () {
    const a = Number(num1.value);
    const b = Number(num2.value);

    result.textContent = "Resultat: " + (a + b);
});

calcMulBtn.addEventListener("click", function () {
    const a = Number(num1.value);
    const b = Number(num2.value);

    result.textContent = "Resultat: " + (a * b);
});

calcSubBtn.addEventListener("click", function () {
    const a = Number(num1.value);
    const b = Number(num2.value);
    const diff = a - b;

    result.textContent = "";

    if (diff < 0) {
        result.textContent = "Tal 1 måste vara större än eller lika med tal 2. Ändra talen och försök igen.";

        return;
    }

    result.textContent = "Resultat: " + diff;
});

const colorInput = document.getElementById("colorInput");
const colorBtn = document.getElementById("colorBtn");
const colorResult = document.getElementById("colorResult");

colorBtn.addEventListener("click", function () {
    const n = Number(colorInput.value);
    if (n < 0) {
        colorResult.style.color = "black";
        colorResult.textContent = "Talet är för litet. Skriv ett tal mellan 0 och 10.";
        return;
    }

    if (n > 10) {
        colorResult.style.color = "black";
        colorResult.textContent = "Talet är för stort. Skriv ett tal mellan 0 och 10.";
        return;
    }

    if (n < 4) {
        colorResult.style.color = "red";
    } else if (n <= 7) {
        colorResult.style.color = "gold";
    } else {
        colorResult.style.color = "green";
    }
    colorResult.textContent = n;
});

// == Övning 2: Klasslista ==
const students = [
    { namn: "Bat von Man", utbildning: "Frontend", stad: "Malmö", år: 1 },
    { namn: "Cat von Women", utbildning: "Backend", stad: "Stockholm", år: 2 },
    { namn: "Spider McWeb", utbildning: "Frontend", stad: "Göteborg", år: 3 },
    { namn: "Iron Dev", utbildning: "Frontend", stad: "Malmö", år: 1 },
    { namn: "Hulk Code", utbildning: "Fullstack", stad: "Lund", år: 2 },
    { namn: "Thor Script", utbildning: "Frontend", stad: "Uppsala", år: 1 },
    { namn: "Captain Byte", utbildning: "Backend", stad: "Malmö", år: 3 },
    { namn: "Black Code", utbildning: "Frontend", stad: "Helsingborg", år: 1 },
    { namn: "Scarlet Compiler", utbildning: "Fullstack", stad: "Stockholm", år: 2 },
    { namn: "Vision Array", utbildning: "Frontend", stad: "Malmö", år: 1 },
];

const showStudentsBtn = document.getElementById("showStudentsBtn");
const studentList = document.getElementById("studentList");
const teacherCheck = document.getElementById("teacherCheck");

showStudentsBtn.addEventListener("click", function () {
    if (!teacherCheck.checked) {
        alert("Please confirm that you are a teacher!");
        return;
    }

    const chosen = document.querySelector('input[name="education"]:checked').value;
    const chosenYear = document.getElementById("yearSelect").value;

    const checkedCities = document.querySelectorAll('input[name="city"]:checked');
    const cities = [];
    for (const c of checkedCities) {
        cities.push(c.value);
    }

    studentList.innerHTML = "";

    for (const s of students) {
        const educationMatch = chosen === "Alla" || s.utbildning === chosen;
        const cityMatch = cities.length === 0 || cities.includes(s.stad);
        const yearMatch = chosenYear === "Alla" || s.år === Number(chosenYear);

        if (educationMatch && cityMatch && yearMatch) {
            
            const li = document.createElement("li");
            li.textContent = s.namn + " - " + s.utbildning + ", " + s.stad + ", år " + s.år;
            studentList.appendChild(li);
        }
    }
});


