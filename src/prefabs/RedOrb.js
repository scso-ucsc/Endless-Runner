//Red Orb prefab
class RedOrb extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, velocity, pointValue){
        super(scene, Phaser.Math.Between(BORDER_WIDTH + redOrbRadius, game.config.width - BORDER_WIDTH - redOrbRadius), 0 - redOrbRadius, "redOrb");

        this.parentScene = scene; //To maintain scene context
        this.points = pointValue;

        this.parentScene.add.existing(this); //Adding item to scene
        this.parentScene.physics.add.existing(this); //Adding physics to item in scene
        this.body.setCircle(this.width/2); //Setting bounds

        this.play("redOrbIdle");
        this.setVelocityY(velocity);
        //this.setImmovable(true);

        this.newRedOrb = true; //Custom property to allow the respawning of red orbs
    }

    update(){
        if(this.newRedOrb == true && this.y > game.config.height - BORDER_HEIGHT){
            this.parentScene.addRedOrb(this.parent, this.velocity);
            this.newRedOrb = false;
        }

        if(this.y > game.config.height + redOrbRadius){
            this.destroy();
        }
    }

    hit(){
        this.destroy()
        playerScore += this.points;
        this.reset();
    }

    impact(){
        this.destroy();
        this.reset();
    }

    reset(){
        this.parentScene.time.delayedCall(1000, () => { //Respawn another red orb after a second
            this.parentScene.addRedOrb(this.parent, this.velocity);
        });
        this.newRedOrb = false;
    }
}