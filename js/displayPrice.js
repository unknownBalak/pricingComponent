import { priceList } from "./data.js";

let pageView = document.querySelector(".view");
let price = document.querySelector(".dollor");
let isToggle = false;

function dispChange() {
  let input = document.querySelector('.inputRange').value;
  let toggleButton = document.querySelector('#toggleButton'); 
  isToggle= toggleButton.checked;
  let index = priceList.findIndex((item, index, arr) => {
    if (index === parseInt(input)) {
      return 1;
    }
  });
  if (index) {
    pageView.innerHTML = priceList[index].pageview;
    price.innerHTML = isToggle ?  `$${parseInt((priceList[index].price * .75)).toFixed(2)}` :   `$${priceList[index].price.toFixed(2)}`;
  }
}


export { dispChange };
