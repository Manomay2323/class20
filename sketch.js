var fixedrect,movingrect;


function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 80);
  fixedrect=createSprite(600,200,50,50);
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
}

function draw() {
  background(0); 
  
 movingrect.y=mouseY;
 movingrect.x=mouseX;

 if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
  fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
  movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
  fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
  movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
 }
 else{
   movingrect.shapeColor="green";
   fixedrect.shapeColor="green";
 } 

  drawSprites();
}