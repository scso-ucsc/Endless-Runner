class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }

    create() {
        //Game Over Flag
        this.gameOver = false;

        //Making background
        this.grid = this.add.tileSprite(0, 0, game.config.width, game.config.height, "grid").setOrigin(0, 0); //Background
        let UI = this.add.rectangle(0, 0, game.config.width, BORDER_HEIGHT + 20, 0xDFDFDF, 0.8).setOrigin(0, 0); //UI
        let barrierL = this.add.rectangle(0, 0, BORDER_WIDTH, game.config.height, 0x333333).setOrigin(0, 0); //Side Walls
        let barrierR = this.add.rectangle(game.config.width - BORDER_WIDTH, 0, BORDER_WIDTH, game.config.height, 0x333333).setOrigin(0, 0);

        //Configuring Animations
        this.anims.create({
            key: "droneFly",
            frames: this.anims.generateFrameNames("drone", {start: 0, end: 3}),
            repeat: -1, //Enabling looping
            frameRate: 10
        })

        //Adding drone
        this.p1Drone = new Drone(this, game.config.width / 2, game.config.height - 50, "drone", 0).setOrigin(0.5);
        this.p1Drone.play("droneFly");

        //Adding laser group
        this.laserGroup = new LaserGroup(this);

        //Defining Keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //Adding UI Features
        let scoreTextConfig = {
            fontFamily: "Oswald",
            fontSize: "50px",
            color: "#000000",
            align: "middle"
        };
        this.scoreText = this.add.text(game.config.width / 2, 28, playerScore, scoreTextConfig).setOrigin(0.5);
        scoreTextConfig.fontSize = "14px";
        this.highScoreText = this.add.text(game.config.width / 2, 60, "Best: " + highScore, scoreTextConfig).setOrigin(0.5);

        this.heartDead1 = this.add.sprite(BORDER_WIDTH + 10, 10, "heartDead").setOrigin(0, 0); //Dead Hearts
        this.heartDead2 = this.add.sprite(BORDER_WIDTH + 70, 10, "heartDead").setOrigin(0, 0);
        this.heartDead3 = this.add.sprite(BORDER_WIDTH + 130, 10, "heartDead").setOrigin(0, 0);

        this.heartLive1 = new LiveHeart(this, BORDER_WIDTH + 10, 10, "heartLive").setOrigin(0, 0); //Live Hearts on top of the Dead ones to similar what is currently there
        this.heartLive2 = new LiveHeart(this, BORDER_WIDTH + 70, 10, "heartLive").setOrigin(0, 0);
        this.heartLive3 = new LiveHeart(this, BORDER_WIDTH + 130, 10, "heartLive").setOrigin(0, 0);
    }

    update() {
        //Moving background
        this.grid.tilePositionY -= 3;

        //Enabling movement of Drone whilst in play
        if(!this.gameOver){
            this.p1Drone.update();
            this.laserGroup.update(this.p1Drone.x, this.p1Drone.y);
        }
    }
}