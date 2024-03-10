function validateForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var pin = document.getElementById("pin").value;
    var password = document.getElementById("password").value;

    var errorMessage = "";

    var nameRegex = /^[a-zA-Z\s]+$/;
    var pinRegex = /^\d{6}$/;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;

    if (!nameRegex.test(name)) {
        errorMessage += "Name should contain alphabets or spaces. No any other characters allowed.\n";
    }
    if (age < 18 || age > 60) {
        errorMessage += "Age should be between 18 and 60.\n";
    }
    if (!pinRegex.test(pin)) {
        errorMessage += "PIN code should contain 6 digits.\n";
    }
    if (!passwordRegex.test(password)) {
        errorMessage += "Password should have a minimum length of 8 characters, at least one lower case letter, one upper case letter, one special character, and one digit.\n";
    }

    if (errorMessage !== "") {
        document.getElementById("errorMessage").innerText = errorMessage;
        return false;
    }

    return true;
}
