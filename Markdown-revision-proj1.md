#Drum For Dollars(working title)
----------------

> Written with [StackEdit](https://stackedit.io/).
#####Game Strategy and General Description
>Two player game where player one and player two will attempt to master the drums.  The computer will select a random drum pattern, that the players have to match.  Win and they are deemed a Rockstar.  Lose and "Dont quit your day job!".  The game will also have a 30 second countdown clock per turn. 
>Game is similar to "Simon Says" memory game where a player has to remember the sequence of lighted buttons. Drums will hightlight or change color to show the pattern to play. 

----------
#####Screen Look
>Screen showing player one drum kit and player one will play. Then game screen refreshes to player two kit, and after player two is done, game will determine winner, or maybe have both kits on the screen. 
>Countdown Clock?
>Game will alert player whether they won or not.
>
>[image-id]: "Drum For Dollars"![](file://localhost/Users/stevejuddjr/GA/W03/d01/project1/drums_proj_1.jpg) 

----------
#####Game Play
>Players will use keyboard buttons to play the drum kit.  
>The Players, both one and two will use the keys "z","d","r","t", "g" to match Simon Says.
>"z" key = Snare Drum
>"d" key = Kick Drum 
>"r" key = Rack Tom
>"t" key = Floor TOm
>"g" key = Cymbal
>
>To begin the game, the player will click the "Play" button.
>
#####Psuedo Code:
> event listenters for the "key down" to play the pattern the computer selects
> event listener "on click" to start game
> function with for loop and a variable set as an array for the drums, so the computer will know how many drums to select. 
> computer selects random drums using 
>Math.floor(Math.random() * n--)
use keyframes - css animation style - to change the color of tom with event listener

