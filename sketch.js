var car1,car2,car3,car4,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car1=createSprite(50,200,50,50);
  car2=createSprite(60,300,50,50);
  car3=createSprite(70,400,50,50);
  car4=createSprite(80,500,50,50);
  car1.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  car4.velocityX=speed;
  wall=createSprite(1500,200,60,height/2);
}

function draw() {
  background(255,255,255);
  wall.shapeColor=color(80,80,80);
  
  if(wall.x-car1.x<(car1.width+wall.width)/2){
    car1.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car1.shapeColor=color("red");
    }
  if(deformation<180 && deformation>100){
    car1.shapeColor=color("yellow");
  }  
if(deformation<100){
  car1.shapeColor=color("green");
}

  }  
 
  if(wall.x-car2.x<(car2.width+wall.width)/2){
    car2.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car2.shapeColor=color("red");
     
    }
  if(deformation<180 && deformation>100){
    car2.shapeColor=color("red");
   
  }  
if(deformation<100){
  car2.shapeColor=color("red");
  
}

  }  

  if(wall.x-car3.x<(car3.width+wall.width)/2){
    car3.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car3.shapeColor=color("red");
    
    }
  if(deformation<180 && deformation>100){
    car3.shapeColor=color("red");
   
  }  
if(deformation<100){
  car3.shapeColor=color("red");
 
}

  }  

  if(wall.x-car4.x<(car4.width+wall.width)/2){
    car4.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car4.shapeColor=color("red");
     
    }
  if(deformation<180 && deformation>100){
    car4.shapeColor=color("red");
   
  }  
if(deformation<100){
  car4.shapeColor=color("red");
 
}

  } 
drawSprites();
}