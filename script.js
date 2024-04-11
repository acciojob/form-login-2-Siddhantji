 const loginForm = document.getElementById("loginForm");

        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevents the form from submitting and reloading the page

            // Get form input values
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const phoneNumber = document.getElementById("phoneNumber").value;
            const email = document.getElementById("email").value;

            // Construct the alert message with spaces between labels and values
            const alertMessage = "First Name: " + firstName + " " +
                                 "Last Name: " + lastName + " " +
                                 "Phone Number: " + phoneNumber + " " +
                                 "Email ID: " + email;

            // Show alert with the constructed message
            alert(alertMessage);
        });