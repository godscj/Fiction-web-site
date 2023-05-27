var result;
var equal = false;
//判断是否运算
function isEqual(){
	if (equal){
		AC();
		equal = false;
	}
}
//输入数字运算符
function add(a){
	if (('0' <= a && a <= '9')||a=='.'){
		isEqual();
		result.innerHTML += a;
	}
	else
	{
		result.innerHTML += a;
		equal = false;
	}
} 

function left(){
	isEqual();
	var r = result.innerHTML;
	var c = r.charAt(r.length - 1);
	if ("0" <= c && c <= "9"){
		add("*");
	}
	result.innerHTML += "(";
}
 
function right(){
	isEqual();
	result.innerHTML += ")"
}
function ppow(){
	isEqual();
	result.innerHTML += "^"
}

function AC(){
	result.innerHTML ="";
}
 //返回上一位
function backspace(){
	var r = result.innerHTML;
	result.innerHTML = r.substr(0,r.length - 1);
	isEqual();
}
//输出结果
function out(){
	equal = true;
	var a = result.innerHTML;
	try{
        a = pow(a);
		result.innerHTML=eval(a);
	}catch(e){
		result.innerHTML="input wrong";
	}
}
//对计算式进行加工使其化为最简
function pow(q){
	var str = q.split("^");
	if (str.length == 1){
		return q;
	}
	var leftstr = a(str[0],0);
	var rightstr = a(str[1],1);
	var and =  "Math.pow(" + leftstr + "," + rightstr + ")";
	var right = str[1].substring(rightstr.length,str[1].length);
	var left = str[0].substring(0,str[0].length - leftstr.length);
	return pow(left + and + right);
}
//对括号位进行结算
function a(r,d){
	var left = 0;
	var right = 0;
	for (var i = 0; i <  r.length; i++){
		var c = r.charAt(i);
		if (c == "("){
			left++;
		}  else if (c == ")"){
			right++;
		}else if (left == right && c >="0" && c <= "9"){
			break;
		}
	}
	if(d==0)
		return r.substring(0,i+1);
	else
		return r.substring(i);
}
window.onload = function(){
	result  = document.getElementById("result");
	result.innerHTML = "";
}
