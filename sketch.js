var h=0;
var v=0;
var f=500;
let chara,story,frame1,bb,dx,dy;
var framedet=1;
var score=0;
var printmaintext;
var printsubtext;
var i=0;
let charaicon,mirror,inS,mySound;
let tell =1;
let ipt,button;


//let charaicon,computer,bed,mirror;
function preload(){
  mySound=loadSound('Underwater Exploration - Godmode.mp3');
  mySound.setVolume(0.3);
}


function setup() {
  createCanvas(800, 800);
  background(100);
  mySound.play();
  chara=new Chara();
  story=new Story();
  frame1=new Frame1();
  bb=new B();
  charaicon=loadImage('제목 없음-3.png');
 
  inS=loadImage('입력판.png');
  quiz2=loadImage('문제.png');
  getAnwer();
}
function draw() {
  
  var bc=color(0);
  bc=color(0);
  bc.setAlpha(100);
  background(bc);
  //처음배경
  frame1.show();
  //각스테이지 배경
  
  bb.b1();
  bb.b2();
  bb.b3();
  bb.b4();
  bb.door1();
  quiz();
  
  

  //해당과제를 해결했다면
  
    //스테이지 이동
    if (framedet==1){
      
      bc=color(0);
      bc.setAlpha(100);
      background(bc);
      frame1.framex=200;
      frame1.framey=200;
      //rect(frame1.framex+395,frame1.framey+100,10,120);
      chara.c=color(200,150,150);
      //bb.b1();
      
    }
    if (framedet==2){
      bc=color(20,0,0);
      bc.setAlpha(100);
      background(bc);
      
      
      //rect(frame1.framex+20+500,frame1.framey+395,120,10);
      chara.c=color(150,200,150);
      frame1.framex=200-500;
      frame1.framey=200;
      //bb.b1();
      
      
     
    }
    if (framedet==3){
      
      
      bc=color(5,30,5);
      bc.setAlpha(100);
      background(bc);
      chara.c=color(150,150,200);
      //rect(frame1.framex+395+500,frame1.framey+100+500,10,120);
      frame1.framex=200-500;
      frame1.framey=200-500;
      
      
    }
    if  (framedet==4){
     
      
      bc=color(40,40,60);
      bc.setAlpha(100);
      background(bc);
      chara.c=color(180,180,220);
      //rect(frame1.framex+395+750-5,frame1.framey+395+500,120,10);
      frame1.framex=200-1000;
      frame1.framey=200-500;
      
     
    }
   if  (framedet==5){
      
    
      bc=color(20);
      bc.setAlpha(100);
      background(bc);
      chara.c=color(230);
      frame1.framex=200-1000;
      frame1.framey=200-1000;
      framedet=6;
      

    
    }
    if  (framedet==6) {
      
      bc=color(20);
      bc.setAlpha(100);
      background(bc);
      
      //charaicon=loadImage('제목 없음-3.png');
      if (keyIsPressed==true) frame1.move();
    }
  
      

    
  
  
  
 
 
  //주인공움직임
  if (keyIsPressed==true) {
    chara.move();
    
  } 
  
  chara.show(); 
  
  //대사
  
  if (tell==1) {
    if ( i!=-1){
      dotell();
      dettell();
    }
    
  }
 
}
class Chara {
  constructor(){
    this.x=400;
    this.y=400;
    this.c=color(200,150,150);
  }
  
  move(){
   //background(0,50);

    if (framedet<6){
      if (this.x<200-25&&h<0) h=0;
      if (this.y<200+10+30&&v<0) v=0;
      if (this.x>600-80&&h>0) h=0;
      if (this.y>600-90&&v>0) v=0;
      this.x=this.x+h;
      this.y=this.y+v;
    }
    
    if (framedet==6){
      
      if(keyIsPressed==true){

        this.x=map(this.x,0,800,350,450);
        this.y=map(this.y,0,800,350,450);
      }
    }
    
    
    
    
    
  }
  
  
  
