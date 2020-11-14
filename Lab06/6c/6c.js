function validation() {
    let isCorrect = true;
    let pass = document.getElementById("pass").value;
    if(pass.length === 0) {
        document.getElementById("pass").style.background = "red";
        isCorrect = false;
    }else {
        document.getElementById("pass").style.background = "white";
    }

    let email = document.getElementById("email").value;
    let regex = /^.+@.+\..+$/;
    if(regex.test(email)) {
        document.getElementById("email").style.background = "white";
    }
    else {
        document.getElementById("email").style.background = "red";
        isCorrect = false;
    }

    return isCorrect;
}