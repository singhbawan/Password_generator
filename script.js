// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

function generatePassword() {
  var functioncall = [];
  var generatedPassword = "";

  var passwordLength = parseInt(
    prompt("please specify the password length (between 8 to 128) : ")
  );

  console.log("User selected this length: " + passwordLength); //--------------------Console log--------------------//

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    console.log("edge case caught"); //--------------------Console log--------------------//
    alert("This is not a valid input please try again!");
    generatePassword();
  }

  if (confirm("Do you want to add Lowercase char ?")) {
    console.log("Lowercase selected by user"); //--------------------Console log--------------------//

    functioncall.push(
      (get_low = function () {
        console.log(" generate random lower char"); //--------------------Console log--------------------//

        var lower1 = "abcdefghijklmnopqrstuvwxyz";
        return lower1.charAt(Math.floor(Math.random() * 27));
      })
    );
  }

  if (confirm("Do you want to add Uppercase char?")) {
    console.log(" Uppercase selected by user"); //--------------------Console log--------------------//

    functioncall.push(
      (get_upp = function () {
        console.log("generate random Upper char"); //--------------------Console log--------------------//

        var upper1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return upper1.charAt(Math.floor(Math.random() * 27));
      })
    );
  }

  if (confirm("Do you want to add numeric char ?")) {
    console.log("numeric char selected by user"); //--------------------Console log--------------------//

    functioncall.push(
      (get_num = function () {
        console.log("generate random num char"); //--------------------Console log--------------------//

        var upper1 = "1234567890";
        return upper1.charAt(Math.floor(Math.random() * 11));
      })
    );
  }

  if (confirm("Do you want to add special char ?")) {
    // console.log("Special char selected by user"); //--------------------Console log--------------------//

    functioncall.push(
      (get_low = function () {
        // console.log("generate random special char"); //--------------------Console log--------------------//
        var special = "~`!@#$%^&*()-_+={}[]|:;'<>,.?";
        return special.charAt(Math.floor(Math.random() * 30));
      })
    );
  }

  if (functioncall.length === 0) {
    console.log("empty array");
    alert("Select at least one!");
    generatePassword();
  }

  for (let index = 0; index < passwordLength; index++) {
    var rand = Math.floor(Math.random() * functioncall.length);

    // console.log("Random number: " + rand); 

    generatedPassword += functioncall[rand]();
  }

  return generatedPassword;
}
