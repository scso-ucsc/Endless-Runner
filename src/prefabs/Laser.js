//Bits of this code was inspired by this tutorial: https://youtu.be/9wvlAzKseCo?si=K_zf2OD7C8jRWUjz

class Laser extends Phaser.Physics.Arcade.Sprite{
    // constructor(scene, x, y, texture, frame){
    //     super(scene, x, y, "laser", 0);
    //     this.body.setImmovable(true);
    // }

    // firing(x, y){
    //     this.body.reset(x, y);
    //     this.setActive(true); //Become active
    //     this.setVisible(true); //Become visible
    //     this.setVelocityY(-1000); //Travel speed
    // }

    // preUpdate(time, delta){ //Resetting the lasers' stats once they leave the map
    //     super.preUpdate(time, delta);
    //     if(this.y <= 0 - this.height){
    //         this.setActive(false);
    //         this.setVisible(false);
    //     }
    // }

    // laserReset(){
    //     this.setActive(false);
    //     this.setVisible(false);
    // }
    constructor(scene, x, y){
        super(scene, x, y - 60, "laser");

        this.parentScene = scene;

        this.parentScene.add.existing(this);
        this.parentScene.physics.add.existing(this);

        this.setImmovable(true);
        this.setVelocityY (-1000) //Travel speed

        //Adding sound effect upon spawn
        var randomVal = Phaser.Math.Between(1, 3); //Selecting random number between 1 and 3 inclusive
        this.scene.sound.play("laserSound" + randomVal);
    }

    update(){
        if(this.y < 0 - this.height){
            console.log("Laser Destroyed")
            this.destroy();
        }
    }

    hit(){
        this.destroy();
    }
}