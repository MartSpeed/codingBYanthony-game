// canvas setup
/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);

// enemy factory
class Enemy {
  constructor(x, y, width, height) {
    this.x = 10;
    this.y = 50;
    this.width = 36;
    this.height = 36;
  }
}

// instantiate
const enemy1 = new Enemy();

// animation loop
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemy1.x++;
  enemy1.y++;
  ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
  requestAnimationFrame();
}

animate();
