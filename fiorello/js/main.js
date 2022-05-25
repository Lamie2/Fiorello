
$(function(){
$('.list-item').hover(function(e){
$('.hover-list').slideDown('slow')
})

// init Isotope
var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:false,
    // autoplayTimeout:500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

})

