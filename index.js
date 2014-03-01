var events = require('events-brick');
var repeat = require('repeat-brick');

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

//TODO: we should think about a way to get the bricks.
//for example, repeat has many convenient functions
//may be we should return an object instead a function,

/**
 * Expose 'Bricks'
 */

module.exports = function(scope) {
	return function(view) {
		addEvents(scope, view);
		addRepeat(view);
	};
};


function addEvents(scope, view) {
	var ev = events(scope || view),
			scope = function(name) {
				view.add('ev-'+name, function(node, fn) {
					ev.on(node, name, fn);
				});
			};

	view.add('ev', ev);

	for(var l = names.length; l--;) {
		scope(names[l]);
	}
}

function addRepeat(view) {
	view.add('repeat', repeat(view));
}

// function Bricks() {
// 	this.ev = 
// }