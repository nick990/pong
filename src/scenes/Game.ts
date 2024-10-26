import { Scene } from "phaser";
import {
  BAR_VELOCITY,
  GAME_VIEWPORT_HEIGHT,
  GAME_VIEWPORT_WIDTH,
} from "../utils/consts";

export class Game extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  msg_text: Phaser.GameObjects.Text;
  p1: Phaser.Physics.Arcade.Image;
  p2: Phaser.Physics.Arcade.Image;
  ball: Phaser.Physics.Arcade.Image;
  WKey: Phaser.Input.Keyboard.Key;
  SKey: Phaser.Input.Keyboard.Key;
  UpKey: Phaser.Input.Keyboard.Key;
  DownKey: Phaser.Input.Keyboard.Key;

  constructor() {
    super("Game");
  }

  create() {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor(0x000000);

    this.p1 = this.physics.add
      .image(100, GAME_VIEWPORT_HEIGHT / 2, "bar")
      .setOrigin(0.5, 0.5);
    this.p2 = this.physics.add
      .image(924, GAME_VIEWPORT_HEIGHT / 2, "bar")
      .setOrigin(0.5, 0.5);
    this.ball = this.physics.add
      .image(GAME_VIEWPORT_WIDTH / 2, GAME_VIEWPORT_HEIGHT / 2, "ball")
      .setOrigin(0.5, 0.5);

    this.WKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.SKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.UpKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.DownKey = this.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.DOWN
    );

    // this.msg_text = this.add.text(512, 384, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
    //     fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
    //     stroke: '#000000', strokeThickness: 8,
    //     align: 'center'
    // });
    // this.msg_text.setOrigin(0.5);

    this.input.once("pointerdown", () => {
      this.scene.start("GameOver");
    });
  }

  update() {
    this.p1.setVelocityY(0);
    this.p2.setVelocityY(0);
    if (this.WKey.isDown) {
      this.p1.setVelocityY(-BAR_VELOCITY);
    }
    if (this.SKey.isDown) {
      this.p1.setVelocityY(BAR_VELOCITY);
    }
    if (this.UpKey.isDown) {
      this.p2.setVelocityY(-BAR_VELOCITY);
    }
    if (this.DownKey.isDown) {
      this.p2.setVelocityY(BAR_VELOCITY);
    }
  }
}
