import { priceList } from "./data.js";

let pageView = document.querySelector(".view");
let price = document.querySelector(".dollor");
let isToggle = false;
pageView.innerHTML = priceList[2].pageview;
let priceStr = `$${priceList[2].price}.00`;
price.innerHTML = priceStr;

function dispChange() {
  let priceStr = "";
  let index = priceList.findIndex((item, index, arr) => {
    if (index === parseInt(this.value)) {
      return 1;
    }
  });
  if (index) {
    pageView.innerHTML = priceList[index].pageview;
    if (isToggle) {
      var newPrice = parseInt((priceList[index].price * 12 * 75) / 100 / 12);
      priceStr = `$${newPrice}.00`;
    } else {
      priceStr = `$${priceList[index].price}.00`;
    }
    price.innerHTML = priceStr;
  }
}

function updateChange() {
  let inputRange = document.querySelector(".inputRange").value;
  isToggle = this.checked;
  if (this.checked) {
    var newPrice = parseInt((priceList[inputRange].price * 12 * 75) / 100 / 12);
    priceStr = `$${newPrice}.00`;
    price.innerHTML = priceStr;
  } else {
    var newPrice = priceList[inputRange].price;
    let priceStr = `$${newPrice}.00`;
    price.innerHTML = priceStr;
  }
}

export { dispChange, updateChange };
