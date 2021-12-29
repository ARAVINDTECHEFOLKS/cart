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
    sessionStorage.setItem("totalCost", cartCost + product.price);
  } else {
    sessionStorage.setItem("totalCost", product.price);
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
      <div class="col image_col">
              <img src="./assets/${item.tag}.jpg">
            </div>
            <div class="col-6">
            <h5>${item.name}</h5>
                <table >
                  <tr>
                    <td>
                      <button class="dBtn"><</button></i><span id="checkingValue"><a class="value" >${item.inCart}</a></span><button class="iBtn">></botton>
                    </td>
                    <td style="padding :20px"><a href="#">Delete</a></td>
                    <td style="padding :20px"><a href="#">see more like this</a></td>
                  </tr>
                </table>   
            </div>
            <div class="col">
             <h5>${item.price}</h5>
            </div>
            </div>`;
      total += item.inCart * item.price;
      inCartCount = item.inCart;

      console.log(total);
    });
    Object.values(cartItems).map((item) => {
      let decrease = document.querySelectorAll(".dBtn");
      let valueD = document.querySelectorAll(".value");
      let num = new Array(decrease.length);
      num.fill(inCartCount);

      for (let j = 0; j < decrease.length; j++) {
        decrease[j].onclick = function decreaseValue() {
          console.log("decrease" + j);
          let numD = num[j];
          numD = numD - 1;
          valueD[j].innerHTML = numD;
          num[j] = numD;
          if (numD < 1) {
            num[j] = 1;
            valueD[j].innerHTML = num[j];
          }
        };
      }
      let increase = document.querySelectorAll(".iBtn");
      for (let j = 0; j < increase.length; j++) {
        increase[j].onclick = function increaseValue() {
          console.log("increase" + j);
          let numI = num[j];
          numI = numI + 1;
          valueD[j].innerHTML = numI;
          num[j] = numI;
          if (numI < 1) {
            num[j] = 1;
            valueD[j].innerHTML = num[j];
          }
        };
      }
      k++;
      console.log(k);
    });

    console.log(total);

    Object.values(cartItems).map((item) => {
      totalPrice.innerHTML = `
 
    <h5>TotalPrice: ${total}</h5>`;
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

