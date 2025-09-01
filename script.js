// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    // Tab switching function
    function switchTab(targetTab) {
        // Remove active class from all links and contents
        tabLinks.forEach(link => link.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked link and corresponding content
        const activeLinks = document.querySelectorAll(`[data-tab="${targetTab}"]`);
        activeLinks.forEach(link => link.classList.add('active'));
        
        const targetContent = document.getElementById(targetTab);
        if (targetContent) {
            targetContent.classList.add('active');
        }

        // Close mobile menu if open
        menu.classList.remove('show');
    }

    // Add click event listeners to all tab links
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetTab = this.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });

// Truck gallery scroll buttons
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const gallery = document.querySelector('.gallery-container');

leftBtn.addEventListener('click', () => {
  gallery.scrollBy({ left: -300, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  gallery.scrollBy({ left: 300, behavior: 'smooth' });
});


    // Hamburger menu functionality
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            menu.classList.remove('show');
        }
    });

    // Close menu when mouse leaves
    menu.addEventListener('mouseleave', function() {
        menu.classList.remove('show');
    });

    // Form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const eventType = formData.get('event-type');
            
            // Simple validation
            if (!name || !phone) {
                alert('Please fill in all required fields (Name and Phone).');
                return;
            }
            
            // Success message
            alert(`Thank you ${name}! We will contact you soon regarding your ${eventType || 'request'}.`);
            this.reset();
        });
    }

    // Add smooth scrolling for CTA button
    const ctaButtons = document.querySelectorAll('.cta-button[data-tab]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetTab = this.getAttribute('data-tab');
            if (targetTab) {
                switchTab(targetTab);
                // Smooth scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });

    tabLinks.forEach(link => {
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const targetTab = this.getAttribute('data-tab');
                switchTab(targetTab);
            }
        });
    });

    switchTab('home');
});



document.addEventListener('DOMContentLoaded', function() {
 

    const header = document.querySelector('.header');

    // Shrink header on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 30) {
            header.classList.add('small');
        } else {
            header.classList.remove('small');
        }
    });

    // Expand header on hover
    header.addEventListener('mouseenter', function() {
        header.classList.remove('small');
    });

    // Shrink again when mouse leaves and scrolled down
    header.addEventListener('mouseleave', function() {
        if (window.scrollY > 30) {
            header.classList.add('small');
        }
    });

});

document.querySelectorAll('.tab-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const tab = this.getAttribute('data-tab');

    // Tab switching logic
    document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    document.getElementById(tab).classList.add('active');

    // Scroll all the way to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});