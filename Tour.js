const search_item = document.getElementById('search-item');
const element_tour = document.querySelectorAll('.tour');

function ResAPI() {
    const tour_list = document.querySelector(".tours_in_database")
    
    fetch("http://localhost:1337/api/tours")
    .then((res) => { 
        console.log(res.status); // 404
        return res.json();
    })
    // xu ly
    .then(function(dulieu) {
     
        let data = dulieu.data
    
        let html = data.map(function(tour, vitri) {
        console.log(tour);
        return (
            `<div class="tour">
                <div>
                    <img src=${tour.attributes.Picture} class = "anh">
                    <div class="overlay">${tour.attributes.Price}</div>
                </div>
                <div class="mota">
                    <div class="mota_first">
                        <a href="#" class="link">${tour.attributes.Name}</a>
                    </div>
                    <h3>${tour.attributes.City}</h3>
                    <p>Phương tiện: ${tour.attributes.Vehicle}</p>
                    <p>Thời gian: ${tour.attributes.Time}</p>
                    <p>- ${tour.attributes.Content}</p>
                </div>
                <div class="ChiTiet">
                    <a href="#" class="xemthem">Chi Tiết</a>
                </div>
            </div>`)
        });
        tour_list.innerHTML = html.join('');
        return console.log('Success:', html)
    })
    .catch(error => console.log('Error:', error));
}

ResAPI();

function searchItem(){
    let valueItem = search_item.value.toLowerCase();
    Array.from(element_tour).forEach(function(ele){
        let nameItem = ele.querySelector('.mota_first').firstElementChild.textContent;
        if(nameItem.toLowerCase().indexOf(valueItem) !== -1){
            ele.style.display = 'flex';
        } else {
            ele.style.display = 'none';
        }
        search_item.value = '';
    })
}
search_item.addEventListener('keypress' , (e) => {
    if(e.key == 'Enter') searchItem();
});

if(localStorage.getItem("textvalue") != null) {
    search_item.setAttribute("value", localStorage.getItem("textvalue"))
    searchItem();
}