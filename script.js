function checkPassword() {

    let password = document.getElementById("password").value;

    let bar = document.getElementById("bar");
    let result = document.getElementById("result");

    let length = document.getElementById("length");
    let upper = document.getElementById("upper");
    let number = document.getElementById("number");
    let symbol = document.getElementById("symbol");

    let score = 0;

    // Length Check
    if(password.length >= 8){
        score++;
        length.innerHTML = "✅ Minimum 8 Characters";
    }else{
        length.innerHTML = "❌ Minimum 8 Characters";
    }

    // Uppercase Check
    if(/[A-Z]/.test(password)){
        score++;
        upper.innerHTML = "✅ Uppercase Letter";
    }else{
        upper.innerHTML = "❌ Uppercase Letter";
    }

    // Number Check
    if(/[0-9]/.test(password)){
        score++;
        number.innerHTML = "✅ Number";
    }else{
        number.innerHTML = "❌ Number";
    }

    // Special Character Check
    if(/[!@#$%^&*]/.test(password)){
        score++;
        symbol.innerHTML = "✅ Special Character";
    }else{
        symbol.innerHTML = "❌ Special Character";
    }

    // Result
    if(score <= 2){
        result.innerHTML = "🔴 Weak Password";
        result.style.color = "red";
        bar.style.width = "35%";
        bar.style.background = "red";
    }
    else if(score == 3){
        result.innerHTML = "🟡 Medium Password";
        result.style.color = "orange";
        bar.style.width = "70%";
        bar.style.background = "orange";
    }
    else{
        result.innerHTML = "🟢 Strong Password";
        result.style.color = "lime";
        bar.style.width = "100%";
        bar.style.background = "lime";
    }
}

// Show / Hide Password
function togglePassword(){

    let password = document.getElementById("password");
    let eye = document.getElementById("eye");

    if(password.type === "password"){
        password.type = "text";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    }
    else{
        password.type = "password";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }

}