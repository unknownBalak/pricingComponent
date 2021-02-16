import { dispChange } from "./displayPrice.js";

let range = document.querySelector(".inputRange");
let toggleButton = document.querySelector("#toggleButton");

range.addEventListener("input", dispChange);
toggleButton.addEventListener("change", dispChange);


let discount = document.querySelector('.highlighter');
function updateDiscount() {
        discount.textContent = window.innerWidth<764 ? '-25%' : discount.innerHTML = `25% discount`
}
window.addEventListener('resize',updateDiscount)