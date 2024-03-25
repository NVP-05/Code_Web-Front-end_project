// render Users
function renderUsers() {
  document.getElementById("table-users").style.display = "block";
  document.getElementById("table-products").style.display = "none";
  document.getElementById("table-addBook").style.display = "none";
  document.getElementById("li-product").style.backgroundColor = "black";
  document.getElementById("li-logout").style.backgroundColor = "black";

  document.getElementById("li-users").style.backgroundColor =
    "rgb(85, 67, 208)";
  let users = JSON.parse(localStorage.getItem("users"));
  let a = 0;
  text = ``;
  for (let i = 0; i < users.length; i++) {
    if (users[i].status == true) {
      a++;
      text += `
      <tr>
        <td>${a}</td>
        <td>${users[i].Name}</td>
        <td>${users[i].Mail}</td>
        <td>${users[i].Dress}</td>
        <td>
            <button onclick="banUser(${users[i].userID})" style="background-color: rgb(238, 65, 65);">Khóa</button>
        </td>
      </tr>
      `;
    } else {
      a++;
      text += `
      <tr>
        <td>${a}</td>
        <td>${users[i].Name}</td>
        <td>${users[i].Mail}</td>
        <td>${users[i].Dress}</td>
        <td>
            <button onclick="unbanUser(${users[i].userID})" style="background-color: rgb(47, 211, 47);">Mở Khóa</button>
        </td>
      </tr>
      `;
    }
  }
  document.getElementById("renderUsers").innerHTML = text;
}
renderUsers();

// render Products
function renderProduct() {
  document.getElementById("table-users").style.display = "none";
  document.getElementById("table-addBook").style.display = "block";
  document.getElementById("table-products").style.display = "block";
  document.getElementById("li-product").style.backgroundColor =
    "rgb(85, 67, 208)";
  document.getElementById("li-users").style.backgroundColor = "black";
  document.getElementById("li-logout").style.backgroundColor = "black";

  let products = JSON.parse(localStorage.getItem("productList"));
  let a = 0;
  text = ``;
  for (let i = 0; i < products.length; i++) {
    a++;
    if (products[i].status == true) {
      text += `
        <tr>
          <td>${a}</td>
          <td><div><img style="height: 150px; width: 100px; object-fit: cover;" src="${products[i].image}" alt=""></div></td>
          <td>${products[i].name}</td>
          <td>${products[i].author}</td>
          <td>${products[i].price}$</td>
          <td>${products[i].stock}</td>
          <td>
              <button onclick="hidenProduct(${products[i].id})" style="background-color: rgb(238, 65, 65); ">Delete</button>
          </td>
        </tr>
        `;
    } else {
      text += `
        <tr>
          <td>${a}</td>
          <td><div><img style="height: 150px; width: 100px; object-fit: cover;" src="${products[i].image}" alt=""></div></td>
          <td>${products[i].name}</td>
          <td>${products[i].author}</td>
          <td>${products[i].price}$</td>
          <td>${products[i].stock}</td>
          <td>
            <button onclick="displayProduct(${products[i].id})" style="background-color: rgb(47, 211, 47);">Remove</button>
          </td>
        </tr>
        `;
    }
  }
  document.getElementById("renderProducts").innerHTML = text;
}

// Thêm sách
function addBook() {
  let productList = JSON.parse(localStorage.getItem("productList"));
  console.log(productList);

  let idBook = document.getElementById("idBook");
  let imgBook = document.getElementById("imgBook");
  let nameBook = document.getElementById("nameBook");
  let categoryBook = document.getElementById("categoryBook");
  let authorBook = document.getElementById("authorBook");
  let publisherBook = document.getElementById("publisherBook");
  let priceBook = document.getElementById("priceBook");
  let stockBook = document.getElementById("stockBook");
  let statusBook = document.getElementById("statusBook");
  let saleBook = document.getElementById("saleBook");
  let descriptionBook = document.getElementById("descriptionBook");

  let directory = imgBook.value;
  let statusNewbook;

  if (statusBook.value == "true") {
    statusNewbook = true;
  } else {
    statusNewbook = false;
  }

  let newBook = {
    id: +idBook.value,
    image: [`${"../assets/" + directory.split(`\\`).pop()}`],
    name: `${nameBook.value}`,
    category: +categoryBook.value,
    author: `${authorBook.value}`,
    publisher: `${publisherBook.value}`,
    price: +priceBook.value,
    stock: +stockBook.value,
    status: statusNewbook,
    sale: saleBook.value,
    description: `${descriptionBook.value}`,
  };
  productList.push(newBook);
  localStorage.setItem("productList", JSON.stringify(productList));
}

function closeBook() {
  document.getElementById("table-addBook").style.display = "none";
}

// Logout
function logout() {
  document.getElementById("li-users").style.backgroundColor = "black";
  document.getElementById("li-product").style.backgroundColor = "black";
  document.getElementById("li-logout").style.backgroundColor =
    "rgb(85, 67, 208)";
  setTimeout(() => {
    window.location.href = "../pages/login.html";
  }, 500);
}

function hidenProduct(idBook) {
  let productList = JSON.parse(localStorage.getItem("productList"));
  for (let i = 0; i < productList.length; i++) {
    if (productList[i].id == idBook) {
      productList[i].status = false;
      localStorage.setItem("productList", JSON.stringify(productList));
      renderProduct();
      break;
    }
  }
}

function displayProduct(idBook) {
  let productList = JSON.parse(localStorage.getItem("productList"));
  for (let i = 0; i < productList.length; i++) {
    if (productList[i].id == idBook) {
      productList[i].status = true;
      localStorage.setItem("productList", JSON.stringify(productList));
      renderProduct();
      break;
    }
  }
}

function banUser(idUser) {
  let users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++) {
    if (idUser == users[i].userID) {
      users[i].status = false;
      localStorage.setItem("users", JSON.stringify(users));
      renderUsers();
      break;
    }
  }
}

function unbanUser(idUser) {
  let users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++) {
    if (idUser == users[i].userID) {
      users[i].status = true;
      localStorage.setItem("users", JSON.stringify(users));
      renderUsers();
      break;
    }
  }
}

// Hiển thị category

function renderCategory() {
  let a = 0;
}
