function ResAPI() {
    const Insurance_list = document.querySelector(".Insurance_in_database");
  
    fetch("http://localhost:1337/api/tbl-service-insurances/")
      .then((res) => {
        console.log(res.status); // 404
        return res.json();
      })
      // xu ly
      .then(function (dulieu) {
        let data = dulieu.data;
      
        
        let html = data.map(function (Insurance, vitri) {
          console.log(Insurance);
          return(
          `<div class="content">
              <div class="boxService">
                <a href="">
                  <div class="image">
                      <div class="box">
                          <img src=${Insurance.attributes.Picture} alt="">
                      </div>
                      <div class="boxPrice">
                          <p class="text">Giá từ</p>
                          <p class="price">${Insurance.attributes.Price}</p>
                      </div>
                  </div>
  
                  <div class="ContentService">
                      <div class="title_content">
                          <h2>${Insurance.attributes.Name}</h2>
                          <p>${Insurance.attributes.Content}</p>
                      </div>
                  </div>
                </a>
               </div>
          </div>`)
        });
        Insurance_list.innerHTML = html.join(",");
        return console.log("Success:", html);
      })
      .catch((error) => console.log("Error:", error));
  }
  
  ResAPI();
  