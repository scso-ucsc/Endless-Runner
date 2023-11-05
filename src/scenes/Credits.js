class Credits extends Phaser.Scene {
    constructor() {
        super("creditScene");
    }

    create(){
        //Background
        this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, "grid").setOrigin(0, 0); //Background
        this.add.rectangle(0, 0, game.config.width, game.config.height, 0x000000, 0.9).setOrigin(0, 0); //Overlay

        let creditsTextConfig = {
            fontFamily: "Oswald",
            fontSize: "75px",
            color: "#3ABF7D",
            align: "middle",
            padding: {
                left: 25,
                right: 25
            }
        };
        this.add.text(game.config.width / 2, game.config.height / 2 - 250, "CREDITS", creditsTextConfig).setOrigin(0.5);

        creditsTextConfig.fontSize = "40px";
        this.add.text(game.config.width / 2, game.config.height / 2 - 100, "Game & Assets Created by: Sean Eric So", creditsTextConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2, "MUSIC:", creditsTextConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 + 50, "Menu: Rising Game - Kevin Macleod", creditsTextConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 + 100, "Play: Video Dungeon Boss - Kevin Macleod", creditsTextConfig).setOrigin(0.5);

        creditsTextConfig.fontSize = "15px";
        this.add.text(game.config.width - 260, game.config.height - 20, "Press the (ESC) key to return to menu", creditsTextConfig);

        //Defining Keys
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

        //Adding music
        let audioConfig = {
            volume: 0.5,
            loop: true //Allows looping of track
        }
        this.sound.play("menuAudio", audioConfig);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyESC)){
            this.scene.start("menuScene");
            this.sound.stopAll();
        }
    }
}