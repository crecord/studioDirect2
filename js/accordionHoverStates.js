        $(document).ready(function (){
        
         	$(".accordion-navigation").click(function (){
         		console.log("hello");
         		$( "hr",".accordion-navigation").css("background-color","white");
             	var classes = $(this).attr('class').split(' ');
             	if (classes.length ==1){
             		$( "hr",this).css("background-color","white"); 
             	}
            });
            
             $(".accordion-navigation").mouseenter(function (){
             	var classes = $(this).attr('class').split(' ');
             	if (classes.length ==1){
             		$( "hr",this).css("background-color","black"); 
             	}
             	
            });
            $(".accordion-navigation").mouseleave(function (){
             	var classes = $(this).attr('class').split(' ');
             	if (classes.length ==1){
             		$( "hr",this).css("background-color","white"); 
             	}
             	
            });

        });