var bte1, bte2, bte3, bte4;
var ibte1, ibte2, ibte3, ibte4;

var rte1, rte2, rte3, rte4;
var irte1, irte2, irte3, irte4;

var Angle;
var bg;

function preload(){
  bg=loadImage("Background.jpg");
  ibte1=loadImage("bte1.png");
  ibte2=loadImage("bte2.png");
  ibte3=loadImage("bte3.png");
  ibte4=loadImage("bte4.png");

  irte1=loadImage("rte1.png");
  irte2=loadImage("rte2.png");
  irte3=loadImage("rte3.png");
  irte4=loadImage("rte4.png");
  
  
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  bte1 = createSprite(200, 200);
  bte1.addImage(ibte1);

  bte2 = createSprite(200, 400);
  bte2.addImage(ibte2);

  //bte3 = createSprite(200,600);
  //bte3.addImage(ibte3);

 // bte4 = createSprite(200, 800);
  //bte4.addImage(ibte4);
  

 // rte1 = createSprite(1200, 200);
 // rte1.addImage(irte1);

  //rte2 = createSprite(1200, 400);
  //rte2.addImage(irte2);

 // rte3 = createSprite(1300, 925);
 // rte3.addImage(irte3);
  
 // rte4 = createSprite(1200, 800);
 // rte4.addImage(irte4);



 
  
}

function draw() {
  background(bg); 
 // Angle = rte1.angle;

  //rte1.angle.rotate=mouseX
if (keyDown('w')){
  bte1.y = bte1.y-2;
}
if (keyDown('s')){
  bte1.y = bte1.y+2;
}
if (keyDown('a')){
  bte1.x = bte1.x-2;
}
if (keyDown('d')){
  bte1.x = bte1.x+2;
} 
 
if (keyWentDown('f')){
  if(frameCount%5 === 0){
    var round = createSprite(bte1.x+40, bte1.y+8, 10,10);
    round.velocityX = 7;
  }
}


bte1.debug=true;
bte1.setCollider('circle', -10, 8, 50);

if(bte1.x-bte2.x<bte1.width/2+bte2.width/2&&bte2.x-bte1.x<bte1.width/2+bte2.width/2){
  bte1.x=bte1.x+10;
  //bte1.y=bte1.y-10;
}

if (keyDown(UP_ARROW)){
  bte2.y = bte2.y-2;
}
if (keyDown(DOWN_ARROW)){
  bte2.y = bte2.y+2;
}
if (keyDown(LEFT_ARROW)){
  bte2.x = bte2.x-2;
}
if (keyDown(RIGHT_ARROW)){
  bte2.x = bte2.x+2;
} 

if (keyWentUp('shift')){
  

} 
if (keyWentDown('shift')){
  var round = createSprite(bte2.x+69, bte2.y, 10,10);
  round.velocityX = 7;
}
  drawSprites();
}