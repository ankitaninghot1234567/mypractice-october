function condition() {

    marks = 75
    //if
    if (marks > 60) {
        console.log('distination');
    }

    //if else
    if (marks > 80) {
        console.log('pass..');

    } else {
        console.log('faied...');

    }
    //esle if
    if (marks > 85) {
        console.log('first class');

    } else if (marks > 70 || marks < 65) {
        console.log('sec class');
    }
}


function multiCondition() {


    let amount = 100
    switch (amount) {
        case 50:
            console.log('you have 50 rs');

            break;
        case 60:
            console.log('you have 60rs');
            break;
        case 80:
            console.log('you have 80 rs');
            break;
        case 90:
            console.log('you have 90 rs');
            break;
        case 100:
            console.log('you have 100 rs');
            break;

        default:
            console.log('dont have money');//negative statament
            break;
    }
}



let age = 20
if (age >= 18 && age <= 60) {
    console.log('empoly for job');

}




function takeInput() {
    console.log('function evoke');

}



 //function userData(event) {
   // document.write(event)}

function userName(event) {
    console.log(event);
    
}
function userpassword(event) {
    console.log(event);
}




