class Hero{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction': 0.5,
            'density': 1.0
        }
      this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("pro-c34+images/images/Superhero-01.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
       // fill("white");
        image( this.image,0, 0, 100,100);
        pop();
      }
  }