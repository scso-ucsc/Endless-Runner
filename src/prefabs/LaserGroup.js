//Bits of this code was inspired by this tutorial: https://youtu.be/9wvlAzKseCo?si=K_zf2OD7C8jRWUjz

class LaserGroup extends Phaser.Physics.Arcade.Group{
    constructor(scene){
        super(scene.physics.world, scene);
        scene.add.existing(this);

        this.createMultiple({ ///Creates multiple Game Objects and adds it to this group
            classType: Laser,
            frameQuantity: 15, //Group will have 15 lasers bolts to start
            active: false, //Initiate as inactive
            visible: false, //Initiate as invisible
            key: "laser"
        });
    }

    update(droneX, droneY){

        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            if(bulletCount == 0){
                this.scene.sound.play("emptySound");
            } else{
                this.fire(droneX, droneY - 60);
                bulletCount -= 1;
            }
        }
    }

    fire(x, y){
        const laserbolt = this.getFirstDead(false) //Acquires first member of the group that is inactive; False prevents the creation of new ones if no more are available
        if(laserbolt){
            laserbolt.firing(x, y);
            var randomVal = Phaser.Math.Between(1, 3); //Selecting random number between 1 and 3 inclusive
            this.scene.sound.play("laserSound" + randomVal);
        }
    }
}