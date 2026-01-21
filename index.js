fetch('https://api.github.com/repos/Skroomy/glass-bio')
  .then(response => response.json())
  .then(data => {
    if(data.stargazers_count > 1){
      document.getElementById("stars").innerHTML = data.stargazers_count + " people have stared this already!"
    }
    else if(data.stargazers_count == 1){
      document.getElementById("stars").innerHTML = data.stargazers_count + " person has stared this already!"
    }
    else if(data.stargazers_count == 0){
      document.getElementById("stars").innerHTML = "Be the first one to star it!"
    }
    
  });

const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-image');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let index = 0;

function updateCarousel() {
  const width = images[0].clientWidth;
  track.style.transform = `translateX(${-index * width}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length; // Loops back to start
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length; // Loops to end
  updateCarousel();
});

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const parent = question.parentElement;
    
    // Optional: Close other open items (Accordion effect)
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== parent) {
        item.classList.remove('active');
      }
    });

    // Toggle the current item
    parent.classList.toggle('active');
  });
});