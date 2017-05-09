function Player(){
    this.pos = createVector(0,0)
    this.color = 255;
    this.ammo = 100;
    this.lives = 3

    this.show = function(){
        fill(this.color);
        push();
        rotate(angle)
        ellipse(this.pos.x,this.pos.y,60)
        rectMode(CENTER);
        rect(40, 0, 40, 10)
        pop();

        push();
        translate(width/2, -height/2)
        textAlign(RIGHT);
        text('HP: ' + this.lives, -5,25)
        pop();
    }

    this.reload = function(){
        if (player.ammo <= 0) {
            this.color = 128
            fill(255);
            push();
            translate(-width/2,-height/2);
            textAlign(LEFT);
            textSize(16);
            text( "Reloading . . .", 5, 15)
            pop();
            setTimeout(function(){
                player.ammo = 100;
            },1000)
        }else{
            this.color = 255;
            push();
            translate(-width/2,-height/2);
            textSize(16);
            text( 'munitions: ' + player.ammo + '/100', 100, 20)
            pop();
        }
    }
}
