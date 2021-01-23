class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.004,
            length:10
        }
        this.pointB=pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
     fly(){
     this.sling.bodyA=null
     }
     attach(){
        this.sling.bodyA= body;
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB
        stroke("red")
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }}
    
}