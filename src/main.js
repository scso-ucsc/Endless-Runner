//Name: Sean Eric So
//Game Title: Endless Runner
//Time it took to complete project: 8 hours
//Creative Tilt:

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
let playerLife = 3;
let bulletCount = 10;
let redOrbRadius = 100;

//Enabling keyboard variables
let keyLEFT, keyRIGHT, keySPACE;