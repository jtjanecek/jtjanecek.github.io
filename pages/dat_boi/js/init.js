// Initialization file
var canvas;
var canvas_height;
var canvas_width ;
var context;
var fps = 25;
var gameIntervalVariable;
var points = 0;
var points_html;

// Background and end image
var background_img = new Image();
background_img.src = "http://i.imgur.com/tSr9Gov.jpg";
var game_over_img = new Image();
game_over_img.src = "http://i.imgur.com/pZbam5V.jpg";

// Values of the Player
var playerFacing = "left";
var hero_img_left = new Image();
hero_img_left.src = "http://i.imgur.com/903TxI0.png";
var hero_img_right = new Image();
hero_img_right.src = "http://i.imgur.com/FnsHydO.png";
var playerX = 0;
var playerY = 390;
var hero_movement_scale = 10;
var playerWidth = 55;
var playerHeight = 110;

// Values for the Memes
var memeArray = new Array();

// Each meme
var pepe_img = new Image();
pepe_img.src = "http://i.imgur.com/20Udgkq.png";
var pepe_width = 35;
var pepe_height = 35;

var doge_img = new Image();
doge_img.src = "http://i.imgur.com/wt8yUHi.gif";
var doge_width = 45;
var doge_height = 45;






function Meme(x,y,width,height, type) {
	this.type = type;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.gravity = 5;
	this.deaths = 0;
};

function update_memes() {
	// For each meme in the memeArray
	for (var i = 0; i < memeArray.length; ++i) {
		if (memeArray[i].deaths % 6 === 0 && memeArray[i].deaths != 0) {
			memeArray[i].deaths = 0;
			memeArray[i].gravity += Math.floor(Math.random() * 2);		
		}
		memeArray[i].y += memeArray[i].gravity;
		if (memeArray[i].y >= canvas_height) {
			memeArray[i].y = 0;
			memeArray[i].x = Math.floor(Math.random() * canvas_width);
			memeArray[i].deaths++;
			points++;
		}
	}
};

function draw_memes() {
	for (var i = 0; i < memeArray.length; ++i) {
		if (memeArray[i].type === "pepe") 
			context.drawImage(pepe_img, memeArray[i].x,memeArray[i].y,memeArray[i].width,memeArray[i].height);
		if (memeArray[i].type === "doge")
			context.drawImage(doge_img, memeArray[i].x,memeArray[i].y,memeArray[i].width,memeArray[i].height);
	
	}

};


function check_if_touching_meme() {
	for (var i = 0; i < memeArray.length; ++i) {
		// Check bottom right corner of meme
			if ((memeArray[i].x + memeArray[i].width) > playerX && (memeArray[i].x + memeArray[i].width) < (playerX + playerWidth) &&  (memeArray[i].y + memeArray[i].height) > playerY && (memeArray[i].y + memeArray[i].height) < (playerY + playerHeight) )
				endGame();

		// Check bottom left corner of meme
			if (memeArray[i].x > playerX && memeArray[i].x < (playerX + playerWidth) && (memeArray[i].y + memeArray[i].height) > playerY && (memeArray[i].y + memeArray[i].height)  < (playerY + playerHeight)) 
				endGame();

		// Check upper left corner of meme
			if ((playerX + playerWidth) > memeArray[i].x && (playerX + playerWidth) < (memeArray[i].x + memeArray[i].height) && (playerY + playerHeight) > memeArray[i].y && (playerY + playerHeight) < (memeArray[i].y + memeArray[i].height)) 
				endGame();

		// Check upper right corner of meme
			if (playerX > memeArray[i].x && playerX < (memeArray[i].x + memeArray[i].width) && (playerY + playerHeight) > memeArray[i].y && (playerY + playerHeight) < memeArray[i].y + memeArray[i].height) 
				endGame();

	}

};


function update_player() {
	if (left_key_down) {
		if (playerX >= 5)
			playerX -= hero_movement_scale;
		playerFacing = "left";
	}

	if (right_key_down) {
		console.log(playerX);
		if (playerX <= 440)
			playerX += hero_movement_scale;
		playerFacing = "right";
	}

//	if (up_key_down)
//		playerY -= hero_movement_scale;
//	if (down_key_down)
//		playerY += hero_movement_scale;

	check_if_touching_meme();	


};


function draw_player() {
	if (playerFacing === "left") 
		context.drawImage(hero_img_left,playerX,playerY,playerWidth,playerHeight);	
	else 
		context.drawImage(hero_img_right,playerX,playerY,playerWidth,playerHeight);	
};


function game_loop() {
	// Clear canvas
	context.clearRect(0,0,canvas_width,canvas_height);

	// Draw background
	context.drawImage(background_img,0,0,canvas_width,canvas_height);

	// Update objects
	update_player();
	update_memes();

	// Draw objects 
	draw_player();
	draw_memes();

	// Update points
	points_html.innerHTML = "Points: " + points;
};


function endGame(){
	clearInterval(gameIntervalVariable);	
	context.drawImage(game_over_img,0,0,canvas_width,canvas_height);
};

function init()
	{
		canvas = document.getElementById("canvas_game");
		canvas_width = canvas.width;
		canvas_height = canvas.height;
		context = canvas.getContext("2d");

		points = 0;
		points_html = document.getElementById("game_points");
		
		init_keyboard_input();

		memeArray.push(new Meme(250,0,pepe_width, pepe_height, "pepe"));
		memeArray.push(new Meme(100,0,pepe_width, pepe_height, "pepe"));

		memeArray.push(new Meme(300,0,doge_width, doge_height, "doge"));
		memeArray.push(new Meme(400,0,doge_width, doge_height, "doge"));


		// Run game loop every 'fps' millisecond
		gameIntervalVariable = setInterval( game_loop , fps);
	};

$(document).ready(init);
