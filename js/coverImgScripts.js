


var bgImgs = ["BackGroundImg1.jpg", "BackGroundImg2.jpg"];


$(function(){
var index =0; 

	 $('#arrowRight').on('click',function(){
		console.log("cluck");
		console.log("index before: "+ index);
	 	if(index == (bgImgs.length -1)){
	 		index = 0; 
	 	}
	 	else{
	 		index ++; 
	 	}
	 	console.log("index after: "+ index);
	 	$('html').css({backgroundImage:'url(img/background/'+bgImgs[index]+')'});
	 });
	 
	  $('#arrowLeft').on('click',function(){
	 	if(index == 0){
	 		index = bgImgs.length -1; 
	 	}
	 	else{
	 		index --; 
	 	}
	 	$('html').css({backgroundImage:'url(img/background/'+bgImgs[index]+')'});
	 });
});