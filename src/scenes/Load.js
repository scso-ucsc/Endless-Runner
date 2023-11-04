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
        this.load.audio("playAudio", "./assets/VideoDungeonBoss.wav"); //Music by Kevin Macleod: https://www.youtube.com/watch?v=geT22uolrcY
        this.load.audio("emptySound", "./assets/laserEmpty.wav");
        this.load.audio("laserSound1", "./assets/laserShoot1.wav");
        this.load.audio("laserSound2", "./assets/laserShoot2.wav");
        this.load.audio("laserSound3", "./assets/laserShoot3.wav");
        this.load.audio("droneDamage", "./assets/damage.wav");
        this.load.audio("orbDamage1", "./assets/impact1.wav");
        this.load.audio("orbDamage2", "./assets/impact2.wav");
        this.load.audio("orbDamage3", "./assets/impact3.wav");
        this.load.audio("explosion", "./assets/explosion.wav");
        this.load.audio("heal", "./assets/heal.wav");
        this.load.audio("charge", "./assets/charge.wav");
        this.load.audio("block", "./assets/block.wav");

        //Loading spritesheets
        this.load.spritesheet("drone", "./assets/drone.png", {
            frameWidth: 100,
            frameHeight: 80
        });
        this.load.spritesheet("redOrb", "./assets/red_orb.png", {
            frameWidth: 200,
            frameHeight: 200
        });
        this.load.spritesheet("orangeOrb", "./assets/orange_orb.png", {
            frameWidth: 200,
            frameHeight: 200
        });
        this.load.spritesheet("greenOrb", "./assets/green_orb.png", {
            frameWidth: 50,
            frameHeight: 50
        });
        this.load.spritesheet("blueOrb", "./assets/blue_orb.png", {
            frameWidth: 50,
            frameHeight: 50
        });
        this.load.spritesheet("yellowWall", "./assets/yellowWall.png", {
            frameWidth: 200,
            frameHeight: 25
        });
        this.load.spritesheet("orangeParticles", "./assets/orange_particles.png", {
            frameWidth: 200,
            frameHeight: 200
        });
        this.load.spritesheet("redParticles", "./assets/red_particles.png", {
            frameWidth: 200,
            frameHeight: 200
        });
        this.load.spritesheet("laserBurst", "./assets/laserBurst.png", {
            frameWidth: 50,
            frameHeight: 50
        });
    }

    create() {
        //console.log("Loading finished!");
        this.scene.start("menuScene");
    }
}