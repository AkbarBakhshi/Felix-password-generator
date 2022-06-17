
// possible variables
var choices;


//create password variables lis
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '+', '='];
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", (e) => getInputs(e));

// will ganarate password right after prompt
function getInputs(e) {
  e.preventDefault()

  const characterLenght = document.querySelector('#characters').value;
  const errorMessage = document.querySelector('#lengthError');

  if (characterLenght < 8 || characterLenght > 128) {
    errorMessage.style.display = 'block';
    return
  } else {
    errorMessage.style.display = 'none';
  }

  const lowerCase = document.querySelector('#lowercase').checked; // true means the box is checked, false means unchecked

  const uppercase = document.querySelector('#uppercase').checked;
  const specialCharacter = document.querySelector('#special-character').checked;
  const num = document.querySelector('#num').checked;

  generatePassword(characterLenght, lowerCase, uppercase, specialCharacter, num)

}

function generatePassword(len, low, up, spCh, no) {
  let passwordText = '';

  if (!spCh && !no && !up && !low) {
    choices = alert("You must choose at least one checkbox!");
    return;
  }

  else if (spCh && no && up && low) {

    choices = specialCharArr.concat(numArr, upperCaseArr, lowerCaseArr);
    passwordText += numArr[Math.floor(Math.random() * numArr.length)]
    passwordText += upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)]
    passwordText += lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)]
    passwordText += specialCharArr[Math.floor(Math.random() * specialCharArr.length)]
  }

  else if (spCh && no && up) {
    choices = specialCharArr.concat(numArr, upperCaseArr);
    passwordText += numArr[Math.floor(Math.random() * numArr.length)]
    passwordText += upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)]
    passwordText += specialCharArr[Math.floor(Math.random() * specialCharArr.length)]
  }
  else if (spCh && no && low) {
    choices = specialCharArr.concat(numArr, lowerCaseArr);
    passwordText += numArr[Math.floor(Math.random() * numArr.length)]
    passwordText += lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)]
    passwordText += specialCharArr[Math.floor(Math.random() * specialCharArr.length)]
  }
  else if (spCh && low && up) {
    choices = specialCharArr.concat(upperCaseArr, lowerCaseArr);
    passwordText += upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)]
    passwordText += lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)]
    passwordText += specialCharArr[Math.floor(Math.random() * specialCharArr.length)]
  }
  else if (no && low && up) {
    choices = numArr.concat(upperCaseArr, lowerCaseArr);
    passwordText += numArr[Math.floor(Math.random() * numArr.length)]
    passwordText += upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)]
    passwordText += lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)]
  }

  else if (spCh && no) {
    choices = specialCharArr.concat(numArr);
    passwordText += numArr[Math.floor(Math.random() * numArr.length)]
    passwordText += specialCharArr[Math.floor(Math.random() * specialCharArr.length)]

  } else if (spCh && low) {
    choices = specialCharArr.concat(lowerCaseArr);
    passwordText += lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)]
    passwordText += specialCharArr[Math.floor(Math.random() * specialCharArr.length)]

  } else if (spCh && up) {
    choices = specialCharArr.concat(upperCaseArr);
    passwordText += upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)]
    passwordText += specialCharArr[Math.floor(Math.random() * specialCharArr.length)]
  }
  else if (low && no) {
    choices = lowerCaseArr.concat(numArr);
    passwordText += numArr[Math.floor(Math.random() * numArr.length)]
    passwordText += lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)]

  } else if (low && up) {
    choices = upperCaseArr.concat(lowerCaseArr);
    passwordText += upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)]
    passwordText += lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)]

  } else if (no && up) {
    choices = numArr.concat(upperCaseArr);
    passwordText += numArr[Math.floor(Math.random() * numArr.length)]
    passwordText += upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)]
  }

  else if (spCh) {
    choices = character;
    passwordText += specialCharArr[Math.floor(Math.random() * specialCharArr.length)]
  }
  else if (no) {
    choices = numArr;
    passwordText += numArr[Math.floor(Math.random() * numArr.length)]
  }
  else if (low) {
    choices = lowerCaseArr;
    passwordText += lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)]
  } else if (up) {
    choices = upperCaseArr;
    passwordText += upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)]
  }
  const upperlimit  = len - passwordText.length

  for (let i = 0; i < upperlimit; i++) {
    passwordText += choices[Math.floor(Math.random() * choices.length)]
  }

  writePassword(passwordText)

}

// Write password to the #password input
function writePassword(text) {

  document.getElementById("password").textContent = text;
}
