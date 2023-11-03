//Orange Orb prefab
class OrangeOrb extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, velocity, pointValue){
        super(scene, Phaser.Math.Between(BORDER_WIDTH + orangeOrbRadius, game.config.width - BORDER_WIDTH - orangeOrbRadius), 0 - orangeOrbRadius, "orangeOrb");

        this.parentScene = scene;

        this.parentScene.add.existing(this);
        this.parentScene.physics.add.existing(this);
        this.body.setCircle();

        this.play("orangeOrbIdle");
        this.setVelocityY(velocity);
        this.setImmovable(true);
        this.lives = 2;

        this.newOrangeOrb = true;
    }

    update(){
        if(this.newOrangeOrb == true && this.y > game.config.height + orangeOrbRadius){
            this.parentScene.addOrangeOrb(this.parent, this.velocity);
            this.newOrangeOrb = false;
        }
        
        if(this.y > game.config.height + orangeOrbRadius){
            this.destroy();
        }
    }
}