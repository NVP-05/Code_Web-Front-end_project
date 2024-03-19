// console.log(window.location.href.split("?")[1].split("=")[1])
let id = window.location.href.split("?")[1].split("=")[1];

let productList = JSON.parse(localStorage.getItem("produstList"));

let product = productList.find(function (e, i) {
  return e.id === +id;
});

let title = document.getElementById("title");
let description = document.getElementById("description");
let price = document.getElementById("price");
let image = document.getElementById("image");
let author = document.getElementById("author");
let publisher = document.getElementById("publisher");

console.log(product);

title.innerHTML = product.name;
description.innerHTML = product.description;
price.innerHTML = product.price;
image.src = product.image;
author.innerHTML = product.author;
publisher.innerHTML = product.publisher;

// Mua hàng
function addToCart() {
  // Khi đăng nhập mới cho mua.
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
  if (checkLogin == null) {
    window.location.href = "./login.html"; 
    return;
  } else {
    
  }
}
