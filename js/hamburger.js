function onResize() {
    var w = window.outerWidth;
    if (w <= 900){
    	$( ".icon" ).hide();
	 	$( ".hamburger" ).show();
	 	$( ".small" ).hide();
    }
    else {
    	$( ".hamburger" ).hide();
	 	$( ".icon" ).show();
	 	$( ".small" ).show();
    }
}