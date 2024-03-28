function renderOrder() {
  document.getElementById("li-users").style.backgroundColor = "black";
  document.getElementById("li-product").style.backgroundColor = "black";
  document.getElementById("li-category").style.backgroundColor = "black";
  document.getElementById("li-logout").style.backgroundColor = "black";
  document.getElementById("li-order").style.backgroundColor =
    "rgb(85, 67, 208)";

  let order = JSON.parse(localStorage.getItem("order"));
  let text = ``;
  let text2 = ``;
  let a = 0;
  for (let i = 0; i < order.length; i++) {
    for (let j = 1; j < order[i].books.length; j++) {
      text2 += `
            <tr>
              <td>${order[i].books[j].name}</td>
            </tr>
        `;
    }
    text += `
            <tr>
              <td rowspan="${order[i].books.length}">${a + 1}</td>
              <td rowspan="${order[i].books.length}">${order[i].id}</td>
              <td>${order[i].books[0].name}</td>
              <td rowspan="${order[i].books.length}">${order[i].total}$</td>
            </tr>
            ${text2}
        `;
    document.getElementById("table-order").innerHTML = text;
    a++;
    text2 = ``;
  }
}

renderOrder();
