var canvas;
var monkey, monkeyImg;
var bgdImg;
var bgd;
var yes, yesImg;
function preload(){
monkeyImg = loadImage("pic.png");
bgdImg = loadImage("xyz.jpg");
yesImg = loadImage("YES.jpg");
}

function setup(){

  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  
  bgd = createSprite(400,200,displayWidth*10000000,displayHeight);
  bgd.addImage(bgdImg);
  bgd.scale = 6.5;
  bgd.x = bgd.width/2;
  monkey = createSprite(900,500,10,10);
  monkey.addImage("weber", monkeyImg);
  monkey.scale = 0.3;
  yes = createSprite(1230,300,20,20);
  yes.addImage("start",yesImg);
}

function draw(){
  background(0);
  
  //
  if(bgd.x < 100){
bgd.x = bgd.width/2;
  }
  
  //console.log(bgd.x);
  if(keyDown(LEFT_ARROW)){
monkey.velocityX =  - 2; 
bgd.velocityX = -6;
}
  console.log(monkey.x);
  camera.position.x = monkey.x;
camera.position.y = displayHeight/2;
if(monkey.x < -380){
  monkey.velocityX = 0;
  bgd.velocityX=0;
  bgd.x = bgd.width/2;
  fill("white");
  stroke(20);
text("YOU WIN", -400, 200);
yes.x = -780;

}
  drawSprites();
}