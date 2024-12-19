document.addEventListener('DOMContentLoaded', () => {
    // Add a class to show which page is active
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('text-blue-600');
        }
    });

    // Add smooth scrolling to internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add a simple animation to the skills list on the resume page
    if (currentPage === 'resume.html') {
        const skillsList = document.querySelector('.skills-list');
        if (skillsList) {
            skillsList.style.opacity = '0';
            setTimeout(() => {
                skillsList.style.transition = 'opacity 0.5s ease-in-out';
                skillsList.style.opacity = '1';
            }, 300);
        }
    }

    // Add hover effect to job titles
    const jobTitles = document.querySelectorAll('.job h3');
    jobTitles.forEach(title => {
        title.addEventListener('mouseenter', () => {
            title.style.color = '#1e40af'; // Darker blue on hover
        });
        title.addEventListener('mouseleave', () => {
            title.style.color = '#2563eb'; // Back to original blue
        });
    });

    // Add fade-in effect for sections
    const sections = document.querySelectorAll('section');
    const fadeInSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100');
                entry.target.classList.remove('opacity-0');
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(fadeInSection, {
        root: null,
        threshold: 0.1
    });

    sections.forEach(section => {
        section.classList.add('opacity-0', 'transition-opacity', 'duration-500');
        sectionObserver.observe(section);
    });
});

