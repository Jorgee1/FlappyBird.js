/*global Wall:true, Bird:true, keys:true, Left:true, Rigth:true, Up:true, Down:true*/

var screen     = Object.create(Screen).init("can","#000000");
var bird = Object.create(Bird).init(50,150,10,10,10,"#FF0000");
var wall = Object.create(Wall).init(50,5,"#FFFF00",screen);
var lock=0;

setInterval(function(){
    screen.clear();
    event();
    gravity();
    camColition();
    if(boxColition()){
        reset();
    }
    wall.draw(screen);
    bird.draw(screen.contex);
},1000/60);

/*

Object { x: 50, y: 240, h: 10, w: 10 }  main.js:45:9
Object { x: 55, y: 147.39673525798034, h: 130.7467450798101, w: 50 }
*/

function gravity(){
    bird.velStateY+=1;
}

function camColition(){
    if(bird.y+bird.h>screen.height){
        reset();
    }else if(bird.y<0){
        reset();
    }

    if(wall.x+wall.w<-20){
        wall.reset(screen);
    }
}


function boxColition(){
    var A = {x:bird.x,y:bird.y,h:bird.h,w:bird.w};
    var B = {x:wall.x,y:wall.y,h:wall.h,w:wall.w};
    if( (   ((A.x<B.x)&&(A.x+A.h>B.x)) || ((A.x>B.x)&&(B.x+B.h>A.x+A.h))   ) &&  (   (A.y<B.y) || ((A.y>B.y)&&(A.y+A.h>B.y+B.h))   ) ){
        //console.log("HI");
        //console.log(A);
        //console.log(B);
        return true;
    }else{
        return false;
    }
}

function event(){

    if((keys[Up])&&(!lock)){
        lock=1;
        bird.flap();
    }else if((!keys[Up])&&(lock)){
        lock=0;
    }


    /*
    if(keys[Up])    {  bird.y-=10  }else
    if(keys[Down])  {  bird.y+=10  }
    */

}


function reset(){
    bird.reset();
    wall.reset(screen);
}
