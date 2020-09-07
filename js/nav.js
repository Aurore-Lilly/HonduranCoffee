var $mobileNav = $('.mobileNavIcon');
var $nav = $('nav');
var $navBar = $('.navBar');

// HIDE/SHOW TEST!
$mobileNav.click(function(event){
    event.preventDefault();
    if( $nav.is(":visible") ) {
       $nav.slideUp('fast');
    } else {
        $nav.slideDown('fast');
    }
});

$(window).resize(function(){
    if( window.innerWidth > 766 ) {
        $nav.removeAttr('style');
    }
});
