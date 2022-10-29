"use strict";

const inputRef = document.querySelector("#font-size-control");
console.log(inputRef);

const spanRef = document.querySelector("#text");
console.log(spanRef);

const onRange = (event) => {
  spanRef.style.fontSize = `${event.currentTarget.value}px`;
  console.log(spanRef.style.fontSize);
  console.log(spanRef);
};

inputRef.addEventListener("input", onRange);
