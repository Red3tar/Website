const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", e => {
    e.preventDefault();

    const name    = document.getElementById("name").value.trim();
    const email   = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Build a mailto link and open it, so the user's default mail client sends the email.
    // Replace the address below with your destination email.
    const recipient = "noahrobbinson750@gmail.com";

    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;

    // Show a confirmation message after a short delay
    setTimeout(() => {
        status.textContent = "Outlook will open to send your message.Thanks for reaching out!";
        form.reset();
    }, 500);
});
