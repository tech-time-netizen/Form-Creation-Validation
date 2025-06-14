document.addEventListener('DOMContentLoaded', () => { 
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting

        // Get trimmed values on submit
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Reset classes
        document.getElementById("username").classList.remove("error", "success");
        document.getElementById("email").classList.remove("error", "success");
        document.getElementById("password").classList.remove("error", "success");

        let isValid = true;
        const messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
            document.getElementById("username").classList.add("error");
        } else {
            document.getElementById("username").classList.add("success");
        }

        // Email validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
            document.getElementById("email").classList.add("error");
        } else {
            document.getElementById("email").classList.add("success");
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
            document.getElementById("password").classList.add("error");
        } else {
            document.getElementById("password").classList.add("success");
        }

        feedbackDiv.style.display = 'block';
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; 
            setTimeout(() => {
                form.reset();
                feedbackDiv.textContent = '';
                document.querySelectorAll("input").forEach(input => input.classList.remove("success"));
            }, 1000);
        } else {
            feedbackDiv.innerHTML = messages.join(" ");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});
