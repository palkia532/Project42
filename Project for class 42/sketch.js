const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var spacecraft;
var backgroundImg,platform;
var iss;
var hasDocked;

function preload(){
  background=loadImage("spacebg.png");
  spacecraft=loadImage("spacecraft1.png")

}
function setup() {
 
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground = new Ground(600,300,1200,20);
  platform = new Ground(150, 305, 300, 170);

spacecraft1=new spacecraft(240,130,20,20)
spacecraft1=loadAnimation("spacecraft1.png");

spacecraft2=new spacecraft(250,130,20,20)
spacecraft2=loadAnimation("spacecraft2.png");

spacecraft3=new spacecraft(260,130,20,20)
spacecraft3=loadAnimation("spacecraft3.png");

spacecraft4=new spacecraft(270,130,20,20)
spacecraft4=loadAnimation("spaceCRAFT4.png");

iss=new iss(230,140,30,30);
iss=loadAnimation("iss.png");

}

function draw() {
  if(!hasDocked){
    randomnum(120,160);

    if(keyDown(UP_ARROW)){
      spacecraft.velocityx=340;
      spacecraft.loadAnimation("spacecraft1.png")
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.velocityx=350;
      spacecraft.loadAnimation("spacecraft2.png")
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.velocityx=320;
      spacecraft.loadAnimation("spacecraft3.png")
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.velocityx=320;
      spacecraft.loadAnimation("spacecraft4.png")
    }
  }
  background(255,255,255);  
  drawSprites();
  spacecraft.display();
  background.display();
  iss.display();
  hasDocked.display();
}