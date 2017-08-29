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

function initMaps() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 47.0262839, lng: 28.8554296},
    //disableDefaultUI: true,
    draggable: false,
    scrollwheel: false
  });

  var infowindow = new google.maps.InfoWindow({
      content: '<b>«ESPERANZA TYRES» SRL</b>'
  });
  var image = 'img/marker.png';
  var marker = new google.maps.Marker({
    position: {lat: 47.0262839, lng: 28.8554296},
    map: map,
    icon: image
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });


  map.addListener('center_changed', function() {
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 100);
  });
};





$(document).ready(function() {

  if($(".navbar").length) {
    createSticky($(".navbar"));
  };

  if($(".tooltip").length) {
    tippy('.tooltip');
  };

  if($("select").length) {
    $('select').niceSelect();
  };

  if($(".validate__form").length) {
    $('.validate__form').each(function() {
      $(this).validate({
        focusInvalid: false,
        errorElement: "span",
        errorPlacement: function(error, element) {{
          $( element ).parent().find('label').addClass("error");
          $( element ).addClass("error");
        }}
      });
    });
  };

  if($(".price-sort").length) {
    $('.price-sort').click(function (event) {
      event.preventDefault()
      $(this).toggleClass('active');
      return false;
    });
  };


  if($(".btn-minus").length) {
    $('.btn-minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
  };

  if($(".btn-minus").length) {
    $('.btn-plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  };

  if($(".main__page--slider").length) {
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
  };

  if($(".brands__slider").length) {
    $('.brands__slider').owlCarousel({
      loop:true,
      stagePadding:60,
      nav: true,
      navText: ['',''],
      mouseDrag: false,
      dots: false,
      responsiveClass:true,
      responsive:{
          0:{items:1},
          700:{margin:60,items:2},
          1000:{margin:60,items:3}
      }
    });
  };

  if($(".catalog__similar--slider").length) {
    $('.catalog__similar--slider').owlCarousel({
      loop:true,
      nav: true,
      navText: ['',''],
      mouseDrag: false,
      dots: false,
      responsiveClass:true,
      responsive:{
          0:{stagePadding:0,items:1},
          700:{stagePadding:40,margin:10,items:2},
          1000:{stagePadding:40,margin:10,items:4}
      }
    });
  };

  if($(".similar__items--slider").length) {
    $('.similar__items--slider').owlCarousel({
      loop:true,
      stagePadding:40,
      nav: true,
      navText: ['',''],
      mouseDrag: false,
      dots: false,
      responsiveClass:true,
      responsive:{
          0:{items:1},
          700:{margin:10,items:2}
      }
    });
  };

  if($(".testimonials-slider").length) {
    $('.testimonials-slider').owlCarousel({
      items:1,
      autoHeight: true,
      loop: true,
      margin: 0,
      nav: true,
      navText: ['',''],
      mouseDrag: false
    });
  };

  if($(".popup-form").length) {
    $('.popup-form').magnificPopup({
      type: 'inline',
      closeBtnInside: true,
      preloader: false,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in',
      callbacks: {
        open: function() {$('.navbar.fixed').css('padding-right', '17px');},
        close: function() {$('.navbar.fixed').css('padding-right', '');}
      }
    });
  };

  if($(".catalog__item--image").length) {
    $('.catalog__item--image').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: true,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom',
      image: {verticalFit: true},
      zoom: {enabled: true,duration: 300}
    });
  };

  $(".navbar__toggle").click(function() {
    $('.navbar__content--left').slideToggle(350);    
  });












/*
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
*/
/*  $(".navbar__toggle").click(function() {
    $(this).toggleClass('active');
    $('.navbar-content').toggleClass('open');    
  });*/

/*  $("a").on("click", function(event){
    if(this.hash !== ""){
        event.preventDefault();
        $("html, body").animate({scrollTop:$(this.hash).offset().top}, 500);
        //window.location.hash = this.hash;
    }
  });*/

  
  /*$('.popup-gallery').each(function() {
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
  });*/

});




