class Polygon{
  constructor(x,y,r){
   this.body = Bodies.circle(x,y,r);
   this.r = r;
   this.image = loadImage("output-onlinepngtools.png");
   World.add(world,this.body);
  }  
 display(){
   var pos = this.body.position
   imageMode(CENTER);
   image(this.image,pos.x,pos.y,this.r,this.r);
 }
}