function Monster(){
    this.origin = round(random(3));
    this.hp = 40;
    this.disabled = false;

    if (this.origin == 0) {
        this.pos = createVector(random(-width/2, width/2), -height/2);

    }
    if (this.origin == 1) {
        this.pos = createVector(random(-width/2, width/2), height/2);

    }
    if (this.origin == 2) {
        this.pos = createVector(-width/2, random(-height/2, height/2));

    }
    if (this.origin == 3) {
        this.pos = createVector(width/2, random(-height/2, height/2));

    }

    this.target = createVector(player.pos.x, player.pos.y)
    this.vel = this.target.sub(this.pos);
    this.vel.limit(2);

    this.update = function(){
        this.pos.add(this.vel);
        for (let i = 0 ; i < bullets.length ; i ++){
            if (dist(this.pos.x, this.pos.y, bullets[i].pos.x, bullets[i].pos.y) < 20) {
                this.hp--;
            }
        }
    }

    this.hit = function(){
        if (dist(this.pos.x,this.pos.y, player.pos.x, player.pos.y) < 30 && this.disabled == false){
        player.lives--;
        this.disabled = true;
        }
    }

    this.show = function(){
        fill(255);
        ellipse(this.pos.x, this.pos.y, 20)
    }
}
