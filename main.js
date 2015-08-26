//1. declare global variables
var drums = document.querySelectorAll("#snare","#kick","#rack","#floor","#cymbal");
var kit = [".drums"]
var drumArray = [];
var playerDrum = [];
var randomDrums = [];
var newDrumArray = [];

var colorArray = [];
var newColorArray = [];
var player1 = 0;
var player2 = 0;
var counter;



// 2. Event Listener keydown for drums to change color and play sound
var kickSound = new Audio("sounds/ambient_kick.mp3");
var snareSound = new Audio("sounds/ambient_snare.mp3");
var rackSound = new Audio("sounds/midtom.mp3");
var floorSound = new Audio("sounds/lotom.mp3");
var cymbalSound = new Audio("sounds/curecrash.mp3");


$(window).on("keydown", function(event){
	console.log(event.which);
	if(event.which === 90){
		console.log("snare");
		document.getElementById("snare").style.backgroundColor = "DodgerBlue";
		//trigger mp3 audio
		$('#snare').toggleClass('drumAction');
		snareSound.pause();
		snareSound.currentTime = 0;
		snareSound.play();
 
	}else if(event.which === 68){
		console.log("kick");
		document.getElementById("kick").style.backgroundColor = "DodgerBlue";
		//trigger mp3 audio
		kickSound.pause();
		kickSound.currentTime = 0;
		kickSound.play();

	}else if(event.which === 82){
		console.log("rack");
		document.getElementById("rack").style.backgroundColor = "DodgerBlue";
		//trigger mp3 audio
		rackSound.pause();
		rackSound.currentTime = 0;
		rackSound.play();

	}else if(event.which === 84){
		console.log("floor");
		document.getElementById("floor").style.backgroundColor = "DodgerBlue";
		//trigger mp3 audio
		floorSound.pause();
		floorSound.currentTime = 0;
		floorSound.play();

	}else if(event.which === 32){
		console.log("cymbal");
		document.getElementById("cymbal").style.backgroundColor = "DodgerBlue";
		//trigger mp3 audio
		cymbalSound.pause();
		cymbalSound.currentTime = 0;
		cymbalSound.play();
	}
	

});


//3. Resets game and changes color of the drums back to starting color
document.querySelector("#reset").addEventListener("click", resetGame);
function resetGame(){
	var whiteDrums = ["snare","rack","floor","cymbal"];
	for(var i = 0; i < whiteDrums.length; i++){
		 document.getElementById(whiteDrums[i]).style.backgroundColor="white";
		console.log(whiteDrums);
	}
	document.getElementById("kick").style.backgroundColor="black";
}


//4. Computer gets the random drum sequence
function getSequence(){ 
	// console.log(simonDrum);
	var newDrumArray = [];
	for(var i = 0; i < currSequenceMax; i++){
		randomDrums = [Math.floor( Math.random() * drumArray.length) ];
		randomColors = [Math.floor( Math.random() * colorArray.length) ];
		newDrumArray.push( drumArray[ randomDrums ] );
		newColorArray.push(colorArray[ randomColors ] );
		// document.getElementById("snare","kick","rack","floor","cymbal").style.backgroundColor = colorPicker;
    
    }
    return newDrumArray, newColorArray
}

//5. Play game
//Sleep function gives drum mp3's a delay timeout when each element/drum in array is fired
function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}
//playGame function allows the game to set the sequence once the play button is clicked
function playGame( sequence, seqMax ){
	console.log( sequence, seqMax);
	// sleep(2000); 
	for(var i = 0; i < seqMax; i++){
		var e = $.Event("keydown");
		//Data Key attribute assigned in HTML to each drum to identify the element in the sequence array
		e.which = ~~$(sequence[i]).attr("data-key");
		console.log(e.which);
		// Sleep function gives mp3's a delay timeout when each element/drum in array is fired
		sleep(1000);
		//triggers the event
		$(window).trigger(e);
		
		}
			
	}

//drumArray variable for the getSequence loop
var drumArray = ["#snare","#kick","#rack","#floor","#cymbal"];
//colorArray variable for the getSequence loop
var colorArray = ["Blue","Red","Yellow","Green","Purple"];
//Current Sequence Max is the max number of the random sequences
var currSequenceMax = 5;
// set initial sequence
var sequence = null;

document.querySelector("#play").addEventListener("click", function (){
	sequence = getSequence();
	playGame( sequence, currSequenceMax );

});






//5. in 'success' function we need to grow currSequenceMax by 1







// 6. function to determine if player matched computer sequence and declares winner
// function playDrum(){
// 	if(playerDrum.length === 0){
// 		playerDrum = ["#snare","#kick","#rack","#floor","#cymbal"];
// 	}
// }



// 7. function to determine winner















// $(window).on("keydown keyup", function(event){
// 	var color = event.type == "keydown" ? "DodgerBlue" : "White";
// 	console.log(event.which);
// 	if(event.which === 68){
// 		$(this).css({background: color});
// player one keys
// key 1 = 49
// key 2 = 50
// key 3 = 51
// key 4 = 52

// player two keys
// key 7 = 55
// key 8 = 56
// key 9 = 57
// key 0 = 48

// key spacebar = 32



