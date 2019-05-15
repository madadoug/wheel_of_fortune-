var word = "WHEEL";
var isGuessingLetter = true;
var letter = "W";

if (letter = true) { // [KMH] See comment (1) below
    console.log("W _ _ _ _");
} else { // [KMH] See comment (2) below
    console.log ("Sorry, no " + letter + "!");
}

if (isGuessingLetter != false) {
		console.log("Congratulations! You won Wheel Of Fortune!");
} else {
 console.log("Nope, keep trying!");

}

// [KMH] COMMENTS
// (1) Two things! Make sure to use `===` not `=` for comparison, and make sure you are making the
//     correct comparison. Right now you're comparing `letter` against the value "true"... If we
//     want to see if `letter` is equal to "W" so that we can print out the following line, what
//     comparison should we be making?
// (2) What other valid letters could the user guess? Add more `if else` conditions here to handle
//     every possible correct letter guess!
	