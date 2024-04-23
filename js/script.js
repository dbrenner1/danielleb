document.addEventListener('DOMContentLoaded', function () {
    const clickableImages = document.querySelectorAll('.clickable-image');

    clickableImages.forEach(image => {
        image.addEventListener('click', function() {
            const toggleImage = this.nextElementSibling;
            toggleImage.style.display = toggleImage.style.display === 'none' ? 'block' : 'none';
        });
    });

    const toggleImages = document.querySelectorAll('.toggle-image');

    toggleImages.forEach(toggleImage => {
        toggleImage.addEventListener('click', function() {
            this.style.display = 'none';
        });
    });
});

const runContainers = document.querySelectorAll('.run-container');

runContainers.forEach(container => {
  container.addEventListener('mouseenter', function() {
    const image = this.querySelector('img');
    image.style.transform = 'scale(1.2)'; 
  });

  container.addEventListener('mouseleave', function() {
    const image = this.querySelector('img');
    image.style.transform = 'scale(1)'; 
  });
});





