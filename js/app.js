$(document).ready(function(){
    $(".owl-carousel-about").owlCarousel({
        rtl: true,
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1.2
            },
            600: {
                items: 1.5
            },
            800: {
                items: 2
            },
            900: {
                items: 2.2
            },
            1000: {
                items: 2.6
            },
            1200: {
                items: 3
            },
            1460: {
                items: 3.6
            }
            
        }
    });
    $(".owl-carousel-exp").owlCarousel({
        rtl: true,
        loop: false,
        margin: 10,
        nav:true,
        dots:false,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1.2
            },
            600: {
                items: 1.5
            },
            800: {
                items: 2
            },
            900: {
                items: 2.2
            },
            1000: {
                items: 2.6
            },
            1200: {
                items: 3
            },
            1460: {
                items: 3
            }
            
        }
    });
  });
