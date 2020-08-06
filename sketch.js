const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperObject,groundObject;	
var world;
var rect1, rect2, rect3;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	fill(0);
	rect1 = new Rect(1400,610,20,100);
	rect2 = new Rect(1300,610,20,100);
	rect3 = new Rect(1350,610,120,120);

	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paperObject.display();
  groundObject.display();

  rect1.display();
  rect2.display();
  rect3.display();

  console.log(rect1.x);
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:75,y:-75});
    
	  }
	}
