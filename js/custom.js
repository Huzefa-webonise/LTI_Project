jQuery('document').ready(function(){
    var owl = jQuery('#staff .owl-carousel');
      owl.owlCarousel({
      margin:30,
      nav: false,
      autoplay : false,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots:false,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        1000: {
          items: 3
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });

    var owl = jQuery('#work .owl-carousel');
      owl.owlCarousel({
      margin:30,
      nav: false,
      autoplay : false,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots:false,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        1000: {
          items: 3
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });

    var owl = jQuery('#event .owl-carousel');
      owl.owlCarousel({
      margin:30,
      nav: false,
      autoplay : false,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots:false,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        1000: {
          items: 3
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });

    var owl = jQuery('#testimonial .owl-carousel');
      owl.owlCarousel({
      margin:30,
      nav: true,
      autoplay : false,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots:false,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        1000: {
          items: 3
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });
});