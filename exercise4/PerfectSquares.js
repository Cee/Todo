var makeSquare = function(){
	var squareRoot=1;
	return function() {
		var square = squareRoot*squareRoot;
		squareRoot += 1;
		return square;
	}
}
var square = new makeSquare();
console.log(square());
