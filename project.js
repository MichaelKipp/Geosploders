/*
Author: Michael Kipp
Date: 7/24/2018
Project: Fireworks that explode shapes
*/

var GRAVITY;
var sploders;

function setup() {
  width = windowWidth;
  height = windowHeight;
  createCanvas(width, height);

  colorMode(RGB);

  GRAVITY = createVector(0, .05);

  smooth();
  background(0);

  sploders = [];
}

function draw() {
  background(0);

  for (i = sploders.length - 1; i >= 0; i--) {
    sploders[i].applyForce(GRAVITY);
    sploders[i].update();
    sploders[i].show();
    if (sploders[i].offScreen()) {
      sploders.splice(i, 1);
    }
  }
}

function mousePressed() {
  sploders.push(new sploder(createVector(mouseX, mouseY), createVector(0, random(-3, -6))));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
