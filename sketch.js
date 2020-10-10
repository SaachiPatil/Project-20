var Zenia,Tourus,Cyclap,wall
var weight,speed

function setup() 
{
  createCanvas(1600,400);

  speed=random(55,90)
  weight=random(400,1500)

  Zenia=createSprite(50,200,50,50);
  Zenia.velocityX= mouseX;
  Zenia.velocityY= mouseY;

  Tourus=createSprite(50,200,50,50);
  Tourus.velocityX= mouseX;
  Tourus.velocityY= mouseY;

  Cyclap=createSprite(50,200,50,50);
  Cyclap.velocityX= mouseX;
  Cyclap.velocityY= mouseY;

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor(80,80,80);

}

function draw() 
{
  background(255,255,255);  
  
  drawSprites();
}