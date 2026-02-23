"use strict";

// TASK 1 (i am not sure if I got the task right, so I just used what i learned)
//Write a script that defines variables, 
// functions, and logs meaningful output to the console.

const hobbies = [
  "reading",
  "coding",
  /* empty */,
  "painting",
  "swimming",
  "hiking",
  "gardening",
  "photography",
  "dancing",
  "playing guitar",
  "writing",
  "cooking",
  "cycling",
  "yoga",
  "knitting",
  "gaming",
  "birdwatching",
  "drawing",
  "meditation",
  "playing chess",
];

let myFavoriteHobby = hobbies[2];

if (myFavoriteHobby === undefined) {
    console.log("I do not have favorite hobby.");
};

let newHobby = "spots";
hobbies.push(newHobby);

console.log(`There are ${hobbies.length} hobbies you can choose from.`);

function addExpensiveHobby(arr){

    function getExpansiveHobby(){
        return "traveling";
    };

    arr.push(getExpansiveHobby());
};

addExpensiveHobby(hobbies);
console.log("An expansive hobby is " + hobbies.at(-1) + ".");

console.log("Calling my future to be function");
predictFuture();

function predictFuture () {
    console.log("Hobbies like birdwatching will be less and less");
};

const addTimeConsumeingHobby = (function (){
    hobbies.push("cocheting");
    return hobbies;
})();

console.log("An time consuming hobby is " + hobbies.at(-1));

const addAge = (function () {
    let parentAge = 1;
    let childAge = 0;

    function addChildAge (){
        childAge += 1;
        parentAge += 1;
            
        console.log(parentAge, childAge);
    }

    return addChildAge;
});

const reallyAddAge = addAge();
reallyAddAge();
reallyAddAge();
const reallyAddAge2 = addAge();
reallyAddAge();
reallyAddAge2();

