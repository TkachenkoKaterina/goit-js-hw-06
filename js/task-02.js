"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list0 = document.createElement("li");
list0.textContent = ingredients[0];
const listClass = list0.classList.add("item");
console.log(list0);

const list1 = document.createElement("li");
list1.textContent = ingredients[1];
const listClass1 = list1.classList.add("item");
console.log(list1);

const list2 = document.createElement("li");
list2.textContent = ingredients[2];
const listClass2 = list2.classList.add("item");
console.log(list2);

const list3 = document.createElement("li");
list3.textContent = ingredients[3];
const listClass3 = list3.classList.add("item");
console.log(list3);

const list4 = document.createElement("li");
list4.textContent = ingredients[4];
const listClass4 = list4.classList.add("item");
console.log(list4);

const list5 = document.createElement("li");
list5.textContent = ingredients[5];
const listClass5 = list5.classList.add("item");
console.log(list5);

const ulByIdRef = document.querySelector("#ingredients");
const listItems = ulByIdRef.append(list0, list1, list2, list3, list4, list5);
console.log(ulByIdRef);
