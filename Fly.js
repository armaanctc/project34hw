class Fly{
  constructor(bodyA,pointB){
      var options={
          bodyA: bodyA,
          pointB: pointB,
          stiffness:0.01,
          length:15
      }
      this.pointB=pointB;
      this.fly= Constraint.create(options);
      World.add(world,this.fly);
  }
  display(){
      if(this.fly.bodyA){
          var pointA = this.rope.bodyA.position;
          var pointB = this.pointB;
          push ();
          line(pointB.x,pointB.y,pointA.x,pointA.y);
          pop ();
      }

  }
  }