let x;
let y;
let xvel;
let yvel;
let circlesSize = 4;
let player;
let timer = 0;
let circles = [];
let color1 = 255;
let color2 = 255;
let color3 = 255;
let screen = 0;
let number = 50;

function setup() {
  createCanvas(1000, 800);
  screen = 0;
  for (let n = 0; n < number; n++) {
    circles[n] = {
      x: random(0, width),
      y: random(0, height),
      xvel: random(-10, 10),
      yvel: random(-8, 8)
    };
  }

}

function draw() {
  if (screen == 0) {
    startScreen();
  } else if (screen == 1) {
    gameScreen();
  } else if (screen == 2) {
    endScreen();
  }
}

function mousePressed() {
  if (screen==0) {
    startGame();
  }
  if (screen==2) {
    reset();
  }
}

function startGame() {
  screen=1;
}

function startScreen(){
  background("black");
  textAlign(CENTER, CENTER);
  textSize(100)
  fill("white")
  text("Click to start", height/1.6, width/2.5);
}

function gameScreen(){
  background("black");
      player = circle(mouseX, mouseY, 8);
  for (let n = 0; n < number; n++) {
      circle(circles[n].x, circles[n].y, circlesSize);
      fill(color1, color2, color3);
      circles[n].x = circles[n].x + circles[n].xvel;
      circles[n].y = circles[n].y + circles[n].yvel;
      if(circles[n].x + 4 >= 1000)
      {
        circles[n].xvel = -circles[n].xvel;
      }
      if(circles[n].x - 4 <= 0)
      {
        circles[n].xvel = -circles[n].xvel;
      }
      if(circles[n].y - 4 <= 0)
      {
        circles[n].yvel = -circles[n].yvel;
      }
      if(circles[n].y + 4 >= 800)
      {
        circles[n].yvel = -circles[n].yvel;
      }
      if (frameCount % 60 == 1) {
        timer++;
      }
      if(dist(mouseX, mouseY, circles[n].x, circles[n].y) < 9){
        screen = 2;
      }
  }
}

function endScreen(){
  background("black");
  textSize(100);
  textAlign(CENTER, CENTER);
  text("Score:", width/2, height/3);
  text(timer, width/2, height/2);
}

function reset(){
  screen = 0;
  timer = 0;
  setup();
}





