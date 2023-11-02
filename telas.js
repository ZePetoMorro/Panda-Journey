function menuP(){
  tela=0
  push()
  fill("rgb(79,79,226)")
  rect(0,0,400,400)
  pop()

  image(sheet,0,0,400,400,1600,1400,800,800)
  gameBTN(220,200,150,50.5,"#C3D0E4","Jogar")
  gameBTN(220,260,150,50.5,"#C3D0E4","Instruções")
  gameBTN(220,320,150,50.5,"#C3D0E4","Créditos")
}
function fase(){
  tela=1;
  
  image(sheet,0,0,400,400,0,1400,800,800)
  cH()
  for(i=0;i<4;i++){
 push()
    //rect(position.posPonte[i].x,position.posPonte[i].y,position.posPonte[i].w,10)
    
  for(j=position.posPonte[i].x;j<position.posPonte[i].x+position.posPonte[i].w;j+=17){
    //noStroke()
    fill("#BB9762")
    rect(position.posPonte[i].x,position.posPonte[i].y-15,5,20)
    rect(j,position.posPonte[i].y,12,6)
    
    rect((position.posPonte[i].x+5)+position.posPonte[i].w,position.posPonte[i].y-15,5,20)
  }
  noFill()
  stroke("#1F1E1E")
    /*beginShape();
  curveVertex(position.posPonte[i].x+5, position.posPonte[i].y-15);
  curveVertex(position.posPonte[i].x+5, position.posPonte[i].y-15);
  curveVertex(position.posPonte[i].x+70, position.posPonte[i].y-5);
  curveVertex(position.posPonte[i].w, position.posPonte[i].y-5);
  curveVertex(position.posPonte[i].x+position.posPonte[i].w+10, position.posPonte[i].y-15);
  curveVertex(position.posPonte[i].x+position.posPonte[i].w+10, position.posPonte[i].y-15);
  endShape();*/
    beginShape()
    vertex()
    endShape()
   pop() 
  }
  
  enemy()
  push()
  strokeWeight(2.5)
  stroke(0)
  fill("white")
  textSize(15)
  text("PONTOS: "+pontos,10,20)
  pop()
 // gameBTN(50,470,"LFT")
 //gameBTN(155,470,"RGT")
  //gameBTN(102.5,470, "DWN")
 // gameBTN(102.5,420,"UP")
  gameBTN(340,5,"PAUSE")  
  

}
function pauseCena(){
  tela=2
   push()
  image(sheet,0,0,400,400,800,1400,800,800)
  pop()
  gameBTN(5,5,"LFT")
  push()
  textStyle(BOLD)
  textSize(35)
  stroke(0)
  strokeWeight(3)
  fill("white")
  text("JOGO PAUSADO",70,65)
  textSize(25)
  
  text("Seus Pontos: "+pontos,120,250)
  pop()
  gameBTN(130,300,170,50.5,"#B5B6B4","Tela Inicial")
}
function instrus(){
  tela=3
  push()
  fill("blue")
  rect(0,0,400,400)
  image(sheet,0,0,400,400,800,1400,800,800)
  pop()
  push()
  textSize(35)
  textStyle(BOLD)
  textAlign(CENTER)
  fill("#FFF")
  stroke("#000")
  strokeWeight(4)
  text("INSTRUÇÕES",200,65)
  
  textAlign(LEFT)
  textSize(20)
  text("Você deve fazer com que o Panda atravesse a ponte, é uma tarefa árdua, cuidado com as pedras no caminho!",40,80,330,200)
  if(!isMobile){
  text("Você deve usar as teclas 'A' e 'D' ou 'Seta para Esquerda' e 'Seta para Direita', ou ainda clicar nos botões no canto inferior do jogo para mover o panda",40,195,330,200)
  gameBTN(150,322,"LFT")
  gameBTN(225,322,"RGT")
  }
  else{
    text("Você deve tocar nos botões no canto inferior do jogo para mover o panda",40,220,330,200)
  gameBTN(150,322,"LFT")
  gameBTN(225,322,"RGT")
  }
  pop()
  gameBTN(5,5,"LFT")
}
function gameOver(){
  tela=4
   push()
  fill("blue")
  rect(0,0,400,400)
  image(sheet,0,0,400,400,800,1400,800,800)
  pop()
  push()
  textStyle(BOLD)
  textSize(35)
  text("Fim de jogo!",80,65)
  textSize(25)
  stroke(0)
  strokeWeight(3)
  fill("white")
  text("Você fez: "+hr+" pontos",120,250)
  pop()
  gameBTN(130,300,170,50.5,"#B5B6B4","Tela Inicial")
}
function cred(){
  tela=5
   push()
  fill("blue")
  rect(0,0,400,400)
  image(sheet,0,0,400,400,800,1400,800,800)
  pop()
  push()
  textStyle(BOLD)
  textSize(35)
  stroke(0)
  strokeWeight(3)
  fill("white")
  text("Créditos",80,65)
  textSize(15)
  text("Programador e\nIdealizador Original\nJósimo Moura",140,100)
  text("Educador e Orientador\nOrivaldo Santana",140,210)
  text("Programador e Artista\nGabriel Bitencourt",140,310)
  image(sheet,35,75,80,80,0,2200,200,200)
  image(sheet,35,175,80,80,200,2200,200,200)
  image(sheet,35,280,80,80,400,2200,200,200)
  pop()
  gameBTN(5,5,"LFT")
}