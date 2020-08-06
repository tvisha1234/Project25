class Rect {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.image = loadImage('pictures/dustbingreen.png');

        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;

        push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
			strokeWeight(3);
			fill("red");
			image(this.image,0,0,this.width,this.height);
		pop()       

    }
}