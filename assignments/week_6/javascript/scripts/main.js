// key-value pair
// Example nameOfPerson:Eduardo

var myArray = [
    "Eduardo", "Garcia", 30, "Burrito"
];

var myObject = {
    "firstName": "Eduardo",
    "lastName": "Garcia",
    "age": 30,
    "fav Food": "Burrito",
    "goToWork": function () {
        console.log("goes to work");
    }
};

// Square Bracket Notation.
console.log(myObject["firstName"] + "'s age is " + myObject["age"]);

myObject["age"] = 31;
myObject["age"] = myObject["age"] + 1;

// Dot Notation
myObject.age;
myObject["fav Food"]
//myObject.goToWork();
asteriskString.length;
asteriskString.split();