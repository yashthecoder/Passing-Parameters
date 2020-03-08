var frect,mrect;
var g1,g2,g3,g4;

function setup() {
  createCanvas(1200,800);
  frect=createSprite(200, 200, 50, 80);
  mrect=createSprite(400,200,80,30);
  frect.shapeColor="red";
  mrect.shapeColor="red";

  g1 = createSprite (200,100,50,50);
  g1.shapeColor = "green";
  g2 = createSprite (300,100,50,50);
  g2.shapeColor = "green";
  g3 = createSprite (400,100,50,50);
  g3.shapeColor = "green";
  g4 = createSprite (500,100,50,50);
  g4.shapeColor = "green";
  
mrect.velocityY = -5;
frect.velocityY = 5 ;

}

function draw() {
  background(0);  
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;

  if (isTouching (mrect,g2)) { 
  mrect.shapeColor="red";
      g2.shapeColor="green";

    }
    else {
      g2.shapeColor="green";
      mrect.shapeColor="red";
    }

    bounceOff (mrect,frect);

  drawSprites();
}

function isTouching(ob1,ob2){
  if(ob1.x-ob2.x< ob2.width/2+ob1.width/2
    && ob2.x-ob1.x<ob2.width/2 +ob1.width/2
    && ob1.y-ob2.y< ob2.height/2+ob1.height/2
    && ob2.y-ob1.y<ob2.height/2+ob1.height/2){
      return true;
    }
    else 
    return false;


}

function bounceOff (ob1,ob2){
  if(ob1.x-ob2.x< ob2.width/2+ob1.width/2
    && ob2.x-ob1.x<ob2.width/2 +ob1.width/2){
      ob1.velocityX = ob1.velocityX*(-1);
      ob2.velocityX = ob1.velocityX*(-1);

    }

    if (ob1.y-ob2.y< ob2.height/2+ob1.height/2
      && ob2.y-ob1.y<ob2.height/2+ob1.height/2){
        ob1.velocityY = ob1.velocityY*(-1);
        ob2.velocityY = ob1.velocityY*(-1);
    
      }
      
}