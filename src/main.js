//Name: Sean Eric So
//Game Title: Endless Runner
//Time it took to complete project: 1 hours
//Creative Tilt:

let config = {
    type: Phaser.CANVAS,
    width: 1000,
    height: 650,
    scene: [ Menu, Play ] //Defining scenes
};

console.log("Hello, world!");

let game = new Phaser.Game(config); //Creating Game