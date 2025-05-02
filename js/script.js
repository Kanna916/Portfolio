
AOS.init();

document.getElementById('modeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

var typed = new Typed("#typed", {
  strings: ["Software Engineer", "Full-Stack Developer", "Tech Enthusiast"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
});
