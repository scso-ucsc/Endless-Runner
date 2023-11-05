class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    create() {
        //Making Background
        this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, "grid").setOrigin(0, 0); //Background
        this.add.rectangle(0, 0, game.config.width, game.config.height, 0x000000, 0.75).setOrigin(0, 0); //Overlay
        this.add.rectangle(500, 400, 770, 300, 0x85939E, 1).setOrigin(0.5); //Text Box
        let titleTextConfig = {
            fontFamily: "Oswald",
            fontSize: "100px",
            color: "#1E6A44",
            backgroundColor: "#85939E",
            align: "middle",
            padding: {
                left: 25,
                right: 25
            }
        };
        this.add.text(game.config.width / 2, game.config.height / 2 - 200, "INTO THE GRID", titleTextConfig).setOrigin(0.5);
        titleTextConfig.backgroundColor = false;
        titleTextConfig.fontSize = "60px";
        this.add.text(game.config.width / 2, game.config.height / 2 + 10, "Press (SPACE) To Start", titleTextConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 + 150, "Press ← For Instructions", titleTextConfig).setOrigin(0.5);

        //this.add.text(500, 325, "Endless Runner Menu").setOrigin(0.5);

        //Adding Music
        let audioConfig = {
            volume: 0.5,
            loop: true //Allows looping of track
        }
        this.sound.play("menuAudio", audioConfig);

        //Defining Keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start("playScene"); //Start Play Scene for testing
            this.sound.stopAll();
        }
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            this.scene.start("instructionScene");
            this.sound.stopAll();
        }
    }
}