/**
 * javascript中的循环主要有以下几种形式
 *
 * 1、for(;;)
 * 2、for..in...
 * 3、for...of..
 * 4、while(condition);
 * 5、do{...}while(condition);
 * 6、以及break语句，continue语句在循环语句中的运用
 * 7、label标签在循环语句中的运用
 * @date:2018-11-24
 */

// for循环
/*for (let i = 0,
        sum = 0; i < 5; i++) {
    sum += i;
    console.log(sum);
}*/

//for..in..循环
//for...in..循环迭代的是数组的下标，也就是item的值不是数组元素的值，是数组元素的下标
//for...in..可以对迭代元素进行修改
/*let arr=new Array("hello","luo","bo","xiao","cai");
for(let item in arr){
	arr[item] += item;
	console.log(item+"  "+arr[item]);
}*/

//for..of..循环
//for...of..循环迭代的是数组元素，
//
//不仅如此，for..of..同样可以用于循环map,set,nodeCollection, nodelist也是很方便的
//同时let也可以用const来替换，不过换成const之后，变量就不可以更改了
/*let arr=new Array("hello","luo","bo","xiao","cai");
for(let item of arr){
	item +="100";
	console.log(item);
}*/
//while 循环 和do...while..
//while循环是先判断后执行，do...while...是先执行后判断
/*var a=0;
console.log("while...");
while(++a <10){
	console.log(a);
	
}
a=0;
console.log("do..while");
do{
	console.log(a);
}while(++a <10)*/

//break和continue
/*console.log("break");
for (let i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        if (j == 1) {
            break;
        }
        console.log(i+" ,"+j);
    }

}
console.log("continue");
for (let i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        if (j == 1) {
           continue;
        }
        console.log(i+" ,"+j);
    }
}*/

//label 标签
console.log("break");
outerloop:
for (var i = 0; i < 10; i++)
{
    innerloop:
    for (var j = 0; j < 10; j++)
    {
        if (j > 3)
        {
            break;
        }
        if (i == 2)
        {
            break innerloop;
        }
        if (i == 4)
        {
            break outerloop;
        }
        console.log("i=" + i + " j=" + j + "");
    }
}
console.log("continue");
outerloop:
for (var i = 0; i < 10; i++)
{
    innerloop:
    for (var j = 0; j < 10; j++)
    {
        if (j > 3)
        {
            continue;
        }
        if (i == 2)
        {
            continue innerloop;
        }
        if (i == 4)
        {
            continue outerloop;
        }
        console.log("i=" + i + " j=" + j + "");
    }
}