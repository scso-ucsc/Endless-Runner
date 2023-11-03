//Blue Orb prefab
class BlueOrb extends Phaser.Physics.Arcade.Sprite{
    constructor(scene){
        super(scene, Phaser.Math.Between(BORDER_WIDTH + blueGreenOrbRadius, game.config.width - BORDER_WIDTH - blueGreenOrbRadius), 0 - blueGreenOrbRadius, "blueOrb");

        this.parentScene = scene;

        this.parentScene.add.existing(this);
        this.parentScene.physics.add.existing(this);
        this.body.setCircle(this.width / 2);

        this.play("blueOrbIdle");
        this.setVelocityY(300);
        this.setImmovable(true);

        this.newBlueOrb = true;
    }

    update(){
        if(this.newBlueOrb == true && this.y > game.config.height / 4 * 3){ //Spawn a new blue orb every time one reaches 3/4 of the map
            var randomTime = Phaser.Math.Between(1, 5);
            this.parentScene.time.delayedCall(randomTime * 1000, () => { //Spawn a new blue orb after a random amount of seconds
                this.parentScene.addBlueOrb(this.parent);
            });
            this.newBlueOrb = false;
        }

        if(this.y > game.config.height + blueGreenOrbRadius){
            this.destroy();
        }
    }
}