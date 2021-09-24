var inputFEN = prompt("Please enter FEN: ");
	var f1 = inputFEN.replaceAll('/','U');
	var f2 = f1.replaceAll(" ","%20");
	var outputURL = "chessable.com/courses/fen/" + f2;
	document.getElementById("output").innerHTML = outputURL;

	function myFunction() {
		navigator.clipboard.writeText(outputURL);
		alert("Copied the text: " + outputURL);
	}

