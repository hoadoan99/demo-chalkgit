const chalk = require('chalk');
function Dog(name){
	this.name = name;
	this.stomach = [];
}
Dog.prototype.eat = function(cat){
	this.stomatch.push(cat);
}
Dog.prototype.sayHi = function(){
	console.log('hi, i am a dog , my name is ' +  chalk.red(this.name));
}
module.exports = Dog;