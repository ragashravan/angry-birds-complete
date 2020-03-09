class Chain {
    constructor(bodyA,bodyB){
        var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        length: 10,
        stiffness:0.04
    }
this.chain = Constraint.create(options);
World.add(World,this.chain);
}
display(){
  strokeWeight(5);
  line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x,this.bodyB.position.y)  
}
}