//Orange Orb prefab
class OrangeOrb extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, velocity, pointValue){
        super(scene, Phaser.Math.Between(BORDER_WIDTH + orangeOrbRadius, game.config.width - BORDER_WIDTH - orangeOrbRadius), 0 - orangeOrbRadius, "orangeOrb");

        this.parentScene = scene;

        this.parentScene.add.existing(this);
        this.parentScene.physics.add.existing(this);
        this.body.setCircle(this.width / 2);

        this.play("orangeOrbIdle");
        this.setVelocityY(velocity);
        this.setImmovable(true);
        this.lives = 2;
        this.points = pointValue;

        this.newOrangeOrb = true;
    }

    update(){
        if(this.newOrangeOrb == true && this.y > game.config.height + orangeOrbRadius){
            this.reset();
        }
        
        if(this.y > game.config.height + orangeOrbRadius){
            this.destroy();
        }
    }

    hit(){
        if(this.lives == 2){
            this.lives -= 1;
        } else{ //If this.lives == 1
            this.destroy();
            playerScore += this.points;
            this.reset();
        }
    }

    impact(){
        this.destroy();
        this.reset();
    }

    reset(){
        this.parentScene.time.delayedCall(3000, () => {
            this.parentScene.addOrangeOrb(this.parent, this.velocity);
        })
        this.newOrangeOrb = false;
    }
}