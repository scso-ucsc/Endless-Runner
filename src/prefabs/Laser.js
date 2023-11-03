//Bits of this code was inspired by this tutorial: https://youtu.be/9wvlAzKseCo?si=K_zf2OD7C8jRWUjz

class Laser extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, "laser", 0);
    }

    firing(x, y){
        this.body.reset(x, y);
        this.setActive(true); //Become active
        this.setVisible(true); //Become visible
        this.setVelocityY(-1000); //Travel speed
    }

    preUpdate(time, delta){ //Resetting the lasers' stats once they leave the map
        super.preUpdate(time, delta);
        if(this.y <= 0 - this.height){
            this.setActive(false);
            this.setVisible(false);
        }
    }

    // laserImpact(){
    //     this.setActive(false);
    //     this.setVisible(false);
    // }
}