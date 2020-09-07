const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var boggie1,boggie2;
var chain1 ;
var bg;
var trainSound;
var flag;

function preload(){
bg= loadImage("images/bg.png");
trainSound = loadSound("sound/train.mp3");
crashSound=loadSound("sound/train_crossing.mp3")
}
function setup(){
    var canvas = createCanvas(1200,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;
  boggie1 = new Boggie(50,370,50,50);
  boggie2 = new Boggie(150,370,50,50);
  boggie3 = new Boggie(250,370,50,50);
  boggie4 = new Boggie(350,370,50,50);
  boggie5 = new Boggie(450,370,50,50);
  boggie6 = new Boggie(550,370,50,50);
 // test = new Tr(20,30,3,50);
 chain1 = new Chain(boggie1.body,boggie2.body);
 chain2 = new Chain(boggie2.body,boggie3.body);
 chain3 = new Chain(boggie3.body,boggie4.body);
 chain4 = new Chain(boggie4.body,boggie5.body);
 chain5 = new Chain(boggie5.body,boggie6.body);
 ground = new Ground(600,380,1200,20);

 rock1 = new Rock(1100,200,30,30);
 rock2 = new Rock(1100,230,30,30);
 rock3 = new Rock(900,180,30,30);
 rock4 = new Rock(825,300,30,30);


}

function draw(){
    background(bg);
    Engine.update(myEngine);
    boggie1.show();
    boggie2.show();
    boggie3.show();
    boggie4.show();
    boggie5.show();
    boggie6.show();

   
    chain1.show();
    chain2.show();
    chain3.show();
    chain4.show();
    chain5.show();

    ground.show();
   rock1.show();
   rock2.show();
    rock3.show();
    rock4.show();
    collision = Matter.SAT.collides(boggie6.body,rock4.body)
    if(collision.collided){
    
    crashSound.play();
    flag =1;
    }
    if(flag ===1){
      textSize(50);
      text("BOOM!!!!!",550,200); 
    }


   
}
function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce( boggie6.body, {x: boggie6.body.position.x, y: boggie6.body.position.y}, {x: 1, y: 0});
   // Matter.Body.applyForce( boggie2.body, {x: boggie2.body.position.x, y: boggie2.body.position.y}, {x: 0.05, y: 0});
    console.log("hi");
    trainSound.play();
  }
} 