document.addEventListener("DOMContentLoaded", function() {
    // Contact form validation and success message
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "All fields are required!";
            formMessage.style.color = "red";
        } else {
            formMessage.textContent = "Message sent successfully!";
            formMessage.style.color = "green";
            document.getElementById("contactForm").reset();
        }
    });
});