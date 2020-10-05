var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1200,800);

  speed=random(55,90);

  thickness=random(22,83);

  weight=random(400,1500);

  bullet=createSprite(50,200,20,30);
  bullet.velocityX = 5;
  //bullet.shapeColor("blue");

  wall=createSprite(1500,200,thickness,height/2);
  //wall.shapeColor("red");
}

function draw() {
  background("pink");  

 if (wall.x-bullet.x < (bullet.width+wall.width)/2)
{
  bullet.velocityX=0;
  var deformation=0.5 * weight * speed/22509;
  if (deformation>180)
{
  bullet.shapeColor=color(255,0,0);
}
if (deformation<180 && deformation>100)
{
  bullet.shapeColour=color(230,230,0);
}
if(deformation<180)
{
  bullet.shapeColor=color(0,255,0);
}
}

if (hasCollided(bullet,wall))
 {
bullet.velocityX = 0;
var damage = 0.5 * weight * speed *speed/(thickness * thickness *thickness);
if (damage>10) 
{
wall.shapeColour = color(255,0,0);
}
if (damage<10)
{
  wall.shapeColour = color(0,255,0);
}
}

hasCollided();

  bullet.display();
  wall.display();
}


function hasCollided(bullet,wall) {
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if (bulletRightEdge>=wallLeftEdge)
{
return true
}
return false
}


