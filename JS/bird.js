var Bird = {
    x:0,
    y:0,
    h:0,
    w:0,

    velStateX:0,
    velStateY:0,
    vel:0,

    color:"#000000",
    init: function(x,y,h,w,vel,color){
        this.x=x;this.y=y;
        this.h=h;this.w=w;
        this.vel=vel;
        this.color=color;
        return this;
    },
    draw: function(contex){
        contex.fillStyle = this.color;
        this.x+=this.velStateX;
        this.y+=this.velStateY
        contex.fillRect(this.x,this.y,this.h,this.w);
    },
    flap: function(){
        this.velStateY=-this.vel;
    },
    reset: function(){
        this.y=150;
        this.velStateY=0;
    }
};
