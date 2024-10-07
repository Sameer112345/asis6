// chp 21 changing case
var allLower = userInput.toLowerCase();
x = x.toLowerCase();
y = y.toUpperCase();
var secondVariable = someVariable.toLowerCase();
var newVariable = arr[0].toLowerCase();
alert(someVariable.toUpperCase());
var cityName = "kaRacHi";
var capitalizedCity = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
// chap 22 - 25 sting
let sameeWords = "captain";
let sliced= sameeWords.slice(1, 3);  // Slicing "ap" (characters from index 1 to 2)

console.log(sliced);  // Output: "ap"
// 2nd q c
let sameWords = "captain";
let lengthOfSameWords = sameWords.length;  // Assign the number of characters to a variable
console.log(lengthOfSameWords);  // Output: 7

// 3rd q
var animal = "elephant";
var seg = animal.slice(2,6)
console.log(seg); 
// outout epha
// question 4
let myStriing = "Hello, world!";  // The string variable
let numberOfCharacteers = myStriing.length;  // Measure the number of characters

let slicedString = myString.slice(1, numberOfCharacteers - 3);  // Slice all but the first character and last 3 characters
console.log(slicedString);  // Output: "lo, worl"



//  question5
let myString = "Hello, world!";  // This is the string variable
let numberOfCharacters = myString.length;  // Assigning the number of characters to a second variable
console.log(numberOfCharacters);  // Output: 13
 
// qustion 6
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx);
//  question 7
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx);

//  question 8
var text = "go big or go home";  // Example string
var indx = text.lastIndexOf("go");  // Find the index of the last occurrence of "go"
console.log(indx);  // Output the index
//  question 9

let mySstring = "Hello, world!";
let indexNum = 5;  // Example index

if (indexNum >= 0 && indexNum < myString.length) {
    console.log("Character exists:", mySstring[indexNum]);  // Access the character
} else {
    console.log("Index does not exist in the string.");
    
}
// question 10
let mySsstring = "abcde";
let characterAtIndex2 = mySsstring.charAt(2);  // Get the character at index 2
console.log(characterAtIndex2);  // Output: "c"

// question 11
var text = "The quick brown fox jumps over the lazy dog";  // Example string
var cha = text.charAt(9);  // Get the 10th character (index 9 since indexing starts at 0)
console.log(cha);  // Output the character
// question 12
var str = "Hello, world!";  // Example string
var x = str.charAt(str.length - 1);  // Get the last character
console.log(x);  // Output the last character

// question 13

var input = "Hello, world!";  // Example string
var cha = input.charAt(4);  // Get the 5th character (index 4 since indexing starts at 0)
console.log(cha);  // Output the character
//  chapter 1
function calculate() {
    let num = parseFloat(prompt("Enter a positive number:"));

    if (num >= 0) {
        let roundOff = Math.round(num);
        let floorValue = Math.floor(num);
        let ceilValue = Math.ceil(num);

        alert(
            `Number: ${num}\n` +
            `Round off value: ${roundOff}\n` +
            `Floor value: ${floorValue}\n` +
            `Ceil value: ${ceilValue}`
        );
    } else {
        alert("Please enter a positive number.");
    }
}
calculate(); // Call the function on page load
// question 2
// Function to calculate and display the values
function calculate() {
    let num = parseFloat(prompt("Enter a negative floating-point number:")); // Get input from the user via prompt

    // Check if the input is a negative number
    if (num < 0) {
        let roundOff = Math.round(num);    // Round off the number
        let floorValue = Math.floor(num);  // Floor value of the number
        let ceilValue = Math.ceil(num);    // Ceil value of the number

        // Display the results in an alert box
        alert(
            `Number: ${num}\n` +
            `Round off value: ${roundOff}\n` +
            `Floor value: ${floorValue}\n` +
            `Ceil value: ${ceilValue}`
        );
    } else {
        // If input is not a negative floating-point number, show an error message
        alert("Please enter a negative floating-point number.");
    }
}

// Call the function when the script runs
calculate();
// question3 
// Function to calculate and display the absolute value
function displayAbsoluteValue() {
    let num = parseFloat(prompt("Enter a number:"));  // Get input from the user via prompt

    let absoluteValue = Math.abs(num);  // Calculate the absolute value using Math.abs()

    // Display the absolute value in an alert box
    alert(`The absolute value of ${num} is ${absoluteValue}`);
}

// Call the function to execute the program
displayAbsoluteValue();
// question 4
// Function to simulate a dice roll
function rollDice() {
    // Generate a random number between 1 and 6
    let diceValue = Math.floor(Math.random() * 6) + 1;

    // Display the result in the browser using alert
    alert(`You rolled a: ${diceValue}`);
}

// Call the function to simulate dice roll
rollDice();
// question 5
// Function to simulate a coin toss
function tossCoin() {
    // Generate a random number between 0 and 1
    let coinValue = Math.random();

    // Determine the result: Heads if less than 0.5, Tails otherwise
    let result = (coinValue < 0.5) ? 'Heads' : 'Tails';

    // Display the result using alert
    alert(`The coin landed on: ${result}`);
}

