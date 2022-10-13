
var bgImg;
var cat;
var mouse;


function preload() {
bgImg=loadImage("images/garden.png"); 
catimg1= loadAnimation("images/cat1.png");
mouseimg1= loadAnimation("images/mouse1.png");
catimg2= loadAnimation("images/cat2.png","images/cat3.png");
mouseimg2= loadAnimation("images/mouse2.png","images/mouse3.png");
//catimg3= loadAnimation("images/cat3.png");
//mouseimg3= loadAnimation("images/mouse3.png");
catimg4= loadAnimation("images/cat4.png");
mouseimg4= loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  cat=createSprite(870,600);
cat.addAnimation("catsitting",catimg1,catimg2,catimg3,catimg4);
cat.changeAnimation("catRunning");
cat.scale=0.2;

mouse=createSprite(200,600);
mouse.addAnimation("mousestanding",mouseimg1,mouseimg2,mouseimg3,mouseimg4);
mouse.changeAnimation("mouseteasing");
mouse.scale=0.15;
}

function draw() {

    background(bgImg);
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
{
cat.velocityX=0;
cat.addAnimation("catLastImage",catimg3);
cat.x=300;
cat.scale=0.2;
cat.changeAnimation("catLastImage");
mouse.addAnimation("mouseLastImage",mouseimg3);
mouse.scale=0.15;
mouse.changeAnimation("mouseLastImage");
}
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
cat.velocityX= -5;
cat.addAnimation("catRunning",catimg2);
cat.changeAnimation("catRunning");

mouse.addAnimation("mouseTeasing",mouseimg2);
mouse.frameDelay=25;
mouse.changeAnimation("mouseTeasing");
  }


}
