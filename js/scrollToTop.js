


        $(document).ready(function (){
        
        
            $(".scrollToTop").click(function (){
            
            	console.log("trigger"); 
            	$("#article").animate({scrollTop : 0},800);
            	
            	
            	setTimeout(function() {
            		$('html, body').animate({scrollTop : 0},400);
            	}, 800);
            	
				return false;
            		
            	//$('html, body').animate({scrollTop : 0},800);
				//return false;
            });
        });
        
       