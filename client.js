//JARGON

// . - dot, period
// () - parantheses, parens
// [] - brackets, square brackets, square braces
// {} - braces, curlys, curly braces, curly brackets
// < - less than, bird, angle brackets
// > - greater than, gator, angle brackets
// / - forward slash, slash, whack
// \ - back slash, slash
// || - or (logically), pipes
// ! - not (logically), exclamation point, bang
// # - pound, hash, number sign
// * - star, asterisk, splat
// $ - dollar sign, bling
// && - ampersand, and (logically)
// NaN - not a number, bread


console.log('in js');

//DATA TYPES
// STRING 'taco' '18'
// NUMBER 12
// BOOLEAN true or false
// UNDEFINED undefined (computer made)
// ARRAYS ['dog', 'cat']
// OBJECT {key : 'value'}
// NULL null (programmer made)


// VARIABLES
let x = 1;
//let is a keyword
// x is the name of the variable
// = assignment operator
// 1 is the value

//HOW TO NAME VARIABLES
// use camelCase
// start with a letter (avoid numbers)
// use a noun
// be descriptive

let myFirstName = 'andy';
let numberOfPets = 2;

// EXPRESSIONS AND OPERATORS
let y = 4;
y = x + 1;
y += 1 //expression with shorthand compound assignment
y++; increment up by 1
y--; decremement down by 1

//STRING CONSIDERATIONS
//+ concat a string, adding
// '1' + '2' = 12
// '1' + 2 = 12

//'12' - 2 = 10
//'3' * 4 = 12
//'ten' * 2 = NaN

//NaN Null UNDEFINED
NaN - not a number
null - empty value
undefined - variable has not been assigned value

let x;

ERROR: 'not defined'

//CONDITIONALS STATEMENTS
if(/* expressions is truthy */){
  //perform some logic
} else if (/* expression is truthy*/){
  //perform this logic
} else {
  //do this logic
}

if () {

}

//COMPARISON OPERATORS
// == equality of value, ignores type  8 == 8 (true) 8 == '8' (true)
//=== equality of type AND value, 8 === 8 (true) 8 === '8' (false)
// !=, !== not equal (!= ignores data type) (!== does not ignore data type) ('8' !== 8) => true
// > < greater than, less than. 8 > 8 (false)
// >= <= greater(less) than or equal to. 8 >= 8 (true)

//LOOPS

while(/* while expression is truthy*/) {
  //do stuff
  //have a chance to stop the loop, no infinite loops
}

const myListOfPets = ['juniper', 'tesla', "ibis", 'mulberry'];

for(let i = 0; i < myListOfPets.length, i++){
  //perform some logic
  //i can be accessed inside the block. Its a number
  console.log(myListOfPets[i]);
}

//FUNCTIONS
function doubleIt (x) {
  return x * 2;
}
//Function expression
//let doubleIt = function(x) {
//
//}
//x = Parameters, arguments

let mySecretNumber = 4;
let doubledSecret = doubleIt(mySecretNumber);


parseInt('10') ==> 10; //turns string into a number (without decimals)
parseFloat('10.2') ==> 10.2 //turns string into number (with decimals)
number()
string()

// STRING METHODS

//'andy'.charAt(2) gives entry at index 2

// let string = 'a,b,c,d,e,f,g';
// let newArray = string.split(','); splits string after each comma ','

//STRING PROPERTIES

//'andy'.length uses length of given OBJECT

//ARRAY METHODS
//[].push add object to end of arrray
//[].shift remove object from front of array
//[].unshift add object to front of array
//[].pop remove object from end of array
