const p = document.createElement("p"); 
p.textContent = "Hej från Javascript!";
document.body.appendChild(p); 

const h1 = document.getElementById("title"); 
h1.textContent = "Rubrik från Javascript!";

const btn = document.getElementById("colorBtn");
btn.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightgree";
});

const pBtn = document.createElement("button");
pBtn.textContent = "Färge p-taggar";
document.body.appendChild(pBtn); 

pBtn.addEventListener("click", function () {
    const allp = document.querySelectorAll("p");
    allp.forEach(function (para) {
      para.style.color = "green";  

    });   
});
//Uppgift 2 och 2,5
const numbers = [2, 5, 10, 15, 20, 25, 30, 50, 60, 92];
const ul = document.createElement("ul");
numbers.forEach(function (number, index) {
    const li = document.createElement("li");
    li.textContent = number;
    if (number % 2 === 0) {
        li.style.color = "red";
    } else {
        li.style.color = "blue";
    }
    if ((index + 1) % 5 === 0){
        li.style.color = "purple";
    }
    ul.appendChild(li); 
});

document.body.appendChild(ul); 

// Uppgift 3 - profilkort

const profiles = [
    {
       name: "Maryam",
       age: 25,
       amountOfPets: 0,
       email: "maryam@MediaList.com",
       favoriteAuthor: "Umera Ahmed",
              lovesWinter: true

    }, 
    
    {
        name: "Asra",
        age: 16,
        amountOfPets: 1,
        email: "asra@mil.com",
        favoriteAuthor: "Stig Larsson",
        lovesWinter: false

    },

    { name: "Omar",
        age: 20,
        amountOfPets: 2,
        email: "omar@mail.com",
        favoriteAuthor: "Stieg Larsson",
        lovesWinter: true
    }
];

const getBtn = document.getElementById("getprofiles");
const container = document.getElementById("profile-cards");

getBtn.addEventListener("click", function () {
    container.innerHTML = "";
    profiles.forEach(function (profile) {
        const card = document.createElement("div");
        card.innerHTML = `
        <h3>${profile.name}</h3>
        <p>Ålder: ${profile.age}</p>
        <p>Husdjur: ${profile.amountOfPets}</p>
        <p>E-post: ${profile.email}</p>
        <p>Favoritförfattare: ${profile.favoriteAuthor}</p>
        
    `;

    if (profile.lovesWinter === true) {
        card.style.backgroundColor = "lightblue";
    } else {
        card.style.backgroundColor = "gold";
    }

        container.appendChild(card);
    });
}); 
  
 
 


    