var a,b,c;


function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  a.shapeColor = "green";
  b = createSprite(300,200, 30,50);
  b.shapeColor = "red";
  c = createSprite(200,200,60,75);
  c.shapeColor = "blue";
}

function draw() {
  background(255,255,255);
  
  b.x = World.mouseX;
  b.y = World.mouseY;

  console.log(a.x-b.x);

  if(a.x-b.x > a.width/2+b.width/2 && b.x-a.x > a.width/2+b.width/2) {
    a.shapeColor = "red";
  }
  else{
    a.shapeColor = "green";
    b.shapeColor = "red";
    c.shapeColor = "blue";
  }


  drawSprites();
}