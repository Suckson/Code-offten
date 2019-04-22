(function(window){
	window.Array.prototype.unique = function(){ // 数组去重
		this.sort()
		var result =  [this[0]]
		for(var i = 1; i<this.length; i++) {
			if(this[i] !== result[result.length - 1]){
				result.push(this[i])
			}
		}
		return result
	};

	window.Array.prototype.indexOf = function(val){ // 查找指定元素的下标
		for (var i =  0; i < this.length; i++) {
			if (this[i] == val) return i
		}
		return -1
	};

	window.Array.prototype.remove = function (val) { // 删除指定的元素
		var index = this.indexOf(val)
		while (index > -1) {
			this.splice(index,1)
			index = this.indexOf(val);
		}
		return this;
	}
})(window)