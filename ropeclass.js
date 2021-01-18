class Rope{

constructor(body1,body2,offsetX,offsetY){

this.offsetX=offsetX;
this.offsetY=offsetY;
var options={
    bodyA:body1,
    bodyB:body2,
    pointB:{x:this.offsetX,y:this.offsetY}
}
this.rope= Constraint.create();
World.add(world,this.rope)
}

display(){

pointA=this.rope.bodyA.position;
pointB=this.rope.bodyB.position;

strokeWeight(2);

anchor1X=pointA.x;
anchor1Y=pointA.y;

anchor2X=pointB.x+this.offsetX;
anchor2Y=pointB.y+this.offsetY;

line(anchor1X,anchor1Y,anchor2X,anchor2Y);
}
}