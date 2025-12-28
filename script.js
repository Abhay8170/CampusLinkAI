// BaeBolo exact animations
document.addEventListener('DOMContentLoaded', () => {
  // Hero title stagger animation
  const titles = document.querySelectorAll('.hero-title');
  titles.forEach((title, i) => {
    title.style.opacity = '0';
    title.style.transform = 'translateY(50px)';
    setTimeout(() => {
      title.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }, i * 200);
  });

  // Stats counter animation
  const stats = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.textContent = '0+';
        const count = parseInt(entry.target.textContent);
        let current = 0;
        const increment = count / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= count) {
            entry.target.textContent = '0+';
            clearInterval(timer);
          }
        }, 20);
      }
    });
  });
  stats.forEach(stat => observer.observe(stat));

  // Feature cards hover
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-24px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
});
