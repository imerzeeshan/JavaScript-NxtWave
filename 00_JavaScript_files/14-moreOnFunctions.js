function displayGreeting(displayName) {
    console.log("Hello");
    displayName();
    console.log("Good Evening");
}

// 01 
// displayGreeting(
//     function() {
//         console.log("Md Zeeshan");
//     }
// );

// 02 

// function displayZeeshan() {
//     console.log("imerzeeshan");
// }

// displayGreeting(displayZeeshan);


// 03
let displayZeeshan = function(){
    console.log("imerzeeshan");
}
displayGreeting(displayZeeshan);