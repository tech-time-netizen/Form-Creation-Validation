document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll("input");
    const feedback = document.getElementById("form-feedback");

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

        if (isValid) {
            feedback.textContent = "Form submitted successfully!";
            feedback.style.color = "green";

            // Clear all inputs
            inputs.forEach((input) => {
                input.value = ""; // Reset input value
                input.classList.remove("success"); // Remove success class
            });
        } else {
            feedback.textContent = "Please correct the errors in the form.";
            feedback.style.color = "red";
        }
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

        if (name === "name") {
            // Name must be at least 3 characters long
            return { isValid: value.length >= 3, message: "Name must be at least 3 characters." };
        } else if (name === "email") {
            // basic email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return { isValid: emailRegex.test(value), message: "Enter a valid email address." };
        }

        // Field must not be empty
        return { isValid: value !== "", message: "This field is required." };
    }
});