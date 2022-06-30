var generateBtn = document.querySelector("#generate");
//object for password criteria
const pwdElements = {
  symbols: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  numbers: '0123456789',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}

// function declarations:

function prompts() {

  // keep all criteria in an object
  const pwdCriteria = {};

  pwdCriteria.charLength = prompt("Choose a Password Length Between 8 and 128 \nOr press Cancel to quit","8");
 
  if(!pwdCriteria.charLength){
    return "exit";
  }
  else if(pwdCriteria.charLength > 128){
    alert("Woah there. way to spicy!\nTry a number below 128")
    prompts();
  }
  else if(pwdCriteria.charLength < 8){
    alert("hmm dont think " + pwdCriteria.charLength+ " is gonna cut it...\nTry a number above 8")
    prompts();
  }

  pwdCriteria.includeLowercase = confirm("Can I interest you in some lowercase letters?\nPress OK for yes or Cancel for no.");
  pwdCriteria.includeUppercase = confirm("Alright!, how about some uppercase letters?\nPress OK if you want 'em or Cancel if you don't.");
  pwdCriteria.includeNumbers = confirm("Do you want numbers with that?\nPress OK for \"You Know it!\" or Cancel for \"Hold the Nums\"");
  pwdCriteria.includeSymbols = confirm("Can't go wrong with symbols amarite?\nPress OK for \"Don't mind if I do!\" or Cancel for \"Maybe Next time\".");
  
  if (pwdCriteria.includeLowercase ||  pwdCriteria.includeUppercase || pwdCriteria.includeNumbers ||  pwdCriteria.includeSymbols  ){
    return pwdCriteria;
  }
  else{
    let quit = confirm("Hey pick at least one!\nLet's try this again, ok?")
    if(quit){
      prompts();
    }
    else {
      return "exit";
    }


  }
}

function generatePassword(){
  let pwdBlueprint = prompts();
  if(pwdBlueprint == "exit"){
    return null;
  }
  else{



  }
}

function writePassword() {
  debugger;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // if (password == null ) {
  //    return;
  // }
  if (password) {
  passwordText.value = password;
  }

  console.log("code exit green");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

