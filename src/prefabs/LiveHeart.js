//Live Heart prefab
class LiveHeart extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.alpha = 1; //Hearts are visible when alive
        //this.sfxHurt = scene.sound.add(""); //Adding hurt SFX
    }

    die(){
        this.alpha = 0;
        //this.sfxHurt.play();
    }
}