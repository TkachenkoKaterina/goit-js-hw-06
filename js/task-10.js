"use strict";

const inputRef = document.querySelector("input");
const btnCreateRef = document.querySelector("button[data-create]");
const btnDestroyRef = document.querySelector("button[data-destroy]");
const divBoxesRef = document.querySelector("#boxes");

inputRef.addEventListener("input", onInput);
divBoxesRef.addEventListener("click", createBoxes);

function createBoxes(amount) {
  let NextSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    divBoxesRef.append(div);
    // div.style.width = "30px";
    // console.log(div.style.width);
    // div.style.height = "30px";
    getRandomHexColor(div);
    div.style.width = `${NextSize}px`;
    console.log(`"${NextSize}px"`);
    div.style.height = `${NextSize}px`;
    NextSize += 10;
  }
}

function onInput(event) {
  const amount = +event.currentTarget.value;
  //   console.log(amount);
  if (amount > 1 && amount < 100) {
    createBoxes(amount);
    console.log(`Все ок, в пределах допуска: ${amount}`);
    return amount;
  } else {
    console.log(`За пределами допуска: ${amount}`);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
