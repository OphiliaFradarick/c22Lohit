const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ball;


function setup(){
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var option={
    isStatic : true
  }

  ball = Bodies.circle(200, 200, 30,option);
  World.add(world,ball);

}

function draw(){
  background(0);

  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30,30);

}