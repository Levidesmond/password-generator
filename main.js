// code to generate a random password
function generatePassword(length, chars) {
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomChar = chars[Math.floor(Math.random() * chars.length)];
    password += randomChar;
  }
  return password;
}

// code to get the form values
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const lengthInput = document.querySelector('input[name="length"]');
  const length = parseInt(lengthInput.value);
  let chars = "";
  const checkboxes = document.querySelectorAll('input[name="chars"]');
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      if (checkbox.value === "uppercase") {
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if (checkbox.value === "lowercase") {
        chars += "abcdefghijklmnopqrstuvwxyz";
      }
      if (checkbox.value === "symbols") {
        chars += "!@#$%^&*()_+";
      }
      if (checkbox.value === "numbers") {
        chars += "0123456789";
      }
    }
  });
  const randomPassword = generatePassword(length, chars);
  alert(randomPassword);
});

/*
This code is used to help generate a password for you. 
Line 1: The first line is just setting up a function that will be used to generate the password. 
Line 3: This line creates an empty string called 'password'. This will be used to store the generated password. 
Line 4: This line starts a loop. The loop will go on until the value of 'i' is equal to the length of the password you want.
Line 5: This line creates a variable called 'randomChar'. This variable will be used to store a random character. 
Line 6: This line gets a random character from the list of characters that you chose. 
Line 7: This line adds the random character to the password string. 
Line 8: This line returns the generated password. 
Line 11: This line sets up an event listener on the form. This event listener will be triggered when the form is submitted. 
Line 12: This line prevents the default action of the form from happening. 
Line 13: This line gets the length of the password from the form. 
Line 15: This line gets all of the checkboxes from
*/
