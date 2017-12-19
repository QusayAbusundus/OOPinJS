let bubbles = [];
//let aliens = [];
let gameState = 0; //0 = titlescreen, 1 = ingame, 2 = pause, 3 = win, 4 = lose
let score = 0;
let counter = 99;
const winningScore = 50;

function setup() { // built-in P5.JS function -=- this runs once
	createCanvas(600, 400);
	setInterval(clockTimer, 1000);
	/* for(let i = 0; i < 50; i++)
	{
		let x = random(width)
		let y = random(0, height * 0.2)
		let size = random(15, 25)
		let xVelocity = 0;
		let yVelocity = 2;
		aliens[i] = new Alien(x, y, size, xVelocity, yVelocity);
	} */
	for(let i = 0; i < 5; i++)
	{
		let x = random(width * 0.25, width * 0.75);
		let y = random(i * -600, i * -400);
		let radius = random(10, 15);
		let xVelocity = random(-2, 2);
		let yVelocity = 3;
		bubbles[i] = new Bubble(x, y, radius, xVelocity, yVelocity);
	}
}

function draw() { // built-in P5.JS function -=-  automatic loop that repeats forever
	background(0); // give the canvas a black background
	drawScoreTimerText();
	if(gameState == 0)
	{
		titleScreen();
	}
	else if(gameState == 1)
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
		/* for(let i = 0; i < aliens.length; i++)
		{
			aliens[i].move();
			aliens[i].show();
		} */
	}
	else if(gameState == 2)
	{
		paused();
	}
	else if(gameState == 3)
	{
		win();
	}
	else if(gameState == 4)
	{
		lose();
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
	else if(score >= winningScore && counter == 0)
	{
		gameState = 3;
	}
	else if(score < winningScore && counter == 0)
	{
		gameState = 4;
	}
}

function titleScreen()
{
	fill(255, 0, 0);
	textSize(64);
	textAlign(CENTER);
	text("ALIEN INVADERS!", width/2, height/2);
	textSize(32);
	text("Press the left mouse button to start", width/2, height/2 + 30);
}

function paused()
{
	fill(255);
	textSize(64);
	textAlign(CENTER);
	text("PAUSE", width/2, height/2);
	textSize(32);
	text("Press the left mouse button to continue", width/2, height/2 + 30);
}

function win()
{
	fill(255);
	textSize(64);
	textAlign(CENTER);
	text("YOU WIN!", width/2, height/2);
	textSize(32);
	text("Congratulations!", width/2, height/2 + 30);
}

function lose()
{
	fill(255);
	textSize(64);
	textAlign(CENTER);
	text("YOU LOSE", width/2, height/2);
	textSize(32);
	text("Too bad", width/2, height/2 + 30);
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
	constructor(x, y, r, xVelocity, yVelocity)
	{
		this.x = x;
		this.y = y;
		this.r = r;
		this.xVelocity = xVelocity;
		this.yVelocity = yVelocity;
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
		this.x = this.x + this.xVelocity;
		this.y = this.y + this.yVelocity;
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

/* class Alien
{
	constructor(x, y, size, velocityX, velocityY)
	{
		this.x = x;
		this.y = y;
		this.size = size;
		this.velocityX = velocityX;
		this.velocityY = velocityY;
	}

	changeColor(brightness)
	{
		this.brightness = brightness;
	}

	contains(mx, my)
	{
		let d;
		d = dist(mx, my, this.x, this.y);
		return d < this.size;

	}

	move()
	{
		this.x = this.x + this.velocityX;
		this.y = this.y + this.velocityY;
	}

	show()
	{
		stroke(255);
		strokeWeight(4);
		noFill();
		triangle(this.x - this.size, this.y - this.size, this.x, this.y + this.size, this.x + this.size, this.y - this.size);
	}
} */