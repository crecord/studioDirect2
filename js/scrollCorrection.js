
// This code does three things:
// One: passes the scroll action to the correct div 
// aka, it doesn't let you scroll the content until the content is already at the top of the page
// Two: It freezes the background scrolling when a lightbox is active. 
// Three: stops it from scrolling up and showing the awkward chrome shadow. 



$(document).ready(function (){
		
		window.onscroll = scroll;
					
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
		
			var position = $(".scrollOverBody").offset().top;
			
			var scrollPos = $(document).scrollTop();
			
			if (scrollPos < position){
				document.getElementById("article").style.overflowY="visible";
				document.body.style.overflowY="auto";
			}
			else {
				document.getElementById("article").style.overflowY="auto";
				document.body.style.overflowY="hidden";
			}
			
			//console.log(scrollPos-position); 
		}
		else{

			$('html,body').animate({scrollTop : scrollPosOne},0);
		}
		}

        });



