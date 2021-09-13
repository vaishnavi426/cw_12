var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudImg

function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImg = loadImage("cloud.png");
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 
  var ran = Math.round(random(20,200));
  console.log(ran);
}

function draw() {
  //set background color
  background("white");
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);

  makeClouds();
  
  drawSprites();
  
}

function makeClouds() {
  if(frameCount%80==0) {
    cloud = createSprite(600,50,20,20);
    cloud.velocityX=-3;
    cloud.y = Math.round(random(50,100));
    cloud.addImage("clouds",cloudImg);
    cloud.scale = random(0.4,0.8);
    trex.depth = cloud.depth+1;
    console.log(trex.depth," , ",cloud.depth);
  }
}

