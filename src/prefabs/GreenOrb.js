//Green Orb prefab
class GreenOrb extends Phaser.Physics.Arcade.Sprite{
    constructor(scene){
        super(scene, Phaser.Math.Between(BORDER_WIDTH + blueGreenOrbRadius, game.config.width - BORDER_WIDTH - blueGreenOrbRadius), 0 - blueGreenOrbRadius, "greenOrb");

        this.parentScene = scene;

        this.parentScene.add.existing(this);
        this.parentScene.physics.add.existing(this);
        this.body.setCircle(this.width / 2);

        this.play("greenOrbIdle");
        this.setVelocityY(300);
        //this.setImmovable(true);

        this.newGreenOrb = true;
    }

    update(){
        if(this.newGreenOrb == true && this.y > game.config.height + blueGreenOrbRadius){
            var randomTime = Phaser.Math.Between(15, 20);
            this.parentScene.time.delayedCall(randomTime * 1000, () => { //Spawn a new green orb after a random amount of seconds
                this.parentScene.addGreenOrb(this.parent);
            });
            this.newGreenOrb = false;
        }

        if(this.y > game.config.height + blueGreenOrbRadius){
            this.destroy();
        }
    }

    absorb(){
        this.destroy();
        playerLife = 3;
        this.parentScene.sound.play("heal");
        this.parentScene.cameras.main.flash(1000, 164, 252, 176, false);
        var randomTime = Phaser.Math.Between(15, 20);
        this.parentScene.time.delayedCall(randomTime * 1000, () => { //Spawn a new green orb after a random amount of seconds
            this.parentScene.addGreenOrb(this.parent);
        });
        this.newGreenOrb = false;
    }
}