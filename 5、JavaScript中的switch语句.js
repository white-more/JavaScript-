/**
 * JavaScript中的switch语句
 *
 * 主要是要注意break语句的作用，还有default语句，最好不要忘记
 */
/*switch (n) {
    case 1:
        // 执行代码块 1
        break;
    case 2:
        // 执行代码块 2
        break;
    default:
        // 与 case 1 和 case 2 不同时执行的代码
}*/
let aval=parseInt(Math.random()*5)+1;
switch(aval){
	case 1:
	console.info("哇，你抽中了1哎");
	break;
	case 2:
	console.info("哇，你抽中了2哎");
	break;
	case 3:
	console.info("哇，你抽中了3哎");
	break;
	case 4:
	console.info("哇，你抽中了4哎");
	break;
	case 5:
	console.info("哇，你抽中了5哎");
	break;
	default:
	console.info("呜~~~~，你啥也没抽中啦，嗯。。。。不过这是不可能的啦");
	break;
}