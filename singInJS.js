function validateFirstName() {

    var fName = document.getElementById("firstName").value;
    var re1 = /^[A-Za-z\s\'\-]{2,15}$/;

    if (re1.test(fName)) {

        document.getElementById("fisrtNamePrompt").innerHTML = "<i class='fas fa-check-circle' style='color: #16a216;' title='Valid'></i>";
        return true;
    } else {

        document.getElementById("fisrtNamePrompt").innerHTML = "<i class='fas fa-times-circle' style='color: #f00000;' title='Not Valid'></i>";
        return false;
    }
}

function validateUsername() {

    var userName = document.getElementById("Username").value;
    var re4 = /^.{3,}$/;

    if (userName.indexOf(' ') === -1) {
        if (re4.test(userName)) {
            document.getElementById("UsernamePrompt").innerHTML = "<i class='fas fa-check-circle' style='color: #16a216;' title='Valid'></i>";
            return true;
        } else {
            document.getElementById("UsernamePrompt").innerHTML ="<i class='fas fa-times-circle' style='color: #f00000;' title='Not Valid'></i>";}
            return false;
        }
    else {
        document.getElementById("UsernamePrompt").innerHTML ="<i class='fas fa-times-circle' style='color: #f00000;' title='No Space'></i>";}
        return false;
}

function validatePassword() {
    var password = document.getElementById("password").value;
    var re5 = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

    if (re5.test(password)) {
        document.getElementById("PasswordPrompt").innerHTML = "<i class='fas fa-check-circle' style='color: #16a216;' title='Valid'></i>";
        return true;
    } else {

        document.getElementById("PasswordPrompt").innerHTML = "<i class='fas fa-times-circle' style='color: #f00000;' title='it should contain at least: lower-case, upper-case, number, symbol and taller than 6 digit'></i>";
        return false;
    }
}
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var button = document.querySelector("button");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        button.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        button.textContent = "Show";
    }
}
function validateEmail() {
    var email = document.getElementById("email").value;
    var re6 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email !== "") {
        if (re6.test(email)) {
            // Valid email address
            document.getElementById("emailPrompt").innerHTML = "<i class='fas fa-check-circle' style='color: #16a216;' title='Valid'></i>";
        } else {

            document.getElementById("emailPrompt").innerHTML = "<i class='fas fa-times-circle' style='color: #f00000;' title='Not Valid'></i>";
         }
    }

}  
function buttonClicked(event) {
    event.preventDefault(); // Prevent form submission and page refresh
  
    var firstNameInput = document.getElementById("firstName");
    var usernameInput = document.getElementById("Username");
    var passwordInput = document.getElementById("password");
    
    var isFirstNameValid = validateFirstName();
    var isUsernameValid = validateUsername();
    var isPasswordValid = validatePassword();
    
    if (!isFirstNameValid) {
        shakeIcon("fisrtNamePrompt");
        firstNameInput.focus();
        return;
    }
    
    if (!isUsernameValid) {
        shakeIcon("UsernamePrompt");
        usernameInput.focus();
        return;
    }
    
    if (!isPasswordValid) {
        shakeIcon("PasswordPrompt");
        passwordInput.focus();
        return;
    }
    
    alert("Thank you for submitting!");
}

function shakeIcon(promptId) {
    var promptElement = document.getElementById(promptId);
    promptElement.innerHTML = "<i class='fas fa-times-circle' style='color: #f00000;' title='Not Valid'></i>";
    promptElement.classList.add("shake-animation");
    
    setTimeout(function() {
        promptElement.classList.remove("shake-animation");
        restorePromptValue(promptId);
    }, 1000);
}

function restorePromptValue(promptId) {
    var promptElement = document.getElementById(promptId);
    var inputId = promptElement.dataset.inputId;
    var inputElement = document.getElementById(inputId);
    promptElement.innerHTML = "";
    inputElement.value = inputElement.dataset.oldValue;
}


