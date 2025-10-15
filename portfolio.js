// 1. Mobile Menu Toggle
const nav = document.querySelector('nav ul');
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.innerHTML = '☰';
mobileMenuBtn.className = 'mobile-menu-btn';
document.querySelector('nav').prepend(mobileMenuBtn);

mobileMenuBtn.addEventListener('click', () => {
  nav.classList.toggle('show-mobile');
});

// 2. Smooth Scrolling for Menu Links
document.querySelectorAll('nav ul li a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substr(1);
    document.getElementById(targetID).scrollIntoView({ behavior: 'smooth' });
    nav.classList.remove('show-mobile');
  });
});

// 3. Scroll to Top Button
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '↑';
scrollBtn.className = 'scroll-top';
document.body.append(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 4. Typing Animation (for Professional Summary)
// // function typeText(element, text, speed) {
// //   let idx = 0;
// //   function type() {
// //     if(idx < text.length){
// //       element.textContent += text[idx++];
// //       setTimeout(type, speed);
// //     }
//   }
//   type();
// }
// const summary = document.querySelector('.hero-content p');
// if(summary){
//   const originalText = summary.textContent;
//   summary.textContent = '';
//   typeText(summary, originalText, 40);
// }

// 5. Resume Download Feedback
const resumeLink = document.querySelector('nav ul li a[href$="resume.pdf"]');
if(resumeLink){
  resumeLink.addEventListener('click', () => {
    resumeLink.innerHTML = 'Getting resume...';
    setTimeout(() => {
      resumeLink.innerHTML = 'More About Me <i class="bi bi-download"></i>';
    }, 2000);
  });
}
