//Drone prefab
class Drone extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
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