document.addEventListener('DOMContentLoaded', () => { 
    const form = document.getElementById("registration-form");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Simulate form submission
        setTimeout(() => {
            feedback.textContent = "Registration successful!";
            feedback.style.color = "green";
            form.reset(); // Reset the form fields
        }, 1000); // Simulate a delay for the submission
    });

    // Retrieve form values and trim them
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();


    // Initialize validation variables
    let isValid = true;
    const messages = [];

    if(username.length < 3) {
        isValid = false;
        messages.push("Username must be at least 3 characters long.");
        password.classList.add("error");
    }else{
        password.classList.add("success");
    }
    if(!email.includes("@") || !email.includes(".")) {
        isValid = false;
        messages.push("Please enter a valid email address.");
        password.classList.add("error");
    } else {
        password.classList.add("success");
    }
    if(password.length < 8) {
        isValid = false;
        messages.push("Password must be at least 8 characters long.");
        password.classList.add("error");
    } else {
        password.classList.add("success");
    }


    feedback.style.display = 'block';
    if (isValid) {
        feedback.textContent = "Registration successful!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = messages.join(" ");
        feedback.style.color = "red";
    }
});