import { priceList } from "./data.js";
let pageView = document.querySelector(".view");
let price = document.querySelector(".dollor");
let slider = document.querySelector('.inputRange');
let sliderSlide = document.createElement('style');
let isToggle = false;

 function calCulateRatio(value) {
    value = parseInt(value);
    value = value*100/ 4
    let str = `input[type="range"]::-webkit-slider-runnable-track {
      background-image: linear-gradient(to right, #A1f2ea ${value}% , #f1f5fe ${value}% 100%);}`
     return str; 
  }

sliderSlide.innerHTML = calCulateRatio(slider.value); 

function dispChange() {
  let input = document.querySelector('.inputRange').value;
  let toggleButton = document.querySelector('#toggleButton'); 

  sliderSlide.innerHTML =calCulateRatio(input);

 isToggle= toggleButton.checked;

  let index = priceList.findIndex((item, index, arr) => {
    if (index === parseInt(input)) {
      return 1;
    }
  });
  if (index >=0 ) {
    pageView.innerHTML = priceList[index].pageview;
    price.innerHTML = isToggle ?  `$${parseInt((priceList[index].price * .75)).toFixed(2)}` :   `$${priceList[index].price.toFixed(2)}`;
  }
}
document.head.appendChild(sliderSlide);


export { dispChange };
