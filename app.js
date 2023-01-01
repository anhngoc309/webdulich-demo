const tk = document.getElementById('tk');
const search_thuexe = document.getElementById('search-thuexe');
const search_baohiem = document.getElementById('search-baohiem');
const element_thuexe = document.querySelectorAll('.content');
const element_baohiem = document.querySelectorAll('.content');
$(document).ready(function(){
    $(".image-slider").slick({
        dots: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $(".header-menu").addClass("sticky");
            $(".header").css( "visibility", "hidden");
        }else {
            $(".header-menu").removeClass("sticky");
            $(".header").css( "visibility", "visible");
        }
    });
});



function searchInHome(){
    var tkiem = tk.value;
    localStorage.setItem("textvalue", tkiem);
    return false;
    
}

function searchTX(){
    let valueItem = search_thuexe.value.toLowerCase();
    Array.from(element_thuexe).forEach(function(ele){
        let nameItem = ele.querySelector('.title_content').firstElementChild.textContent;
        if(nameItem.toLowerCase().indexOf(valueItem) !== -1){
            ele.style.display = 'block';
        } else {
            ele.style.display = 'none';
        }
        search_thuexe.value = '';
    })
}
function searchBH(){
    let valueItem = search_baohiem.value.toLowerCase();
    Array.from(element_baohiem).forEach(function(ele){
        let nameItem = ele.querySelector('.title_content').firstElementChild.textContent;
        if(nameItem.toLowerCase().indexOf(valueItem) !== -1){
            ele.style.display = 'block';
        } else {
            ele.style.display = 'none';
        }
        search_baohiem.value = '';
    })
}

search_thuexe.addEventListener('keypress' , (e) => {
    if(e.key == 'Enter') searchTX();
});
search_baohiem.addEventListener('keypress' , (e) => {
    if(e.key == 'Enter') searchBH();
});