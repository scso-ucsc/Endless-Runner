//Name: Sean Eric So
//Game Title: Endless Runner
//Time it took to complete project: 1 hours
//Creative Tilt:

let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 450,
    scene: [Menu, Play] //Defining scenes
};

let game = new Phaser.Game(config); //Creating Game