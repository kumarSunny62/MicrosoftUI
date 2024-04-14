function toggleSidebarBtn() {
  let hamburger = document.getElementById("hamburger");
  let close = document.getElementById("close");
  let sidebar = document.getElementById("sidebar")
  let headerImage = document.getElementById("headerImage")
  hamburger.classList.toggle("hidden")
  close.classList.toggle("hidden")
  sidebar.classList.toggle("hidden")
  headerImage.classList.toggle("hidden")
}
let currentIndex = 1; // Start with the first slide
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    // Show the slide at the given index
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Increment index circularly
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Decrement index circularly
    showSlide(currentIndex);
}

// Automatically switch slides every 5 seconds
setInterval(nextSlide, 5000);

// Show the first slide initially
showSlide(currentIndex);
