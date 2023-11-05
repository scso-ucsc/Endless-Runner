//Name: Sean Eric So
//Game Title: Into the Grid
//Genre: Endless Runner
//Time it took to complete project: 15.5 hours
//Creative Tilt: This endless runner involves a shooting mechanic to earn points. 
//               There are different types of obstacles that the player must face that are worth varying amount of points. 
//               There are also power ups that the player must gather in order to continue playing the game. 
//               If the player collides with too many obstacles, they lose life, and at 0 life the game ends.

let config = {
    type: Phaser.CANVAS,
    width: 1000,
    height: 650,
    scene: [ Load, Menu, Play, Instructions ], //Defining scenes
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    }
};

//console.log("Hello, world!");

let game = new Phaser.Game(config); //Creating Game

//Creating variables
let BORDER_WIDTH = 50;
let BORDER_HEIGHT = 50;
let playerScore = 0;
let highScore = 0;
let playerLife = 3; // Starts at 3;
let bulletCount = 10;
let redOrbRadius = 50;
let orangeOrbRadius = 100;
let blueGreenOrbRadius = 25;
let yellowWallPoints = 100;

//Enabling keyboard variables
let keyLEFT, keyRIGHT, keyUP, keyDOWN, keySPACE, keyR, keyESC;