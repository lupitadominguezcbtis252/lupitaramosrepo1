//JavaScript
	
$(document).ready(function(e){	
	document.addEventListener("deviceready",function(){
    $('#beep').tap(function (){
		navigator.notification.beep(1);
	});// Tap beep
	$('#vibrar').tap(function(){
		navigator.notification.vibrate(1000);
	});
	
	},false); //deviceready
});//ready