        $(document).ready(function (){
            $(".button").click(function (){	
            
            var scrollPos = $(document).scrollTop();
            // if it is below the "#scrollToMe" postion then scroll up to give a peak of content. if not, then leave in its current postion
            
            var positionMenu = $(".scrollOverBody").offset().top;
			var scrollPos = $(document).scrollTop();
			var positionScrollToDiv = $("#scrollToMe").offset().top;

			if (positionMenu - scrollPos > positionScrollToDiv){
            	$('html, body').animate({
    			scrollTop: $("#scrollToMe").offset().top
				}, 1000);  
				}
			else{
				$('html, body').animate({scrollTop:scrollPos}, 10); 
				$("#article").animate({scrollTop : 0},50);
			}
            });
        });