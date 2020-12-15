
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 650);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
	
    ground = new Ground(600,600,1200,20);
   paper = new paper();
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  ground.display();
  paper.display();

  drawSprites();
 
}



