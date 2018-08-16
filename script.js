// 1

var picked = prompt("Pick a number, any number!");
var solution = 0;

for (var begin = 0; begin <= picked; begin ++) {
     solution += begin;
}

console.log(solution);

// 2

var consent = prompt("Do you want to play?")

do{
var answer = prompt("Say something!");
var consent = prompt("Do you want to play?");
console.log(answer);
}while(consent === "yes");

// 3

var name = prompt("What is your name?");
var start = prompt("Would you like to print your name?");

while (start === "yes") {
  console.log("Hello. My name is " + name);
  var name = name + "!";
  var start = prompt("Would you like to print this again?");
}

// 4

var time = prompt("Is it morning, noon, or evening?");

if (time === "morning"){
  mealType = "breakfast";
  foodSuggestion = "eggs and toast";
  console.log("Since it is " + time + ", you should be eating  " + mealType + ". We suggest " + foodSuggestion + ".");
} else if (time === "noon"){
  mealType = "lunch";
  foodSuggestion = "a salad";
  console.log("Since it is " + time + ", you should be eating  " + mealType + ". We suggest " + foodSuggestion + ".");
} else if (time === "evening"){
  mealType = "dinner";
  foodSuggestion = "chicken and rice";
  console.log("Since it is " + time + ", you should be eating  " + mealType + ". We suggest " + foodSuggestion + ".");
} else {
  console.log("You might be an alien. Do you need to eat?");
}
