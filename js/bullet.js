function Bullet(x,y){
    this.pos = p5.Vector.fromAngle(angle);
    this.pos.setMag(50);
    this.vel = p5.Vector.fromAngle(angle);
    this.vel.setMag(6)
    this.firedAngle = angle

    this.update = function(){
        this.pos.add(this.vel)
    }

    this.show = function(){
        fill(0,255,0);
        ellipse(this.pos.x, this.pos.y, 5)
        fill(200,255,150)
        ellipse(this.pos.x, this.pos.y, 3);
    }
}
