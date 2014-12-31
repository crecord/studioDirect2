        function closeInfoWindow(){
        	var infoDiv = document.getElementById('info');
        	infoDiv.style.display= 'none';
        	toggle=true;
    
        	$('html, body').css({'overflow': 'auto',});
        }
        
        function closeFaqsWindow(){
        	var faqsDiv = document.getElementById('faqs');
        	faqsDiv.style.display= 'none';
        	toggle=true;
        	$('html, body').css({'overflow': 'auto',});
        }
        
        
$(function(){
	  $('.info').click(function () {
            $('#info').show();
           
            $('html, body').css({'overflow': 'hidden'});

            
        });
    
      $('.faqs').click(function () {
            $('#faqs').show();
            $('html, body').css({'overflow': 'hidden'});
    });
        
        
});
        
        