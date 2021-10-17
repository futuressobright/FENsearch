var inputFEN = prompt("Please enter FEN: ");
	var f1 = inputFEN.replaceAll('/','U');
	var f2 = f1.replaceAll(" ","%20");
	var outputURL = "https://chessable.com/courses/fen/" + f2;

	// To display new URL onscreen
	// document.getElementById("output").innerHTML = outputURL; 

	// Open a new window!
	window.location.assign(outputURL);

	// No longer going the lengthy clipboard route
	// function myFunction() {
	// 	navigator.clipboard.writeText(outputURL);
	// 	alert("Copied the text: " + outputURL);
	// } 

