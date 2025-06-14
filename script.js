document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    const inputs = document.querySelectorAll("input");
    const feedback = document.createElement("div"); // Optional feedback element
    form.appendChild(feedback);

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission for validation
        let isValid = true;

        inputs.forEach((input) => {
            const validationResult = validateInput(input);
            if (!validationResult.isValid) {
                input.classList.add("error");
                input.classList.remove("success");
                isValid = false;
            } else {
                input.classList.remove("error");
                input.classList.add("success");
            }
        });

        feedback.textContent = isValid ? "Form submitted successfully!" : "Please correct the errors in the form.";
        feedback.style.color = isValid ? "green" : "red";
    });

    inputs.forEach((input) => {
        input.addEventListener("input", () => {
            const validationResult = validateInput(input);
            if (validationResult.isValid) {
                input.classList.remove("error");
                input.classList.add("success");
            } else {
                input.classList.remove("success");
                input.classList.add("error");
            }
        });
    });

    function validateInput(input) {
        const value = input.value.trim();
        const name = input.name;

        if (name === "username") {
            // Username must be at least 3 characters long
            return { isValid: value.length >= 3, message: "Username must be at least 3 characters." };
        } else if (name === "email") {
            // Email must match a basic email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return { isValid: emailRegex.test(value), message: "Enter a valid email address." };
        } else if (name === "password") {
            // Password must be at least 8 characters long
            return { isValid: value.length >= 8, message: "Password must be at least 8 characters." };
        }

        // Default validation: Field must not be empty
        return { isValid: value !== "", message: "This field is required." };
    }
});