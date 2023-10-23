class Circulo{
  constructor(){
    this.xPos = random(1, width);
    this.yPos = random(1, height);
    this.colorCirculo = random(100,255);
    this.xDir = 1;
    this.yDir = 1;
    
  }
  
  dibujar(){
    circle(this.xPos, this.yPos, 2);
  }
  mover(){
    this.xPos = this.xPos + this.xDir*random(1,3);
    this.yPos = this.yPos + this.yDir*random(1,3);
    
    if(this.xPos > width || this.xPos <= 0){
      this.xDir *= -1;
    }
    
    if(this.yPos > height || this.yPos <= 0){
      this.yDir *= -1;
    }
  }
  
}

let circulos = [];

function setup() {
  createCanvas(windowWidth, 200);
  
  for(i=0; i<height;i++){
    circulos.push(new Circulo());
  }
}


function draw() {
  background(0);
  fill(255);
  textSize(40);
  text("manucartes",100,100);
  for(i=0; i< circulos.length;i++){
    circulos[i].mover();
    circulos[i].dibujar();
  }

}