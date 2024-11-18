// Basic form validation example
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        alert("Message sent successfully!");
    } else {
        alert("Please fill in all fields.");
    }
});
