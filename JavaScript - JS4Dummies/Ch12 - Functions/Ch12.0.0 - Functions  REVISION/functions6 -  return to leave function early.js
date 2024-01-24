////Example 1:

	var fifthLetter = function (name) {
		//If name.length < 5, the function uses return to leave the function immediately.
		if (name.length < 5) {
		return "Length of your name is less that 5 characters long";
		}
		return "The fifth letter of your name is " + name[4] + ".";
	   }; 
	   
	   //Call the function
	   console.log(fifthLetter("Karabo"));
	   
	   //Call the function
	   console.log(fifthLetter("Tumi"));