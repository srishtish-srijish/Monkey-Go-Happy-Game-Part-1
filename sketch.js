    //declaring the variables globally
    var monkey , monkey_running, monkeyCollide;
    var ground, invisiGround, groundImg;
    var banana ,bananaImage, obstacle, obstacleImage;
    var FoodGroup, obstacleGroup;
    var score = 0;
   var gameState = "PLAY";

    //function preload:
    function preload(){

    //loading image for monkey,banana and obstacle  
      monkey_running =
    loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png",

    "monkey_3.png","monkey_4.png","monkey_5.png", 
    "monkey_6.png","monkey_7.png","monkey_8.png")

    bananaImage = loadImage("banana.png");
    obstacleImage = loadImage("obstacle.png");

    }

    //function setup:
    function setup(){

    //creating groups for obstacles and banana 
      obstacleGroup = new Group();
      bananaGroup = new Group();

    //creating monkey 
    monkey = createSprite(80,315,20,20);
    monkey.scale = 0.12;
    monkey.addAnimation("monkey", monkey_running);

    //creating ground
    ground = createSprite(300,356,1000,10);
    ground.scale = 1;
    ground.velocityX=-4
    ground.x=ground.width/2
  }
    //function draw:
    function draw(){

    //assigning background
    background("white")

    //when space is pressed ...monkey should jump
    if(keyDown("space")&&monkey.y >= 235) {
     monkey.velocityY = -13; 
  }
    //reseting the ground...after it crosses half its width 
    if (ground.x < 0){
    ground.x = ground.width/2;
   }
      //declaring the function inside function draw 
      bananas();
      obstacles();
      
    //drawing the sprites
    drawSprites()

  }
    //creating function for the banana 
    function bananas(){
    if (frameCount%80 === 0){
        banana = createSprite(620,120, 50, 50 )
        banana.addAnimation( "banana",bananaImage);
        banana.scale = 0.1;
        banana.velocityX =-(4+score*1.5/100);           
        banana.lifetime = 220;
        bananaGroup.add(banana);
        bananaGroup.add(banana);
    }
  }
  //creating function for the obstacle
    function obstacles(){
      if (frameCount%200 === 0){
          obstacle = createSprite(700,330,60,60);
          obstacle.addAnimation("rock", obstacleImage);
          obstacle.scale = 0.13 ;
          obstacle.velocityX = -(4+score*1.5/100);
          obstacle.lifetime = 220;
          obstacleGroup.add(obstacle);

      }
    }