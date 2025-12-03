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

// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
