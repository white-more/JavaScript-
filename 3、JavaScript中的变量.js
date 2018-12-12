/**
 * JavaScript中的变量声明有三种方式
 * var ：声明普通变量，在函数中声明的会有变量声明提升
 * let :块作用域的变量声明
 * const :常量声明
 */

function myfunc(){
	console.log(a1); //undefined
	var a1=10;
	console.log(a1);//10
	// console.log(a2); //代码运行报错
	let a2=20;
	console.log(a2);//20
	const a3=100;
	console.log(a3); //100
	//a3=50; //报错，常量不可以再赋值
	console.log("你好啊");

}
myfunc();