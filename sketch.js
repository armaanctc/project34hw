

var hero,heroImg,ground,fly,block1,block2,block3,block4,block5,block6,block7,block8,
block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,
block21,block22,block23,block24,block25,block26,monkster,monsterImg,backgroundImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here
   backgroundImg=loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(1250, 600);

  engine = Engine.create();
	world = engine.world;
  // create sprites here
  ground=new Ground(500,500,1250,10);
  block1=new Block(500,470,40,40);
  block2=new Block(500,430,40,40);
  block3=new Block(500,390,40,40);
  block4=new Block(500,350,40,40);
  block5=new Block(500,310,40,40);
  block6=new Block(500,270,40,40);
  block7=new Block(500,230,40,40);

  block8=new Block(560,470,40,40);
  block9=new Block(560,430,40,40);
  block10=new Block(560,390,40,40);
  block11=new Block(560,350,40,40);
  block12=new Block(560,310,40,40);
  block13=new Block(560,270,40,40);

  block14=new Block(620,470,40,40);
  block15=new Block(620,430,40,40);
  block16=new Block(620,390,40,40);
  block17=new Block(620,350,40,40);
  block18=new Block(620,310,40,40);
  block19=new Block(620,270,40,40);
  block20=new Block(620,230,40,40);
  block21=new Block(620,190,40,40);

  block22=new Block(680,470,40,40);
  block23=new Block(680,430,40,40);
  block24=new Block(680,390,40,40);
  block25=new Block(680,350,40,40);
  block26=new Block(680,310,40,40);

  hero=new Hero(200,500,250,150);
  fly= new Fly(hero.body,{x:200,y:200});
   monster=new Monster(1000,400,250,250);
  Engine.run(engine);
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  hero.display();
  monster.display();

}
function mouseDragged(){
	Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

