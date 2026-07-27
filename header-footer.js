document.addEventListener("DOMContentLoaded", function () {

    // 1. Inject Header HTML
    const headerElement = document.getElementById("main-header");
    if (headerElement) {
        headerElement.innerHTML = `
        <header class="navbar" id="navbar">
            <div class="nav-container">
                <div class="logo">
                    <img src="jma.png" alt="JMA Logo" class="nav-logo">
                    <div class="logo-text-wrapper">
                        <span class="logo-title">JESUS AND MARY ACADEMY</span>
                        <span class="logo-subtitle">Affiliated to ICSE, New Delhi (10+2)</span>
                    </div>
                </div>

                <button class="mobile-menu-btn" id="mobileMenuBtn" type="button">
                    <span class="hamburger-icon">☰</span>
                    <span class="menu-text">Menu</span>
                </button>

                <nav class="nav-links" id="navLinks">
                    <a href="index.html">Home</a>
                    <a href="about.html">About Us</a>
                    <a href="principal.html">Principal's Message</a>
                    <a href="facilities.html">Facilities</a>
                    <a href="contact.html">Contact Us</a>
                    <a href="https://app.schoolcanvas.com/">Login</a>
                    <a href="https://app.schoolcanvas.com/Admission/jesusandmary
                    " class="btn-primary">Admissions 2026-27</a>
                    
                </nav>
            </div>
        </header>
        `;
    }

    // 2. Inject Floating Action Bar HTML
    const floatingElement = document.getElementById("main-floating-bar");
    if (floatingElement) {
        floatingElement.innerHTML = `
        <div class="floating-action-bar">
            <a href="contact.html" class="floating-btn">
                <span class="btn-icon">ℹ</span>
                <span class="btn-text">Inquire</span>
            </a>
            <a href="contact.html" class="floating-btn">
                <span class="btn-icon">📍</span>
                <span class="btn-text">Visit</span>
            </a>
            <a href="admissions.html" class="floating-btn">
                <span class="btn-icon">✍</span>
                <span class="btn-text">Apply</span>
            </a>
            <a href="admissions.html" class="floating-btn">
                <span class="btn-icon">♥</span>
                <span class="btn-text">Support</span>
            </a>
        </div>
        `;
    }

    /// 3. Inject Footer HTML
const footerElement = document.getElementById("main-footer") || document.getElementById("footer");

if (footerElement) {
    footerElement.innerHTML = `
    <footer class="site-footer">
        <a href="#navbar" class="back-to-top" id="backToTopBtn" title="Back to Top">
            <span class="arrow">↑</span>
            <span class="text">Back to Top</span>
        </a>

        <div class="footer-container">
            <div class="footer-header-branding">
                <div class="footer-divider-line"></div>
                <div class="footer-brand-center">
                    <img src="jma.png" alt="Jesus and Mary Academy Logo" class="footer-logo-img">
                    <h2 class="footer-school-title">JESUS AND MARY ACADEMY</h2>
                    <p class="footer-school-tagline">STRENGTH OF INTELLECT • STRENGTH OF CHARACTER</p>
                </div>
                <div class="footer-divider-line"></div>
            </div>

            <div class="footer-content-grid">
                <!-- Left Column -->
                <div class="footer-col footer-col-left">
                    <h3 class="footer-heading">Contact Us</h3>
                    <address class="footer-address">
                        Patna City Campus<br>
                        Patna, Bihar 800008<br>
                        <a href="tel:+918709291130" class="footer-phone">+91 8709291130</a>
                        <a href="tel:+918709291130" class="footer-phone">+91 8709291130</a>
                    </address>
                    <a href="admissions.html" class="btn-Admission">
                        <span class="Admissions"></span> ADMISSIONS
                    </a>
                </div>

                <!-- Center Column -->
                <div class="footer-col footer-col-center">
                    <!-- Social Media Links -->
                    <div class="footer-social-icons">
                        <a href="#" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    </div>

                    <p class="footer-intro-text">
                        Experience Patna education at its best at Jesus and Mary Academy. 
                        Providing quality education with a vibrant, close-knit community. 
                        JMA fosters student independence and fuels a lifelong love of learning.
                    </p>

                    <div class="footer-action-buttons">
                        <a href="contact.html" class="action-circle-btn">
                            <div class="icon-circle">ℹ</div>
                            <span>INQUIRE</span>
                        </a>
                        <a href="contact.html" class="action-circle-btn">
                            <div class="icon-circle">📍</div>
                            <span>VISIT</span>
                        </a>
                        <a href="admissions.html" class="action-circle-btn">
                            <div class="icon-circle">✍</div>
                            <span>APPLY</span>
                        </a>
                    </div>
                </div>

                <!-- Right Column -->
                <div class="footer-col footer-col-right">
                    <h3 class="footer-heading">Quick Links</h3>
                    <ul class="footer-nav-list">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="principal.html">Principal's Message</a></li>
                        <li><a href="facilities.html">Facilities</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="admissions.html">Admissions</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2026 Jesus and Mary Academy. All Rights Reserved.</p>
                <div class="powered-by">
                    <span>Created by Hritik Patel</span>
                </div>
            </div>
        </div>
    </footer>
    `;
}
    // 4. Mobile Menu Toggle Logic
    const menuBtn = document.getElementById("mobileMenuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {
        menuBtn.onclick = function (e) {
            e.stopPropagation();
            navLinks.classList.toggle("show-menu");
            const icon = menuBtn.querySelector(".hamburger-icon");
            if (navLinks.classList.contains("show-menu")) {
                if (icon) icon.textContent = "✕";
            } else {
                if (icon) icon.textContent = "☰";
            }
        };

        window.addEventListener("scroll", function () {
            if (navLinks.classList.contains("show-menu")) {
                navLinks.classList.remove("show-menu");
                const icon = menuBtn.querySelector(".hamburger-icon");
                if (icon) icon.textContent = "☰";
            }
        }, { passive: true });
    }
});
/* ==========================================
   Universal 4-Button Floating Bar with Auto-Shake Effect
   ========================================== */

