var player;
var bullets=[];
var angle;
var monsters= []
var score = 0

function setup(){
    var c = createCanvas(1200,600);
    c.parent('container')
    background(0);
    player = new Player();
    noStroke();
}

function draw(){
    translate(width/2, height/2);
    angle = atan2(mouseY-height/2, mouseX-width/2)
    background(0);

    if(mouseIsPressed && player.ammo > 0) {
        log('fired')
        bullets.push(new Bullet(60, 0))
        player.ammo --;
    }
    if (player.lives > 0){
        player.reload();
        player.show();

        for (let i = 0 ; i < bullets.length ; i++){
            var bullet = bullets[i];
            if (bullet.pos.x < -width/2 || bullet.pos.x > width/2 || bullet.pos.y < -height/2 || bullet.pos.y > height/2){
                bullets.splice (i,1);
            }

            bullet.update();
            bullet.show();
        }

        if (monsters.length > 0){
            for (let i = 0; i < monsters.length ; i++){
                var monster = monsters[i];

                monster.update();
                monster.show();
                if (monster.hp <= 0){
                    score++;
                    monsters.splice(i, 1)
                }
                monster.hit();
                if (monster.disabled == true){
                    monsters.splice(i,1)
                }
            }
        }

        translate(0, -height/2);
        textAlign(CENTER);
        textSize(20);
        text('SCORE : ' + score, 0, 25)
    } else {
        textAlign(CENTER);
        textSize(60)
        text('GAME OVER', 0, 0)
        text ('Votre score : ' + score, 0, 50)
    }
}

function keyPressed(){
    console.log(monsters)
}

setInterval(function(){
    var test = new Monster();

    monsters.push(test)
}, 1200)
