//init bpopup
$('.open-order-modal').on('click', function () {
	$('.modal-order').bPopup({	    
        closeClass: 'close',
    });
});

//init formstyler
$('select').styler();

//init slick 
$('.about-us-slick').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
