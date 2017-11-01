let bubbles = [];

function setup() { // built-in P5.JS function -=- this runs once
	createCanvas(600, 400);
	for(let i = 0; i < 30; i++)
	{
		let x = random(width);
		let y = random(10, 150);
		let radius = random(10, 15);
		bubbles[i] = new Bubble(x, y, radius);
	}
}

function draw() { // built-in P5.JS function -=-  automatic loop that repeats forever
	background(0); // give the canvas a black background
	for(let i = 0; i < bubbles.length; i++)
	{
		if(bubbles[i].contains(mouseX, mouseY))
		{
			bubbles[i].changeColor(255);
		}
		else
		{
			bubbles[i].changeColor(0);
		}
		bubbles[i].move();
		bubbles[i].show();
	}
}

function mousePressed()
{
	for(let i = 0; i < bubbles.length; i++)
	{
		if(bubbles[i].contains(mouseX, mouseY))
		{
			bubbles.splice(i, 1);
		}
	}
}

class Bubble
{
	constructor(x, y, r)
	{
		this.x = x;
		this.y = y;
		this.r = r;
		this.brightness = 0;
	}

	changeColor(brightness)
	{
		this.brightness = brightness;
	}

	contains(mx, my)
	{
		let d = dist(mx, my, this.x, this.y);
		return d < this.r;
	}

	move()
	{
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(1, 5);

	}

	show()
	{
		stroke(255);
		strokeWeight(2);
		fill(this.brightness, 125);
		ellipse(this.x, this.y, (this.r*2), (this.r*2));
	}
}

