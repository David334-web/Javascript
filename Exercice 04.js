/*⚠️ NE MODIFIEZ PAS LE NOM DES DÉCLARATIONS ⚠️*/
/*4️⃣ EXERCICE 04 4️⃣*/

// ⛔️ Remember that you must use the global object "Math".

Math.random(square(2));
function square(num) {
   // Returns the value of "num" squared (Renvoie la valeur de "num" au carré).
   // YOur code:
   console.log(num * num);
}


Math.random(raiseToCube(3));
function raiseToCube(num) {
   // Returns the value of "num" cubed.
   // Your code:
   console.log(num * num * num);
}


Math.random(raise(4, 2));
function raise(num, exponent) {
   // Returns the value of "num" raised to the exponent "exponent".
   // Your code:.
   console.log(num ** exponent);
}

function roundNumber(num) {
   
}



function randomnumber(min, max) {
   // Generate a random number between 0 and 10 and return it.
   // Your code :
   return Math.random() * (max - min) + min
}
console.log(randomnumber(0, 10));


