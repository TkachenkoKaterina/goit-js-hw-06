"use strict";

const formRef = document.querySelector("form");
console.log(formRef);

formRef.addEventListener("submit", onLogin);

function onLogin(event) {
  event.preventDefault();
  const {
    elements: { email, password }, // у которых есть атрибут 'name'
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }

  const formSubmit = {
    email: email.value,
    password: password.value,
  };
  console.log(formSubmit);

  event.currentTarget.reset();
}
