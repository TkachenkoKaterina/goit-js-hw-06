"use strict";

const inputRef = document.querySelector("#name-input");
console.log(inputRef);

const outputRef = document.querySelector("#name-output");
console.log(outputRef);

const onInput = (event) => {
  if (event.currentTarget.value !== "") {
    outputRef.textContent = event.currentTarget.value;
  } else if (event.currentTarget.value === "") {
    outputRef.textContent = "Anonymous";
  }
};

inputRef.addEventListener("input", onInput);
