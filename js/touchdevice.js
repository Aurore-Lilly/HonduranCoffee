(function() {
    //I use jQuery for simplicity
    var preliminaryTouch = false;
    //Assume all devices are no touch device
    $('html').addClass('no-touch-device');
    //Check the user agent string
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        preliminaryTouch = true;
    }

    if( preliminaryTouch ) {
        //Do something for touch devices
       $('html').addClass('prel-touch-device');
    }
})();

$(document).on('touchstart', function() {
    $('html').removeClass('no-touch-device prel-touch-device').addClass('touch-device');
});
