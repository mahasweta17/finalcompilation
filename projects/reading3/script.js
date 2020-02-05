


function setup (){
createCanvas(displayWidth,displayHeight);

}

let value = 0;
function draw (){
  fill(value);
background(20);
noStroke();
for(let i=0;i<5000;i++)
{rect(random(width),random(height),3,3);}


var t=text('independent box',200,550);
textSize(26);

}


function mouseMoved() {
  value = value + 5;
  if (value > 250) {
    value = 0;
  }
}
