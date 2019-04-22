(function(window){
	window.String.prototype.trim = function(){ //提取整数
		return this.replace(/^\s+|\s+$/g,'')
	};
})(window)