// Mobile menu and search box
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const loginBtn = document.getElementById('login-btn');
const closeLogin = document.getElementById('close-login');
const login = document.getElementById('login');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  if (mobileMenu.classList.contains('mobile-menu-hidden')) {
    mobileMenu.classList.remove('mobile-menu-hidden',);
    menuBtn.setAttribute("src", "./images/bars-solid (1).svg");
  } else {
    mobileMenu.classList.add('mobile-menu-hidden');
    menuBtn.setAttribute("src", "./images/xmark-solid.svg");
  }
});

loginBtn.addEventListener('click', () => {
  login.classList.add('login-hidden');
  mobileMenu.classList.remove('mobile-menu-hidden'); 
});
closeLogin.addEventListener('click', () => {
  login.classList.remove('login-hidden');
});



// menuBtn.addEventListener('click', () => {
//   // Agar hidden bo'lsa, olib tashlaymiz
//   mobileMenu.classList.remove('hidden');

//   if (mobileMenu.classList.contains('mobile-menu-hidden')) {
//     mobileMenu.classList.remove('mobile-menu-hidden');
//     menuBtn.setAttribute("src", "./images/bars-solid (1).svg");
//   } else {
//     mobileMenu.classList.add('mobile-menu-hidden');
//     menuBtn.setAttribute("src", "./images/xmark-solid.svg");
//   }
// });

// loginBtn.addEventListener('click', () => {
//   login.classList.add('login-hidden');
//   mobileMenu.classList.add('hidden'); // Login ochilsa, mobil menyuni yopamiz
// });

// closeLogin.addEventListener('click', () => {
//   login.classList.remove('login-hidden');
//   // Bu yerda hech narsa yozilmasa ham bo'ladi, chunki menyuni user keyin yana o'zi ochadi
// });




// traditions

let currentIndex = 0;
const slides = document.querySelectorAll('#carousel-items > div');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
let startX = 0;
let isSwiping = false;

function showSlide(index) {
  const carousel = document.getElementById('carousel-items');
  carousel.style.transform = `translateX(-${index * 100}%)`;

  slides.forEach((slide, i) => {
    slide.classList.remove('active');
  });

  setTimeout(() => {
    slides[index].classList.add('active');
  }, 300);

  dots.forEach((dot, i) => {
    dot.style.opacity = i === index ? '1' : '0.5';
  });
}

document.getElementById('carousel').addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  isSwiping = true;
});

document.getElementById('carousel').addEventListener('touchend', e => {
  if (!isSwiping) return;
  isSwiping = false;
  let endX = e.changedTouches[0].clientX;
  let diff = startX - endX;

  if (diff > 50) {
    currentIndex = (currentIndex + 1) % totalSlides;
  } else if (diff < -50) {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  }
  showSlide(currentIndex);
});

document.getElementById('carousel').addEventListener('mousedown', e => {
  startX = e.clientX;
  isSwiping = true;
});

document.getElementById('carousel').addEventListener('mouseup', e => {
  if (!isSwiping) return;
  isSwiping = false;
  let endX = e.clientX;
  let diff = startX - endX;

  if (diff > 50) {
    currentIndex = (currentIndex + 1) % totalSlides;
  } else if (diff < -50) {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  }
  showSlide(currentIndex);
});

// Initialize first slide as active
showSlide(currentIndex);


// Gallery

const categories = {
  historic: [
    "./images/Shahrisabz.jpg",
    "./images/Ark.jpg",
    "./images/Xiva.webp"
  ],
  nature: [
    "./images/boysun.jpg",
    "./images/chorvoq.jpg",
    "./images/98.jpg"
  ],
  cities: [
    "./images/city.jpg",
    "./images/city2.jpg",
    "./images/city3.jpg"],
  food: [
    "./images/bread.jpg",
    "./images/culture4.jpg",
    "./images/culture6.jpg",
  ],
  culture: [
    "./images/uzbekWomen.jpg",
    "./images/people2.jpg",
    "./images/people3.jpg",
  ],
  markets: [
    "./images/bazar.jpg",
    "./images/chorsu.jpg",
    "./images/bazar2.jpg",
  ]
};

const gallery = document.getElementById("gallery");
const buttons = document.querySelectorAll(".category-btn");

function loadImages(category) {
  gallery.innerHTML = "";
  categories[category].forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Gallery Image";
    img.className = "w-full h-60 object-cover rounded-lg shadow-md fade-enter";
    gallery.appendChild(img);
    setTimeout(() => img.classList.add("fade-enter-active"), 50);
  });
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    loadImages(button.dataset.category);
  });
});

// Load default category on page load
loadImages("historic");

// Contact form

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Xabaringiz yuborildi! Tez orada javob beramiz.");
  this.reset();
});


// Tourists

const slider = document.getElementById('slider');
const TouristSlides = document.querySelectorAll('.slide-container');
let index = 0;
let slidesPerView = window.innerWidth >= 768 ? 3 : 1;

function updateSlidesPerView() {
  slidesPerView = window.innerWidth >= 768 ? 3 : 1;
  TouristshowSlide(index);
}

function TouristshowSlide(i) {
  slider.style.transform = `translateX(-${i * (100 / slidesPerView)}%)`;
}

document.getElementById('next').addEventListener('click', () => {
  if (index < TouristSlides.length - slidesPerView) {
    index++;
    TouristshowSlide(index);
  }
});

document.getElementById('prev').addEventListener('click', () => {
  if (index > 0) {
    index--;
    TouristshowSlide(index);
  }
});

window.addEventListener('resize', updateSlidesPerView);