  show(){
    
    push();
    stroke(255);
    blendMode(LIGHTEST);
      if (framedet==2){
        fill(0,0,255);
        ellipse(this.x+50,this.y,20,20);
      }
      if (framedet==3){
        fill(0,0,255);
        ellipse(this.x+50,this.y-10,20,20);
        fill(0,255,0);
        ellipse(this.x+45,this.y,20,20);
      }
      if (framedet==4){
        fill(0,0,255);
        ellipse(this.x+50,this.y-10,20,20);
        fill(0,255,0);
        ellipse(this.x+45,this.y,20,20);
        fill(255,0,0);
        ellipse(this.x+55,this.y,20,20);
      }
      if (framedet==5||framedet==6){
        image(charaicon,this.x,this.y-80);
        
      }
      pop();
      push();
      stroke(0,100);
      strokeWeight(10);
      fill(0,30);   
      ellipse(this.x+55,this.y+80,40,10);
      image(charaicon,this.x,this.y);

    
          
    
      pop();
    
    
  }
  
}
class Frame1 {


  constructor(){
    this.framex=200;
    this.framey=200;
    this.framexsz=400;
    this.frameysz=400;
    
  }
  show(){
    
    
    push();
    noFill();
    strokeWeight(2);
    stroke(255);
    
   
    rect(this.framex,this.framey,this.framexsz,this.frameysz); 
    line(this.framex,this.framey+80,this.framex+400,this.framey+80);
    image(inS,this.framex+300,this.framey-5)

    
    rect(this.framex+500,this.framey,this.framexsz,this.frameysz);
    line(this.framex+500,this.framey+80,this.framex+500+400,this.framey+80);
    image(inS,this.framex+300+500,this.framey-5)
    
    rect(this.framex+500,this.framey+500,this.framexsz,this.frameysz);
    line(this.framex+500,this.framey+80+500,this.framex+500+400,this.framey+80+500);
    image(inS,this.framex+300+500,this.framey-5+500)
    
    rect(this.framex+1000,this.framey+500,this.framexsz,this.frameysz);
    line(this.framex+1000,this.framey+80+500,this.framex+400+1000,this.framey+80+500); 
    //rect(this.framex+1000,this.framey+1000,this.framexsz,this.frameysz);
    image(inS,this.framex+300+1000,this.framey-5+500)
    pop();    
  }
  move(){
    this.framex=this.framex-h*3.5;
    this.framey=this.framey-v*3.5;
  }



  

}
class Story {
  constructor(){
    this.x=10+40;
    this.y=290+300+50;
    this.xsz=775-80;
    this.ysz=200;
  }

  show(){
    fill(255);
    stroke(0);
    strokeWeight(1);
    rect(this.x,this.y,this.xsz,this.ysz);
  }
  tell(){

    push();
    fill(0);
    
    //이름
    textSize(20);
    text(printmaintext,this.x+20,this.y+40);
    //내용
    textSize(17);
    text(printsubtext,this.x+25 ,this.y+70 );
    pop();
    
  }

  //사진첨부
  
}
function keyPressed(){
  //조작
  v=0;
  h=0;
  
  if (key==='w') v=-3.5;
  if (key==='s') v=3.5;
  if (key==='d') h=3.5;
  if (key==='a') h=-3.5;
  //대사
  if (key===' ') i=i+2;
  
  if (key===' ') tell=1;
  
  
  //클리어
  
  
  if (framedet==5){
    if (key==='q') {
      framedet=framedet+1;  
      if (framedet==7) framedet=6;
    }
  }
  
  
 
  
}

function dettell(){
  if (framedet==1){
    tell =1;
    printmaintext=script1[i];
    printsubtext=script1[i+1];
    if (script1.length<i+1) i=-2;
  }
  if (framedet==2){
    tell =1;
   
    printmaintext=script2[i];
    printsubtext=script2[i+1];
    if (script2.length<i+1) i=-2;
  }
  if (framedet==3){
    tell =1;
    
    printmaintext=script3[i];
    printsubtext=script3[i+1];
    if (script3.length<i+1) i=-2;
  }
  if (framedet==4){
    tell =1;
    
    printmaintext=script4[i];
    printsubtext=script4[i+1];
    if (script4.length<i+1) i=-2;
  }
  if (framedet==6){
    tell =1;
    
    printmaintext=script6[i];
    printsubtext=script6[i+1];
    if (script6.length<i+1) i=-2;
  }
  
  

}
function dotell(){
  
    
    
    //printsubtext='오늘은 내 생일';
    if(framedet!=6){

    
      story.show(); 
      story.tell();
      //story.tellimage();
    }
  
}

