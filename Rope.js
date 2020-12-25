class rope{


    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length:200
        }
        this.pointB = pointB
        this.bodyA = bodyA
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        var pos = this.sling.bodyA.position;
        var pointB = this.pointB;
        stroke("black");
        strokeWeight(2);
        
        line(pos.x,pos.y,pointB.x,pointB.y);
            
        }
        

    
}