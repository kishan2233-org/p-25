class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,	
		    restitution:0.3,
			friction:0,
			density:1.2

			}

            this.image=loadImage("paper.png");
			this.body=Bodies.circle(x, y, r, options);
		this.x=x;
		this.y=y;
		this.r=r;

		World.add(world, this.body)
	
	}
	display()
	{
		var pos = this.body.position;
		
			fill(255);
			imageMode(CENTER);
			image(this.image, pos.x,pos.y,100,100);
			
	}
}