function quiz(){
  if (framedet==1){
    if ( chara.x>480&&chara.y<280){
      push();
    
      noStroke();
      fill(255,240);
      rect(20,50,760,500);
      fill(0);
      textSize(50);
      text("#?",400-10,300+10+30-60);
      text("Don't forget yourself.",200-10,300+10+30);
      //let inp=createInput('answer');
      //inp.size(200);
      //inp.position(300,400);
    
    
      pop();

    } 
  }
  if (framedet==2){
    if ( chara.x>480&&chara.y<280){
      push();
    
      noStroke();
      fill(255,240);
      rect(20,50,760,500);
      fill(200);
      textSize(50);
      text('7 W O N D E R S',200-10,300+10);
      //let inp=createInput('answer');
      //inp.size(200);
      //inp.position(300,400);
    
    
      pop();

    } 
    if ( chara.x<280&&chara.y<280){
      push();
    
      noStroke();
      
      fill(0,0,255,200);
      rect(20,50,760,500);

      image(quiz2,40,60,700,480);
      
      
      //let inp=createInput('answer');
      //inp.size(200);
      //inp.position(300,400);
    
    
      pop();

    } 
    //frame1.framex+20+5+760,frame1.framex+20+5+800
    if (chara.x>600-180&&chara.y>600-200){
      push();
      noStroke();
      fill(255,240);
      rect(20,50,760,500);
      fill(0);
      textSize(30);
      text('One day we run up against the limit.',150,300-50);
      textStyle(BOLDITALIC);
      text("IDK!",150,300);
      pop();

    }
  }
  if (framedet==3){
    if ( chara.x>480&&chara.y<280){
      push();
    
      noStroke();
      fill(255,240);
      rect(20,50,760,500);
      fill(0);
      textSize(50);
      text('🔴🟠🟡🟢🔵 ?',200-30,300+10);
      //let inp=createInput('answer');
      //inp.size(200);
      //inp.position(300,400);
    
    
      pop();

    } 
    //frame1.framex+100+500, frame1.framey+140+500,130,90
    if ( chara.x<280){
      if (chara.y<280){
        push();
    
        fill(255);
        textSize(30);
        text('ME',200+200,345);
        
        
      
        pop();
      }
      else if ( chara.y<380){
        push();
    
        fill(255);
        textSize(30);
        text('SHE',200+200,445);
        
        
      
        pop();

      }
      else if ( chara.y<480){
        push();
    
        fill(255);
        textSize(30);
        text('YOU',200+200,545);
        
        
      
        pop();

      }

    } 
    
  }
  if (framedet==4){
    if ( chara.x>480&&chara.y<280){
      push();
    
      noStroke();
      fill(255,240);
      rect(20,50,760,500);
      fill(200);
      textSize(50);
      text('G O !',400-50,300+10);
      //let inp=createInput('answer');
      //inp.size(200);
      //inp.position(300,400);
    
    
      pop();

    } 
    if ( chara.x>400-100&&chara.x<400+100&&chara.y>600-100){
      framedet=6;

    } 
  }
  if (framedet==6){
    framedet=6;
  }
}

function getAnwer(){
  ipt=createInput();
  button=createButton('submt');
  ipt.changed(detAnswer);
  button.mousePressed(detAnswer)
}
function detAnswer(){
  var ans=ipt.value();
  if (framedet==1){
    
    if (ans=='7') {
      framedet=2;
      firstShow=1;
      
    }
  }
  else if (framedet==2){
    
    if (ans=='idk'||ans=='IDK') framedet=3;
  }
  else if (framedet==3){
    
    if (ans=='US'||ans=='us') framedet=4;
  }
  
  
}