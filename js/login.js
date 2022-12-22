let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  console.log(user);
  let json = JSON.stringify(user);
  if (!username.value || !email.value || !password.value) {
    alert("vui long nhap day du thong tin");
  }
  if (localStorage.getItem(username.value) == json) {
    alert("dang nhap thanh cong");
    window.location.href = "home.html";
  } else {
    alert("dang nhap that bai");
  }
});
btnLogin.addEventListener("Enter", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  console.log(user);
  let json = JSON.stringify(user);
  if (!username.value || !email.value || !password.value) {
    alert("vui long nhap day du thong tin");
  }
  if (localStorage.getItem(username.value) == json) {
    alert("dang nhap thanh cong");
    window.location.href = "home.html";
  } else {
    alert("dang nhap that bai");
  }
});



// Lấy dữ liệu toàn bộ user
function GetAPI() {
  fetch("http://localhost:1337/api/clients")
  .then((response) => response.json())
  .then((datas) => {
    console.log("Success:", datas);
    return datas;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}

// Mảng các người dùng
// B1: đọc dữ liệu đăng nhập
// B2: So sánh dữ liệu trong bảng người dùng
// - lặp từng phần tử dể so sánh 

[
  {id=1,name="dfa", age=20},
  {id=1,name="manfasdfh", age=20},
  {id=1,name="maasdfnh", age=20},
  {id=1,name="manh", age=20},
  {id=1,name="maasdfnh", age=20},
  {id=1,name="manafdsh", age=20},
]

{id=1,name="manh", age=20}

