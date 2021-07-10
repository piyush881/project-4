const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball

function setup() {
  createCanvas(1080,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(540,390,1080,20);
  right = new Ground(700,350,20,100);
  left = new Ground(500,350,20,100);
  
   var ball_options={
     restitution:0.3
   }
  ball=Bodies.circle(200,380,10,ball_options)
  World.add(world,ball)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,30)
}
function keyPressed(){
  if (keyCode==UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:0.005,y:-0.01})
  }

}


