// Global Direct Functions for Video Controls (Window Scope)
function toggleMuteUnmute(btn) {
    const card = btn.closest('.video-card');
    const video = card ? card.querySelector('video') : null;

    if (!video) return;

    if (video.muted) {
        // Step 1: Mute all other videos on the page
        document.querySelectorAll('video').forEach(v => {
            v.muted = true;
            v.volume = 0;
        });
        document.querySelectorAll('.mute-btn').forEach(b => {
            b.textContent = '🔇';
        });

        // Step 2: Unmute targeted video
        video.muted = false;
        video.volume = 1.0;
        
        video.play().then(() => {
            btn.textContent = '🔊';
        }).catch(err => console.log("Audio Play Error:", err));
    } else {
        // Mute target video
        video.muted = true;
        video.volume = 0;
        btn.textContent = '🔇';
    }
}

function togglePlayPause(btn) {
    const card = btn.closest('.video-card');
    const video = card ? card.querySelector('video') : null;

    if (!video) return;

    if (video.paused) {
        video.play().then(() => {
            btn.textContent = '⏸';
        }).catch(err => console.log("Video Play Error:", err));
    } else {
        video.pause();
        btn.textContent = '▶';
    }
}

// Master Initialization on DOM Load
document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       1. BACK TO TOP BUTTON
       ========================================== */
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /* ==========================================
       2. MOBILE MENU & HAMBURGER TOGGLE
       ========================================== */
    const menuBtn = document.getElementById("mobileMenuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {
        menuBtn.onclick = function (e) {
            e.stopPropagation();
            navLinks.classList.toggle("show-menu");

            const icon = menuBtn.querySelector(".hamburger-icon");
            if (icon) {
                icon.textContent = navLinks.classList.contains("show-menu") ? "✕" : "☰";
            }
        };

        // Close menu on scroll
        window.addEventListener("scroll", function () {
            if (navLinks.classList.contains("show-menu")) {
                navLinks.classList.remove("show-menu");
                const icon = menuBtn.querySelector(".hamburger-icon");
                if (icon) icon.textContent = "☰";
            }
        }, { passive: true });

        // Close menu on link click
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function () {
                navLinks.classList.remove("show-menu");
                const icon = menuBtn.querySelector(".hamburger-icon");
                if (icon) icon.textContent = "☰";
            });
        });
    }

   // Accordion & Card Stack Linkage
document.querySelectorAll('.p-accordion-item').forEach(item => {
    item.addEventListener('click', function() {
        // Active Class toggle on Accordion
        document.querySelectorAll('.p-accordion-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');

        // Bring matching card on top
        const cardId = this.getAttribute('data-card');
        document.querySelectorAll('.stacked-card').forEach(card => {
            card.classList.remove('active-card');
        });
        
        const targetCard = document.getElementById(cardId);
        if (targetCard) {
            targetCard.classList.add('active-card');
        }
    });
});

// Card Hover triggers Active State automatically
document.querySelectorAll('.stacked-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        document.querySelectorAll('.stacked-card').forEach(c => c.classList.remove('active-card'));
        this.classList.add('active-card');
    });
});

    /* ==========================================
       4. SWIPER INIT & AUTOPLAY HANDLER
       ========================================== */
    if (document.querySelector('.video-swiper')) {
        const swiper = new Swiper('.video-swiper', {
            loop: true,
            grabCursor: true,
            spaceBetween: 16,
            breakpoints: {
                320: { slidesPerView: 1.3, spaceBetween: 12 },
                576: { slidesPerView: 2.2, spaceBetween: 14 },
                992: { slidesPerView: 4.2, spaceBetween: 16 },
                1400: { slidesPerView: 5.2, spaceBetween: 18 }
            },
            navigation: {
                nextEl: '#nextSlide',
                prevEl: '#prevSlide',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });

        const playAllVideos = () => {
            document.querySelectorAll('.video-card video').forEach(v => {
                v.muted = true;
                const playPromise = v.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => {
                        // Browser autoplay restriction fail-safe
                    });
                }
            });
        };

        playAllVideos();
        swiper.on('slideChangeTransitionEnd', playAllVideos);
    }
});
const swiper = new Swiper('.video-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '#nextSlide',
        prevEl: '#prevSlide',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
    }
});
// Modal Elements
const modalBackdrop = document.getElementById('modal-backdrop');
const closeBtn = document.getElementById('modal-close-btn');
const modalTitle = document.getElementById('modal-title-display');
const modalImg = document.getElementById('modal-img-display');
const modalBody = document.getElementById('modal-body-display');
const modalBtn = document.getElementById('modal-action-btn');

// Open Modal Function with Custom Dynamic Data
function openModal(titleKey) {
    const dataMap = {
        'Multiage Mastery': {
            title: 'Multiage Mastery',
            image: 'Assets/jma5.jpg',
            body: `<p>Multiage classrooms ingeniously bring together students with diverse interests and learning styles, creating an atmosphere that enriches the academic experience for all.</p>
                   <p>Older students assist in mentoring younger peers by exemplifying advanced problem-solving skills, while younger students gain independence and confidence.</p>`,
            btnText: 'LEARN MORE ABOUT MULTIAGE CLASSROOMS →'
        },
        'Robust Honors & ICSE': {
            title: 'Robust Honors & ICSE',
            image: 'Assets/jma3.jpg',
            body: `<p>Our rigorous academic curriculum encourages students to think critically and solve complex real-world problems.</p>
                   <p>Through practical lab experimentation and guided analytical projects, students prepare for top-tier competitive opportunities.</p>`,
            btnText: 'EXPLORE OUR HONORS CURRICULUM →'
        },
        'Interactive Learning': {
            title: 'Interactive Learning',
            image: 'Assets/jma4.jpg',
            body: `<p>Collaborative environments foster team spirit and innovative thinking among students of all age groups.</p>
                   <p>Hands-on workshops, group discussions, and interactive media suites keep engagement high and learning experiential.</p>`,
            btnText: 'DISCOVER CAMPUS FACILITIES →'
        }
    };

    const data = dataMap[titleKey] || dataMap['Multiage Mastery'];

    // Inject data into Modal
    modalTitle.innerText = data.title;
    modalImg.src = data.image;
    modalBody.innerHTML = data.body;
    modalBtn.innerText = data.btnText;

    // Show Modal
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
}

// Close Modal Event Listeners
closeBtn.addEventListener('click', closeModal);

modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
        closeModal();
    }
});

// Close on ESC Keypress
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
        closeModal();
    }
});

function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = ''; // Restore background scrolling
}
function switchTab(event, tabId) {
    document.querySelectorAll('.news-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

function openNewsModal(imageSrc, title, date, description) {
    var modal = document.getElementById('newsModal');
    document.getElementById('modalImg').src = imageSrc;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDate').innerText = date;
    document.getElementById('modalDescription').innerText = description;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeNewsModal(event) {
    var modal = document.getElementById('newsModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
