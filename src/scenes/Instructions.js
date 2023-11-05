class Instructions extends Phaser.Scene{
    constructor(){
        super("instructionScene");
    }

    create(){
        //Background
        this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, "grid").setOrigin(0, 0); //Background
        this.add.rectangle(0, 0, game.config.width, game.config.height, 0x000000, 0.9).setOrigin(0, 0); //Overlay

        let instructionsTextConfig = {
            fontFamily: "Oswald",
            fontSize: "75px",
            color: "#3ABF7D",
            align: "left",
            padding: {
                left: 25,
                right: 25
            }
        };
        this.add.text(game.config.width / 2, game.config.height / 2 - 250, "Instructions", instructionsTextConfig).setOrigin(0.5);
        instructionsTextConfig.fontSize = "22px"

        //Configuring animations
        this.anims.create({
            key: "droneFly",
            frames: this.anims.generateFrameNames("drone", {start: 0, end: 3}),
            repeat: -1, //Enabling looping
            frameRate: 10
        });
        this.anims.create({
            key: "redOrbIdle",
            frames: this.anims.generateFrameNames("redOrb", {start: 0, end: 7}),
            repeat: -1,
            frameRate: 24
        });
        this.anims.create({
            key: "orangeOrbIdle",
            frames: this.anims.generateFrameNames("orangeOrb", {start: 0, end: 7}),
            repeat: -1,
            frameRate: 24
        });
        this.anims.create({
            key: "blueOrbIdle",
            frames: this.anims.generateFrameNames("blueOrb", {start: 0, end: 7}),
            repeat: -1,
            frameRate: 10
        });
        this.anims.create({
            key: "greenOrbIdle",
            frames: this.anims.generateFrameNames("greenOrb", {start: 0, end: 6}),
            repeat: -1,
            frameRate: 10
        });
        this.anims.create({
            key: "yellowWallIdle",
            frames: this.anims.generateFrameNames("yellowWall", {start: 0, end: 3}),
            repeat: -1,
            frameRate: 24
        });

        this.droneDemo = this.add.sprite(90, 170, "drone");
        this.droneDemo.play("droneFly");
        this.add.text(game.config.width / 2 + 65, game.config.height / 2 - 180, "In a digital world known as The Grid, corrupted particles are on the loose. It is your job to\neliminate as many of them as you can to earn the highest score possible!", instructionsTextConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2 + 63, game.config.height / 2 - 125, "Use the arrow keys (←→↑↓) to move and dodge obstacles, and the (SPACEBAR) to fire\nat corrupted particles.", instructionsTextConfig).setOrigin(0.5);

        instructionsTextConfig.fontSize = "20px";
        this.redDemo = this.add.sprite(90, 280, "redOrb").setScale(0.25);
        this.redDemo.play("redOrbIdle");
        this.add.text(120, 280, "Red particles will deal damage to you if you collide with them. Shoot them down to earn points!", instructionsTextConfig).setOrigin(0, 0.5);

        this.orangeDemo = this.add.sprite(90, 360, "orangeOrb").setScale(0.25);
        this.orangeDemo.play("orangeOrbIdle");
        this.add.text(120, 360, "Orange particles deal more damage and are larger, but they earn you more points!", instructionsTextConfig).setOrigin(0, 0.5);

        this.blueDemo = this.add.sprite(90, 440, "blueOrb");
        this.blueDemo.play("blueOrbIdle");
        this.add.text(120, 440, "Grab blue particles to increase your ammo!", instructionsTextConfig).setOrigin(0, 0.5);

        this.greenDemo = this.add.sprite(90, 520, "greenOrb");
        this.greenDemo.play("greenOrbIdle");
        this.add.text(120, 520, "Grab green particles to refill your health!", instructionsTextConfig).setOrigin(0, 0.5);

        this.yellowDemo = this.add.sprite(130, 600, "yellowWall");
        this.yellowDemo.play("yellowWallIdle");
        this.add.text(240, 600, "Yellow particles create a static discharge between them that will block your shots. \nAvoid colliding with them!", instructionsTextConfig).setOrigin(0, 0.5);

        instructionsTextConfig.fontSize = "15px";
        this.add.text(game.config.width - 260, game.config.height - 20, "Press the (ESC) key to return to menu", instructionsTextConfig);

        //Adding music
        let audioConfig = {
            volume: 0.5,
            loop: true //Allows looping of track
        }
        this.sound.play("menuAudio", audioConfig);

        //Defining Keys
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyESC)){
            this.scene.start("menuScene");
            this.sound.stopAll();
        }
    }
}