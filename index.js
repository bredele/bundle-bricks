var events = require('events-brick');
var names = [
	'click',
	'dblclick',
	'mousedown',
	'mouseup',
	'keydown',
	'keypress',
	'keyup',
  'change',
  'blur',
  'focus',
  'input',
  'submit'
  ];

/**
 * Expose 'Bricks'
 */

module.exports = function(scope) {
	return function(view) {
		addEvents(scope, view);
	};
};


function addEvents(scope, view) {
	var ev = events(scope || view);
	view.add('ev', ev);
	for(var l = names.length; l--;) {
		var name = names[l];
		view.add('ev-' + name, function(node, fn) {
			//should we do use capture?
			ev.on(node, name, fn);
		});
	}
}

// function Bricks() {
// 	this.ev = 
// }