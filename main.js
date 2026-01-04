// main.js
// This file contains small, plain JavaScript helpers for the website UI.
// It does NOT require a framework. The sections below handle:
// - mobile hamburger menu toggle,
// - setting the current year in the footer,
// - turning the contact form submission into a pre-filled email (mailto),
// - and a simple language toggle that uses `localStorage`.

// -----------------------------
// Mobile navigation menu
// -----------------------------
document.documentElement.classList.add("js");

// Wait until the HTML document is fully loaded before querying DOM nodes
document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const menuOverlay = document.querySelector('.mobile-menu-overlay');
    const menuLinks = document.querySelectorAll('.mobile-menu-link');

    if (menuToggle && menuOverlay) {
        // Toggle menu on button click
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            menuOverlay.classList.toggle('active');
            document.body.style.overflow = !isExpanded ? 'hidden' : '';
        });

        // Close menu when clicking overlay
        menuOverlay.addEventListener('click', (e) => {
            if (e.target === menuOverlay) {
                menuToggle.setAttribute('aria-expanded', 'false');
                menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking a link
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.setAttribute('aria-expanded', 'false');
                menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // -----------------------------
    // Footer: set the current year
    // -----------------------------
    // This keeps the copyright year up-to-date automatically.
    const yearEl = document.getElementById("year");
    if (yearEl) {
        // `new Date().getFullYear()` returns the current year as a number
        yearEl.textContent = new Date().getFullYear();
    }

    // -----------------------------
    // Contact form: open user's email client
    // -----------------------------
    // The site uses a simple pattern: instead of sending the form to a
    // server, we open the user's default email client with a pre-filled
    // email (`mailto:`). This is useful for small sites where a backend
    // isn't available. The code below collects form values and builds
    // a properly encoded `mailto:` URL.
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", (event) => {
            // Prevent the browser's default form submission behavior
            event.preventDefault();

            // Read values from the form inputs safely. The `?.` operator
            // prevents errors if an element is missing, and `trim()` removes
            // extra whitespace. The `|| ""` ensures we always have a string.
            // Safely read input values. If an element is missing, fall back to
            // an empty string before calling `trim()` to avoid runtime errors.
            const name = (document.getElementById("cf-name")?.value || "").trim();
            const dob = (document.getElementById("cf-dob")?.value || "").trim();
            const phone = (document.getElementById("cf-phone")?.value || "").trim();
            const message = (document.getElementById("cf-message")?.value || "").trim();

            // `encodeURIComponent` is used to make strings safe for use in
            // URLs (it escapes characters like spaces, &, ? and newlines).
            const subject = encodeURIComponent("Appointment request from website");

            // Build the body as multiple lines, filtering out any empty lines
            // so the email body looks neat even if some fields are blank.
            const bodyLines = [
                "Appointment / consultation request from website:",
                "",
                name ? `Name: ${name}` : "",
                dob ? `Date of birth: ${dob}` : "",
                phone ? `Phone: ${phone}` : "",
                "",
                "Message:",
                message || "(no additional message provided)",
            ].filter(Boolean);

            // Join lines with a newline character, then encode for the URL
            const body = encodeURIComponent(bodyLines.join("\n"));

            // Construct the mailto URL. When the browser navigates to this URL
            // it opens the user's default email client with the fields filled.
            const mailtoUrl = `mailto:appointments@premiergeneralsurgeon.com?subject=${subject}&body=${body}`;

            // Navigate to the mailto URL to open the email client. This does
            // not send the email automatically — the user must click send.
            window.location.href = mailtoUrl;
        });
    }

    // -----------------------------
    // Language toggle (simple, client-side)
    // -----------------------------
    // This small feature toggles between English and Spanish by setting
    // attributes on the `<html>` element and storing the choice in
    // `localStorage` so the preference persists between visits.
    const htmlEl = document.documentElement;
    const langButtons = document.querySelectorAll(".lang-btn");

    // `setLang` applies the language to the page and highlights the active
    // language button. It accepts 'es' for Spanish; any other value
    // defaults to English ('en').
    function setLang(lang) {
        const normalized = lang === "es" ? "es" : "en";
        // `data-lang` can be used in CSS, and the `lang` attribute is used
        // by screen readers and search engines.
        htmlEl.setAttribute("data-lang", normalized);
        htmlEl.setAttribute("lang", normalized);
        // Save the preference so it persists on future visits
        localStorage.setItem("pgsLang", normalized);

        // Update the visual state of language buttons and accessibility attrs.
        langButtons.forEach((btn) => {
            const isActive = btn.getAttribute("data-lang") === normalized;
            btn.classList.toggle("lang-btn-active", isActive);
            // Expose pressed state for assistive tech
            btn.setAttribute("aria-pressed", isActive ? "true" : "false");
        });

        // Toggle visibility for language-specific content. We explicitly set
        // the `hidden` and `aria-hidden` attributes on elements with the
        // `.lang-en`/`.lang-es` classes. This is reachable, deterministic,
        // and works even if CSS rules are changed later.
        document.querySelectorAll(".lang-en, .lang-es").forEach((el) => {
            const isEn = el.classList.contains("lang-en");
            const isEs = el.classList.contains("lang-es");
            if (isEn) {
                el.hidden = normalized !== "en";
                el.setAttribute("aria-hidden", normalized !== "en" ? "true" : "false");
            }
            if (isEs) {
                el.hidden = normalized !== "es";
                el.setAttribute("aria-hidden", normalized !== "es" ? "true" : "false");
            }
        });
    }

    // ============================================
    // Scroll animations with Intersection Observer
    // ============================================
    // STANDARDIZED SITE-WIDE ANIMATION SYSTEM
    // 
    // Trigger threshold: 0.15 (15% of element visible)
    // Animation styling: defined in style.css
    //   - Duration: 0.5s
    //   - Easing: ease-out
    //   - Effect: fade + 20px upward translate
    // 
    // DO NOT modify threshold without updating
    // documentation in style.css
    // ============================================
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    if (!("IntersectionObserver" in window)) {
        // Fallback for older browsers: just show everything
        animatedElements.forEach((el) => el.classList.add("is-visible"));
    } else {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        // Once it's visible, we don't need to keep watching it
                        obs.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15, // 15% in view triggers the animation
            }
        );

        animatedElements.forEach((el) => observer.observe(el));
    }

    // Initialize language from localStorage or default to English ('en')
    const savedLang = localStorage.getItem("pgsLang") || "en";
    setLang(savedLang);

    // Wire up the buttons so clicking them changes the language
    langButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang");
            setLang(lang);
        });
    });
});
