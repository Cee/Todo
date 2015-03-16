var fib = function (n) {
	var fibonacciNum=0;
	//a,b means two add number 
	function calNum(n) {
   if(n>3) return calNum(n-1) + calNum(n-2);
   else return 1;

	}
	fibonacciNum = calNum(n,0,1);
	return function() {
		return fibonacciNum; 
	}
}

var fib1 = fib(5);
console.log(fib1());

