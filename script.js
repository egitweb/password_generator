// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*

[✅] Ask fot Length (at least 8 characters and no more than 128 characters).
[✅] prompted for character types to include in the password.
[✅] ask for lowercase, uppercase, numeric, and/or special characters.
[✅] input should be validated and at least one character type should be selected.
[✅]  password is generated that matches the selected criteria.
[✅] the password is either displayed in an alert or written to the page.

*/
let passwordLength;
let confirmNumber;
let confirmCharacter;
let confirmUppercase;
let confirmLowercase;


// Special Characters 
character = [".", "/", "\:", "\;","!", "#", "$", "%", "&", "+", ",", "-",, " ^ ", "_", "`", "{", "|", "}", "~", " < ", "=", " > ", " ? ", "@", "[", "'", "(", ")", "*", "\\", "]"];
// Numeric Characters
numberic = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Lowercase Characters
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase Characters
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Choices declared outside the if statement so they can be concatenated upon condition
let combinations; 

// ****Function for "Generate Password" Button is Pressed//
function generatePassword(){

 // Ask the user how long they want their password to be
 passwordLength = parseInt(prompt("How long would you like your password? Choose between 8 and 128"));
 //  
 if (!passwordLength) {
   // Verify if the user typed a valid Length
     alert("Error - This needs a value");
 } else if (passwordLength < 8 || passwordLength > 128) {
     passwordLength = parseInt(prompt("You must choose between 8 and 128"));

 } else {
     // Ask the user what characters to include to password.
     confirmNumber = confirm("Do you want to include numbers?");
     confirmCharacter = confirm("Do you want to include special characters?");
     confirmUppercase = confirm("Do you want to include uppcarse letters?");
     confirmLowercase = confirm("Do you want to include lowercarse letters?");
 };



/*////////////////////////////////////////*/           
/////CREATE RANDOM PASSWORD VALUES ////////
/*///////////////////////////////////////*/


// Check if the user choose a good combination to create a password or not.
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  combinations = alert("You must choose at least one choice.");

} // Create random combinations base on user choices
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

  combinations = character.concat(numberic, lowercase, uppercase);
}
// Else if for 3 positive options
else if (confirmCharacter && confirmNumber && confirmUppercase) {
  combinations = character.concat(numberic, uppercase);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
  combinations = character.concat(numberic, lowercase);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  combinations = character.concat(lowercase, uppercase);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  combinations = numberic.concat(lowercase, uppercase);
}
// Else if for 2 positive options 
else if (confirmCharacter && confirmNumber) {
  combinations = character.concat(numberic);

} else if (confirmCharacter && confirmLowercase) {
  combinations = character.concat(lowercase);

} else if (confirmCharacter && confirmUppercase) {
  combinations = character.concat(uppercase);
}
else if (confirmLowercase && confirmNumber) {
  combinations = lowercase.concat(numberic);

} else if (confirmLowercase && confirmUppercase) {
  combinations = lowercase.concat(uppercase);

} else if (confirmNumber && confirmUppercase) {
  combinations = numberic.concat(uppercase);
}
// Else if for 1 positive option
else if (confirmCharacter) {
  combinations = character;
}
else if (confirmNumber) {
  combinations = numberic;
}
else if (confirmLowercase) {
  combinations = lowercase;
}
// Created space variable to fill uppercase conversion
else if (confirmUppercase) {
  combinations = uppercase;
};


let password = [];
for (let i = 0; i < passwordLength; i++) {
  let pickChoices = combinations[Math.floor(Math.random() * combinations.length)];
  password.push(pickChoices);
}
// This joins the password array and converts it to a string
// Worked with a tutor to incorporate this option
let newPassword = password.join("");
UserInput(newPassword);
return newPassword;
}


// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(newPassword) {
document.getElementById("password").textContent = newPassword;

console.log("If working this is the new password: " + newPassword)
}




