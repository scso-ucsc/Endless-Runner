//Name: Sean Eric So
//Game Title: Endless Runner
//Time it took to complete project: 15 hours
//Creative Tilt: A shooting mechanic with different types of obstacles

let config = {
    type: Phaser.CANVAS,
    width: 1000,
    height: 650,
    scene: [ Load, Menu, Play ], //Defining scenes
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