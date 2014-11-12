        function closeInfoWindow(){
        	var infoDiv = document.getElementById('info');
        	infoDiv.style.display= 'none';
        	toggle=true;
        }
        
        function closeFaqsWindow(){
        	var faqsDiv = document.getElementById('faqs');
        	faqsDiv.style.display= 'none';
        	toggle=true;
        }
        
        
$(function(){
	  $('.info').click(function () {
            $('#info').show();
        });
    
      $('.faqs').click(function () {
            $('#faqs').show();
    });
        
        
});
        
        