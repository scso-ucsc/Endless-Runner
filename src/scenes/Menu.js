class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    create() {
        this.add.text(500, 325, "Endless Runner Menu").setOrigin(0.5);
    }

    update() {
        this.scene.start("playScene"); //Start Play Scene for testing
    }
}