let bubble

function setup() { // built-in P5.JS function -=- this runs once
	createCanvas(600, 400);
	bubble = new Bubble(300, 200, 32);
}

function draw() { // built-in P5.JS function -=-  automatic loop that repeats forever
	background(0); // give the canvas a black background
	bubble.move();
	bubble.show();
}

class Bubble
{
	constructor(x, y, r)
	{
		this.x = x;
		this.y = y;
		this.r = r;
	}

	move()
	{
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(-5, 5);
	}

	show()
	{
		stroke(255);
		strokeWeight(4);
		noFill();
		ellipse(this.x, this.y, (this.r*2), (this.r*2));
	}
}