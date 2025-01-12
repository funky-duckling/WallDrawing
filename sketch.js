function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    stroke(127);
    strokeWeight(10);
    for(let posX = 0.2; posX < 10; posX++){
      line(posX * 25, 5, posX * 25, height/2.05);
    }
  
    noStroke();
    fill('#ffd700');
    for(let posX = 0.5; posX < 10; posX++){
      for(let posY = 0.25; posY < 10; posY++){
        if (posX % 2 === 0.5){
          circle(posX * 25 + width/2, posY * 25 + 10, 10);
        } else {
        circle(posX * 25 + width/2, posY * 25, 10);
        }
      }
    }
  
    fill('red');
    for(let posX = 0; posX < 10; posX++){
      for(let posY = 0; posY < 5; posY++){
      if (posX % 2 === 0){
        square(posX * 25, posY * 50 + height/2 + 25, 25);
      } else {
        square(posX * 25, posY * 50 + height/2, 25);
      }
    }
  }
  
    strokeWeight(10);
    stroke(color(0,0,255));
    for (let i = 0.5; i < 10; i++){
      line(width/2 + 5, height - i * 25 + 5, width/2 + i * 25, height);
      line(width/2 + i * 25 + 5, height/2 + 5, width, height - i *25);
    }
    
    strokeWeight(5);
    stroke(0,0,0);
    line(width/2, 0, width/2, height);
    line(0, height/2, width, height/2);
    strokeWeight(10);
    line(0, 0, width, 0);
    line(width, 0, width, height);
    line(0, height, width, height);
    line(0, 0, 0, height);
    
  }