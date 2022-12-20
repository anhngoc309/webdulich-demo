$(document).ready(function(){
    $(".image-slider").slick({
        dots: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $(".header").addClass("sticky");
        }else {
            $(".header").removeClass("sticky");
        }
    });
});