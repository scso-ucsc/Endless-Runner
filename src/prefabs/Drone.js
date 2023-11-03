//Drone prefab
class Drone extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        this.parentScene = scene; //To maintain scene context
        this.parentScene.add.existing(this); //Adding item to scene
        this.parentScene.physics.add.existing(this); //Adding physics to item in scene

        this.setCollideWorldBounds(true);
        this.setImmovable(true);
        this.moveSpeed = 5;
    }

    update(){
        //Movement code is based off of Exercise-01 from CMPM 120: https://github.com/scso-ucsc/Exercise-01-Template-master/tree/master
        let droneVector = new Phaser.Math.Vector2(0, 0);
        //Left-Right Movement
        if(keyLEFT.isDown && this.x >= BORDER_WIDTH + this.width / 2 + 10){
            droneVector.x = -1;
        } else if(keyRIGHT.isDown && this.x <= game.config.width - BORDER_WIDTH - this.width / 2 - 10){
            droneVector.x = 1;
        }
        //Up-Down Movement
        if(keyDOWN.isDown && this.y <= game.config.height - this.height / 2 - 10){
            droneVector.y = 1;
        } else if(keyUP.isDown && this.y >= BORDER_HEIGHT + this.height / 2 + 30){
            droneVector.y = -1;
        }

        droneVector.normalize();

        this.x += droneVector.x * this.moveSpeed;
        this.y += droneVector.y * this.moveSpeed;
    }
}