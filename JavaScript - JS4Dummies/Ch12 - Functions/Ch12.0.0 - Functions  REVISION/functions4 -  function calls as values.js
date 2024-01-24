//4. Function Calls as Values:
var double = function (number) {
	return number * 2;
	};

	console.log(`double(3): ${double(3)}`);
	console.log(`double(8): ${double(8)}`);
	console.log(`double(5) + double(6): ${double(5) + double(6)}`);
	console.log(`double(double(3)): ${double(double(3))}`);
