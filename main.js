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
    // Contact form: Formspree submission
    // -----------------------------
    // The form now submits directly to Formspree via AJAX instead of
    // opening an email client. This provides inline feedback without
    // leaving the page.
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", async (event) => {
            // Prevent the browser's default form submission behavior
            event.preventDefault();
            
            const statusDiv = document.getElementById("form-status");
            const submitButtons = form.querySelectorAll('button[type="submit"]');
            
            // Disable submit buttons during submission
            submitButtons.forEach(btn => {
                btn.disabled = true;
                btn.style.opacity = "0.6";
            });
            
            try {
                // Submit form data to Formspree
                const response = await fetch(form.action, {
                    method: "POST",
                    body: new FormData(form),
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Success message
                    statusDiv.innerHTML = `
                        <div style="padding: 1rem; background: #dcfce7; border: 1px solid #86efac; border-radius: 8px; color: #166534;">
                            <strong>✓ Message sent successfully!</strong> We'll contact you soon.
                        </div>
                    `;
                    statusDiv.style.display = "block";
                    form.reset(); // Clear the form
                } else {
                    throw new Error("Form submission failed");
                }
            } catch (error) {
                // Error message
                statusDiv.innerHTML = `
                    <div style="padding: 1rem; background: #fee2e2; border: 1px solid #fca5a5; border-radius: 8px; color: #991b1b;">
                        <strong>× Error:</strong> Unable to send message. Please call (956) 621-4981 or email directly.
                    </div>
                `;
                statusDiv.style.display = "block";
            } finally {
                // Re-enable submit buttons
                submitButtons.forEach(btn => {
                    btn.disabled = false;
                    btn.style.opacity = "1";
                });
            }
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
