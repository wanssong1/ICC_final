class B{
    b1(){

        
        randomSeed(10);


        image(charaicon,random(frame1.framex,frame1.framex+300),random(frame1.framey,frame1.framey+300));
        image(charaicon,random(frame1.framex,frame1.framex+300),random(frame1.framey,frame1.framey+300));
        image(charaicon,random(frame1.framex,frame1.framex+300),random(frame1.framey,frame1.framey+300));
        image(charaicon,random(frame1.framex,frame1.framex+300),random(frame1.framey,frame1.framey+300));
        image(charaicon,random(frame1.framex,frame1.framex+300),random(frame1.framey,frame1.framey+300));
        image(charaicon,random(frame1.framex,frame1.framex+300),random(frame1.framey,frame1.framey+300));
        pop();
    }
    b2(){
        push();
        fill(255,100);
        
        
        
        pop();
        push();
        noFill();
        stroke(255);
        strokeWeight(0.6);
        //컴퓨터
        push();
        fill(0);
        rect(frame1.framex+30+500, frame1.framey+20+50,140,90);
        rect(frame1.framex+60+500, frame1.framey+60+50,80,40) ;
        fill(0,0,255);
        rect(frame1.framex+50+500, frame1.framey+30,100,70) ;
        noFill();
        textSize(12);
        text('  c o m e !   ',frame1.framex+62+500, frame1.framey+68);
        pop();
        
        //image(computer,frame1.framex+30, frame1.framey+30,140,120);
        //image(mirror,frame1.framex+200, frame1.framey);
        //침대
        rect(frame1.framex+20+750, frame1.framey+250-60,120,200);
        rect(frame1.framex+20+5+760, frame1.framey+210,90,50);
        fill(100);
        rect(frame1.framex+10+760, frame1.framey+220,120,170);
        textSize(50);
        text('📘',frame1.framex+20+5+760,frame1.framey+330);

        
        //image(bed,frame1.framex+10, frame1.framey+240,200,150);

        

    }
    b3(){
        push();
        //noFill();
        stroke(255);
        strokeWeight(1.5);
        fill(200,0,0);
        ellipse(frame1.framex+100+500, frame1.framey+140+500,130,90);
        fill(10,220,10);
        ellipse(frame1.framex+100+500, frame1.framey+140+100+500,130,90);
        fill(50,10,220);
        ellipse(frame1.framex+100+500, frame1.framey+140+200+500,130,90);
        pop();
    }
    b4(){
        image(charaicon,200+40+1000,335+500);
        text('🟣',300+60+1000,400+500);
        text('📘',300+160+1000,400+500);
        push();
        noStroke();
        fill(255);
        textSize(15);
        text(' your choice',300+60+1000,400+50+500);
        pop();


    }
    door1(){
        fill(255);
        rect(frame1.framex+400-5,frame1.framey+50,10,120);
        rect(frame1.framex+50+500,frame1.framey+400-5,120,10);
        rect(frame1.framex+400-5+500,frame1.framey+50+500,10,120);
        push();
        noFill();
        rect(frame1.framex+150+1000,frame1.framey+400-5+500,120,10);
        pop();
       
    }
 
}
