let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-login");

// khi nhấn vào cái nút
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  LoginAPI(); // Gọi tới API để xử lý
});




// Lấy dữ liệu toàn bộ user - database
function LoginAPI() {
  fetch("http://localhost:1337/api/clients")
  .then((response) => response.json())
  .then((datas) => {
    console.log("Success:", datas);
    login(datas.data); // Gọi tới hàm kiểm tra mật khẩu
    return datas;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}

// đọc dữ liệu từ dao diện người dùng và kiểm tra mật khẩu
function login(datas) {
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  console.log(username.value);

  let check; 
  // const database = GetAPI();

  // let data = database.data; 

  // console.log(data);
  datas.map(function(phantu) {
    if(phantu.attributes.Name == username.value && phantu.attributes.Email == email.value && phantu.attributes.Password == password.value) {
      check = true;

    } else {
      check = false;
    }
  })

  if (check) {
    setTimeout((e) => {
      alert("Đăng nhập thành công");
      window.location.href = "../index.html";
    }, 2000);
  } else {
    alert("Dăng nhập thất bại");
  }

}




