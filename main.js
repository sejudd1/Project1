//1. declare global variables
// var drums = document.querySelectorAll("#snare","#kick","#rack","#floor","#cymbal");
var kit = [".drums"]
var drumArray = [];
var newDrumArray = [];
var playerDrum = [];
var randomDrums = [];

var colorArray = [];
var newColorArray = [];
var turns = 0;
var tie = 0;
var playerSequence = [];

var compPlaySpeed = 700



// 2. Event Listener keydown for drums to change color and play sound
// drum Sound variables assigned to mp3 drum sounds, for new Audio function
var kickSound = new Audio("sounds/ambient_kick.mp3");
var snareSound = new Audio("sounds/ambient_snare.mp3");
var rackSound = new Audio("sounds/midtom.mp3");
var floorSound = new Audio("sounds/lotom.mp3");
var cymbalSound = new Audio("sounds/curecrash.mp3");
var drumArray = [snareSound,kickSound,rackSound,floorSound,cymbalSound];



//jQuery with if/else, enables keydown, keyboard keycode to correspond to drum kit with color
$(window).on("keydown", function(event){
	// console.log(event.which);
	if(event.which === 90){
		console.log("snare");
		document.getElementById("snare").style.backgroundColor = "rgba(0,0,255,0.3)";
		//trigger mp3 audio
		// $('#snare').toggleClass('drumAction');
		snareSound.pause();
		snareSound.currentTime = 0;
		snareSound.play();
		playerSequence.push( "#snare");
 
	}else if(event.which === 68){
		console.log("kick");
		document.getElementById("kick").style.backgroundColor = "rgba(255,0,0,0.3)";
		//trigger mp3 audio
		kickSound.pause();
		kickSound.currentTime = 0;
		kickSound.play();
		playerSequence.push( "#kick");

	}else if(event.which === 82){
		console.log("rack");
		document.getElementById("rack").style.backgroundColor = "rgba(0,255,0,0.3)";
		//trigger mp3 audio
		rackSound.pause();
		rackSound.currentTime = 0;
		rackSound.play();
		playerSequence.push( "#rack");

	}else if(event.which === 84){
		console.log("floor");
		document.getElementById("floor").style.backgroundColor = "rgba(255, 255, 0, 0.3)";
		//trigger mp3 audio
		floorSound.pause();
		floorSound.currentTime = 0;
		floorSound.play();
		playerSequence.push( "#floor");

	}else if(event.which === 71){
		console.log("cymbal");
		document.getElementById("cymbal").style.backgroundColor = "rgba(255,0,255,0.3)";
		// trigger mp3 audio
		cymbalSound.pause();
		cymbalSound.currentTime = 0;
		cymbalSound.play();
		playerSequence.push( "#cymbal");
	}
	

});


//3. Resets game and changes color of the drums back to starting color when click on Reset button
document.querySelector("#reset").addEventListener("click", function(){
// function resetGame(){
	var whiteDrums = ["snare","kick","rack","floor","cymbal"];
	for(var i = 0; i < whiteDrums.length; i++){
		 document.getElementById(whiteDrums[i]).style.backgroundColor="rgb(255,255,255)";
		 document.getElementById(whiteDrums[i]).style.opacity = "0.1";
	}
	// document.getElementById("kick").style.backgroundColor="white opacity: .4";
});


//4. Computer gets the random drum sequence and plays the sequence with drum sound and color per drum
function getSequence(){ 

	var newDrumArray = [];
	for(var i = 0; i < currSequenceMax; i++){
		randomDrums = [Math.floor( Math.random() * drumArray.length) ];
		newDrumArray.push( drumArray[ randomDrums ] );
    
    }
    return newDrumArray;
}

//Sleep function gives drum mp3's a delay timeout when each element/drum in array is fired
// function sleep(miliseconds) {
//    var currentTime = new Date().getTime();

//    while (currentTime + miliseconds >= new Date().getTime()) {
//    }
// }


