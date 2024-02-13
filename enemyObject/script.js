// canvas setup
/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);

// enemy factory
enemy1 = {
  x: 10,
  y: 50,
  width: 200,
  height: 200,
};

// animation loop
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemy1.x++;
  ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
  requestAnimationFrame();
}

animate();
