/*⚠️ NE MODIFIEZ PAS LE NOM DES DÉCLARATIONS ⚠️*/
/*3️⃣ EXERCICE 3️⃣*/

function areEqual(x, y) {
   // Returns true if "x" and "y" are equal.
   // Otherwise it returns false.
   // Your code:
   return x === y
}
console.log(areEqual(12, 12));
console.log(areEqual(23, 6));


HaveTheSameLength(prompt('Put your first sentence'), prompt('Put your second sentence'));
function HaveTheSameLength(str1, str2) {
   // Returns true if the two strings have the same length.
   // Otherwise it returns false.
   // Your code:
   if(str1.length == str2.length){
      alert('True');
   }else{
       alert('False');
   }
}


lessThanNinety(100);
function lessThanNinety(num) {
   // Returns true if the argument "num" is less than ninety.
   // Otherwise it returns false.
   // Your code:
   for(let i = 0; i <= num; i++){
      if(i < 90)console.log(i, 'True');
      else console.log(i, 'False');
   }
}


greaterthanfifty(60);
function greaterthanfifty(num) {
   // Returns true if the argument "num" is greater than fifty.
   // Otherwise it returns false.
   // Your code:
   for(let i = 0; i<= num; i++){
      if(i < 50)console.log(i, 'False');
      else console.log(i, 'True');
   }
}


isEven(10);
function isEven(num) {
   // Returns true if "num" is even.
   // Otherwise it returns false.
   // Your code:
   for(let i = 0; i <= num; i++){
      if(i % 2 === 0)console.log(i, 'True');
      else console.log(i, 'False');
   }
}


isOdd(10);
function isOdd(num) {
   //Returns true if "num" is odd.
   //Otherwise it returns false.
   //YOur code:
   for(let i = 0; i <= num; i++){
      if(i % 2 === 0)console.log(i, 'False');
      else console.log(i, 'True');
   }
}


