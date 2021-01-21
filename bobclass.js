class Bob{

    constructor(x,y,r){
    
    var options={
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:0.5
    }
    
    this.y=y;
    this.x=x;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r/2,options);
    World.add(world,this.body);
    
    
    }
    
    display(){
    
    var bobpos=this.body.position;
    
    push()
    translate(bobpos.x,bobpos.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill("blue");
     ellipse(0,0,this.r,this.r);
     pop()
    }
    }