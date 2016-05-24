
var left_key_down = false;
var right_key_down = false;
var up_key_down = false;
var down_key_down = false;

function key_down(event) {
		if(event.keyCode == 37) {
			// Left arrow key
			left_key_down = true;
		}
		else if(event.keyCode == 39) {
			// Right aarrow key
			right_key_down = true;
		}
		else if(event.keyCode == 40) {
			// Down arrow key
			down_key_down = true;
		}
		else if(event.keyCode == 38) {
			// Up aarrow key
			up_key_down = true;
		}
};

function key_up(event) {
		if(event.keyCode == 37) {
			// Left arrow key
			left_key_down = false;
		}
		else if(event.keyCode == 39) {
			// Right aarrow key
			right_key_down = false;
		}
		else if(event.keyCode == 40) {
			// Down arrow key
			down_key_down = false;
		}
		else if(event.keyCode == 38) {
			// Up aarrow key
			up_key_down = false;
		}
};

function init_keyboard_input() {
		window.addEventListener('keydown', key_down);
		window.addEventListener('keyup', key_up);
};


