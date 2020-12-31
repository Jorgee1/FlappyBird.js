var Wall = {
    x:0,y:0,
    h:0,w:0,

    vel:0,
    color:"#000000",
    init: function(w,vel,color,screen){
        this.reset(screen);
        this.w=w;
        this.vel=vel;
        this.color=color;
        return this;
    },
    draw: function(screen){
        screen.contex.fillStyle = this.color;
        this.x-=this.vel;
        //screen.contex.fillRect(this.x,this.y,this.w,this.h);

        screen.contex.fillRect(this.x,            0,this.w,this.y);
        screen.contex.fillRect(this.x,this.y+this.h,this.w,screen.height-this.y-this.h);

    },
    reset: function(screen){
        this.x=screen.width+this.w;
        this.y=Math.random()*(screen.height-this.h);
        this.h=60+Math.random()*200;
    }
};
