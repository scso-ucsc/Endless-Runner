//Drone prefab
class Drone extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        this.parentScene = scene; //To maintain scene context
        this.parentScene.add.existing(this); //Adding item to scene
        this.parentScene.physics.add.existing(this); //Adding physics to item in scene
        this.moveSpeed = 5;
    }

    update(){
        //Left-Right Movement
        if(keyLEFT.isDown && this.x >= BORDER_WIDTH + this.width / 2 + 10){
            this.x -= this.moveSpeed;
        } else if(keyRIGHT.isDown && this.x <= game.config.width - BORDER_WIDTH - this.width / 2 - 10){
            this.x += this.moveSpeed;
        }
    }
}