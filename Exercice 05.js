/*⚠️ NE MODIFIEZ PAS LE NOM DES DÉCLARATIONS ⚠️*/
/*5️⃣ EXERCICE 05 5️⃣*/


isPositive(-5);
function isPositive(num) {
   // The function receives an integer. Returns as a result a string that indicates whether the number
   // is positive or negative.
   // If the number is positive ---> "It is positive."
   // If the number is negative ---> "It is negative."
   // If the number is 0, return false.
   // Your code:
   for(i = 5; i >= num; i--){
      if(i > 0)console.log(i, 'Positif');
      if(i < 0)console.log(i, 'Negatif');
      if(i == 0)console.log(i, 'False');
   }
}


addSymbolExclamation("hello world");
function addSymbolExclamation(str) {
   // Add an exclamation mark to the end of the string "str" ​​and return it
   // Example: "hello world" ---> "hello world!"
   // Your code:
   console.log(str + "!");
}


combineNames("Webster", "Fever");
function combineNames(firstName, LastName) {
   // Returns "first name" and "last name" combined in the same string but separated by a space.
   // Example: ("Webster", "Fever") ---> "Fever Webster"
   // Your code:
   console.log(LastName, firstName);
}



getGreeting("Martin");
function getGreeting(name) {
   // Take the string "name" and concatenate another string into the string so that it takes the following form:
   // Example: "Martin" ---> "Hello Martin!"
   // Your code:
   console.log("Hello " + name + "!");
}


getRectangleArea(3, 8);
function getRectangleArea(Height, width) {
   // Return the area of ​​a rectangle having its height and width.
   // Your code:
   console.log(3 * 8);
}


returnPerimeter(4);
function returnPerimeter(side) {
  // The function receives as an argument the measurement of one side of a square.
   // You must return its perimeter.
   // Your code:
   console.log(side * 4);
}


trianglearea(7, 4);
function trianglearea(base, height) {
    // Calculates the area of ​​a triangle and returns the result.
   // Your code:
   console.log(base * height / 2);
}


FromEuroToDollar(50);
function FromEuroToDollar(euro) {
   // Suppose that 1 euro is equivalent to 1.20 dollars.
   // You must calculate the value received as an argument, converting it to dollars.
   // Your code:
   console.log(euro * 1.20 / 1);
}


isVowel(prompt('Insert a letter'));
function isVowel(letter) {
   // Write a function that takes a letter and, if it is a vowel, displays the message “It is a vowel.”
   // If the user enters a string of more than one character you must return the message: "Incorrect data".
   // If it is not a vowel, it must also return "Incorrect data".
   // Your code:
   if(letter == "a"){
      alert('It is a vowel');
   }else if(letter == "o"){
      alert('It is a vowel');
   }else if(letter == "e"){
      alert('It is a vowel');
   }else if(letter == "u"){
      alert('It is a vowel');
   }else if(letter == "i"){
      alert('It is a vowel');
   }else if(letter == "y"){
      alert('It is a vowel');
   }else{
      alert('Incorrect data');
   }
}
