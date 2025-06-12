const container = document.getElementById('container');
const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');

signUpBtn.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInBtn.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});
function learnMore() {
  alert("Thank you for your interest! More information coming soon.");
}
document.addEventListener("DOMContentLoaded", () => {
  console.log("Rental deals section loaded.");
  
  const items = document.querySelectorAll(".deal-item");

  items.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.style.backgroundColor = "#eef7ff";
    });

    item.addEventListener("mouseleave", () => {
      item.style.backgroundColor = "#fff";
    });
  });
});

// Toggle between Sign In / Sign Up
document.addEventListener("DOMContentLoaded", () => {
  const signUpBtn = document.getElementById("signUp");
  const signInBtn = document.getElementById("signIn");
  const container = document.getElementById("container");

  if (signUpBtn && signInBtn && container) {
    signUpBtn.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInBtn.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  }
});

// Contact form validation (basic)
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! We'll get back to you soon.");
});


// Learn More button

function learnMore() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}
const parts = [
  {
    brand: 'Volkswagen',
    name: 'Engine',
    image: 'assets/volkswagen-engine.png',
    description: 'Volkswagen high-efficiency petrol engine.',
  },
  {
    brand: 'Ford',
    name: 'Battery',
    image: 'assets/ford-battery.png',
    description: 'Long-lasting Ford car battery.',
  },
  {
    brand: 'BMW',
    name: 'Brake Pads',
    image: 'assets/bmw-brake.png',
    description: 'BMW ceramic brake pads for performance.',
  },
  {
    brand: 'Hyundai',
    name: 'Headlights',
    image: 'assets/hyundai-headlight.png',
    description: 'Bright LED headlights for Hyundai.',
  },
  {
    brand: 'Mercedes',
    name: 'Tyres',
    image: 'assets/mercedes-tyre.png',
    description: 'Durable radial tyres for Mercedes-Benz.',
  },
  {
    brand: 'Bosch',
    name: 'Alternator',
    image: 'assets/alternator.png',
    description: 'Bosch alternator that powers vehicle electronics.',
  },
  {
    brand: 'Delco',
    name: 'Starter Motor',
    image: 'assets/starter-motor.png',
    description: 'Delco Remy high torque starter motor.',
  },
  {
    brand: 'Generic',
    name: 'Fuse Box',
    image: 'assets/fuse-box.png',
    description: 'Universal car fuse box with labeled fuses.',
  }
];

const slider = document.getElementById('partsSlider');

parts.forEach(part => {
  const card = document.createElement('div');
  card.className = 'part-cart';
  card.innerHTML = `
    <img src="${part.image}" alt="${part.brand} ${part.name}" class="part-image" />
    <h2>${part.brand}</h2>
    <h3>${part.name}</h3>
    <p>${part.description}</p>
  `;
  slider.appendChild(card);
});


function scrollLeft() {
  document.getElementById('partsSlider').scrollBy({
    left: -300,
    behavior: 'smooth'
  });
}

function scrollRight() {
  document.getElementById('partsSlider').scrollBy({
    left: 300,
    behavior: 'smooth'
  });};


    let loadMoreBtn = document.querySelector('.packagers .load-more .btn');
let currentItem = 3;

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll('.packagers .boxes-containers .boxes')];

  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = 'inline-block';
  }

  currentItem += 3;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none';
  }
};
