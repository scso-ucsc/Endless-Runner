class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }

    create() {
        this.add.text(500, 325, "Endless Runner Play");
    }
}