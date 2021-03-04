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

//giving style when user click on button "start my trail"

let buttonPay = document.querySelector('.payhere');
let body = document.querySelector('.body');
// console.log(body);
function thanksGiving(e) {

 let text = `<div class='bodyClass'>Welcome to FrontEnd Mentor Community</div>`
 body.innerHTML=text;
}
buttonPay.addEventListener('click',thanksGiving)
