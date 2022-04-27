var generateBtn = document.querySelector("#generate");
const numbers = [1,2,3,4,5,6,7,8,9,0];
const lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialCharacters = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\" ];


function generatePassword(){
  let choices = []

  var pw= prompt ("Please choose a lenght between 8 and 128 characters");
  if (pw<8 || pw >128){
    alert ("Incorrect password lenght")
    generatePassword ()
  } else if (pw === '' || isNaN(pw)) {
    alert ("Please enter valid password between 8 and 128")
    generatePassword ()
  } 
  var lowerCase = confirm("Would you like lower case in your password?");
  var upperCase = confirm("Would you like upper case in your password?");
  var numeric = confirm("Would you like a numeric in your password?");
  var special = confirm("Would you like special character in your password?");

   if (lowerCase == true){
    choices = choices.concat(lowerCaseAlphabet);
  } 
  if (upperCase == true){
    choices = choices.concat(upperCaseAlphabet);
  }
  if (special == true){
    choices = choices.concat(specialCharacters);
  }
  if (numeric == true){
    choices = choices.concat(numbers);
  } 
  if (lowerCase == false && upperCase == false && special == false && numeric ==false){
    alert('You need to select atleast one option');
  }
  console.log(choices)

  var results = ''

  for (let i = 0, n = choices.length; i <parseInt(pw); i++){
    results += choices[Math.floor(Math.random() * n)]
  }
  return results; 

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
