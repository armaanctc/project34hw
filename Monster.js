class Monster{
    constructor(x,y,width,height){
        var options={
            frictionAir:0.2,
            density:10
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("Monster-01.png");
        World.add(world,this.body);
    }
    display(){

        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        translate (pos.x,pos.y-100);
        rotate (angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop ();


    }
}
