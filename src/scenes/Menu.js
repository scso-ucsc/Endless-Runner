class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    create() {
        this.add.text(500, 325, "Endless Runner Menu").setOrigin(0.5);
    }
}