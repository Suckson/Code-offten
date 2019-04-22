function persion () {
	this.name = 'chai'
	this.age  ='heng'
	this.type = "js"
	this.say = function(aaa){
		alert(this.type + aaa)
	}
}
function aa() {
	this.asas = "aaa"
	persion.call(this)
}
 
var cc  =  new aa()
cc.say("asasad")
console.log(cc)