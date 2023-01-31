window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
				  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
if(!window.requestAnimationFrame){
	window.requestAnimationFrame = function(callback){
		setTimeout(callback, 16);
	}
}
if(!window.localStorage){
	(function(){
		var store = {};
		window.localStorage = {
			getItem : function(key){
				return store[key];
			},
			setItem : function(key, value){
				store[key] = value;
			}
		};
	})();
}

////////////////////////////////////////////////
//  Initialize the game
///////////////////////////////////////////////


var space = document.getElementById("space");
space.height = window.innerHeight;
space.width  = window.innerWidth;
var game = new Game(space);
