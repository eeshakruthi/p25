class Bin {
    constructor(x,y)   {
        this.x=x;
        this.y=y;
        this.dustbinWidth=200;
        this.dustbinHeight=213;
        this.wallThickness=20;
        
    this.image=loadImage("dustbingreen.png");
    this.leftbody=Bodies.rectangle(this.x-100+10+40, y-60-10-50, 20,100)
this.rightbody = Bodies.rectangle(x+100-40,y-60,100,20);
this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth, this.wallThickness, {isStatic:true})
World.add(world,this.leftbody);
World.add(world,this.rightbody);
World.add(world,this.bottomBody);

}
display()   {
    push ()
       rectMode(CENTER);
      fill(255);
      image (this.image,this.centerbody.position.x,this.centerbody.position.y-50,100,100);
      rect(this.centerbody.position.x,this.centerbody.position,y,100,20)
      rect(this.leftbody.position.x, this.leftbody.position.y,20,100)
      rect(this.rightbody.position.x, this.rightbody.position.y,20,100)
      pop ()
    
    }
};
