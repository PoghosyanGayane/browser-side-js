"use strict";
// TASK 3 and 4
// Build a page where JavaScript dynamically adds and removes items from a list.
// Add interactivity to a page using click and input events.

const sections = document.querySelectorAll("section");

const myList = document.createElement("ul");
sections[0].appendChild(myList);

const addBttn = document.querySelector("button");

addBttn.addEventListener("click", () => {
    const listItem = document.createElement("li");
    
    const itemText = document.createElement("span");
    itemText.textContent = document.getElementById("addItem").value;

    const removeBttn = document.createElement("button");
    removeBttn.textContent = " remove ";

    removeBttn.addEventListener("click", () => {
        // const parent = removeBttn.parentElement;
        // parent.remove();
        listItem.remove();
    })


    listItem.appendChild(itemText);
    listItem.appendChild(removeBttn);

    myList.appendChild(listItem);
})


// TASK 5
// Implement basic client-side validation for a form without using libraries.

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener('blur', () => {
    let value = phoneInput.value;
    const pattern = /^\+374\d{8}$/;
    if (!pattern.test(value)) {
        phoneInput.setCustomValidity("Please enter a valid Armenian number (e.g., +374XXXXXXXX).");
    } else {
        phoneInput.setCustomValidity("");
    }
})

const emailInput = document.getElementById("email");

emailInput.addEventListener('blur', () => {
    if (emailInput.validity.typeMismatch){
        emailInput.setCustomValidity("ENTER EMAIL ADDREES");
    } else {
        emailInput.setCustomValidity("");
    }
})