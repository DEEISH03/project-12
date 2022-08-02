
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var engine;
var world;
var groundObj;
var leftside;
var rightside;
var radius=50

function preload() {

}

function setup() {
	createCanvas(1500, 400);
	rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restituition: 0.3,
		friction: 0,
		density: 1.2
	}
	ball=Bodies.circle(200, 200, radius/2, [ball_options])
	World.add(world, ball)
	groundObj=new Ground(width/3,200,width,20)
	leftside = new Ground(1100,600,20,120);
	rightside = new Ground(1500,600,20,120);
	Engine.run(engine);

}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position,{x:85,y:-85})
	}
}




function draw() {
	rectMode(CENTER);
	background(0);
	ellipse(ball.position.x,ball.position.y,radius,radius)
	groundObj.display();
	rightside.display();
	leftside.display();
	drawSprites();

}



