function sploder(pos, vel) {
  this.pos = pos;
  this.vel = vel;
  this.acc = createVector(0, 0);
  this.sparkles = [];
  this.exploded = false;

  this.show = function() {
    if (!this.exploded) {
      fill(255);
      stroke(255);
      ellipse(this.pos.x, this.pos.y, 10, 10);
    } else {
      for (j = 0; j < this.sparkles.length; j++) {
        this.sparkles[j].show();
      }
    }
  };

  this.update = function() {
    if (!this.exploded) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      if (this.vel.y > 0) {
        this.explode();
      }
    } else {
      for (l = this.sparkles.length - 1; l >= 0; l--) {
        this.sparkles[l].applyForce(GRAVITY);
        this.sparkles[l].update();
        if (this.sparkles[l].offScreen()) {
          this.sparkles.splice(l, 1);
        }
      }
    }

    this.acc = createVector(0, 0);
  };

  this.explode = function() {
    this.exploded = true;
    for (k = random(50, 75); k > 0; k--) {
      this.sparkles.push(new sparkle(createVector(this.pos.x, this.pos.y), createVector(random(-3, 3), random(-3, -3)).normalize().mult(random(.5, 4))));
    }
    console.log(this.sparkles);
  };

  this.offScreen = function() {
    return this.pos.x > width || this.pos.x < 0 || this.pos.y > height;
  };

  this.applyForce = function(f) {
    this.acc.add(f);
  };
}
