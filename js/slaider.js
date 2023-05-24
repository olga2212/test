$(document).ready(function(){
  $('.head__slaider__slide, .clients__slaider__slide, .reviews__slide').slick({
  	 dots: true,
	  arrows: true
  });	
    $('.navmob__menu__hide').hide();
    $('.navmob__container__left').click(function(){
    	$(this).children('.hamb__active');
    	$('.navmob__menu__hide').slideToggle();
    	$('.hamb').toggleClass("hamb__active");
    });
});


$(document).ready(function(){
    $("#head__top").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});





