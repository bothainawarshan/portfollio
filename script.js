// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 20, // Adjust for header height
        behavior: 'smooth'
      });
    }
  });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + 100; // Adjust for header height

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      document
        .querySelector('.nav-links a[href="#' + sectionId + '"]')
        .classList.add('active');
    } else {
      document
        .querySelector('.nav-links a[href="#' + sectionId + '"]')
        .classList.remove('active');
    }
  });
});