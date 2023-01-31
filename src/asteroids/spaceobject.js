function SpaceObject(canvas, game){
	this.canvas = canvas;
	
	this.setGame = function(game){
		this.game = game;
	}
	
	function init(){
		this.x, this.y;
		this.velocity = {
			x: 0,
			y: 0
		};
	
		this.x = randomInt(0, this.canvas.width);
		this.y = randomInt(0, this.canvas.height);
	}
	
	this.setVelocity = function(x, y){
		this.velocity.x = x;
		this.velocity.y = y;
	}
	
	this.getCoordinates = function(){
		return {x: this.x, y: this.y};
	}
	
	this.getVelocity = function(){
		return this.velocity;
	}
	
	function destroy(){
		this.destroyed = true;
	}
	
	this.canCollideWith = function(otherItem){
		return false;
	}
	
	this.getBoundingBox = function getBoundingBox(){
		var left = this.x - 10;
		var right = this.x + 10;
		var top = this.y - 10;
		var bottom = this.y + 10;
		return [{x:left, y: top}, {x: right, y: top}, {x: right, y: bottom}, {x: left, y: bottom}];
	};
	
	this._update = function(){
		this.update();
		this.game.getPowerUp(this, "update");
	}
	
	function update(){
		this.x += this.velocity.x;
		this.y += this.velocity.y;
		
		if(this.x < 0){
			this.x = this.canvas.width + this.x;
		}
		if(this.y < 0){
			this.y = this.canvas.height + this.y;
		}
		
		this.x = this.x % this.canvas.width;
		this.y = this.y % this.canvas.height;
	}
	
	function paint(){
		var ctx = this.canvas.getContext("2d");
		//arc(x, y, radius, startAngle, endAngle, anticlockwise)
		ctx.beginPath();
		ctx.strokeStyle = 'rgb(255, 255, 255)';
		ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
		ctx.stroke();
	}		

	this.destroy = destroy;
	this.update = update;
	this.paint = paint;
	this.init = init;

	return this;
};