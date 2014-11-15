//This gets rid of the back to top when the window is too small for everything to fit. 

function onResize() {
    var w = window.outerWidth;
    if (w <= 300){
	 	$( ".small" ).hide();
    }
    else {
	 	$( ".small" ).show();
    }
}