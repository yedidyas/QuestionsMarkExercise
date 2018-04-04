var stdin = process.openStdin();
console.log("Hello Itay... enter a string, press enter to check if it's valid.");
stdin.addListener("data", function(str) {
    console.log(checkString(str.toString().trim()));
  });


function checkString(str) {
    let firstDig;
    let secDig;
    let isStringValid = true;
    let questionsMarkCounter = 0;

    // Pass over the string
    for (var i = 0; i < str.length && isStringValid; i++) {
        firstDig = Number(str[i]);

        // If it's a digit
        if (firstDig !== 'NaN') {

            // Run over the rest of the string
            for (var j = i + 1; j < str.length; j++) {
                secDig = Number(str[j]);

                // If its a question mark
                if (str[j] == '?') {
                    // Increase the counter by 1
                    questionsMarkCounter++;
                }
                // If it's a digit, and the sum of the two digits is 10, and there aren't exactly 3 questions mark between them
                else if ((secDig !== 'NaN') && (firstDig + secDig == 10) && (questionsMarkCounter != 3)) {
                    // Disqualify the string
                    isStringValid = false;

                    // Exit the loop
                    break;
                }
            }
            
            // Initilize the questions mark count to 0
            questionsMarkCounter = 0;
        }
    }

    return isStringValid;
}