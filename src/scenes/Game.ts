import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;
    p1: Phaser.Physics.Arcade.Image;
    p2: Phaser.Physics.Arcade.Image;
    ball: Phaser.Physics.Arcade.Image;

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x000000);

        this.p1 = this.physics.add.image(100, 0, 'bar').setOrigin(0.5, 0.5);
        this.p2 = this.physics.add.image(924, 0, 'bar').setOrigin(0.5, 0.5);
        this.ball = this.physics.add.image(512, 368, 'ball').setOrigin(0.5, 0.5);



        // this.msg_text = this.add.text(512, 384, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
        //     fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
        //     stroke: '#000000', strokeThickness: 8,
        //     align: 'center'
        // });
        // this.msg_text.setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
    }
}
