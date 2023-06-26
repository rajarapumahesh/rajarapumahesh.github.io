// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < anchorLinks.length; i++) {
    anchorLinks[i].addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        var offset = target.offsetTop;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    });
  }
});

// Form submission validation
document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      var nameInput = document.querySelector('#name');
      var emailInput = document.querySelector('#email');
      var messageInput = document.querySelector('#message');
      var errorMessage = document.querySelector('#errorMessage');
      
      if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        e.preventDefault();
        errorMessage.textContent = 'Please fill in all fields.';
        errorMessage.style.display = 'block';
      }
    });
  }
});
