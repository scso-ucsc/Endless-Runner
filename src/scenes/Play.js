class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }

    create() {
        //Game Over Flag
        this.gameOver = false;

        //Making background
        this.grid = this.add.tileSprite(0, 0, game.config.width, game.config.height, "grid").setOrigin(0, 0); //Background
        let UI = this.add.rectangle(0, 0, game.config.width, BORDER_HEIGHT + 20, 0xDFDFDF, 0.8).setOrigin(0, 0).setDepth(5); //UI
        let barrierL = this.add.rectangle(0, 0, BORDER_WIDTH, game.config.height, 0x333333).setOrigin(0, 0).setDepth(6); //Side Walls
        let barrierR = this.add.rectangle(game.config.width - BORDER_WIDTH, 0, BORDER_WIDTH, game.config.height, 0x333333).setOrigin(0, 0).setDepth(6);

        //Adding Music
        let audioConfig = {
            volume: 0.5,
            loop: true //Allows looping of track
        }
        this.sound.play("playAudio", audioConfig);

        //Configuring Animations
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
        this.anims.create({
            key: "orangeParticlesBurst",
            frames: this.anims.generateFrameNames("orangeParticles", {start: 0, end: 8}),
            repeat: 0,
            frameRate: 12
        });
        this.anims.create({
            key: "redParticlesBurst",
            frames: this.anims.generateFrameNames("redParticles", {start: 0, end: 8}),
            repeat: 0,
            frameRate: 12
        });
        this.anims.create({
            key: "laserBurst",
            frames: this.anims.generateFrameNames("laserBurst", {start: 0, end: 4}),
            repeat: 0,
            frameRate: 12
        });

        //Adding drone
        this.p1Drone = new Drone(this, game.config.width / 2, game.config.height - 50, "drone", 0).setOrigin(0.5);
        this.p1Drone.play("droneFly");

        //Adding Groups
        this.laserGroup = this.add.group({ //Laser Group
            runChildUpdate: true
        });
        this.redOrbGroup = this.add.group({
            runChildUpdate: true //Enables running on children objects
        }).setDepth(2);
        this.blueOrbGroup = this.add.group({
            runChildUpdate: true
        }).setDepth(3);
        this.orangeOrbGroup = this.add.group({
            runChildUpdate: true
        }).setDepth(1);
        this.greenOrbGroup = this.add.group({
            runChildUpdate: true
        }).setDepth(4);
        this.yellowWallGroup = this.add.group({
            runChildUpdate: true
        });

        //Spawning first obstacles
        this.time.delayedCall(2500, () => { //Spawning first red orb after 2.5 seconds
            this.addRedOrb();
        });
        this.time.delayedCall(3000, () => { //Spawning first blue orb after 3 seconds
            this.addBlueOrb();
        });
        this.time.delayedCall(10000, () => { //Spawning first orange orb after 10 seconds
            this.addOrangeOrb();
        });
        this.time.delayedCall(15000, () => { //Spawning first green orb after 15 seconds
            this.addGreenOrb();
        });
        this.time.delayedCall(20000, () => { //Spawning first yellow wall after 20 seconds
            this.addYellowWall();
        });
        this.time.delayedCall(30000, () => { //Spawning another red orb after 30 seconds
            this.addRedOrb();
        });
        this.time.delayedCall(60000, () => { //Spawning another red orb after 60 seconds
            this.addRedOrb();
        });

        //Defining Keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        //Adding UI Features
        let scoreTextConfig = {
            fontFamily: "Oswald",
            fontSize: "50px",
            color: "#000000",
            align: "middle"
        };
        this.scoreText = this.add.text(game.config.width / 2, 28, playerScore, scoreTextConfig).setOrigin(0.5).setDepth(6);
        scoreTextConfig.fontSize = "14px";
        this.highScoreText = this.add.text(game.config.width / 2, 60, "Best: " + highScore, scoreTextConfig).setOrigin(0.5).setDepth(6);
        scoreTextConfig.fontSize = "60px";
        scoreTextConfig.color = "#006633";
        scoreTextConfig.align = "right";
        this.ammoText = this.add.text(game.config.width - BORDER_WIDTH - 65, 40, "x " + bulletCount, scoreTextConfig).setOrigin(0.5).setDepth(6);

        this.ammoIcon = this.add.sprite(game.config.width - BORDER_WIDTH - 140, 40, "laser").setOrigin(0.5).setDepth(6); //Laser Icon

        this.heartDead1 = this.add.sprite(BORDER_WIDTH + 10, 10, "heartDead").setOrigin(0, 0).setDepth(6); //Dead Hearts
        this.heartDead2 = this.add.sprite(BORDER_WIDTH + 70, 10, "heartDead").setOrigin(0, 0).setDepth(6);
        this.heartDead3 = this.add.sprite(BORDER_WIDTH + 130, 10, "heartDead").setOrigin(0, 0).setDepth(6);

        this.heartLive1 = new LiveHeart(this, BORDER_WIDTH + 10, 10, "heartLive").setOrigin(0, 0).setDepth(7); //Live Hearts on top of the Dead ones to similar what is currently there
        this.heartLive2 = new LiveHeart(this, BORDER_WIDTH + 70, 10, "heartLive").setOrigin(0, 0).setDepth(7);
        this.heartLive3 = new LiveHeart(this, BORDER_WIDTH + 130, 10, "heartLive").setOrigin(0, 0).setDepth(7);
    
        //Adding Physics
        this.physics.add.collider(this.blueOrbGroup, this.p1Drone, (blue) => { //Drone collide with blue orb
            blue.absorb();
        });
        this.physics.add.collider(this.greenOrbGroup, this.p1Drone, (green) => { //Drone collide with green orb
            green.absorb();
        });
        this.physics.add.collider(this.laserGroup, this.redOrbGroup, (laserbolt, red) => { //Laser collide with red orb
            laserbolt.hit();
            red.hit();
        });
        this.physics.add.collider(this.laserGroup, this.orangeOrbGroup, (laserbolt, orange) => { //Laser collide with orange orb
            laserbolt.hit();
            orange.hit();
        });
        this.physics.add.collider(this.p1Drone, this.redOrbGroup, (drone, red) => { //Drone collides with red orb
            drone.hit(1);
            red.impact();
        });
        this.physics.add.collider(this.p1Drone, this.orangeOrbGroup, (drone, orange) => { //Drone collides with orange orb
            drone.hit(2);
            orange.impact();
        });
        this.physics.add.collider(this.p1Drone, this.yellowWallGroup, (drone, yellow) => { //Drone collides with yellow wall
            drone.hit(1);
            yellow.impact();
        });
        this.physics.add.collider(this.laserGroup, this.yellowWallGroup, (laserbolt) => { //Laser collide with yellow wall
            let laserPop = this.add.sprite(laserbolt.x, laserbolt.y, "laserBurst");
            laserPop.anims.play("laserBurst");
            laserPop.on("animationcomplete", () => {
                laserPop.destroy();
            });
            laserbolt.destroy();
            this.sound.play("block");
        });
    }

    update() {
        //Enabling movementwhilst in play
        if(!this.gameOver){
            this.grid.tilePositionY -= 2; //Moving background
            this.p1Drone.update();
            //this.laserGroup.update(this.p1Drone.x, this.p1Drone.y);
            this.ammoText.text = "x " + bulletCount;
            this.scoreText.text = playerScore;
            
            //Manipulating Health Bar
            if(playerLife < 3){
                this.heartLive3.setAlpha(0);
            } else{
                this.heartLive3.setAlpha(1);
            }
            if(playerLife < 2){
                this.heartLive2.setAlpha(0);
            } else{
                this.heartLive2.setAlpha(1);
            }
            if(playerLife <= 0){
                this.heartLive1.setAlpha(0);
                this.p1Drone.destroy();
                this.gameOver = true;
            } else{
                this.heartLive1.setAlpha(1);
            }

            //Allowing firing
            if(Phaser.Input.Keyboard.JustDown(keySPACE)){
                if(bulletCount <= 0){
                    this.  sound.play("emptySound");
                } else{
                    this.fireLaser();
                    bulletCount -= 1;
                }
            }
        } else{ //If game is over
            if(playerScore > highScore){
                highScore = playerScore;
                this.highScoreText.style.color = "#FF0000";
                this.highScoreText.text = "Best: " + highScore;
            }

            if(Phaser.Input.Keyboard.JustDown(keyR)){
                this.scene.restart();
                playerLife = 3;
                bulletCount = 10;
                this.sound.stopAll(); //End Music
            }
        }
    }

    fireLaser(){
        let laserbolt = new Laser(this, this.p1Drone.x, this.p1Drone.y);
        this.laserGroup.add(laserbolt);
    }

    addRedOrb(){
        var randomVel = Phaser.Math.Between(350, 450);
        let redOrb = new RedOrb(this, randomVel, 100).setScale(0.5);
        this.redOrbGroup.add(redOrb);
    }

    addOrangeOrb(){
        let orangeOrb = new OrangeOrb(this, 350, 200);
        this.orangeOrbGroup.add(orangeOrb);
    }

    addBlueOrb(){
        let blueOrb = new BlueOrb(this);
        this.blueOrbGroup.add(blueOrb);
    }

    addGreenOrb(){
        let greenOrb = new GreenOrb(this);
        this.greenOrbGroup.add(greenOrb);
    }

    addYellowWall(){
        let yellowWall = new YellowWall(this);
        this.yellowWallGroup.add(yellowWall);
    }
}