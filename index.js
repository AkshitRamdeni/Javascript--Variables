// console.log('This is your First JavaScript'); // Console.log() is Used to Print the Command.

const { lookup } = require("dns");

// // variable are Used to Store  a value. and it is similar to the container used to store the data value like rice , water ,milks and etc

// let a = 15; // a contains 15
// console.log(a);
// a = 'Akki';
// console.log(a) // print String

// // now lets the Differences btw let const var 

// // const = constants that we cannot be change the value throughout the Javascript.

// // var 

// var e = 11;
// var b = 'Akshith';
// var c = null;
// var d = undefined;
// console.log(e, b, c, d);

// // let 

// let m = 12;
// let n = 'akki';
// let o = null;
// let p = 0;

// console.log(m, n, o, p)


// // const
// // we cannot change the const value and cannot use 
// const name = 'Cant be changed';
// let name_1 = 'Ramdeni';

// console.log(name, name_1)


// // primitives and Objects in javascripts

// // primitives datatypes are 7types  in javascript
// // and these Primitives datatypes are Fundamental datatypes and these Datatypes are build-in inside the Javasccript 

// // nn = null and number
// // ss = sybmol and String
// // bb= bigint and boolean
// // u - Undefined

// let a1 = null;
// let b2 = 1234;
// let c3 = BigInt("12354");
// let d4 = "Akki";
// let e5 = Symbol("I am a Symbol")
// let f6 = undefined;
// console.log(a1, b2, c3, d4, e5, f6)


// // and we can Check it typeof what type of datatype it is

// console.log(typeof d4)


// // mon  primitives datatypes objects in javascripts

// const item = {
// 	'Akshith': true,
// 	'Julie': true,
// 	'princess': null,
// 	'dark': undefined,
// }

// console.log(item['Akshith'])


// // Assigment 1
// // problem 1
// let a12 = 'Akshith';
// let b12 = 40111035;
// console.log(a12 + ' ' + b12)

// //
// //problem 2 


// /// operator in javascript


// console.log("Operators in javascript");


// let kl = 2;
// let ml = 4;

// console.log("kl + ml is:  " + kl + ml)
// console.log("kl -ml is:  " + kl - ml)
// console.log("kl / ml is:  " + kl / ml)
// console.log("kl * ml is:  " + kl * ml)
// console.log("kl % ml is:  " + kl % ml)


// // Assignment Operators

// let assignment = 5;
// // assignment += 5
// // console.log(assignment)
// assignment -= 5
// console.log(assignment)


// // Comparison operator

//  let comp1 = 6;
// // let comp2 = 4;
// // console.log(comp1 == comp2);
// // console.log(comp1 != comp2);
// // console.log(comp1 != comp2);
// // console.log(comp1 !== comp2);






// Conditonal Expression



// let a = prompt('What is your age?:  ')
// a = Number.parseInt(a) // Coverting String into NUmber
// let a = 24;
// if(a>0){
// alert('Age is Invalid')
// }
// 	else if(a>20){
// alert("age is Very low")
// 	}
// else{
// 	alert('Age is Valid')
// }

// loop

// for loop

for(i=0;i<9;i++){
	console.log(i)
}
