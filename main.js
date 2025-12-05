// Simple helper for mobile nav dropdown
function handleNavSelect(select) {
  const value = select.value;
  if (value) {
    const section = document.querySelector(value);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    select.value = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Contact form -> open email with pre-filled body
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("cf-name")?.value.trim() || "";
      const dob = document.getElementById("cf-dob")?.value.trim() || "";
      const phone = document.getElementById("cf-phone")?.value.trim() || "";
      const message = document.getElementById("cf-message")?.value.trim() || "";

      const subject = encodeURIComponent("Appointment request from website");

      const bodyLines = [
        "Appointment / consultation request from website:",
        "",
        name ? `Name: ${name}` : "",
        dob ? `Date of birth: ${dob}` : "",
        phone ? `Phone: ${phone}` : "",
        "",
        "Message:",
        message || "(no additional message provided)"
      ].filter(Boolean);

      const body = encodeURIComponent(bodyLines.join("\n"));

      const mailtoUrl = `mailto:appointments@premiergeneralsurgeons.com?subject=${subject}&body=${body}`;

      // Open default email client
      window.location.href = mailtoUrl;
    });
  }
});
