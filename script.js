
    // Get the form, email input, and success message elements
    const form = document.getElementById("email-form");
    const emailInput = document.getElementById("modal-email");
    const successMessage = document.getElementById("success-message");

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent form submission

        const email = emailInput.value.trim();

        if (!isValidEmail(email)) {
            emailInput.classList.add("is-invalid"); // Add invalid class
            emailInput.focus(); // Set focus to email input
            return; // Exit the function
        }

        // Show success message and hide form
        successMessage.style.display = "block";
        form.style.display = "none";
    }

    // Add event listener to form submission
    form.addEventListener("submit", handleSubmit);
