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
            color: "#1E6A44",
            align: "middle",
            padding: {
                left: 25,
                right: 25
            }
        };
        this.add.text(game.config.width / 2, game.config.height / 2 - 250, "Instructions", instructionsTextConfig).setOrigin(0.5);

        let audioConfig = { //Adding music
            volume: 0.5,
            loop: true //Allows looping of track
        }
        this.sound.play("menuAudio", audioConfig);

        //Defining Keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            this.scene.start("menuScene");
            this.sound.stopAll();
        }
    }
}