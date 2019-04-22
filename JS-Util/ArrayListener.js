var data = [5,6,6]
(function(window,$,data){
	if (!(data instanceof Array)) {
		return  new new Error("Object is not an Array")
	}
    var arr = data;
	function fn () {
		Array.call(this)
		this.init()
	}
	fn.prototype.init = function(argument){
		for(var i = 0; i < arr.length;i++) {
			this.oldPush(arr[i]);
		}
	};
	fn.prototype.oldPush = fn.prototype.push
	fn.prototype.push = function (param) {
		$.ajax({
			url: '/path/to/file',
			type: 'default GET (Other values: POST)',
			dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
			data: {param1: 'value1'},
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}
    data = new fn();
})(window,$,data)