function injectFloatingBar() {
    // Purane bars clear karo duplicate se bachne ke liye
    const existingBars = document.querySelectorAll(".floating-action-bar, .floating-menu");
    existingBars.forEach(bar => bar.remove());

    const floatingBar = document.createElement("div");
    floatingBar.className = "floating-action-bar";

    floatingBar.innerHTML = `
        <!-- 1. WhatsApp Button -->
        <a href="https://wa.me/918709291130?text=Hello%20Jesus%20and%20Mary%20Academy%2C%20I%20have%20an%20inquiry%20regarding%20admissions." 
           target="_blank" 
           rel="noopener noreferrer" 
           class="floating-btn" 
           title="WhatsApp">
            <span class="btn-icon">
                <svg width="22" height="22" fill="#ffffff" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
            </span>
            <span class="btn-text">WhatsApp</span>
        </a>

        <!-- 2. Call Button -->
        <a href="tel:+918709291130" class="floating-btn" title="Call Us">
            <span class="btn-icon">
                <svg width="20" height="20" fill="#ffffff" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
            </span>
            <span class="btn-text">Call Us</span>
        </a>

        <!-- 3. Admissions Button -->
        <a href="contact.html" class="floating-btn" title="Admissions">
            <span class="btn-icon">
                <svg width="20" height="20" fill="#ffffff" viewBox="0 0 24 24">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
            </span>
            <span class="btn-text">Admissions</span>
        </a>

        <!-- 4. Location Button -->
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" class="floating-btn" title="Location">
            <span class="btn-icon">
                <svg width="20" height="20" fill="#ffffff" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
            </span>
            <span class="btn-text">Location</span>
        </a>
    `;

    document.body.appendChild(floatingBar);

    // Dynamic Styling with Shake Animation
    if (!document.getElementById("floating-custom-styles")) {
        const styleTag = document.createElement("style");
        styleTag.id = "floating-custom-styles";
        styleTag.innerHTML = `
            .floating-action-bar {
                position: fixed !important;
                right: 20px !important;
                top: 50% !important;
                transform: translateY(-50%) !important;
                display: flex !important;
                flex-direction: column !important;
                align-items: flex-end !important;
                gap: 12px !important;
                z-index: 99999 !important;
            }

            .floating-btn {
                display: inline-flex !important;
                align-items: center !important;
                justify-content: flex-start !important;
                height: 48px !important;
                width: auto !important;
                max-width: 48px !important;
                background-color: #b91c1c !important;
                color: #ffffff !important;
                border-radius: 999px !important;
                text-decoration: none !important;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
                overflow: hidden !important;
                transition: max-width 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease !important;
                box-sizing: border-box !important;
            }

            .floating-btn:hover {
                max-width: 170px !important;
                background-color: #991b1b !important;
            }

            .floating-btn .btn-icon {
                width: 48px !important;
                height: 48px !important;
                min-width: 48px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                flex-shrink: 0 !important;
            }

            .floating-btn .btn-text {
                opacity: 0;
                visibility: hidden;
                white-space: nowrap;
                font-size: 0.9rem;
                font-weight: 600;
                color: #ffffff !important;
                transition: opacity 0.25s ease 0.1s, visibility 0.25s ease 0.1s;
            }

            .floating-btn:hover .btn-text {
                opacity: 1;
                visibility: visible;
                padding-right: 16px;
            }

            /* Shake Class Triggered via JS */
            .shake-active {
                animation: buttonShake 0.6s cubic-bezier(.36,.07,.19,.97) both !important;
            }

            /* Keyframe Definition for Subtle Shake */
            @keyframes buttonShake {
                0%, 100% { transform: scale(1) rotate(0deg); }
                15% { transform: scale(1.1) rotate(-8deg); }
                30% { transform: scale(1.1) rotate(8deg); }
                45% { transform: scale(1.1) rotate(-6deg); }
                60% { transform: scale(1.1) rotate(6deg); }
                75% { transform: scale(1.05) rotate(-3deg); }
            }

            @media (max-width: 768px) {
                .floating-action-bar { right: 10px !important; gap: 10px !important; }
                .floating-btn { height: 42px !important; max-width: 42px !important; }
                .floating-btn .btn-icon { width: 42px !important; height: 42px !important; min-width: 42px !important; }
                .floating-btn:hover { max-width: 140px !important; }
                .floating-btn .btn-text { font-size: 0.75rem !important; }
            }
        `;
        document.head.appendChild(styleTag);
    }

    // Har 4 Seconds par Buttons par Wave/Shake Effect Trigger karne ki Logic
    setInterval(() => {
        const btns = document.querySelectorAll(".floating-btn");
        btns.forEach((btn, index) => {
            // Staggered delay taaki saare buttons ek saath mat shake hoke sequence me hilein
            setTimeout(() => {
                btn.classList.add("shake-active");
                setTimeout(() => {
                    btn.classList.remove("shake-active");
                }, 600); // 0.6s baad class remove
            }, index * 120); // 120ms ka slight stagger delay
        });
    }, 2000); // Har 4.5 seconds me repeat hoga
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectFloatingBar);
} else {
    injectFloatingBar();
}
/* ==========================================
   Homepage-Only Announcement Marquee Strip
   ========================================== */

