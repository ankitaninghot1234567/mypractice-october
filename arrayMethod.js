let fruits = ['apple', 'banana', 'mango', 'orange'];
//console.log(fruits);


//let size = fruits.length;
console.log(fruits.length);
console.log(fruits.toString());

let arr = [100, 200, 30];
console.log(arr.toString());

let num = [3003, 809328, 9837329];
console.log(num.toString());

let color = ['red', 'blue', 'black', 'yellow'];
console.log(color.pop());
console.log(color);
//way1
let fruits1 = ['apple', 'mango', 'banana']
console.log(fruits1.push('stabery', 'kiwi'));
console.log(fruits1);
//way2
let name = ['ankita', 'praju', 'sneha'];
var returnname = name.push('prathmesh', 'prashant');
console.log(returnname);
console.log(name);
let fruits7 = ['apple', 'banana', 'mango', 'orange.......'];
console.log(fruits7.shift());
console.log(fruits7);//returnvalue

let fruits8 = ['apple', 'banana', 'mango', 'orange'];
console.log(fruits8.unshift('pinapple'));
console.log(fruits8);

console.log(fruits8.join('  @#$'));

//if we are concat fruits7 and fruits8
console.log(fruits7.concat(fruits8)); 
