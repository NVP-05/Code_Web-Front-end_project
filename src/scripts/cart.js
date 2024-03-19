let userLogin = JSON.parse(localStorage.getItem("userLogin"));
let productList = JSON.parse(localStorage.getItem("produstList"));

function render() {
  let text = ``;
  for (let i = 0; i < users.Cart.length; i++) {
    text += `<tr>
                    <td>${i+1}</td>
                    <td>${students[i].name}</td>
                    <td>${students[i].email}</td>
                    <td>${students[i].phone}</td>
                    <td>${students[i].country}</td>
                    <td>${students[i].gender}</td>
                    <td><button onclick="editUser(${students[i].id})">Sửa</button></td>
                    <td><button onclick="deleteUser(${students[i].id})">Xóa</button></td>
                </tr>`;
  }
}
