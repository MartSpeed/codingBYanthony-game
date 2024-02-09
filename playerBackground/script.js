//
const canvas = document.getElementById('canvas1');
//
const ctx = canvas.getContext('2d');
//
const CANVAS_WIDTH = (canvas.width = 800);
//
const CANVAS_HEIGHT = (canvas.height = 700);

// scrolling speed controller
let gameSpeed = 15;

// bring image into the canvas object
const backgroundLayer1 = new Image();
backgroundLayer1.src = 'layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'layer-5.png';

// creating a class to make the layers for the level
class Layer {
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 700;
    this.x2 = this.width;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;
  }
  // move layers horizontally by changing their x and y properties
  update() {
    this.gameSpeed = gameSpeed * this.speedModifier;
    if (this.x <= -this.width) {
      this.x = this.width + this.x2 - this.speed;
    }
    if (this.x2 <= -this.width) {
      this.x2 = this.width + this.x - this.speed;
    }
    this.x = Math.floor(this.x - this.speed);
    this.x2 = Math.floor(this.x2 - this.speed);
  }
  // draw the images to my canvas object selector
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
  }
}

const layer4 = new Layer(backgroundLayer4, 0.5);

function animate() {
  //
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // update layer
  layer4.update();
  // draw layer
  layer4.draw();
  requestAnimationFrame(animate);
}
animate();
