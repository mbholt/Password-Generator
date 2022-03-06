// Variables for characters and password length
var length = '';
var choice = [];

var lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbolArray = ['!', '#', '$', '%', '&', '(', ',', ')', '*', '+', '-', '.', '!', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var promptsSatisfied = prompts();
  var passwordText = document.querySelector("#password");

  if (promptsSatisfied) {
      var newPassword = generatePassword();
      passwordText.value = newPassword;
  }
}

// Generate password function
function generatePassword() {
  var password = "";
  for(var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * choice.length);
    password = password + choice[randomIndex];
  }
  return password;
}

// User input prompts
function prompts() {
  choice = [];

  length = parseInt(prompt("Choose password length (8 to 128 characters)")); 

  if (isNaN(length) || length > 128 || length < 8) {
    window.alert("You must choose a length between 8 and 128 characters.");
    return false;
  }

  if (window.confirm("Include lower case letters?")) {
    choice = choice.concat(lowerArray);
  }

  if (window.confirm("Include upper case letters?")) {
    choice = choice.concat(upperArray);
  }

  if (window.confirm("Include numbers?")) {
    choice = choice.concat(numberArray);
  }

  if (window.confirm("Include special characters?")) {
    choice = choice.concat(symbolArray);
  }

  if (choice == '') {
    window.alert("You must choose at least one kind of character.");
    return false;
  } else {
    return true;
  }
}
