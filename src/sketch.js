
// Controls the size of the visualization. Defaults to full-screen
var CANVASWIDTH = window.innerWidth;
var CANVASHEIGHT = window.innerHeight;

// Constants for controlling the position of the binary tree
const TREEX = CANVASWIDTH / 2;     // The x-coordinate of the root node
const TREEY = 100;                 // The y-coordinate of the root node
const BACKGROUNDCOLOR = color(30); // Background color of the visualization

function setup() {
    // Create the canvas and place it in the provided placeholder
    var canvas = createCanvas(CANVASWIDTH, CANVASHEIGHT);
    canvas.parent('canvas-placeholder');

    // Create other necessary objects for the visualization
    var tree = new Tree(TREEX, TREEY, BACKGROUNDCOLOR);
    var explorer = new Explorer(canvas.canvas, tree.graphicsBuffer, tree.draw.bind(tree));
    var controls = new Controls(tree)
}
