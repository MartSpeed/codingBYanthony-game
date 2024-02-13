// canvas setup
/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);

// enemy factory
enemy1 = {
  x: 0,
  y: 0,
  width: 200,
  height: 200,
};

