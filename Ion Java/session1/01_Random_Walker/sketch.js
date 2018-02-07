// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 1: Random Walker

var w;
var x;
var y;

function setup() {
  createCanvas(640, 360);
  // Make a Walker object
  w = new Walker();
}

function draw() {
  background(51);
  // Update and display object
      w.update();
      w.display();
}

function Walker() {

  // Start Walker in center
  this.pos = createVector(width/2, height/2);

  this.update = function() {
    // Move Walker randomly
    var vel = createVector(0, 0);
    x = random(-5,5);
    y = random(-5,5);
    var acc = createVector(x,y);
    var vel = vel.add(acc); 
    this.pos.add(vel);
  }
  this.display = function() {
    // Draw Walker as circle
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}