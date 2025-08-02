const mobile = document.querySelector("#mob");
const telephone = document.querySelector("#tel");
const password = document.querySelector("#psw");
const confPassword = document.querySelector("#conf-psw");

const btn = document.querySelector("#btn");

const errMob = document.querySelector("#err-mob");
const errTel = document.querySelector("#err-tel");
const errPsw = document.querySelector("#err-psw");
const errConfPsw = document.querySelector("#err-conf-psw");

const form = document.querySelector("form");
const dirtyInputs = {
    mobile: false,
    telephone: false,   
    password: false,
    confPassword: false
};
function markDirty(event)
{
    const inputName = event.target.id;
    if (inputName == "mob") {
        dirtyInputs.mobile = true;
    }
    else if (inputName == "tel") {
        dirtyInputs.telephone = true;
    }
    else if (inputName == "psw") {
        dirtyInputs.password = true;
    }
    else if (inputName == "conf-psw") {
        dirtyInputs.confPassword = true;
    }
}
form.addEventListener("keypress", markDirty);

// Helper function to clear errors
function clearErrors() {
  errMob.innerHTML = "";
  errTel.innerHTML = "";
  errPsw.innerHTML = "";
  errConfPsw.innerHTML = "";
}

// Helper function to validate phone number (digits only, length 10)
function isValidPhone(number) {
  return /^\d{10}$/.test(number);
}

// Validate all fields and return if valid
function validate() {
  let isError = false;
  clearErrors();

  const error = {};

  if (!isValidPhone(mobile.value)) {
    // errMob.textContent = "Mobile number must be exactly 10 digits";
    error.mobile = " the number must be of 10 digits " ;
    isError = true;
  }

  if (!isValidPhone(telephone.value)) {
    // errTel.textContent = "Telephone number must be exactly 10 digits";
    error.telephone = " the telephone number must be 10 digits ";
    isError = true;
    
  }

  if (password.value.length < 8 || password.value.length > 13) {
    // errPsw.textContent = "Password must be between 8 and 13 characters";
    error.password = " the password must be between 8 to 13 characters ";
    isError = true;
  }

  if (confPassword.value !== password.value) {
    // errConfPsw.textContent = "Password and Confirm Password must match";
    error.confPassword = " confirm pass and password should match  ";
    isError = true;
  }
    return { error , isError};
//   return !isError; // Returns true if valid, false if errors
  
}
function displayErrors()
{
    const { error, isError } = validate();
    if (isError ) {
        if (dirtyInputs.mobile){
            errMob.textContent = error.mobile || "";
        } 
        if (dirtyInputs.telephone){
            errTel.textContent = error.telephone || "";
        } 
        if (dirtyInputs.password){
            errPsw.textContent = error.password || "";
        } 
        if (dirtyInputs.confPassword){
            errConfPsw.textContent = error.confPassword || "";
        } 

    }
    
}

function toggleButtonState() {
  btn.disabled = validate().isError; // Disable button if there are validation errors
}

// Attach input event listeners for real-time validation feedback
// mobile.addEventListener("input", toggleButtonState);
// telephone.addEventListener("input", toggleButtonState);
// password.addEventListener("input", toggleButtonState);
// confPassword.addEventListener("input", toggleButtonState);
   form.addEventListener("input", displayErrors);
// Attach click event listener to the button
  form.addEventListener("keypress", toggleButtonState);

btn.addEventListener("click", (e) => {
  e.preventDefault();  // Prevent form submission (just in case type is changed later)
  if (validate().isError == false ) {
    // Proceed with next steps - e.g., form submit or AJAX request
    alert("Validation successful! You can submit the form now.");
  }

});



// Initial button state on load
toggleButtonState();
