var peopleCount = 0;
var database; 
var bg;

function preload (){
  var bg=loadImage("image.jpg");
}


function setup(){
  database = firebase.database();
  canvas = createCanvas(1200,400);
  person = new Person();
  form = new Form();
  form.display();
  person.updateCount(peopleCount);

 
}

function draw (){
  background("green");
  drawSprites();
}