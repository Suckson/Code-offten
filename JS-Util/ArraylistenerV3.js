var arrayPush = {};
(function(method){
    var original = Array.prototype[method];
    arrayPush[method] = function() {
        // this 指向可通过下面的测试看出
        console.log(this)
        return original.apply(this, arguments)
    };
})('push');
