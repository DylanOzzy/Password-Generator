var generateBtn = document.querySelector("#generate");
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

// This function pulls random characters from the given character sets.
function getRandomCharacter(charSet) {
  var randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet.charAt(randomIndex);
}

// Function to generate the password based on user selected criteria.
function generatePassword() {
  // Prompt to user for password length.
  var passwordLength = parseInt(prompt("Enter password length (between 8 and 128 characters):"));

  // This checks if the password length selected fits criteria. If passwordLength does not fit criteria, prompts user.
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  // Prompts for user selection of character types.
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Checks that at least one character type is selected by the user.
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return;
  }

  // Applies the character sets based on user selected criteria.
  var charSet = "";
  if (includeLowercase) charSet += lowercaseChars;
  if (includeUppercase) charSet += uppercaseChars;
  if (includeNumeric) charSet += numericChars;
  if (includeSpecial) charSet += specialChars;

  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    generatedPassword += getRandomCharacter(charSet);
  }

  return generatedPassword;
}

// This inputs the generatedPassword() to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Event listener to generate button.
generateBtn.addEventListener("click", writePassword);