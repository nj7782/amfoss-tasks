//spam message the chats with telegram.js 
//open up telegram web and go to the chat you want to spam 
//open console ( Ctrl + Shift + J )
//execute the code 
var message = ""; //spam message 
var interval = 1  ; // in seconds 
var count = 10 ; //number of times to send
var notifyInterval = 5 ; //notify 
var i = 0 ;
var timer = setInterval(function(){
	document.getElementsByClassName('composer_rich_textarea')[0].innerHTML = message;
	$('.im_submit').trigger('mousedown');	
	i++;
	if( i  == count )
	clearInterval(timer);
	if( i % notifyInterval == 0)
	console.log(i + ' MESSAGES SENT');
} , interval * 1000 ) ;
