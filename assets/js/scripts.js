 // Initialize AOS for scroll animations
    AOS.init({
      duration: 800,
      once: true
    });

    // Animation on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, {
      threshold: 0.1
    });
    
    fadeElements.forEach(el => {
      observer.observe(el);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
      } else {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = 'none';
      }
    });

    // Terminal typing effect
    const terminalText = document.querySelector('.terminal-text');
    const originalText = terminalText.textContent;
    terminalText.textContent = '';
    
    let charIndex = 0;
    function typeTerminalText() {
      if (charIndex < originalText.length) {
        terminalText.textContent += originalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeTerminalText, 50);
      } else {
        terminalText.style.borderRight = '2px solid var(--terminal-green)';
      }
    }
    
    setTimeout(typeTerminalText, 1000);
