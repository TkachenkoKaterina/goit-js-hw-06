"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");

const spanColorRef = document.querySelector(".color");

const btnRef = document.querySelector(".change-color");

function onChangeColor(event) {
  spanColorRef.textContent = getRandomHexColor();
  console.log(spanColorRef);

  bodyRef.style.backgroundColor = spanColorRef.textContent;
  console.log(bodyRef);
}

btnRef.addEventListener("click", onChangeColor);
