class Box{
  constructor(x,y,width,height){
   /*var options ={
     isStatic: false
   } */
   this.body = Bodies.rectangle(x,y,width,height);
   World.add(world,this.body);
   this.width = width;
   this.height = height;
   this.width = width;

  }  
  display(){
    var pos = this.body.position;
    fill("green");
    rect(pos.x,pos.y,this.width,this.height);  
  }
}