
// This code does three things:
// One: passes the scroll action to the correct div 
// aka, it doesn't let you scroll the content until the content is already at the top of the page
// Two: It freezes the background scrolling when a lightbox is active. 
// Three: stops it from scrolling up and showing the awkward chrome shadow. 



$(document).ready(function (){
		
		window.onscroll = scroll;
		document.getElementById("article").onscroll = scroll2; 
			
		function scroll2 () {
			console.log("sup");
			var theInnerScroll = $("#article").scrollTop();
			console.log("the scroll: " + theInnerScroll); 
			if (theInnerScroll == 0){
				document.getElementById("article").style.overflowY="visible";
				document.body.style.overflowY="auto";
				console.log("ping");
			}
		}
			
			
					
		// this function is called whenever the user scrolls	
		function scroll () {
		
		//this bit stop chrome from scrolling up and showing the shadow
		var scrollPosTop  = $(document).scrollTop();
		if (scrollPosTop <0){
			$('html,body').animate({scrollTop :0 },0)
		}
		
		
		var isInfoWindow = document.getElementById("info").style.display; 
		var isFaqsWindow = document.getElementById("faqs").style.display; 
		if (isInfoWindow == "none" &&  isFaqsWindow== "none"){
		
		
			// this is the height of the window 
			var position = $(".scrollOverBody").offset().top;
			// this is where the top of the menu is relative to the bottom of the screen
			var scrollPos = $(document).scrollTop();
			//console.log( "scrollPos: "+ position);
			//console.log( "position: "+ scrollPos);
			
			if (scrollPos < position){
				// if the menu has not traversed the cover image do not allow its content to scroll
				document.getElementById("article").style.overflowY="visible";
				document.body.style.overflowY="auto";
				console.log("ping");
			}
			else {
				document.getElementById("article").style.overflowY="auto";
				document.body.style.overflowY="hidden";
				console.log("pong");
			}
			
			//console.log(scrollPos-position); 
		}
		else{

			$('html,body').animate({scrollTop : scrollPosOne},0);
		}
		}

        });



