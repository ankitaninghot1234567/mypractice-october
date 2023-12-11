let text='i like anurag';
console.log(text.length);

let text1='i live in pune';
console.log(text1.slice(0,4));
console.log(text1.slice(1));
console.log(text1.slice(-6,-1));//slice

console.log(text1.substring(-5,8));//substring

console.log(text1.substr(0,4))//subtr
console.log(text1.substr(2,6));

var datails = 'pune is big city is like pune' 
console.log(datails.replace('pune','mumbai'));
console.log(datails.replaceAll('pune',' thane'));
console.log(datails.toUpperCase());
console.log(datails.toLowerCase());

var datails='ALDFEHF AHDIUAA UY8ASYA8O'
console.log(datails.toLowerCase());

let a= 'ankita'
    b= 'ninghot' 
   // let fullname= a.concat(' ',b)
    console.log(a.concat('   ',b));

    let text3 = '   hello world  '
 console.log(text3.trim());
 console.log(text3.trimStart());
 console.log(text3.trimEnd());

 myBday= '22/08/1995'
 let year=myBday.split('/')
 console.log(year);
 console.log(year[2])