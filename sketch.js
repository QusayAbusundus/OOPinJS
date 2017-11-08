let bubbles = [];
let gameState = 0; //0 = titlescreen, 1 = ingame, 2 = pause, 3 = win, 4 = lose
let score = 0;
let counter = 99;
const winningScore = 50;

function setup() { // built-in P5.JS function -=- this runs once
	createCanvas(600, 400);
	setInterval(clockTimer, 1000);
	for(let i = 0; i < 5; i++)
	{
		let x = random(width * 0.25, width * 0.75);
		let y = random(i * -600, i * -400);
		let radius = random(10, 15);
		bubbles[i] = new Bubble(x, y, radius);
	}
}

function draw() { // built-in P5.JS function -=-  automatic loop that repeats forever
	background(0); // give the canvas a black background
	drawScoreTimerText();
	if(gameState == 1)
	{
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
			bubbles[i].screenWrapping(width + 100, height);
		}
	}
}

function drawScoreTimerText()
{
	fill(255);
	textSize(32);
	text("Score: " + score, 5, 30)
	text("Time: " + counter, 5, 60)
}

function clockTimer()
{
	if(gameState == 1 && counter > 0)
	{
		counter--;
	}
	else if(score => winningScore && counter == 0)
	{
		gameState == 3;
	}
	else if(score < winningScore && counter == 0)
	{
		gameState == 4;
	}
}

function mousePressed()
{
	if(gameState == 0)
	{
		gameState = 1;
	}
	if(gameState == 1)
	{
		for(let i = 0; i < bubbles.length; i++)
		{
			if(bubbles[i].contains(mouseX, mouseY))
			{
				bubbles.splice(i, 1);
			}
		}
	}
	if(gameState == 2)
	{
		gameState = 1;
	}
}

function keyPressed()
{
	if(gameState == 1)
	{
		if(keyCode == 80)
		{
			gameState = 2;
		}
	}
}

function titleScreen()
{

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Bubble
{
	constructor(x, y, r)
	{
		this.x = x;
		this.y = y;
		this.r = r;
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
		this.y = this.y + random(1, 7);
	}

	screenWrapping(xLimit, yLimit)
	{
		if(this.x > xLimit)
		{
			this.x = 0;
		}
		if(this.y > yLimit)
		{
			this.y = 0;
		}
	}

	show()
	{
		stroke(255);
		strokeWeight(2);
		fill(this.brightness, 125);
		ellipse(this.x, this.y, (this.r*2), (this.r*2));
	}
}

class Alien
{
	constructor(x1, y1, x2, y2, x3, y3)
	{
		this.rightX = x1;
		this.rightY = y1;
		this.topX = x2;
		this.topY = y2;
		this.leftX = x3;
		this.leftY = y3;
	}

	changeColor(brightness)
	{
		this.brightness = brightness;
	}

	contains()
	{

	}
}