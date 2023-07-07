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
const spriteWidth = (6876/12)
const spriteHeight = (5230/10)
let frameX = 0;
let frameY = 1;
let gameFrame = 0;

// slowdown the frame by this amount
const staggerFrames = 5

// main container for all player animations
const spriteAnimations = []
// 
const animationStates = [
  {
    name: 'idle',
    frames: 7
  },
  {
    name: 'jump',
    frames: 7
  },
  {
    name: 'idle',
    frames: 7
  },
  {
    name: 'idle',
    frames: 7
  },
  {
    name: 'idle',
    frames: 7
  },
  {
    name: 'idle',
    frames: 7
  },
  {
    name: 'idle',
    frames: 7
  },
  {
    name: 'idle',
    frames: 7
  },
  {
    name: 'idle',
    frames: 7
  },
  {
    name: 'idle',
    frames: 7
  },
]
//
animationStates.forEach((state, index) => {
  let frames = {
    loc: []
  }
  for(let j = 0; j < state.frames; j++){
    let positionX = j * spriteWidth;
    let positionY = j * spriteHeight;
    frames.loc.push({x: positionX, y: positionY})
  }
  spriteAnimations[state.name] = frames;
})
console.log(spriteAnimations)
//
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations['idle'].loc.length
  frameX = spriteWidth * position
  // draw image accepts 9 arguments
  // source 
  // the first 4 determine the area to cut out for the source image
  // the second 4 determine the destination where to draw the cropped out part to
  // source image, source-image x-coordinates, source-image y-coordinates, source-image width, source-image height, destination x-coordinates, destination y-coordinates, destination width, destination height
  // ctx.drawImage(playerImage, sx, sy, sw, sh, dx, dy, dw, dh)
  ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

  gameFrame++
  requestAnimationFrame(animate);
}
animate();