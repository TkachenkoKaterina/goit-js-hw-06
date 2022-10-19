"use strict";

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryUlRef = document.querySelector(".gallery");

const listImages = images
  .map(
    ({ url, alt }) =>
      `<li style="list-style-type: none"><img src="${url}" style="
          border-radius: 25px;
          outline: solid 5px teal;
        " alt="${alt}" width="250"></li>`
  )
  .join("");

galleryUlRef.insertAdjacentHTML("afterbegin", listImages);

galleryUlRef.style.display = "grid";
galleryUlRef.style.gap = "30px";

console.log(galleryUlRef);
