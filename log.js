class log extends base 
{
constructor(x,y,height,angle)
{
super(x,y,20,height,angle)
this.image = loadImage("sprites/wood2.png")

Body.setAngle(this.body,angle)
}

}