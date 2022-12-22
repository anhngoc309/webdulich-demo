let username = document.getElementById("username"); // lay thẻ input có id - username
let email = document.getElementById("email"); // lấy thẻ có id - email
let password = document.getElementById("password"); // ... password
let btnSignup = document.querySelector(".btn-signup"); // lay nut submit
let btnLogin = document.querySelector(".btn-login"); // lấy nut chuyển sang đăng nhập


// hàm xẩy ra sự kiên khi nhấn vào nút đăng nhập
btnSignup.addEventListener("click", function (e) {
  e.preventDefault(); // chặn ko tải lại trang
  let Name = username.value;
  let Email = email.value;
  let Password = password.value;

  let newUser = {
    "data": {
      "Name": Name,
      "Email": Email,
      "password": Password,
    }
  };
  console.log(newUser);
  // PostAPI(newUser);
});


// Tải dữ liệu lên database (tạo mới)
function PostAPI(datas) {
  fetch("http://localhost:1337/api/clients", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(datas), // dữ liệu truyền đi
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
