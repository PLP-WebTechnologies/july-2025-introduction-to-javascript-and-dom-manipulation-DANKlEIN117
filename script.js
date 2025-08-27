
// Part 1: JavaScript Basics

function checkAge() {
    let age = prompt("Enter your age:"); // input
    age = Number(age);

    if (age >= 18) {
        document.getElementById("ageResult").innerText = "You are an adult!";
    } else if (age > 0) {
        document.getElementById("ageResult").innerText = "You are under 18.";
    } else {
        document.getElementById("ageResult").innerText = "Invalid age entered.";
    }
}


// Part 2: Functions


// Function 1: Greeting
function askName(){
    let userName = prompt("What is your name? ")
    showGreeting(userName);
}
function showGreeting(name) {
    if(name && name.trim() !==""){
        document.getElementById("greeting").innerText= `Hello, ${name}! Welcome`
    }else{
        document.getElementById("greeting").innerText='Hello, Stranger'
    }
}

// Function 2: Simple Calculator
function calculateTotal(price, quantity) {
    return price * quantity;
}
// Example usage (just for console demo)
console.log("Total: " + calculateTotal(50, 3)); 


// 🔁 Part 3: Loops


// Loop 1: Print numbers 1–10
function listNumbers() {
    let list = document.getElementById("numberList");
    list.innerHTML = ""; // clear old list

    for (let i = 1; i <= 10; i++) {
        let li = document.createElement("li");
        li.innerText = i;
        list.appendChild(li);
    }
}

// Loop 2: Array iteration
let fruits = ["Apple", "Banana", "Grapes"];
fruits.forEach(fruit => console.log("Fruit:", fruit));


// Part 4: DOM Manipulation

// DOM 1: Change background color
document.getElementById("colorBtn").addEventListener("click", () => {
    document.body.style.background =
        document.body.style.background === "lightyellow" ? "blue" : "lightyellow";
});

// DOM 2: Add new list item
document.getElementById("addItemBtn").addEventListener("click", () => {
    let list = document.getElementById("dynamicList");
    let newItem = document.createElement("li");
    newItem.innerText = "New item added at " + new Date().toLocaleTimeString();
    list.appendChild(newItem);
});

// DOM 3: Toggle class (extra demo)
document.getElementById("greeting").addEventListener("click", () => {
    document.getElementById("greeting").classList.toggle("highlight");
});

