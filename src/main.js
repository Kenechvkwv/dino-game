let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "shit",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 750
      },
      debug: false
    }
  },
  scene: [TitleScene, GameScene]
};

var game = new Phaser.Game(config)

game.scene.start('TitleScene');