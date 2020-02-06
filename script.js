// // Assignment Code
var generateBtn = document.querySelector("#generate");
var potentialPasswords = [];
var symbols = '!@#$%^*(){}[]=<.>/;:`~';
var result = document.getElementById('password');
var answer = prompt("How Many letters would you like in your password?");



function getRandomLower() {
  //this woill return a number from the charcode for the alphabet letters 
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
console.log(getRandomLower);


function getRandomUpperCase() {
  //this woill return a number from the charcode for the alphabet letters but in upperCase
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
console.log(getRandomLower);

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function getRandomSymbol(){
  
  return symbols[Math.floor(Math.random() * symbols.length)];
  
};



// now when user clicks on generate password 


generateBtn.addEventListener("click", function(){
 //var question = prompt("How Many letters would you like in your password?");
 var askUpper = confirm("Would you like any upper case letter?");
 var askLower = confirm("Do you want any lower case letters?");
 var askSymbols = confirm("Do you want any special characters?");
 var answer = prompt('How Many letters would you like in your password?');
 var response;
 
 if(answer.length == 0){
     response = 'You didn\'t answer!';
 } else if(answer.innerText < 5){
     response = 'Your password has fewer than five characters';
 } else if (answer.length > 8) {
     response = 'Your password has more than five characters';
 }
 
 alert(response);

 result.innerText = generatePassword(
   askLower,
   askUpper,
   askSymbols,
   answer,
 );
 
});


function generatePassword(askLower, askUpper, askSymbols, lenght){
    var generatedPassword = "";

   


}



// Write password to the #password input
function writePassword() {
  var  result = generatePassword();
  var result = document.querySelector("#password");

 answerText.value = password;

}




// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
