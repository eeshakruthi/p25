const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
var dustbinObj, paperObject, groundObject;

var engine, world;

function setup() {
	createCanvas(800, 700);
rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;

paper = new Paper(100,600,17);
floor = new Ground(400,680,800,40);
leftBin=new Bin(550,620,20,100);
bottomBin=new Bin(610,660,100,20);
rightBin=new Bin(670,620,20,100);
    
var render= Render.create({
element: document.body,
engine: engine,
options: {
	width: 1600,
	height: 700,
	wireFrames: false
}
});
Engine.run(engine);
Render.run(render);
}


function draw() {
rectMode(CENTER);

background(230);



paper.display();
floor.display();
leftBin.display();
rightBin.display();
bottomBin.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:30,y:-35});	
	}
};


