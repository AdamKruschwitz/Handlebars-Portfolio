
// Override .nav-link function to account for scrolling with fixed navbar
// Code modeled after code from https://newbedev.com/offset-scroll-anchor-in-html-with-bootstrap-4-fixed-navbar
var divId;

$('.nav-link').click(scrollToTop);

function scrollToTop(){    
    divId = $(this).attr('href');
     $('html, body').animate({
      scrollTop: $(divId).offset().top - 54
    }, 100);
}

// Set the first carousel slide in the featured carousel as active
$('.carousel-item').first().addClass('active');