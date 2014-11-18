var slideImgs = ["img1_hands.jpg", "img2_hands.jpg"];
var index =0; 

$(function(){
	 $('.slideshow').on('click',function(){
	 	if(index == (bgImgs.length -1)){
	 		index = 0; 
	 	}
	 	else{
	 		index ++; 
	 	}
	 	$("#slideshow").attr("src","img/theModel_Assets/slideshow/" + slideImgs[index] );
	 });
	 
});


$(document).on('ready',function(){
   setInterval(updateSlideshow,3000);
});


function updateSlideshow(){
	 	if(index == (bgImgs.length -1)){
	 		index = 0; 
	 	}
	 	else{
	 		index ++; 
	 	}
	 	$("#slideshow").attr("src","img/theModel_Assets/slideshow/" + slideImgs[index] );
};

