function ResAPI() {
  const Vehicle_list = document.querySelector(".Vehicle_in_database");

  fetch("http://localhost:1337/api/tbl-service-vehicles")
    .then((res) => {
      console.log(res.status); // 404
      return res.json();
    })
    // xu ly
    .then(function (dulieu) {
      let data = dulieu.data;
    
      
      let html = data.map(function (Vehicle, vitri) {
        console.log(Vehicle);
        return(
        `<div class="content">
            <div class="boxService">
            <a href=" ">
                <div class="image">
                    <div class="box">
                        <img src=${Vehicle.attributes.Picture} alt="">
                    </div>
                    <div class="boxPrice">
                        <p class="text">Giá từ</p>
                        <p class="price">${Vehicle.attributes.Price}</p>
                    </div>
                </div>

                <div class="ContentService">
                    <div class="title_content">
                        <h2>${Vehicle.attributes.Name}</h2>
                        <p>${Vehicle.attributes.Content}</p>
                    </div>
                </div>
            </a>
             </div>
        </div>`)
      });
      Vehicle_list.innerHTML = html.join(",");
      return console.log("Success:", html);
    })
    .catch((error) => console.log("Error:", error));
}

ResAPI();
