console.log("running");
var repeated = [];
var n = 0;
let carts = document.querySelectorAll(".add-cart");
let products = [
  {
    name: "Lenovo Tab M10 HD 2nd Gen",
    tag: "Lenovo Tab M10",
    price: 11294,
    inCart: 0,
  },
  {
    name: "Lenovo Tab M10 FHD Plus Tablet",
    tag: "Lenovo Tab M10 FHD",
    price: 18990,
    inCart: 0,
  },
  {
    name: "Lenovo Yoga Smart Tablet",
    tag: "Lenovo Yoga Smart Tablet",
    price: 19999,
    inCart: 0,
  },
  {
    name: "Lenovo Tab M8 HD 2nd Gen",
    tag: "Lenovo Tab M8",
    price: 10890,
    inCart: 0,
  },
  {
    name: "Lenovo Tab M7 3rd Gen",
    tag: "Lenovo Tab M7",
    price: 7999,
    inCart: 0,
  },
  {
    name: "Lenovo Tab M10 HD Tablet",
    tag: "Lenovo Tab M10 HD",
    price: 10449,
    inCart: 0,
  },
];
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}
function onLoadCartNumbers() {
  let productNumbers = sessionStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}
function cartNumbers(product) {
  let productNumbers = sessionStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    if (product.tag === repeated[n]) {
      alert("this item is already added");
    } else {
      var check = product.tag;
      let result = repeated.every(function (element) {
        return repeated.includes(check);
      });
      if (result === true) {
        alert("this item is already added");
      } else {
        sessionStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
        repeated[n] = product.tag;
        n++;
        setItems(product);
      }
    }
  } else {
    repeated[n] = product.tag;
    n++;
    sessionStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
    setItems(product);
  }
}
function setItems(product) {
  console.log("my product is", product);
  let cartItems = sessionStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
    console.log("inCart", product.inCart);
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }
  //console.log("my cartItems", cartItems);
  sessionStorage.setItem("productsInCart", JSON.stringify(cartItems));
  //console.log("stringify is", cartItems);
}
function totalCost(product) {
  //console.log("price of product is ", product.price);
  let cartCost = sessionStorage.getItem("totalCost");
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    let totalCostofItem = product.inCart * product.price;
    console.log("productincart is ", product.inCart);
    console.log("productPrice is ", product.price);
    sessionStorage.setItem("totalCost", cartCost + totalCostofItem);
  } else {
    let totalCostofItem = product.inCart * product.price;
    sessionStorage.setItem("totalCost", totalCostofItem);
  }
}
var k = 0;
function displayCart() {
  var total = 0;
  let inCartCount = 0;

  let cartItems = sessionStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let totalPrice = document.querySelector(".total-price");
  let productsContainer = document.querySelector(".products");
  if (cartItems && productsContainer) {
    productsContainer.innerHTML = ``;
    totalPrice.innerHTML += ``;
    Object.values(cartItems).map((item) => {
      productsContainer.innerHTML += `
      <div class="row">
      <div class="image col image_col">
              <img src="./assets/${item.tag}.jpg">
            </div>
            <div class="text col-6">
            <h5 class="itemName">${item.name}</h5>
            <div class="table">
                      <button class="dBtn"><</button></i><span id="checkingValue"><a class="value" >${item.inCart}</a></span><button class="iBtn">></button>
                    <a class="remove" href="#">Delete</a> <a> | </a>
                  <a href="#">see more like this</a>
                </div> 
            </div>
            <div class="col">
             <h5 class="price">${item.price}</h5>
            </div>
            </div>`;
      total += item.inCart * item.price;
      inCartCount = item.inCart;

      console.log(total);
    });
    //
    let decrease = document.querySelectorAll(".dBtn");
    let valueD = document.querySelectorAll(".value");
    let num = new Array(decrease.length);
    num.fill(inCartCount);
    // let priceValue = document.querySelectorAll(".price").innerText
    var totalCountOfAmount = 0;
    let priceArray = new Array(decrease.length);
    for (let i = 0; i < priceArray.length; i++) {
      priceArray[i] = document.getElementsByClassName("price")[i].innerText;
      priceArray[i] = parseInt(priceArray[i]);
      //totalCountOfAmount += totalOfPriceArray[i];
    }
    var totalOfPriceArray = priceArray.slice();
    function calculate() {
      totalCountOfAmount = 0;
      for (let i = 0; i < totalOfPriceArray.length; i++) {
        totalCountOfAmount += totalOfPriceArray[i];
      }
    }
    calculate();
    console.log("totalAmount", totalCountOfAmount);

    for (let j = 0; j < decrease.length; j++) {
      decrease[j].onclick = function decreaseValue() {
        let finalAmount = totalCountOfAmount;
        console.log("finalAmount", finalAmount);
        priceValue = parseInt(priceArray[j]);
        console.log("decrease" + j);
        console.log(priceValue, typeof priceValue);
        let numD = num[j];
        numD = numD - 1;
        valueD[j].innerHTML = numD;
        num[j] = numD;
        if (numD < 1) {
          num[j] = 1;
          valueD[j].innerHTML = num[j];
        }
        let totalOfPrice = num[j] * priceValue;
        totalOfPriceArray[j] = totalOfPrice;
        calculate();
        console.log(totalCountOfAmount);
        document.getElementsByClassName("price")[j].innerHTML = totalOfPrice;
        var totalNum = document.getElementsByClassName("total")[0].innerText;
        totalNum = parseInt(totalNum);
        finalAmount = finalAmount - priceValue;
        document.getElementsByClassName("total")[0].innerHTML =
          totalCountOfAmount;
        // let elementName =
        //   document.getElementsByClassName("itemName")[j].innerText;
        // console.log(elementName);
        // for (let i = 0; i < products.length; i++) {
        //   if (products[i].name === elementName) {
        //     cartNumbers(products[i]);
        //     totalCost(products[i]);
        //     break;
        //   }
        // }
      };
    }

    let increase = document.querySelectorAll(".iBtn");
    for (let j = 0; j < increase.length; j++) {
      increase[j].onclick = function increaseValue() {
        let finalAmount = totalCountOfAmount;
        console.log("finalAmount", finalAmount);
        console.log("increase" + j);
        priceValue = parseInt(priceArray[j]);
        console.log(priceValue, typeof priceValue);
        let numI = num[j];
        numI = numI + 1;
        valueD[j].innerHTML = numI;
        num[j] = numI;
        if (numI < 1) {
          num[j] = 1;
          valueD[j].innerHTML = num[j];
        }
        let totalOfPrice = num[j] * priceValue;
        totalOfPriceArray[j] = totalOfPrice;
        calculate();
        console.log(totalCountOfAmount);
        document.getElementsByClassName("price")[j].innerHTML = totalOfPrice;
        var totalNum = document.getElementsByClassName("total")[0].innerText;
        totalNum = parseInt(totalNum);
        finalAmount = finalAmount - priceValue;
        document.getElementsByClassName("total")[0].innerHTML =
          totalCountOfAmount;
        // let elementName =
        //   document.getElementsByClassName("itemName")[j].innerText;
        // console.log(elementName);
        // for (let i = 0; i < products.length; i++) {
        //   if (products[i].name === elementName) {
        //     cartNumbers(products[i]);
        //     totalCost(products[i]);
        //     break;
        //   }
        // }
      };
    }
    k++;
    //console.log(k);

    //Object.values(cartItems).map((item) => {
    let removeButton = document.querySelectorAll(".remove");
    for (let i = 0; i < removeButton.length; i++) {
      var button = removeButton[i];
      button.addEventListener("click", function (event) {
        var buttonClicked = event.target;
        var price = document.getElementsByClassName("price")[0].innerText;
        console.log(price);
        price = parseInt(price);
        console.log("this is price", price, typeof price);
        buttonClicked.parentElement.parentElement.parentElement.remove();
        var totalNum = document.getElementsByClassName("total")[0].innerText;
        console.log(totalNum, typeof totalNum);
        //total = total - price;
        totalNum = parseInt(totalNum);
        console.log("this is total", totalNum, typeof totalNum);
        document.getElementsByClassName("total")[0].innerHTML =
          totalNum - totalOfPriceArray[i];
        //sessionStorage.removeItem('key');
      });
    }
    console.log(removeButton);
    //});
    console.log(total);

    Object.values(cartItems).map((item) => {
      totalPrice.innerHTML = `
 
    <table>
    <tr>
    <td><h5>TotalPrice: </h5> </td>
    <td><h5 class="total">${total}</h5></td>
    </tr>
    </table>`;
    });
  }
  console.log("hai");
}
onLoadCartNumbers();
displayCart();

for (var i = 0; i < repeated.length; i++) {
  console.log(repeated[i]);
}
console.log("last");
// if (performance.navigation.type === 1) {
//   sessionStorage.clear();
// }
