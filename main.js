//1. declare global variables
var drums = document.querySelectorAll("#snare","#kick","#rack","#floor","#cymbal");
var kit = [".drums"]
var simonDrum= [];
var playerDrum = [];
var colors = [];
var array = [0,1,2,3,4];
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




//3. Play Game-resets and starts new game
document.querySelector("#play").addEventListener("click", playGame);
function playGame(){
	var whiteDrums = ["snare","rack","floor","cymbal"];
	for(var i = 0; i < whiteDrums.length; i++){
		 document.getElementById(whiteDrums[i]).style.backgroundColor="white";
		console.log(whiteDrums);
	}
	document.getElementById("kick").style.backgroundColor="black";
}


//4. function random drum sequence

function randomSequence(){
	if(simonDrum.length === 0){
		simonDrum = ["#snare","#kick","#rack","#floor","#cymbal"];
		colors = ["Blue","Red"];
		console.log(simonDrum);
	}
	var randomDrums = [Math.floor(Math.random() * simonDrum.length)];
	var drumPicker = simonDrum.splice(randomDrums,1);
	var colorPicker = colors.splice(randomDrums,1);

	document.getElementById("snare","kick","rack","floor","cymbal").innerHTML = drumPicker;
    document.body.style.backgroundColor = colorPicker;
}



// 5. function to determine if player matched computer sequence and declares winner
// function playDrum(){
// 	if(playerDrum.length === 0){
// 		playerDrum = ["#snare","#kick","#rack","#floor","#cymbal"];
// 	}
// }



// 6. function to determine winner















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



