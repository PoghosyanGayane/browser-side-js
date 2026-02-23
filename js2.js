"use strict";

// TASK 2
// Create a script that processes a list of objects 
// (e.g. users or products) and prints filtered results

function Product(productionDate, expiryDate, size, containsLactose) {
    this.productionDate = productionDate;
    this.expiryDate = expiryDate;
    this.size = size;
    this.containsLactose = containsLactose;
}

const listOfProducts = [];

const milk = new Product('01-02-2026', '05-02-2026', '1L', true);
const cheese = new Product('01-02-2026', '01-03-2026', '450g', true);
const yogurt = new Product('01-02-2026', '14-02-2026', '230g', false);
const butter = new Product('01-02-2026', '01-05-2026', '120g', false);

listOfProducts.push(milk, cheese, yogurt, butter);

const listOfLactoseFreeProducts = listOfProducts.filter(
  (x) => !x.containsLactose
);

console.log(listOfLactoseFreeProducts);


