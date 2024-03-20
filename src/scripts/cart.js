function render() {
  let a = 0;
  let users = JSON.parse(localStorage.getItem("users"));
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));

  for (let i = 0; i < users.length; i++) {
    if (checkLogin == users[i].userID) {
      let text = ``;
      for (let j = 0; j < users[i].Cart.length; j++) {
        a++;
        text += `<tr>
                    <td>${a}</td>
                    <td><div><img style="height: 150px; width: 100px; object-fit: cover;" src="${
                      users[i].Cart[j].image
                    }" alt=""></div></td>
                    <td>${users[i].Cart[j].name}</td>
                    <td>${users[i].Cart[j].price}$</td>
                    <td>${users[i].Cart[j].stock}</td>
                    <td>${
                      users[i].Cart[j].quantity * users[i].Cart[j].price
                    }$</td>
                    <td><button style = "font-size: 15px;height: 20px; width: 38px; background-color: rgb(62, 207, 62);" onclick="addQuantity(${
                      users[i].Cart[j].id
                    })">+</button>
                    <span id = "quantityCart">${
                      users[i].Cart[j].quantity
                    }</span>
                    <button style = "font-size: 15px;height: 20px; width: 38px; background-color: red;" onclick="deleteQuantity(${
                      users[i].Cart[j].id
                    })">-</button></td>
                </tr>`;
      }
      document.getElementById("tbody").innerHTML = text;
    }
  }
}
render();

function totalAmount() {
  // let productList = JSON.parse(localStorage.getItem("produstList"));
  let users = JSON.parse(localStorage.getItem("users"));
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
  let sumPrice = document.getElementById("sumPrice");
  sum = 0;

  for (let i = 0; i < users.length; i++) {
    if (checkLogin == users[i].userID) {
      for (let j = 0; j < users[i].Cart.length; j++) {
        sum += users[i].Cart[j].price * users[i].Cart[j].quantity;
      }
    }
  }
  sumPrice.innerHTML = sum + "$";
}
totalAmount();

function showQuantityCart() {
  // lấy giỏ hàng ra.length là được
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
  let users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++) {
    if (users[i].userID == checkLogin) {
      console.log(users[i].Cart);
      document.getElementsByClassName("itemInCart")[0].innerHTML =
        users[i].Cart.length;
    }
  }
}
showQuantityCart();

function addQuantity(productId) {
  let productList = JSON.parse(localStorage.getItem("produstList"));
  let users = JSON.parse(localStorage.getItem("users"));
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));

  for (let i = 0; i < users.length; i++) {
    if (checkLogin == users[i].userID) {
      for (let j = 0; j < productList.length; j++) {
        if (productId == productList[j].id) {
          for (let k = 0; k < users[i].Cart.length; k++) {
            if (users[i].Cart[k].id == productId) {
              if (users[i].Cart[k].quantity < productList[j].stock) {
                users[i].Cart[k].quantity++;
                console.log(users[i].Cart[k].quantity);
                localStorage.setItem("users", JSON.stringify(users));
                render();
              } else {
                console.log("Sản phẩm trong kho không còn đủ.");
              }
            }
          }
        }
      }
    }
  }
  totalAmount();
}

function deleteQuantity(productId) {
  let productList = JSON.parse(localStorage.getItem("produstList"));
  let users = JSON.parse(localStorage.getItem("users"));
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));

  for (let i = 0; i < users.length; i++) {
    if (checkLogin == users[i].userID) {
      for (let j = 0; j < productList.length; j++) {
        if (productId == productList[j].id) {
          for (let k = 0; k < users[i].Cart.length; k++) {
            if (users[i].Cart[k].id == productId) {
              if (users[i].Cart[k].quantity > 1) {
                users[i].Cart[k].quantity--;
                console.log(users[i].Cart[k].quantity);
                localStorage.setItem("users", JSON.stringify(users));
                render();
              } else {
                console.log("Sản phẩm trong kho không còn đủ.");
              }
            }
          }
        }
      }
    }
  }
  totalAmount();
}
