//1. declare global variables
var drums = document.querySelectorAll("#snare","#rack","#kick","#floor","#cymbal");
var kit = [".drums"]
var simonDrum= [];
var playerDrum = [];
var colors = [];
var array = [0,1,2,3,4,5];
var player1 = 0;
var player2 = 0;
var counter;




//2. Play Game-resets and starts new game
document.querySelector("#play").addEventListener("click", playGame);
function playGame(){
	for(var i = 0; i < drums.length; i++){
		drums[i].innerHTML = "";
		console.log(i);
	}
}


//3. function random drum sequence

function randomSequence(){
	if(simonDrum.length === 0){
		simonDrum = ["#snare","#rack","#kick","#floor","#cymbal"];
		colors = ["Blue","Red"];
		console.log(simonDrum);
	}
	var randomDrums = [Math.floor(Math.random() * simonDrum.length)];
	var drumPicker = simonDrum.splice(randomDrums,1);
	var colorPicker = colors.splice(randomDrums,1);

	document.getElementById("snare","rack","kick","floor","cymbal").innerHTML = drumPicker;
    document.body.style.backgroundColor = colorPicker;
}



// 4. function to determine if player matched computer sequence and declares winner
// function playDrum(){
// 	if(playerDrum.length === 0){
// 		playerDrum = ["#snare","#kick","#rack","#floor","#cymbal"];
// 	}
// }



// 5. function to determine winner



// 6. Event Listener for key down/key up for drums and Event Listener change color, and Event Listener to not click again
var kickSound = new Audio("sounds/SD0000.mp3");
var snareSound = new Audio("sounds/SD0010.mp3");

$(window).on("keydown", function(event){
	console.log(event.which);
	if(event.which === 68){
		//trigger mp3 audio
		console.log("snare");
		snareSound.play();

	}else if(event.which === 90){
		//triggger mp3 audio
		console.log("kick");
		kickSound.play();

	}// else if(event.which === )

});






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