//Plays Computer Sounds and is called in the function compSequence
function playCompSounds( event ) {
	console.log(event)
	if(event === "#snare"){
		console.log("snare");
		//trigger mp3 audio
		snareSound.pause();
		document.getElementById("snare").style.backgroundColor = "rgba(0,0,255,0.3)";
		snareSound.currentTime = 0;
		snareSound.play();

 
	}else if(event === "#kick"){
		console.log("kick");
		//trigger mp3 audio
		kickSound.pause();
		document.getElementById("kick").style.backgroundColor = "rgba(255,0,0,0.3)";
		kickSound.currentTime = 0;
		kickSound.play();
		
	}else if(event === "#rack"){
		console.log("rack");
		//trigger mp3 audio
		rackSound.pause();
		rackSound.currentTime = 0;
		rackSound.play();
		document.getElementById("rack").style.backgroundColor = "rgba(0,255,0,0.3)";

	}else if(event === "#floor"){
		console.log("floor");
		//trigger mp3 audio
		floorSound.pause();
		floorSound.currentTime = 0;
		floorSound.play();
		document.getElementById("floor").style.backgroundColor = "rgba(255, 255, 0, 0.3)";

	}else if(event === "#cymbal"){
		console.log("cymbal");
		// trigger mp3 audio
		cymbalSound.pause();
		cymbalSound.currentTime = 0;
		cymbalSound.play();
		document.getElementById("cymbal").style.backgroundColor = "rgba(255,0,255,0.3)";
	}
}

//compSequence function sets the sequence for player to match once the play button is clicked
function compSequence( sequence, seqMax ){
	console.log( sequence, seqMax); 
	/*for( var i = 0; i < seqMax; i++ ){
		//Loops thru sequence array
		console.log("Sequence at i is = " + sequence[i]);
		playCompSounds( sequence[i] );
		console.log("playerSequence = " + playerSequence);
		// Sleep function gives mp3's a delay timeout when each element/drum in array is fired
		// sleep(700);
		//triggers the event
		//$(window).trigger(e) 	
	}*/
	//someArray = [1,2,3,4,5];
	//creating a new variable that is equal to getSequence function that will play the sounds of each drum in the computer sequence
	var sequenceArray = getSequence();
	//setting a for loop at human speed, new variable intervalI, basically the i in a for loop
	var intervalI = 0
	//setting new variable for a function to run the human for loop
	var myInterval = setInterval(function(){
		//line 183 to 190 is the for loop, will run thru the sequence array determine length
	if(intervalI < sequenceArray.length){
		console.log(sequenceArray[intervalI]);
		console.log(sequenceArray[intervalI])
		sequenceArray[intervalI].play();

		console.log(sequenceArray[intervalI]);
	} else {
		clearInterval(myInterval);
	}
	//adds thru the loop until intervalI is equal to length of sequenceArray
	intervalI ++;
	//comPlaySpeed is the variable for the speed of the delay of the sounds when computer plays the sound
	}, compPlaySpeed);

	//setTimeout is to allow 10seconds of time for the player to play the computers sequence
	setTimeout( checkWinner, 10000);
	checkWinner();
}

//setInterval( playCompSounds( sequence[i], 700 ));





//5. checkWinner function takes the compSequence and compares to playerSequence to determine Winner or Loser
function checkWinner(){
	for( var i = 0; i < currSequenceMax; i++ ){
		if( playerSequence[i] !== compSequence[i] ){
			console.log("Loser");
			return false;
			console.log("Simon Says, Don't Quit Your Day Job!");
			// alert ("Simon Says, Don't Quit Your Day Job!");
			this.turns++
		
			}else{		
			console.log("Simon Says You're a Drum Rockstar!"); 
			// alert ("Simon Says You're a Drum Rockstar!");

			}
	}console.log("Winner");
}


//drumArray and colorArray variables for the getSequence loop
//var drumArray = ["#snare","#kick","#rack","#floor","#cymbal"];

var colorArray = ["Blue","Red","Yellow","Green","Purple"];
//Current Sequence Max is the max number of the random sequences
var currSequenceMax = 5;
// set initial sequence
var sequence = null;
//DOM event listener that listens for the play button to be clicked to start game
document.querySelector("#play").addEventListener("click", function (){
	sequence = getSequence();
	compSequence( sequence, currSequenceMax );

});


//6. Player Turn
//turns should equal one at reset and play buttons are hit
//turns, winners, scores

// $(window).on("keydown", function(){
// 	console.log(event.which);
// 	if(!$(event.which).html()){
// 		if( turns === 1){
// 			$(event.which).html = ("Player 1");
// 		}else{
// 			$(event.which).html = ("Player 2");
// 		}
// 		checkWinner();
// 		tie++;
// 		if(tie > 5){
// 			console.log("Tie! Keep Practicing.");
// 			// alert("Tie! Keep Practicing.");
// 		}
// 		turns = turns === 0 ? 1 : 0;
// 		console.log(turns);

// 		}
// })

// 7. Player Sequence function to determine if player matched computer sequence and declares winner
   //compare player sequence with computer sequence with if else statements




// player keys
// key 1 = 49, z
// key 2 = 50, d
// key 3 = 51, r
// key 4 = 52, t

// key 5 = 71, g key



