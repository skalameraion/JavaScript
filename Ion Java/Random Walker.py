function setup() {
    createCanvas(500, 500);
    w = new Walker(50,50)
}

function draw() {
  background(51);
  w.walk
  w.display
}


function Walker(widtha,heighta) {
    this.x = 0
    this.y = 0
    this.walk = function() {
        this.x = random(-500,500) 
        this.y = random(-500,500) 
    }
    this.dis9play = function() {
        fill(225)
        ellipse(this.x, this.y, widtha, heighta)
    }
}