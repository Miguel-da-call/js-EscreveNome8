function setup() {
  createCanvas(600, 600);
  background("black");
}

function draw() {
 
stroke("brown");
fill("white");
  
  // console.log(mouseIsPressed)
  
  if(mouseIsPressed)
rect(mouseX, mouseY, 10, 15);
}
