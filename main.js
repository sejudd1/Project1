//1. declare global variables
// var drums = document.querySelectorAll("#snare","#kick","#rack","#floor","#cymbal");
var kit = [".drums"]
var drumArray = [];
var newDrumArray = [];
var playerDrum = [];
var randomDrums = [];

var colorArray = [];
var newColorArray = [];
var player1 = 0;
var player2 = 0;
var counter;
var playerArray2 = [];



// 2. Event Listener keydown for drums to change color and play sound
// drum Sound variables assigned to mp3 drum sounds, for new Audio function
var kickSound = new Audio("sounds/ambient_kick.mp3");
var snareSound = new Audio("sounds/ambient_snare.mp3");
var rackSound = new Audio("sounds/midtom.mp3");
var floorSound = new Audio("sounds/lotom.mp3");
var cymbalSound = new Audio("sounds/curecrash.mp3");

//jQuery with if/else, enables keydown, keyboard keycode to correspond to drum kit with color
$(window).on("keydown", function(event){
	console.log(event.which);
	if(event.which === 90){
		// console.log("snare");
		document.getElementById("snare").style.backgroundColor = "Blue";
		//trigger mp3 audio
		$('#snare').toggleClass('drumAction');
		snareSound.pause();
		snareSound.currentTime = 0;
		snareSound.play();
		playerArray2.push( "#snare");
 
	}else if(event.which === 68){
		// console.log("kick");
		document.getElementById("kick").style.backgroundColor = "Red";
		//trigger mp3 audio
		kickSound.pause();
		kickSound.currentTime = 0;
		kickSound.play();
		playerArray2.push( "#kick");

	}else if(event.which === 82){
		// console.log("rack");
		document.getElementById("rack").style.backgroundColor = "Green";
		//trigger mp3 audio
		rackSound.pause();
		rackSound.currentTime = 0;
		rackSound.play();
		playerArray2.push( "#rack");

	}else if(event.which === 84){
		// console.log("floor");
		document.getElementById("floor").style.backgroundColor = "Yellow";
		//trigger mp3 audio
		floorSound.pause();
		floorSound.currentTime = 0;
		floorSound.play();
		playerArray2.push( "#floor");

	}else if(event.which === 32){
		// console.log("cymbal");
		document.getElementById("cymbal").style.backgroundColor = "Purple";
		//trigger mp3 audio
		cymbalSound.pause();
		cymbalSound.currentTime = 0;
		cymbalSound.play();
		playerArray2.push( "#cymbal");
	}
	

});


//3. Resets game and changes color of the drums back to starting color when click on Reset button
document.querySelector("#reset").addEventListener("click", function(){
// function resetGame(){
	var whiteDrums = ["snare","kick","rack","floor","cymbal"];
	for(var i = 0; i < whiteDrums.length; i++){
		 document.getElementById(whiteDrums[i]).style.backgroundColor="white";
		 document.getElementById(whiteDrums[i]).style.opacity = "0.5";
	}
	// document.getElementById("kick").style.backgroundColor="white opacity: .4";
});


//4. Computer gets the random drum sequence
function getSequence(){ 

	var newDrumArray = [];
	for(var i = 0; i < currSequenceMax; i++){
		randomDrums = [Math.floor( Math.random() * drumArray.length) ];
		newDrumArray.push( drumArray[ randomDrums ] );
    
    }
    return newDrumArray;
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
	for(var i = 0; i < seqMax; i++){
		var e = $.Event("keydown");
		//Data Key attribute assigned in HTML to each drum to identify the element in the sequence array
		console.log("Sequence at i is = " + sequence[i]);
		e.which = ~~$(sequence[i]).attr("data-key");
		console.log(e.which);
		// Sleep function gives mp3's a delay timeout when each element/drum in array is fired
		sleep(1000);
		//triggers the event
		$(window).trigger(e);
		
	}
	sleep(10000);
	checkWinner();
}

function checkWinner(){
	for(var i = 0; i < currSequenceMax; i++){
		if( playerArray2[i] !== sequence[i] ){

			return false;
			alert ("Sorry, Don's Quit Your Day Job!");
		}
			

	} alert ("You're a Drum Rockstar!");
}




//drumArray and colorArray variables for the getSequence loop
var drumArray = ["#snare","#kick","#rack","#floor","#cymbal"];
var colorArray = ["Blue","Red","Yellow","Green","Purple"];
//Current Sequence Max is the max number of the random sequences
var currSequenceMax = 5;
// set initial sequence
var sequence = null;

document.querySelector("#play").addEventListener("click", function (){
	sequence = getSequence();
	playGame( sequence, currSequenceMax );

});


//5. getPlayer
//turns should equal one at reset and play buttons are hit
//turns, winners, scores
// function playerOne(){
// 	console.log(playerOne);
// function getPlayer(){
// 	if(!this.innerHTML){
// 		if(turns % 2 === 1){
// 			this.innerHTML
// 		}
// 	}
// }


// 6. function to determine if player matched computer sequence and declares winner
   //compare player sequence with computer sequence with if else statements

//7. function getWinner(){
	// if player one has the higher score than playerTwo alert "playerOne() + 'Is Rockstar!'"
	// else playerTwo is  Rockstar
	// 	return getWinner
	// add the round until the player loses
	// 	return "Dont quit your dayjob!"

//}


// player keys
// key 1 = 49
// key 2 = 50
// key 3 = 51
// key 4 = 52

// key spacebar = 32



