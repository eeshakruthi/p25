class Paper{
        constructor(x,y,radius){
            var option={
                isStatic:false,
                'restitution': 0.3,
                'friction':100,
                'density':1.2
            }
            this.radius=radius;

            this.image=loadImage("paper.png");
            this.body=Bodies.circle(x,y,radius,option)
            World.add(world,this.body);
        }
        display(){
            var paperpos=this.body.position;
push ()
translate(paperpos.x, paperpos.y);
rectMode(CENTER);

fill ("yellow");
imageMode(CENTER)

        image(this.image, 0,0,2*this.radius, 2*this.r);
        pop ()
        }
}