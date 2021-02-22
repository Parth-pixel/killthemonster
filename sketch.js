const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg
function preload() {
//preload the images here
bg = loadImage("pro-c34+images/images/GamingBackground.png");
}

function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  createCanvas(3000, 800);

  ground = new Ground(1000,500,600,20);
  box = new Box(900,100,70,70);
  box1 = new Box(900,20,70,70);
  box3 = new Box(900,300,70,70);
box4 = new Box(900,350,70,70);
box5 = new Box(900,350,70,70);

   hero = new Hero(200,200);
    slingshot = new SlingShot(hero.body,{x : 200, y : 200});

 

}

function draw() {
  Engine.update(engine);
  background(bg);
  ground.display();
  box.display();
  box1.display();
  box3.display();
  box4.display();
  box5.display();
hero.display();
///slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

