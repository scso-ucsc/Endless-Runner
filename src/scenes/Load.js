class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }
    
    preload() {
        //Loading Bar
        //From https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        let loadingBar = this.add.graphics();
        this.load.on("progress", (value) => {
            loadingBar.clear(); //Reset fill style
            loadingBar.fillStyle(0xFFFFFF, 1); // (colour, alpha)
            loadingBar.fillRect(0, game.config.height / 2, game.config.width * value, 5);
        });
        this.load.on("complete", () => {
            loadingBar.destroy();
        });

        //Loading images
        this.load.image("grid", "./assets/grid.png"); //Background
        this.load.image("heartLive", "./assets/heart_live.png");
        this.load.image("heartDead", "./assets/heart_dead.png");
        this.load.image("laser", "./assets/laser.png");

        //Loading SFX
        this.load.audio("emptySound", "./assets/laserEmpty.wav");
        this.load.audio("laserSound1", "./assets/laserShoot1.wav");
        this.load.audio("laserSound2", "./assets/laserShoot2.wav");
        this.load.audio("laserSound3", "./assets/laserShoot3.wav");

        //Loading spritesheets
        this.load.spritesheet("drone", "./assets/drone.png", {
            frameWidth: 100,
            frameHeight: 80
        });
    }

    create() {
        //console.log("Loading finished!");
        this.scene.start("menuScene");
    }
}