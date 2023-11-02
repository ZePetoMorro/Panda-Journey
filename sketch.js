
var qx,hr,lSeg;
 var  qSPD =1
var qO=20
var sqW=42.5;
var sqH=25;
var pY,qFrame,pontos,qY,tela=0;
var moving=false;

var startTime; // Variável para armazenar o tempo de início
var elapsedTime = 0; // Variável para armazenar o tempo decorrido

var isMobile = window.orientation > -1;

var frames=2
function setup() {
  createCanvas(400, 400);
  sheet=loadImage("spritesF.png")
  frameRate(60)
  position={
    "posP":[
 {"y":60,"x":80},
 {"y":130,"x":80},
 {"y":200,"x":45},
 {"y":300,"x":45}
    ],
    "posOriginal":[
 {"y":60,"x":80},
 {"y":130,"x":80},
 {"y":200,"x":45},
 {"y":300,"x":45}
],
    "posPonte":[
 {"y":80,"x":110,"w":210},
 {"y":150,"x":110,"w":210},
 {"y":220,"x":75,"w":275},
 {"y":320,"x":75,"w":275}
    ]
  }
  startTime = millis()
  resetGame()
  resetQx()
  resetCh()
  console.log(isMobile)
}
function draw() {
 // document.body.style.backgroundColor="#021538"
  background(200)
  switch(tela){
    case 0:
      menuP()
      break;
    case 1:
      fase()
      break;
    case 2:
      pauseCena()
      break;
    case 3:
      instrus()
      break
    case 4:
      gameOver()
      break
      case 5:
      cred()
  }
  
  elapsedTime = millis() - startTime;
  
  
}

