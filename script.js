//
const canvas = document.getElementById('canvas1');

//
const ctx = canvas.getContext('2d');

// 1. drawImage method and its 3 versions

// global variable for canvas width and height
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

/**
 * DESCRIPTION: SPRITE ANIMATION
 * there are 2 ways that you can pre make sprites
 */

/**
 * DESCRIPTION: IMAGE ANIMATION
 * to bring image into
 */
const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

//
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillRect(100, 50, 100, 100);
  requestAnimationFrame(animate);
}
animate();