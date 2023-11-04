//Yellow Wall prefab

class YellowWall extends Phaser.Physics.Arcade.Sprite{
    constructor(scene){
        super(scene, Phaser.Math.Between(BORDER_WIDTH + 100, game.config.width - BORDER_WIDTH - 100), 0 - 12.5, "yellowWall");

        this.parentScene = scene;
        this.parentScene.add.existing(this);
        this.parentScene.physics.add.existing(this);
        this.setImmovable(true);

        this.play("yellowWallIdle");
        this.setVelocityY(300);

        this.newYellowWall = true;
    }

    update(){
        if(this.newYellowWall == true && this.y > game.config.height + 12.5){
            this.reset();
        }

        if(this.y > game.config.height + 12.5){
            this.destroy();
            playerScore += 100;
        }
    }

    impact(){
        this.destroy();
        this.reset();
    }

    reset(){
        var randomTime = Phaser.Math.Between(10, 15);
        this.parentScene.time.delayedCall(randomTime * 1000, () => { //Spawn a new yellow wall after a random amount of seconds
            this.parentScene.addYellowWall(this.parent);
        });
        this.newYellowWall = false;
    }
}