function keyReleased(){
  moving=false
}
function resetQx(){
  qX=random(position.posPonte[0].x,position.posPonte[0].x+position.posPonte[0].w)
  qY=-30
  qFrame=random([0,1,2,3])
  
}
function resetGame(){
  resetQx()
  resetCh()
  seg=0
  qSPD=1
  pontos=0
}
function cH(){
 // rect(position.posP[posR].x,position.posP[posR].y,sqW,sqH)
  //image(arq,x,y,tamCW,tamCH,850*floor(frames),500*pY,850,500)
  
  
 
 // image(panda,position.posP[posR].x,position.posP[posR].y,sqW,sqH,850*floor(frames),500*pY,850,500)
  image(sheet,position.posP[posR].x,position.posP[posR].y,sqW,sqH,850*floor(frames),500*pY,850,500)
  if(moving==false){frames=0}
  else frame()
limites()
  if((mouseIsPressed&&tela==1)&&!isMobile){
    if(mouseX>35&&mouseX<83&&mouseY>340&&mouseY<390.5){position.posP[posR].x-=2.5
    gameBTN(35,340,"LFT","#443E3E");moving=true
  pY=1}
 
    if(mouseX>110&&mouseX<158&&mouseY>340&&mouseY<390.5){position.posP[posR].x+=2.5
  gameBTN(110,340,"RGT","#443E3E");moving=true
  pY=0}
  }
  
}
function mouseReleased(){
  moving=false
}
function mouseClicked(){
  if(tela==1){
    /*if((mouseX>102.5&&mouseX<153&&mouseY>470&&mouseY<518)&&posR<3){posR++;position.posP[posR].x=position.posPonte[posR].x-30;
  }
  if((mouseX>102.5&&mouseX<153&&mouseY>420&&mouseY<468)&&posR>0){posR--;position.posP[posR].x=position.posPonte[posR].x-30;}*/
  if((mouseX>340&&mouseX<390.5&&mouseY>5&&mouseY<53)){noLoop();pauseCena()}
  
  }
  if(tela==2){
  if((mouseX>5&&mouseX<55.5&&mouseY>5&&mouseY<53)){loop();fase() }
  if(mouseX>130&&mouseX<300&&mouseY>300&&mouseY<350.5){resetGame();menuP();loop()}  
  }
  if(tela==0){
    //220,200,150,50.5
    if(mouseX>220&&mouseX<370&&mouseY>200&&mouseY<250.5){loop();fase()}
 if(mouseX>220&&mouseX<370&&mouseY>260&&mouseY<310.5)instrus()
    if(mouseX>220&&mouseX<370&&mouseY>320&&mouseY<370.5)cred()
  }
  if(tela==3){
    if((mouseX>5&&mouseX<55.5&&mouseY>5&&mouseY<53)){menuP()}
  }
  if(tela==4){
  // 130,300,170,50.5
    if((mouseX>112.5&&mouseX<282.5&&mouseY>300&&mouseY<350.5)){loop();menuP()}
  }
  if(tela==5){
    if((mouseX>5&&mouseX<55.5&&mouseY>5&&mouseY<53)){menuP()}
  
  }
}
function resetCh(){
  posR=random([0,1,2,3])
  position.posP[posR].x=position.posOriginal[posR].x
}
function enemy(){
  push()
  noStroke()
  fill("#955B11")
  //rect(qX,qY,qO,qO)
  //image(preda,qX,qY,qO,qO,400*qFrame,0,400,400)
  //image(panda,position.posP[posR].x,position.posP[posR].y,sqW,sqH,850*floor(frames),500*pY,850,500)
  //arq,x,y,tamL,tamA,corteX,corteY,tamCorteL,tamCorteA
  image(sheet,qX,qY,qO,qO,400*qFrame,1000,400,400)
  qY+=qSPD
  if(qY>400){resetQx();qSPD+=0.2}
  if(position.posP[posR].x < qX + qO &&
    position.posP[posR].x + sqW > qX &&
    position.posP[posR].y < qY + qO &&
    position.posP[posR].y + sqH > qY){
    //resetGame();
    lostPoint()
  }
  pop()
}
function lostPoint(){
  resetQx()
  qSPD+=0.5
  posR++
  if(posR>3){
    posR=0
    hr=pontos
    resetGame()
    tela=4
  }else{
  position.posP[posR].x=position.posOriginal[posR].x}
  
}
function limites(){
  directt()
  toucherr()
  if(position.posP[posR].x>position.posPonte[posR].x+position.posPonte[posR].w){resetCh();pontos++;qSPD+=0.5}
  if(position.posP[posR].x<position.posPonte[posR].x-30)position.posP[posR].x=position.posPonte[posR].x-30
  
}
function directt(){
  if(keyIsDown(65)||keyIsDown(37)){
   position.posP[posR].x-=2.5;gameBTN(35,340,"LFT","#443E3E");
    moving=true
    pY=1

   }else{
     gameBTN(35,340,"LFT")}
if(keyIsDown(68)||keyIsDown(39)){
   position.posP[posR].x+=2.5;
  gameBTN(110,340,"RGT","#443E3E");
  moving=true
  pY=0
  
   }else{
     gameBTN(110,340,"RGT")}
}

function frame(){
    frames+=0.07
    if(frames>2)
      frames=0
  }

//Colisão dos botões na tela do jogo
//seja de menu ou do gamepad
function colisao(x1,y1,x2,y2) {
          if(x1 > x2 + 48)
            return false;
          if(y1 > y2 + 50.5)
            return false;
          if(x1 + 48 < x2)
            return false;
          if(y1 + 50.5 < y2)
            return false;
          return true;
  }
function toucherr(){
  if(isMobile){
  if (touches.length>0&&tela==1) {
    if(colisao(35,340,touches[0].x, touches[0].y)){
   position.posP[posR].x-=2.5;
    gameBTN(35,340,"LFT","#443E3E");
    moving=true
    pY=1

   }else{
     gameBTN(35,340,"LFT")}
if(colisao(110,340,touches[0].x, touches[0].y)){
   position.posP[posR].x+=2.5;
  gameBTN(110,340,"RGT","#443E3E");
  moving=true
  pY=0
   }
    else{
     gameBTN(110,340,"RGT")}
  }}
}
