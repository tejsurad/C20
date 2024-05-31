
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup()
{
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world

  var ball_option={
    restitution:0.27,
    frictionAir:0.01
  }

  ball=Bodies.circle(20,40,30,ball_option)
  World.add(world,ball)
  
  var ground_options={
    isStatic:true

  }
  ground=Bodies.rectangle(0,390,400,20,ground_options)
}

function draw() 
{
  background("blue");
  Engine.update(engine)

  ellipse(ball.position.x,ball.position.y,30,30)
  rect(ground.position.x,ground.position.y,400,20)
}

