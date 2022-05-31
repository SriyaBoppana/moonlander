let ground;
let lander;
var lander_img;
var bg_img;
var obstacle_img;
var crash3_img;



var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  obstacle_img = loadImage("obstacle.png");
  crash3_img=loadImage("crash3.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  obstacle = createSprite(490,410,30,30);
  obstacle.addImage(obstacle_img);
  obstacle.scale=1

  

  

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  

  edges = createEdgeSprites();
  lander.bounce(edges);

  //fall down
  vy +=g;
  lander.position.y+=vy;

  if( lander.position.y>windowWidth){
    crash3 = createSprite(100,490,30,30)
  crash3.addImage(crash3_img)
  crash3.scale=0.6
  }
  drawSprites();
}


