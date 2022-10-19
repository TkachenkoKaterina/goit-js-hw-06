"use strict";

let counterValue = 0;

const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);

const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);

const spanValueRef = document.querySelector("#value");

const btnDecrFoo = () => {
  counterValue -= 1;
  spanValueRef.textContent = counterValue;
};

const btnIncrFoo = () => {
  counterValue += 1;
  spanValueRef.textContent = counterValue;
};

const btnClickDecr = btnDecrementRef.addEventListener("click", btnDecrFoo);

const btnClickIncr = btnIncrementRef.addEventListener("click", btnIncrFoo);
