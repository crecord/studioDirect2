        function closeInfoWindow(){
        	var infoDiv = document.getElementById('info');
        	infoDiv.style.display= 'none';
        	toggle=true;
        	
        	document.body.style.overflowY="auto";
        	
        }
        
        function closeFaqsWindow(){
        	var faqsDiv = document.getElementById('faqs');
        	faqsDiv.style.display= 'none';
        	toggle=true;
        }
        
        
$(function(){
	  $('.info').click(function () {
            $('#info').show();
            document.body.style.overflowY="hidden";
            document.getElementById("article").style.overflowY="hidden";
            $(".scrollOverBody").style.overflowY="hidden";
        });
    
      $('.faqs').click(function () {
            $('#faqs').show();
    });
        
        
});
        
        