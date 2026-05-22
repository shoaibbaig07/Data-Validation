document.getElementById("input").addEventListener("submit", function(event){
    event.preventDefault();
    validate();
});

function validate() {
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;

    const namePattern = /^[A-Za-z][A-Za-z0-9 ]{6,}$/;
    const mobilePattern = /^[0-9]{10}$/;
    const emailPattern = /^[A-Za-z0-9._]+@[A-Za-z]+\.[A-Za-z]{2,3}$/;

    if (!namePattern.test(name)) {
        document.getElementById("message").innerHTML = "Invalid Name! Name must contain at least 6 alphabets.";
        document.getElementById("message").style.color = "red";
        return false;
    }

    if (!mobilePattern.test(mobile)) {
        document.getElementById("message").innerHTML = "Invalid Mobile! Enter a 10 digit number.";
        document.getElementById("message").style.color = "red";
        return false;
    }

    if (!emailPattern.test(email)) {
        document.getElementById("message").innerHTML = "Invalid Email!";
        document.getElementById("message").style.color = "red";
        return false;
    }

    document.getElementById("message").innerHTML = "Registration Successful!";
    document.getElementById("message").style.color = "#00ff99";
    return true;

}