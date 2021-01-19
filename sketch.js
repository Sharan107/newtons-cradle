
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,100);

	bob1= new Bob(200,550,100);
	bob2 = new Bob(300,550,100);
	bob3= new Bob(400,550,100);
	bob4= new Bob(500,550,100);
	bob5= new Bob(600,550,100);

    chain1= new Rope(bob1.body,roof.body,-200,0);
    chain2= new Rope(bob2.body,roof.body,-100,0);
    chain3= new Rope(bob3.body,roof.body,0,0);
    chain4= new Rope(bob4.body,roof.body,100,0);
    chain5= new Rope(bob5.body,roof.body,200,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  
  drawSprites();
 
}

function keyPressed(){

  if (keyCode===UP_ARROW){
    Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-150});
  }

}

