const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;






var myengine,myworld; 
var ground;
var ball1;
var ball2;
function setup(){
    var canvas = createCanvas(400,400);
   myengine = Engine.create(); 
    myworld = myengine.world;
  

    var ground_options = {
        isStatic : true 
    }


    ground = Bodies.rectangle(200,390,200,20,ground_options)
    World.add(myworld,ground)
    console.log(ground)

  





    var ball1_options = {
     restitution : 1.0
    }
    ball1 = Bodies.circle(60,60,30,ball1_options)
    World.add(myworld,ball1);
    









    var ball2_options = {
     restitution : 1.0
    }
    ball2 = Bodies.circle(70,70,50,ball2_options)
    World.add(myworld,ball2)

   





    
}

function draw(){
    background(0);
    Engine.update(myengine);


    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,400,20)
    ellipseMode(RADIUS)
    ellipse(ball1.position.x, ball1.position.y,20,20)
    ellipseMode(RADIUS)
    ellipse(ball2.position.x,ball2.position.y,30,30)
    
}
