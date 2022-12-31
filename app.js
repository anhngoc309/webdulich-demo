const tk = document.getElementById('tk');
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