// Call the function to simulate coin toss
tossCoin();
// question 6
// Function to generate and display a random number between 1 and 100
function showRandomNumber() {
    // Generate a random number between 1 and 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    // Display the result using alert
    alert(`Random number between 1 and 100: ${randomNumber}`);
}

// Call the function to show the random number
showRandomNumber();
// question
// Generate a random secret number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user to input a number between 1 and 10
let userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

// Check if the user's guess is valid (between 1 and 10)
if (userGuess >= 1 && userGuess <= 10) {
    // Compare the user's guess with the secret number
    if (userGuess === secretNumber) {
        alert("Congratulations! You guessed the secret number!");
    } else {
        alert(`Sorry, the secret number was ${secretNumber}. Better luck next time!`);
    }
} else {
    alert("Please enter a number between 1 and 10.");
}
// completed
// next chapter
// Example variable
let origNum = 4.7;
let someVariable = 2.3;

// 1. Round a number to the nearest integer
let roundedValue = Math.round(origNum); // roundedValue will be 5

// 2. Round up
roundNum = Math.ceil(origNum); // roundNum will be 5

// 3. Round down
roundNum = Math.floor(origNum); // roundNum will be 4

// 4. Round a number represented by a variable
let anotherValue = Math.round(someVariable); // anotherValue will be 2

// 5. Round .5 to 0
let roundedHalf = Math.round(0.5); // roundedHalf will be 0


// next question
// 1. Convert a random number to the range 1 to 50
let randomInRange = Math.floor(Math.random() * 50) + 1;
console.log(`Random number in range 1 to 50: ${randomInRange}`);

// 2. Generate a random number and assign it to an undeclared variable
randomNumber = Math.random(); // Generates a number between 0 and 1
console.log(`Random number (0 to 1): ${randomNumber}`);

// 3. Create a dice roll
let diceValue = Math.floor(Math.random() * 6) + 1;
console.log(`You rolled a: ${diceValue}`);

// 4. Create a coin toss
let coinToss = Math.random() < 0.5 ? 'Heads' : 'Tails';
console.log(`The coin landed on: ${coinToss}`);

// 3rd question
let str = "123";
let integerVaaalue = Number(str);
console.log(integerVaalue); // Outputs: 123
// answer2

function convertStringToInt(str) {
    return parseInt(str, 10);
}

console.log(convertStringToInt("123")); // Outputs: 123


// answer 3
let decimalStr = "3.14";
let floatValue = parseFloat(decimalStr);
console.log(floatValue); // Outputs: 3.14

// answer 4
function canConvertToNumber(str) {
    return !isNaN(parseFloat(str));
}

console.log(canConvertToNumber("123"));  // true
console.log(canConvertToNumber("abc"));  // false
// answer5
let num = 42;
let strValue = num.toString();
console.log(strValue); // Outputs: "42"
// answer6
function convertNumberToString(num) {
    return num.toString();
}

console.log(convertNumberToString(42)); // Outputs: "42"
// answer 7

let decimalString = "3.14";
let integerValue = parseInt(decimalString, 10);
console.log(integerValue); // Outputs: 3


//  answer1
newNum = num.toFixed(4).toString();
// answer 2
num = Number(num.toFixed(2));

// answer3
num = Number(num.toFixed(2));

// answer4
let longDecimalNum = 3.14159265358979;
alert(longDecimalNum.toFixed(2).toString());

// chapter 21
// answer1 
// Prompt the user for their first name
let firstName = prompt("Please enter your first name:");

// Prompt the user for their last name
let lastName = prompt("Please enter your last name:");

// Merge first and last names into fullName
let fullName = firstName + " " + lastName;

// Greet the user using their full name
alert("Hello, " + fullName + "! Nice to meet you!");

// answer2 

// Prompt the user for their favorite mobile phone model
let mobileModel = prompt("Please enter your favorite mobile phone model:");

// Find the length of the user input
let modelLength = mobileModel.length;

// Display the length in an alert box
alert("The length of your favorite mobile phone model is: " + modelLength);
// anser3
// Define the word
let word = "Pakistani";

// Find the index of the letter "n"
let indexOfN = word.indexOf("n");

// Display the result in an alert box
alert("The index of the letter 'n' in the word 'Pakistani' is: " + indexOfN);

// anser4
// Define the phrase
let phrase = "Hello World";

// Find the last index of the letter "l"
let lastIndexOfL = phrase.lastIndexOf("l");

// Display the result in an alert box
alert("The last index of the letter 'l' in the phrase 'Hello World' is: " + lastIndexOfL);



// Define the word
let worad = "Pakistani";

// Find the character at the 3rd index
let characterAtIndex3 = worad.charAt(3);
// 5
// Display the result in an alert box
alert("The character at the 3rd index in the word 'Pakistani' is: " + characterAtIndex3);



