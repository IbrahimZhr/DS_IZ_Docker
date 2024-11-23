
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("click-me-btn");
    const message = document.getElementById("message");

    button.addEventListener("click", () => {
        message.textContent = "Button clicked! Welcome to My Web App!";
        message.style.color = "#007acc";
    });
});

// Export the function for testing purposes
module.exports = {
    getMessage: () => "Button clicked! It's about the journey not the destination!"
};
