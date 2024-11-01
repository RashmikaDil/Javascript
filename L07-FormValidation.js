function validateForm() {
    // Get form elements
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Error messages
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Clear previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    // Name validation
    if (name.trim() === "") {
      nameError.textContent = "Name is required.";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // Password validation
    if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters long.";
      isValid = false;
    }

    return isValid;
  }