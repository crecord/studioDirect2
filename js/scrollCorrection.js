$(document).ready(function (){
		
		
		window.onscroll = scroll;
			
			
		function scroll () {
		//console.log(document.getElementById("info").style.display); 
		var isInfoWindow = document.getElementById("info").style.display; 
		if (isInfoWindow == "none"){
		
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
		}

        });



