"use strict";

// ============================== 1 ==============================
const numberOfCategoriesRef = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${numberOfCategoriesRef}`);

// ============================== 2 ==============================

const firstCategory = document.querySelectorAll(".item h2")[0];
console.log(`Category: ${firstCategory.textContent}`);

const listFirstCategory = document.querySelectorAll(".item ul")[0];
const numberFirstCategory = listFirstCategory.children.length;
console.log(`Elements: ${numberFirstCategory}`);

const secondCategory = document.querySelectorAll(".item h2")[1];
console.log(`Category: ${secondCategory.textContent}`);

const listSecondCategory = document.querySelectorAll(".item ul")[1];
const numberSecondCategory = listSecondCategory.children.length;
console.log(`Elements: ${numberSecondCategory}`);

const thirdCategory = document.querySelectorAll(".item h2")[2];
console.log(`Category: ${thirdCategory.textContent}`);

const listThirdCategory = document.querySelectorAll(".item ul")[2];
const numberThirdCategory = listThirdCategory.children.length;
console.log(`Elements: ${numberThirdCategory}`);
