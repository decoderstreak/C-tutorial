//Creating objects in java script
//dictionaries in python

let stu = {
    first:'Uman',
second:'Tabasssum',
age:40,
height:200,
//Creating objects in java script
stuInfo: function() {
    return this.first +'\n'+ this.second+'\n'+this.age;
}
};
//console.log(stu.first)
//console.log(stu.second)
//console.log(stu.age)
console.log(stu.stuInfo());

//changing values of objects

stu.first ='It is uman';
console.log(stu.first)
stu.age++;
console.log(stu.age)

//conditional and control flows(if else)

//First u need to declare a variable
//Second u need to write condition in if clause.. and update the status
//You can't use let for calling prompt in java script.. Ypu should defnitely use var keyword for declaring..
var age = prompt('what is ur age right now?');
if((age>=18 )&& (age<36)){
    status = "target demo";
    console.log(status)
}
else{
    status = "not applicable";
    console.log(status)
}
var day =prompt('enter day');
switch(day){
    case 0:
        text = "weekend";
        case 4:
            text ="weekend";
            case 6:
                text="weekend";
                default:
                    text ="weekday";

}
console.log(text);