var monkey, monkey_running;
var banana, bananaImage, foodGroup;
var obstacle, obstacleImage, obstacleGroup;
var back, backImage;
var ground, invisibleGround, groundImage;
var score;    


function preload(){
  
  backImage = loadImage ("jungle.jpg");
  
  monkey_running = loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(600, 400);
  
  back = createSprite(600,400,10,10);
  back.addImage ("background", backImage);
  back.velocityX = -4
  back.x = back.width/2
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation ("running", monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(300,380,1200,10);
  ground.visible = false;
  
  foodGroup = new Group();
obstacleGroup = new Group(); 
  
  score = 0;
}

function draw() {
  background("white");
  
  if(back.x<0){
    back.x = back.width/2;
  }
  
  monkey.collide(ground);
  
  if(foodGroup.isTouching(monkey)){
    score = score+2
    
    //It's foodgroup.destroy each and not food.destroy
    foodGroup.destroyEach();
  }
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.1
  }
    
    if(keyDown("space")&& monkey.y>=100){
    monkey.velocityY = -12
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
 // this close curly bracket below is an extra one
 //   }
  
  

  spawnObstacles();
  spawnFood();
  
// below line is not required. You are already calculating score as score=score + 2 in the above lines

//var score = Math.round(random(10,40));


  switch(score){
    case 10: monkey.scale = 0.12;
      break;
      case 20: monkey.scale = 0.14;
      break;
      case 30: monkey.scale = 0.16;
      break;
      case 40: monkey.scale = 0.18;
      break;
      
    default: break;
  
  }
  
  drawSprites();
  
  // the text function that displays score needed some correction. I have corrected it and it is working fine now.
  
  fill("white");
  textSize(20);
  text("score:" +score, 450, 70);
  
}

function spawnObstacles(){
if(frameCount % 100 === 0){

var obstacle = createSprite(600,350,20,20);
  obstacle.addImage("obstacle",obstacleImage);
obstacle.velocityX = -6
  obstacle.scale = 0.15
  obstacle.lifetime = 300
  obstacleGroup.add(obstacle);  
    
}  
}
  
function spawnFood(){
if(frameCount % 200 === 0){
  
  var banana = createSprite(600,170,10,10);
  banana.addImage("banana",bananaImage);
  banana.velocityX = -5;
  banana.scale = 0.15
  banana.lifetime = 300;
  
  foodGroup.add(banana);
  
}
}

