

// this variable also gets used in the scroll correction script        
var scrollPosOne= 0;
/*
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 			$('#mobileReady').show();
            scrollPosOne = $(document).scrollTop();
            console.log("one");
}
*/
    
        function closeInfoWindow(){
        	var infoDiv = document.getElementById('info');
        	infoDiv.style.display= 'none';
        	
    		
        	//$('html, body').css({'overflow': 'visible',});
        }
        
        function closeFaqsWindow(){
        	var faqsDiv = document.getElementById('faqs');
        	faqsDiv.style.display= 'none';
        	
        	//$('html, body').css({'overflow': 'visible',});
        }
        
        
$(function(){
	  $('.info').click(function () {
            $('#info').show();
            scrollPosOne = $(document).scrollTop();
			
            
        });
    
      $('.faqs').click(function () {
            $('#faqs').show();
            scrollPosOne = $(document).scrollTop();

    });
         



 });
        
        