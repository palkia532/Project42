class iss{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
    }