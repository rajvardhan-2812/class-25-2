const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 

var engine, world;
var box1,pig1;

var bg1

function preload()
    {
bg1 = loadImage("sprites/bg.png")
    }

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20)

    pig1 = new Pig(810,350)

    log1 = new log(810,260,300,PI/2)

    box3 = new Box(700,240,70,70)

    box4 = new Box(920,240,70,70)

    log2 = new log(810,180,300,PI/2)

    pig2 = new Pig(810,220)

    box5 = new Box(810,160,70,70)

    log3 = new log(760,120,150,PI/7)

log4 = new log(870,120,150,-PI/7)

bird1= new bird(100,100);
}

function draw(){
    background(bg1);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    ground.display();
    log1.display();
    box3.display();
log2.display();
    box4.display();
    pig2.display();
    box5.display();
    log3.display()        
        log4.display()
        bird1.display()
    
}