class Chain{
    constructor(bodyA,bodyB){
        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            lenght :10,
            stiffness : 0.5
        }
        this.chain = Constraint.create(options);
        World.add(myWorld,this.chain);
    }
    show()
    {
        strokeWeight(4);
        stroke(255);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }
}