(function(window){
	window.Number.prototype.integer = function(){ //提取整数
		return Math[this < 0 ? 'ceil' : 'floor'](this);
	};
})(window)