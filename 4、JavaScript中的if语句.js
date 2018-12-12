/**
 *	if条件语句
 * 
 * if (condition1){
	    当条件 1 为 true 时执行的代码
	}else if (condition2){
	    当条件 2 为 true 时执行的代码
	}else{
	  当条件 1 和 条件 2 都不为 true 时执行的代码
	}
 */
var time=new Date().getHours();
/**
 * 顺便说一下时间函数：
 * 可以通过new Date()获取当前时间时间的获取方式如下
 * var date=new Date();
 * date.getYear(); //获取当前年份(2位)
 * date.getFullYear(); //获取完整的年份(4位,1970-????)
 * date.getMonth(); //获取当前月份(0-11,0代表1月)
 * date.getDate(); //获取当前日(1-31)
 * date.getDay(); //获取当前星期X(0-6,0代表星期天)
 * date.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
 * date.getHours(); //获取当前小时数(0-23)
 * date.getMinutes(); //获取当前分钟数(0-59)
 * date.getSeconds(); //获取当前秒数(0-59)
 * date.getMilliseconds(); //获取当前毫秒数(0-999)
 * date.toLocaleDateString(); //获取当前日期
 * date.toLocaleTimeString(); //获取当前时间
 * date.toLocaleString( ); //获取日期与时间    
 */
if (time < 10) {
    console.log("<b>早上好</b>"+time);
} else if (time >= 10 && time < 16) {
    console.log("<b>今天好</b>"+time);
} else {
    console.log("<b>晚上好!</b>"+time);
}
/**
 * 网上还有一种优化if的写法
 * const condition = condition1
 * let obj = {
 * 'condition1' : () => { ... },
 * 'condition2' : () => { ... },
 * 'condition3' : () => { ... },
 * };
 * obj[condition]();
 * 一起来试试看吧
 */
const ntime=parseInt(Math.random()*10)+1;
let obj={
	'1'  :() => {console.log("哇，原来你是1呀");},
	'2'  :() => {console.log("哇，原来你是2呀");},
	'3'  :() => {console.log("哇，原来你是3呀");},
	'4'  :() => {console.log("哇，原来你是4呀");},
	'5'  :() => {console.log("哇，原来你是5呀");},
	'6'  :() => {console.log("哇，原来你是6呀");},
	'7'  :() => {console.log("哇，原来你是7呀");},
	'8'  :() => {console.log("哇，原来你是8呀");},
	'9'  :() => {console.log("哇，原来你是9呀");},
	'10' :() => {console.log("哇，原来你是10呀");},
}
obj[ntime]();