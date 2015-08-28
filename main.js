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



// 1. created objects for each drum with properties of name, sound, and color
// drum Sound variables assigned to mp3 drum sounds, for new Audio function
var kick = {name: "kick", sound: new Audio("sounds/ambient_kick.mp3"), color: "rgba(255,0,0,0.3)" };
var snare = {name: "snare", sound: new Audio("sounds/ambient_snare.mp3"), color: "rgba(0,0,255,0.3)"};
var rack = {name: "rack", sound: new Audio("sounds/midtom.mp3"), color: "rgba(0,255,0,0.3)"};
var floor = {name: "floor", sound: new Audio("sounds/lotom.mp3"), color: "rgba(255, 255, 0, 0.3)"};
var cymbal = {name: "cymbal", sound: new Audio("sounds/curecrash.mp3"), color: "rgba(255,0,255,0.3)"};
var drumArray = [snare,kick,rack,floor,cymbal];


// 2. Event Listener keydown for drums to change color and play sound
//jQuery with if/else, enables keydown, keyboard keycode to correspond to drum kit with color
$(window).on("keydown", function(event){
	//console.log(event.which);
	if(event.which === 90){
		//console.log("snare");
		document.getElementById("snare").style.backgroundColor = "rgba(0,0,255,0.3)";
		// trigger mp3 audio
		snare.sound.pause();
		snare.sound.currentTime = 0;
		snare.sound.play();
		playerSequence.push( "snare");
		//console.log(playerSequence);
		
	
 
	}else if(event.which === 68){
		//console.log("kick");
		document.getElementById("kick").style.backgroundColor = "rgba(255,0,0,0.3)";
		//trigger mp3 audio
		kick.sound.pause();
		kick.sound.currentTime = 0;
		kick.sound.play();
		playerSequence.push( "kick");
		

	}else if(event.which === 82){
		//console.log("rack");
		document.getElementById("rack").style.backgroundColor = "rgba(0,255,0,0.3)";
		//trigger mp3 audio
		rack.sound.pause();
		rack.sound.currentTime = 0;
		rack.sound.play();
		playerSequence.push( "rack");
		

	}else if(event.which === 84){
		//console.log("floor");
		document.getElementById("floor").style.backgroundColor = "rgba(255, 255, 0, 0.3)";
		//trigger mp3 audio
		floor.sound.pause();
		floor.sound.currentTime = 0;
		floor.sound.play();
		playerSequence.push( "floor");
		

	}else if(event.which === 71){
		//console.log("cymbal");
		document.getElementById("cymbal").style.backgroundColor = "rgba(255,0,255,0.3)";
		// trigger mp3 audio
		cymbal.sound.pause();
		cymbal.sound.currentTime = 0;
		cymbal.sound.play();
		playerSequence.push( "cymbal");
		
	}

	if(playerSequence.length == 5){
		checkWinner();
	}
	

});


//3. Resets drums and changes color of the drums back to starting color when click on Reset button
document.querySelector("#reset").addEventListener("click", function(){

	var whiteDrums = ["snare","kick","rack","floor","cymbal"];
	for(var i = 0; i < whiteDrums.length; i++){
		 document.getElementById(whiteDrums[i]).style.backgroundColor="rgba(0,0,0,0)";
		 
	}


});


//4. Computer gets the random drum sequence and plays the sequence with drum sound and color per drum
//Current Sequence Max is the max number of the random sequences
var currSequenceMax = 5;
// set initial sequence
var sequence = null;
//DOM event listener that listens for the play button to be clicked to start game
document.querySelector("#play").addEventListener("click", function (){
	sequence = getSequence();
	compSequence( sequence, currSequenceMax );

});

function getSequence(){ 
	compGenSequence = [];
	var newDrumArray = [];
	for(var i = 0; i < currSequenceMax; i++){
		randomDrums = [Math.floor( Math.random() * drumArray.length) ];
		newDrumArray.push( drumArray[ randomDrums ] );
		compGenSequence.push(drumArray[randomDrums]['name']);

    
    }
    return newDrumArray;
}


//compSequence function sets the sequence for player to match once the play button is clicked
function compSequence( sequence, seqMax ){

	//creating a new variable that is equal to getSequence function that will play the sounds of each drum in the computer sequence
	var sequenceArray = getSequence();
	//setting a for loop at human speed, new variable intervalI, basically the i in a for loop
	var intervalI = 0
	//setting new variable for a function to run the human for loop
	var myInterval = setInterval(function(){
		//line 183 to 190 is the for loop, will run thru the sequence array determine length
	if(intervalI < sequenceArray.length){
		var drums = document.getElementsByClassName("drums")
		for(var i = 0; i < drums.length; i++){
			//console.log("logging drums[i]", drums[i])
			drums[i].style.backgroundColor = "rgba(0,0,0,0)";
		}
		var drum = sequenceArray[intervalI]
		drum.sound.play();
		document.getElementById(drum.name).style.backgroundColor = drum.color;

		//console.log(sequenceArray[intervalI]);
	} else {
		clearInterval(myInterval);
	}
	//adds thru the loop until intervalI is equal to length of sequenceArray
	intervalI ++;
	//comPlaySpeed is the variable for the speed of the delay of the sounds when computer plays the sound
	}, compPlaySpeed);

	//setTimeout is to allow 10seconds of time for the player to play the computers sequence
	//setTimeout( checkWinner, 10000);
	//checkWinner();
}


//5. checkWinner function takes the compSequence and compares to playerSequence to determine Winner or Loser
function checkWinner(){
	
	//The console wont evaluate true or false when comparing two uniquely ID'd objects, such as the arrays player
	//sequence and compGenSequence, so used the .join method to get the strings out of the array, and then compare them to each other to get true or false result.
	//we can evaluate the equality of the'stringified' versions of these arrays with:

	var stringifiedPlayerSeq = playerSequence.join(' ');
	var stringifiedCompSeq = compGenSequence.join(' ');

	console.log('computer sequence:',stringifiedCompSeq);
	console.log('player sequence:',stringifiedPlayerSeq);


	if (stringifiedPlayerSeq == stringifiedCompSeq) {
		console.log("Simon Says, You're a Drum Rockstar!");
		alert("Simon Says, You're a Drum Rockstar!");
	}else {
		console.log("Simon Says, Don't Quit Your Day Job!");
		alert("Simon Says, Don't Quit Your Day Job!");
		

	}
}




//6. Player Turn
//turns should equal one at reset and play buttons are hit
//turns, winners, scores

$(window).on("keydown", function(){
	//console.log(event.which);
	for(var i = 0; i < event.which.length; i++){
		if(!$(event.which).html()){
			if( turns === 1){
				$(event.which).html = ("Player 1");
			}else{
				$(event.which).html = ("Player 2");
			}
			//checkWinner();
			tie++;
			if(tie > 5){
				//console.log("Tie! Keep Practicing.");
				// alert("Tie! Keep Practicing.");
			}
			turns = turns === 0 ? 1 : 0;
			//console.log(turns);

			}
	}
})

// 7. Player Sequence function to determine if player matched computer sequence and declares winner
   //compare player sequence with computer sequence with if else statements




// player keys
// key 1 = 49, z
// key 2 = 50, d
// key 3 = 51, r
// key 4 = 52, t

// key 5 = 71, g key



