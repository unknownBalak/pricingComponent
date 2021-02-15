import { dispChange, updateChange } from "./displayPrice.js";

let range = document.querySelector(".inputRange");
range.addEventListener("input", dispChange);

let toggleButton = document.querySelector("#toggleButton");
toggleButton.addEventListener("change", updateChange);
