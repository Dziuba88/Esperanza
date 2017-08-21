$.get("img/sprite.svg", function(data) {
  var div = document.createElement("div");
  div.hidden = true;
  div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
  document.body.insertBefore(div, document.body.childNodes[0]);
});
function createSticky(sticky) {
  if (typeof sticky !== "undefined") {
    var	pos = sticky.offset().top,
        win = $(window);
    win.on("scroll", function() {
        win.scrollTop() >= pos ? sticky.addClass("fixed") : sticky.removeClass("fixed");      
    });			
  }
};

$(document).ready(function() {

  createSticky($(".navbar"));


  $('.catalog__list--item').hover(
    function(){ $(this).addClass('hover') },
    function(){ $(this).removeClass('hover') }
  )
  $('.btn-minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.btn-plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });



  $('select').niceSelect();

  $('.main__page--slider').owlCarousel({
    items:1,
		autoplay: true,
		autoplayTimeout: 5000,
    loop:true,
    margin:0,
    nav: true,
    navText: ['',''],
    mouseDrag: false,
    dots: false,
  });

  $('.testimonials-slider').owlCarousel({
    items:1,
    //animateOut: 'fadeOut',
    autoHeight: true,
    loop: true,
    margin: 0,
    nav: true,
    navText: ['',''],
    mouseDrag: false
  });

  $('.counter').countUp();


  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
    disable: 'mobile'
  });

  $('.validate-form').each(function() {
    $(this).validate({
      focusInvalid: false,
      errorPlacement: function(error, element) {{
        $( element ).parent().addClass("field-error");
      }},
    });
  });

  var toggleText = function() {
    $('[data-toggle-secondary]').each(function() {
        var $toggle = $(this);
        var originalText = $toggle.text();
        var secondaryText = $toggle.data('toggle-secondary');
        var $target = $($toggle.attr('href'));

        $target.on('show.bs.collapse hide.bs.collapse', function() {
            if ($toggle.text() == originalText) {
                $toggle.text(secondaryText);
            } else {
                $toggle.text(originalText);
            }
        });
    });
  };
  toggleText();

  $(".navbar__toggle").click(function() {
    $(this).toggleClass('active');
    $('.navbar-content').toggleClass('open');    
  });

  $("a").on("click", function(event){
    if(this.hash !== ""){
        event.preventDefault();
        $("html, body").animate({scrollTop:$(this.hash).offset().top}, 500);
        //window.location.hash = this.hash;
    }
  });

	$('.popup-form').magnificPopup({
		type: 'inline',
		closeBtnInside: true,
		preloader: false,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
  });
  
  $('.popup-gallery').each(function() {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-img-mobile mfp-with-zoom',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
      },
      image: {
        verticalFit: true
      }
    });
  });

	$('.popup-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
});




