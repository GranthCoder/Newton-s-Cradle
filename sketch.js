
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Roof,BOB1,BOB2,BOB3,BOB4,BOB5,rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Roof = new roof(400,100,450,50);
  BOB1 = new bob(400,300);
	BOB2 = new bob(450,300);
	BOB3 = new bob(500,300);
	BOB4 = new bob(350,300);
  BOB5 = new bob(300,300);
  
  rope1 = new rope(BOB1.body,{x:400,y:100});
  rope2 = new rope(BOB2.body,{x:450,y:100});
  rope3 = new rope(BOB3.body,{x:500,y:100});
  rope4 = new rope(BOB4.body,{x:350,y:100});
  rope5 = new rope(BOB5.body,{x:300,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  Roof.display();
  BOB1.display();
  BOB2.display();
  BOB3.display();
  BOB5.display();
  BOB4.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(BOB5.body,BOB5.position,{x:-1,y:0});
	  };
}


