// alert("Hello World!")
//Log to console
/* multiline  comments*/

//Console functionalities
console.log("Hello world1");//Strings
console.log(123);//numbers, chrome console numbers are blue
console.log(true);//boolean,chrome console boolean datatype is in blue
var greeting="Hello";//using variable in console
console.log(greeting);
console.log([1,2,3,4,5]);//arrays
console.log({a:1, b:2});//objects
console.table({a:1, b:2});//objects in table format

console.error("This is some error");//error logging
console.clear();//clear the console
console.warn("This is a warning");//warning
console.time('Hello');// time taken to execute a particular identifier, here, Hello
  console.log("Hello world1");
  console.log("Hello world1");
  console.log("Hello world1");
  console.log("Hello world1");
  console.log("Hello world1");
  console.log("Hello world1");
  console.log("Hello world1");
  console.log("Hello world1");
console.timeEnd('Hello');

//var,let,const
var name='John Doe';
console.log(name);//John Doe
name='Steve Smith';
console.log(name);//Steve Smith

//Init var
var greet;
console.log(greet);//Undefined
greet='Hello';
console.log(greet);//Hello

//variables can have letters, numbers, _, $
//Cannot start with a number


//Multi words vars
var firstName='Guru';//Camel Case
var first_name='Vignesh';//Underscore
var FirstName='Guru';//Pascal 
var firstname;


//Let
let name1='John Doe';
console.log(name1);//John Doe
name1='Steve Smith';
console.log(name1);//Steve Smith
//let is very similar to var, functionalities are similar in global scope but let has its advantages in block level scope

//const
const name2='John';
console.log(name2);
//Cannot resign 
// name2='Sara';
//Have to assign a value
// 
const person={
  name: 'Guru',
  age:23
}
person.name='Vignesh';
person.age=22;

console.log(person);

const numbers=[1,2,3,4,5];
console.log(numbers);
numbers.push(6);
console.log(numbers);