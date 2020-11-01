
var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, n;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(800,600);
ground = createSprite(400,560, 900, 10);

monkey = createSprite(200,500, 0, 0) 
monkey.addAnimation("running", monkey_running);
monkey.scale = 0.2;
  
FoodGroup = createGroup();
obstacleGroup=createGroup();
  monkey.setCollider("rectangle", 20, 20, 360, 520);
  monkey.debug=true;
n=0;
}



function draw() {
background(205);
  
ground.velocityX=-4;
ground.x=ground.width/2;
//console.log(ground.x);

if (keyDown("space") && monkey.y >= 332) {
  monkey.velocityY=-12;

}
if (monkey.isTouching(obstacleGroup)){
  obstacleGroup.setVelocityXEach(0);
}
n=n+1;
text("Survival Time: " + n, 100, 100)
monkey.velocityY = monkey.velocityY + 0.5;
monkey.collide(ground);
spawnFood();
spawnObstacles();


drawSprites();
}

 function spawnFood () {
  if (frameCount % 80 === 0) {
   var banana = createSprite(800, 200, 0, 0); 
   banana.addImage(bananaImage);
   banana.scale=0.2;
   banana.velocityX=-5;
   banana.lifetime= 160;
   banana.y=Math.round(random(200, 300));
    FoodGroup.add(banana);
  }

}

function spawnObstacles() {
 if (frameCount % 140 ===0) {
   var obstacle = createSprite(800, 520, 10, 10);
   obstacle.velocityX=-3;
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.2 ;
   obstacle.depth = monkey.depth;
   monkey.depth = monkey.depth+1;
   obstacleGroup.add(obstacle);
   
 } 
}



