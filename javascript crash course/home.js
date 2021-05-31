//Printing output in console

/*console.log('hello');
alert('Hello this is uman');

// Creating variables

var b ='something';
console.log(b);
var someNumber = 55;
console.log(someNumber);

var age = prompt('what is ur age?');
document.getElementById('someText').innerHTML = age;


prompt('what is your age?');


//numbers in javascript
var num1 =5.99;
num1++;
num1--;

console.log(num1);
console.log(10/2);

num1+=10;
console.log(num1);

console.log(num1%10);

//How do functions work in Java script..


function fun(){
    alert('this is uman');

}

//call function to display in console
fun();


function alexa (yourName){
    
    var rod = 'hello' + ' '+ yourName;
    console.log(rod);
}
var name =prompt('What is ur name');
alexa(name);

//How do arguments work in function?
//How do we add 2 numbers in a function?

function getResult(num1 ,num2){
var sum = num1 + num2;
console.log(sum);


}
getResult(20 ,23);
*/
//If things have to be done multiple times..
//In this case we use while loop to access or execute multiple items

/*While loop
var num=99;
while(num<100){
    num +=1;
    console.log(num);
}
*/
//for loop
for(let num=0;num<=100;num++){
    console.log(num);
}
//Data types in Java script
let yourAge = 18; //numbers
let yourName = 'moose'; //strings
let name = {first: 'jammi', last: 'rodge'}; //object
let items = ['apple','banana','guava']; // array
let truth = false; //boolean
let nothing = null; //null
let random; //undefined

//Strings in javascript (common methods)
//array in javascript
let fruity =['banana','orange','rasberry'];
//creating a new array

 fruity =new Array('banana','guava','pineapple','ayydf');
 alert(fruity[3]);
console.log(fruity[2]); //acess value at indenx 2nd
fruity[0]='beer';
console.log(fruity);
//shift is similar to pop o removes first element frm the list
fruity.shift();
console.log(fruity)
 
//A method of passing numbers in array
let emptyArray =new Array();
for(let num=0;num<=10;num++){
    emptyArray.push(num);

}
console.log(emptyArray);






