// declare global variables
var random = document.querySelectorAll("#snare","#kick","#rack","#floor","#cymbal")
var simonDrum= [];
var playerDrum = [];
var colors = [];



// Play Game-resets and starts new game
document.querySelector("#play").addEventListener("click", playGame);
function playGame(){
	for(var i = 0; i < drums.length; i++){
		drums[i].innerHTML = "";
		console.log(i);
	}
}


// function for computer to randomly select drum sequence

function randomDrum(){
	if(simonDrum.length === 0){
		simonDrum = ["#snare","#kick","#rack","#floor","#cymbal"]
		colors = ["Blue","Red"];
		console.log(simonDrum);
	}
	var randomDrums = [Math.floor(Math.random() * simonDrum.length)];
	var drumPicker = simonDrum.splice(randomDrum,1);
	var colorPicker = colors.splice(randomDrum,1);

	document.getElementById("snare","kick","rack","floor","cymbal").innerHTML = drumPicker;
    document.body.style.backgroundColor = colorPicker;
}



// function to determine if player matched computer sequence and declares winner
// function playDrum(){
// 	if(playerDrum.length === 0){
// 		playerDrum = ["#snare","#kick","#rack","#floor","#cymbal"];
// 	}
// }



// function to determine winner



// Event Listener for key down for drums

// document.querySelectorAll(".drums").addEventListener("keydown", doKeyDown())

// function doKeyDown(e){
// 	if(e.keydown === 49){

// 	}
// 	if(e.keydown === 50){

// 	}
// 	if(e.keydown === 51){

// 	}
// 	if(e.keydown === 52){

// 	}
// 	if(e.keydown === 32){

// 	}
// }


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



