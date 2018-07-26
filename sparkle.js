function sparkle(pos, vel) {
  this.pos = pos;
  this.vel = vel;
  this.acc = createVector(0, 0);
  this.color = color(random(0, 200), random(0, 200), random(0, 200))

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc = createVector(0, 0);
  };

  this.applyForce = function(f) {
    this.acc.add(f);
  };

  this.offScreen = function() {
    return this.pos.x > width || this.pos.x < 0 || this.pos.y > height;
  };

  this.show = function() {
    stroke(this.color);
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, 2, 2);
  };
}
