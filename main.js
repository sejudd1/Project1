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

document.querySelectorAll(".drums").addEventListener("keyup", keyUp());
document.getElementById("snare","rack","kick","floor","cymbal");

function keyUp(event){
	if(event.keyCode === 49){
		document.getElementById("snare");
		this.style.backgroundColor = "blue";
		console.log(event);

	}else if(event.keyCode === 50){
		document.getElementById("rack");
		this.style.backgroundColor = "blue";
		console.log(event);

	}else if(event.keyCode === 51){
		document.getElementById("kick");
		this.style.backgroundColor = "blue";
		console.log(event);

	}else if(event.keyCode === 52){
		document.getElementById("floor");
		this.style.backgroundColor = "blue";
		console.log(event);

	}else if(event.keyCode === 32){
		document.getElementById("cymbal");
		this.style.backgroundColor = "blue";
		console.log(event);

	}else if(event.keyCode === 55){
		document.getElementById("snare");
		this.style.backgroundColor = "red";
		console.log(event);

	}else if(event.keyCode === 56){
		document.getElementById("rack");
		this.style.backgroundColor = "red";
		console.log(event);

	}else if(event.keyCode === 57){
		document.getElementById("kick");
		this.style.backgroundColor = "red";
		console.log(event);

	}else if(event.keyCode === 48){
		document.getElementById("floor");
		this.style.backgroundColor = "red";
		console.log(event);

	}else if(event.keyCode === 32){
		document.getElementById("cymbal");
		this.style.backgroundColor = "red";
		console.log(event);

	}
};


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



