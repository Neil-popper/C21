var fixedRect, movingRect;
var box;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box = createSprite(150,200,30,30)
  box.shapeColor = "blue"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (collide(movingRect, box)) {
  movingRect.shapeColor = "red";
  box.shapeColor = "red";
}else {
  movingRect.shapeColor = "green";
  box.shapeColor = "blue";
}
  
  drawSprites();
}

