// ==================== NAVIGATION ==================== //
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ==================== DOWNLOAD FUNCTION ==================== //
function downloadGame(gameName, downloadLink) {
    const modal = document.getElementById('downloadModal');
    const gameNameEl = document.getElementById('gameName');
    const downloadInfoEl = document.getElementById('downloadInfo');

    gameNameEl.textContent = `Játék: ${gameName}`;
    downloadInfoEl.textContent = 'A letöltés azonnal megkezdődik...';
    
    modal.style.display = 'block';

    // Simulate download start
    setTimeout(() => {
        downloadInfoEl.textContent = `✅ ${gameName} letöltése elindult!`;
        
        // Start actual download
        if (downloadLink && downloadLink !== 'https://example.com/') {
            const link = document.createElement('a');
            link.href = downloadLink;
            link.download = gameName.replace(/\s+/g, '-').toLowerCase();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            downloadInfoEl.textContent = '⚠️ Letöltési link hamarosan elérhető lesz!';
        }
    }, 500);
}

// ==================== MODAL FUNCTIONS ==================== //
function closeModal() {
    const modal = document.getElementById('downloadModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('downloadModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// ==================== SCROLL EFFECTS ==================== //
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 25px rgba(233, 69, 96, 0.2)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ==================== INTERSECTION OBSERVER ==================== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.game-card').forEach(card => {
    observer.observe(card);
});

// ==================== DARK MODE (optional) ==================== //
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ==================== KEYBOARD SHORTCUTS ==================== //
document.addEventListener('keydown', function(event) {
    // Escape to close modal
    if (event.key === 'Escape') {
        closeModal();
    }
    
    // Alt + G to go to games section
    if (event.altKey && event.key === 'g') {
        document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
    }
});

// ==================== CONSOLE MESSAGE ==================== //
console.log('%c🎮 FreeGAMES', 'font-size: 24px; color: #00d4ff; font-weight: bold;');
console.log('%cIngyenes játékok, korlátlan szórakozás!', 'font-size: 16px; color: #e94560;');
console.log('%cGitHub: https://github.com/tradex915-code/FreeGAMES', 'font-size: 12px; color: #b0b0b0;');
