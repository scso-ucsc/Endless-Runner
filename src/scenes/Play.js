class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }

    create() {
        //this.add.text(500, 325, "Endless Runner Play").setOrigin(0.5);
        //Making background
        this.grid = this.add.tileSprite(0, 0, game.config.width, game.config.height, "grid").setOrigin(0, 0); //Background
        let barrierL = this.add.rectangle(0, 0, BORDER_WIDTH, game.config.height, 0x333333).setOrigin(0, 0); //Side Walls
        let barrierR = this.add.rectangle(game.config.width - BORDER_WIDTH, 0, BORDER_WIDTH, game.config.height, 0x333333).setOrigin(0, 0);
        let UI = this.add.rectangle(0, 0, game.config.width, BORDER_HEIGHT, 0xDFDFDF).setOrigin(0, 0); //UI

        //Adding UI Features
        let scoreTextConfig = {
            fontFamily: "Oswald",
            fontSize: "40px",
            color: "#000000",
            align: "middle"
        };
        this.scoreText = this.add.text(game.config.width / 2, BORDER_HEIGHT / 2, playerScore, scoreTextConfig).setOrigin(0.5);
    }

    update() {
        this.grid.tilePositionY -= 3;
    }
}