class Roof{
    constructor(x,y){
 
     var options={
         isStatic:true
     }
 
     this.x=x;
     this.y=y;
     this.width=600;
     this.height=40;
 
     this.body=Bodies.rectangle(x,y,500,50,options);
     World.add(world,this.body);
 
    }
   
    display(){
   
     var pos=this.body.position;
      
     push()
     rectMode(CENTER);
     fill("grey");
     rect(pos.x,pos.y,this.width,this.height);
     pop()
    }
 }