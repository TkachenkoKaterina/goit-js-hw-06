"use strict";

const inputRef = document.querySelector("#validation-input");
console.log(inputRef);

const LengthRef = inputRef.getAttribute("data-length");
console.log(LengthRef);

const offBlur = (event) => {
  if (event.currentTarget.value.length === +LengthRef) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else if (event.currentTarget.value.length !== +LengthRef) {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
};

inputRef.addEventListener("blur", offBlur);
