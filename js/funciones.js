// JavaScript Document
$(document).on("pagecreate","#Fotos",function(){
	$("p").on("swipe" ,function(){
		$("span").text("swipe activado!");
	});
});



