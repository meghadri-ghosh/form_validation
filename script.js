const mobile =  document.querySelector("#mob");
const telephone = document.querySelector("#tel");
const password = document.querySelector("#psw");
const confPassword = document.querySelector("#conf-psw");


const btn = document.querySelector("#btn");

const errMob = document.querySelector("#err-mob");
const errTel = document.querySelector("#err-tel");
const errPsw = document.querySelector("#err-psw");
const errConfPsw = document.querySelector("#err-conf-psw");

const form = document.querySelector("form");


function validate() {
    let err = false;

    if(mobile.value.length !== 10) {
        errMob.innerHTML = "Phone number must be 10 digits";
        err = true;
    }
    if(telephone.value.length !== 10) {
        errTel.innerHTML = "Telephone number must be 10 digits";
        err = true;
    }
    if(password.value.length < 8 || password.value.length > 13) {
        errPsw.innerHTML = "Password must be 8 to 13 character long";
        err = true;
    }
    if(confPassword.value === password.value) {
        errConfPsw.innerHTML = "Password and confirm password must be same";
        err = true;
    }

    return err;
}

function handleClick(e) {
    const isValid = validate();

    if(isValid) {
        btn.setAttribute("disabled", false);
    }
}



function handleKeyPress(e) {
    const isValid = validate();
    const id = e.target.id;
    const errorField = `#err-${id}`;

    if(isValid) {
        btn.setAttribute("disabled", false);
        document.querySelector(errorField).innerHTML = "";
    } 


}

btn.addEventListener("click", handleClick);
form.addEventListener("keypress", handleKeyPress);

