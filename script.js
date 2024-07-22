document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('.carousel-inner');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  let currentIndex = 1;

  function updateCarousel() {
      items.forEach((item, index) => {
          item.classList.remove('active');
          if (index === currentIndex) {
              item.classList.add('active');
          }
      });

      // Calculate the offset to center the active item
      const offset = -(currentIndex - 1) * 33.33;
      carousel.style.transform = `translateX(${offset}%)`;
  }

  document.querySelector('.prev').addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
      updateCarousel();
  });

  document.querySelector('.next').addEventListener('click', () => {
      currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
      updateCarousel();
  });

  updateCarousel();
});
