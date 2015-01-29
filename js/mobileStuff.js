$(document).ready(function (){


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 			// shorten this word so it doesn't mess up formatting
 			$(".implementation").html("IMPLEMENT");
            console.log("mobile device detected");
            
            // expand accordions when it is a mobile device
            $( "dl" ).removeClass( "accordion" );
            $( "dl dd" ).removeClass( "accordion-navigation" );
            $("dl dd a").attr("href", " ")
}




}); 