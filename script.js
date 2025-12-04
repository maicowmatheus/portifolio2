// Inicializar Animações (AOS)
AOS.init({
    duration: 1000,
    once: true,
    offset: 50
});

// Navbar Efeito Vidro ao rolar
const nav = document.querySelector('.glass-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 10, 0.98)';
        nav.style.padding = '0.8rem 5%';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.9)';
        nav.style.padding = '1rem 5%';
    }
});

/* --- ZEUS UPDATE: LÓGICA DO MENU MOBILE --- */
const mobileBtn = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a'); // Links dentro do menu

if(mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        
        // Alterna ícone entre barras e X
        const icon = mobileBtn.querySelector('i');
        if (menu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Fechar menu ao clicar em um link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        const icon = mobileBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});
/* ------------------------------------------- */

// Scroll Suave para Links Internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simulação de Envio de Formulário
const form = document.getElementById('contactForm');
if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('.btn-submit');
        const originalText = btn.innerText;

        btn.innerText = 'Enviando...';
        btn.style.opacity = '0.7';

        setTimeout(() => {
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
            btn.innerText = originalText;
            btn.style.opacity = '1';
        }, 1500);
    });
}