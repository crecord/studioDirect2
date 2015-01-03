
// This code does two things:
// One: passes the scroll action to the correct div 
// aka, it doesn't let you scroll the content until the content is already at the top of the page
// Two: It freezes the background scrolling when a lightbox is active. 



$(document).ready(function (){
		
		window.onscroll = scroll;
					
		// this function is called whenever the user scrolls	
		function scroll () {
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



