/*
function
function dota(skills, manacost){
let mana = 500
15 midact2.js
midexam.js X
for(let 1 - 0; 1 < skills.length; 1+*){
if(skills[1] == "QOQR"){
if(mana >= 90){
mana -= 90
console.log("Cold Snap.",
"Mana used:
*, 90, "Mana left: ", mana)
}
else{
console. log("You don't have enough mana to use Cold Snap.")
else if (skills(11 == "QOUR")( if (mana >= 175)( mana -= 175
console.log("Ghost Walk.
*, "Mana used: ", 175, "Mana left: *, mana)
]
else console. log("You don't have enough mana to use Ghost Walk.")

1
}
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
else if(skills[1] == "QOER")( if (mana >= 125)( mana -= 125 console. log("Ice Wall.",
• "Mana used:
", 125, "Mana left: ", mana)
else{
console. log("You don't have enough mana to use Ice Wall.")
]
else if(skills[1] == "WNWR"){
if (mana >= 175){
mana -= 175
console.log("E.M.P.", "Mana used: *, 175,* *, *Mana left:
mana)
else{
1
console. log("You don't have enough mana to use E.M.P.")
else i(skills[1] =- "WHOR"){
if (mana >= 140){
mana -= 140
console. log("Tornado.
*Mana used: ", 140, "Mana left: ", mana)
else{
console. log("You don't have enough mana to use Tornado.

else 1f(skills(1] -« "WHER™){
1f (mana ›= 90){ mana # 90
console. log("Alacrity.",
"Mana used:
*., 50,
"Mana left: *, mana)
]
else( console. log("You don't have enough mana to used Alacrity.")

45
47
5288
53
54
55
56
57
58
59
52
64
6
7
8
else 1f(skills(1) am "EEER*){
1f(mana >= 175)( mana -= 175 console. log("Sunstrike.", "Mana used:
" + 175,
"Mana left: " mana)
else console. log("Vou don't have enough mana to use Sunstrike.
}
else 1f(skills[1] == "EEQR™){
If (mana ›= 75){ mana == 75
I
console. log("Forge Spirit.",
"Mana used: ", 75, "Mana left: ", mana)
else{
console. log("You don't have enough mana to use Forge Spirit.")
]
else 1f (skills[1] == "EEWR"){
If (mana ›= 200){ mana -= 200 console. log ("Chaos Meteor.
"Mana used:
". 200, "Mana left: ", mana)

else{
console. log("You don't have enough mana to use Chaos Meteor.")
}
else if(skills(1] == "OMER*){
if(mana ›= 250){ mana -= 250
console. log("Deafening Blast.", "Mana used:", 250, "Mana left: ",
]
else{
console. log("You don't have enough mana to use Deafening Blast.")
else{
console.log("Invalid Combination.")
//let skills = ["000Q"
"OWE"
"R",
"WWWR", "QQWR"]
//let skills - ["EEQR"
"WWER"
" "QOOR".
, "QQER", "EEQR"]
//let skills - ["ABC"
"123"
"DoReMi"
"?!@-"
/let skills = ["WWOR"
"EEWR"
"OWER"
• "OWER"]
"QOOR",
"EEER"]
let skills - ["EEER",
"EEER"
"E"
" "ERE"
"EEER"]
dota(skills)

/*function sumPositiveNumbers(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
if (arr[i] > 0) {
sum += arr[i];
}
}
return sum;
}

// Example usage:
const numbers = [1, -2, 3, -4, 5];
const result = sumPositiveNumbers(numbers);
console.log("Sum of positive numbers:", result);
*/

/*function largestNumber(arr){
let big = 0;
for(let i = 0; i> arr.length; i++){
if (arr[i]> 0){
big == arr[i];
}
}
return big;
}
const numbers = [3, 54, 45, 10];
const result = largestNumber(numbers);
console.log("biggest number is:", result);


function findMaxNumber(arr) {
if (arr.length === 0) {
return undefined; // Return undefined for an empty array.
}

let max = arr[0]; // Initialize max with the first element of the array.

for (let i = 1; i < arr.length; i++) {
if (arr[i] > max) {
max = arr[i];
}
}

return max;
}

// Example usage:
const numbers = [12, 45, 7, 23, 56];
const maxNumber = findMaxNumber(numbers);
console.log("The maximum number is:", maxNumber);
*/


/*//Math Functions
//round off
let a = 1.5
a = Math.round(a)
console.log(a)
//randomizer
let b = Math.floor(Math.random() * 11) //randoms from 1 to 10
console.log(b)
//absolute value
let c = -9
console.log(Math.abs(c))

//String Functions
//length
let d = "Hello"
console.log(d.length)
//index
let e = "Hello world, it is me"
console.log(e.indexOf("e")) //console.log(e.indexOf("e", 5)) starting in the position 5
//to upper case
let f = "hello world"
console.log(f.toUpperCase())
//to lower case
let g = "IT IS ME"
console.log(g.toLowerCase())
//split
let h = "this is my fruit salad"
h = h.split(" ") //cuts the strings into arrays depending on what character in the parameter of the split method
console.logheart

//Array Functions
//length
let i = [1, 2, 3]
console.log(i.length)
//sort
let j = [8, 1, 4, 6]
console.log(j.sort())
let k = ["apple", "orange", "banana", "grape"]
console.log(k.sort())
*/
/*
function countWordOccurrences(inputString, wordToCount) {
// Convert both the input string and the word to count to lowercase for a case-insensitive search.
const lowerInput = inputString.toLowerCase();
const lowerWord = wordToCount.toLowerCase();

const words = lowerInput.split(' '); // Split the input string into words.
let count = 0;

for (let i = 0; i < words.length; i++) {
if (words[i] === lowerWord) {
count++;
}
}

return count;
}

// Example usage:
const text = "The quick brown fox jumps over the lazy dog";
const word = "the";
const occurrences = countWordOccurrences(text, word);
console.log(The word "the" appears ${occurrences} times in the text.);
*/

/*
Define a JavaScript function named calculateArea that calculates the area of a rectangle. The function should take two parameters, length and width, and return the area. Write an example usage of this function to find the area of a rectangle with a length of 5 units and a width of 3 units.
function calculateArea(length, width) {
return length * width;
}

// Example usage:
const length = 5;
const width = 3;
const area = calculateArea(length, width);
console.log("The area of the rectangle is:", area);
*/
/*
Write a JavaScript function called getLargestNumber that takes an array of numbers as its argument and returns the largest number in the array. Provide an example of how to use this function with an array of numbers.
function getLargestNumber(numbers) {
return Math.max(...numbers);
}

// Example usage:
const numberArray = [10, 5, 20, 8, 15];
const largestNumber = getLargestNumber(numberArray);
console.log("The largest number in the array is:", largestNumber);
*/

/*
Write a JavaScript function called calculateFactorial to calculate the factorial of a non-negative integer. The function should take an integer as an argument and return its factorial. Provide an example of using this function to find the factorial of 5.
javascript

function calculateFactorialNo {
if (n === 0 || n === 1) {
return 1;