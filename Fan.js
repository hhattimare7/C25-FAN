class Fan {

    constructor(x,y){
     let options = {
        isStatic : true
     }   
     this.x = x;
     this.y = y;
     this.width = 30;
     this.height = 10;
     this.angle = 60;

     this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
     World.add(world, this.body)
    }

    show(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y,this.width, this.height);
    }


}