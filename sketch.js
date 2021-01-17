
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gameState = "slingshot";

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 box1 = new Box(580,430,40,40);
   box2 = new Box(580,470,40,40);
   box3 = new Box(620,430,40,40);
   box4 = new Box(620,470,40,40);
   box5 = new Box(540,430,40,40);
   box6 = new Box(540,470,40,40);
   box7 = new Box(660,470,40,40);
   box8 = new Box(500,470,40,40);
   box9 = new Box(700,470,40,40);
   box10 = new Box(460,470,40,40);
   box11 = new Box(660,430,40,40);
   box12 = new Box(500,430,40,40);
   box13 = new Box(580,390,40,40);
   box14 = new Box(620,390,40,40);
   box15 = new Box(540,390,40,40);
   box16 = new Box(580,350,40,40);
   box17 = new Box(580,255,40,40);
   box18 = new Box(580,215,40,40);
   box19 = new Box(580,175,40,40);
   box20 = new Box(580,135,40,40);
   box21 = new Box(620,255,40,40);
   box22 = new Box(660,255,40,40);
   box23 = new Box(700,255,40,40);
   box24 = new Box(540,255,40,40);
   box25 = new Box(500,255,40,40);
   box26 = new Box(460,255,40,40);
   box27 = new Box(620,215,40,40);
   box28 = new Box(660,215,40,40);
   box29 = new Box(540,215,40,40);
   box30 = new Box(500,215,40,40);
   box31 = new Box(620,175,40,40);
   box32 = new Box(540,175,40,40);
	 
   ground = new Ground(580,495,350,10);
   ground1 = new Ground(580,280,350,10);
   
   polygon = new Polygon(100,400,50);

   chain = new Chain(polygon.body,{x:100,y:400});
	 
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  keyPressed()
  
  drawSprites();
  //Create the display here
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
   box22.display();
   box23.display();
   box24.display();
   box25.display();
   box26.display();
   box27.display();
   box28.display();
   box29.display();
   box30.display();
   box31.display();
   box32.display();



   ground.display();
   ground1.display();

   polygon.display();

   chain.display();

}
function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  chain.fly();
  gameState = "launched";
  
}

function keyPressed(){
  if(keyCode === 32){
   chain.attach(polygon.body); 
   gameState = "slingshot";
  }
}