function injectAdmissionMarquee() {
    // 1. Check if user is on Homepage
    const currentPath = window.location.pathname;
    const isHomePage = currentPath === "/" || 
                       currentPath.endsWith("/index.html") || 
                       currentPath.endsWith("/");

    // Agar Inner Page hai to strip mat banao
    if (!isHomePage) return;

    // Duplicate insertion check
    if (document.querySelector(".admission-marquee-strip")) return;

    const marqueeContainer = document.createElement("a");
    marqueeContainer.className = "admission-marquee-strip";
    marqueeContainer.href = "https://app.schoolcanvas.com/Admission/jesusandmary"; 
    marqueeContainer.title = "Click to apply for Admission";

    marqueeContainer.innerHTML = `
        <div class="marquee-track">
            <span class="marquee-item">📢 Admissions Open for Session 2026–27 | Click Here to Apply Now!</span>
            <span class="marquee-item">📢 Admissions Open for Session 2026–27 | Click Here to Apply Now!</span>
            <span class="marquee-item">📢 Admissions Open for Session 2026–27 | Click Here to Apply Now!</span>
            <span class="marquee-item">📢 Admissions Open for Session 2026–27 | Click Here to Apply Now!</span>
        </div>
    `;

    const headerElement = document.querySelector("header") || 
                          document.querySelector("#navbar") || 
                          document.querySelector(".navbar");

    if (headerElement) {
        headerElement.insertAdjacentElement('afterend', marqueeContainer);

        // Header height offset calculation
        const headerStyle = window.getComputedStyle(headerElement);
        if (headerStyle.position === 'fixed' || headerStyle.position === 'sticky') {
            const headerHeight = headerElement.offsetHeight;
            marqueeContainer.style.marginTop = headerHeight + 'px';
        }
    } else {
        document.body.insertBefore(marqueeContainer, document.body.firstChild);
    }

    if (!document.getElementById("marquee-strip-styles")) {
        const styleTag = document.createElement("style");
        styleTag.id = "marquee-strip-styles";
        styleTag.innerHTML = `
            .admission-marquee-strip {
                display: block !important;
                width: 100% !important;
                background-color: #b91c1c !important; /* Dark Red */
                color: #ffffff !important;
                text-decoration: none !important;
                overflow: hidden !important;
                white-space: nowrap !important;
                padding: 8px 0 !important;
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
                position: relative !important;
                z-index: 98 !important;
                cursor: pointer !important;
                box-sizing: border-box !important;
            }

            .admission-marquee-strip:hover {
                background-color: #991b1b !important;
            }

            .marquee-track {
                display: inline-flex !important;
                gap: 60px !important;
                animation: marqueeScroll 20s linear infinite !important;
                will-change: transform;
            }

            .admission-marquee-strip:hover .marquee-track {
                animation-play-state: paused !important;
            }

            .marquee-item {
                font-size: 0.88rem !important;
                font-weight: 700 !important;
                letter-spacing: 0.5px !important;
                display: inline-flex !important;
                align-items: center !important;
                white-space: nowrap !important;
            }

            @keyframes marqueeScroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }

            @media (max-width: 768px) {
                .admission-marquee-strip { padding: 6px 0 !important; }
                .marquee-item { font-size: 0.78rem !important; }
            }
        `;
        document.head.appendChild(styleTag);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectAdmissionMarquee);
} else {
    injectAdmissionMarquee();
}
document.addEventListener("DOMContentLoaded", function () {


    // 2. Footer Injection (Along with Left-Side Floating Social Buttons)
    const footerElem = document.getElementById("footer") || document.getElementById("footer");
    if (footerElem) {
        footerElem.insertAdjacentHTML('beforeend', `
            <footer class="site-footer" style="background: #1a252f; color: #fff; text-align: center; padding: 20px;">
                <p>&copy; 2026 Jesus and Mary Academy. All Rights Reserved.</p>
            </footer>

            <!-- Left Side Floating Social Buttons -->
            <div class="left-floating-socials">
                <a href="https://www.instagram.com/jesusandmaryacademy?igsh=MTA5YmE0YnB0djVt" target="_blank" class="social-float-btn insta-btn" title="Follow us on Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </a>
                <a href="https://www.facebook.com/share/1FLupVGjvW/" target="_blank" class="social-float-btn fb-btn" title="Follow us on Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.588 9 4.71V8z"/>
                    </svg>
                </a>
            </div>
        `);
    }
});

// Mobile Menu Toggle Function
function toggleMobileMenu() {
    const navMenu = document.querySelector(".main-nav") || document.querySelector(".nav-menu");
    if (navMenu) {
        navMenu.classList.toggle("active");
    }
}
