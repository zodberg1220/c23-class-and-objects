class Ground {

    constructor(x,y,width,height) {
        var Ground_options={
    
           isStatic:true
          }
        
          this.body=Bodies.rectangle(x,y,width,height,Ground_options);
          World.add(world,this.body);
          this.width=width;
          this.height=height;
    }
    
    display()
    {
    var pos = this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
    }
    
    
    }