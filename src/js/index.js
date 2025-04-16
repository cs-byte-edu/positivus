class Carousel {
  constructor(carouselElement) {
    this.carouselBox = carouselElement.querySelector(".carousel-box");
    this.nextBtn = document.querySelector(".btn-next");
    this.prevBtn = document.querySelector(".btn-prev");
    this.dotsBox = document.getElementById("dots");
    this.totalSlides = this.carouselBox.children.length;
    this.dots = [];
    this.position = 0;
    this.currentIndex = 1;
    this.slideDistance = 0;
    this.centerOffset = 0;
    this.init();
  }

  init() {
    this.updateDimensions();
    this.createDots();
    this.carouselBox.style.transform = `translateX(${this.position}px)`;
    this.nextBtn.addEventListener("click", this.nextSlide.bind(this));
    this.prevBtn.addEventListener("click", this.prevSlide.bind(this));
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    const carouselBoxStyles = getComputedStyle(this.carouselBox);
    const carouselBoxGap = parseFloat(carouselBoxStyles.gap) || 0;
    const slide = this.carouselBox.querySelector(".slide");
    const slideWidth = slide.offsetWidth;
    const containerWidth = this.carouselBox.parentElement.offsetWidth;

    this.slideDistance = slideWidth + carouselBoxGap;

    this.centerOffset = (containerWidth - slideWidth) / 2;

    // initial centering
    this.position = -this.currentIndex * this.slideDistance + this.centerOffset;
    this.updateTransform();
  }

  nextSlide() {
    if (this.currentIndex === this.totalSlides - 1) {
      return;
    }
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    this.position = -this.currentIndex * this.slideDistance + this.centerOffset;
    this.updateButtons();
    this.updateTransform();
  }

  prevSlide() {
    if (this.currentIndex === 0) {
      return;
    }

    this.currentIndex =
      (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.position = -this.currentIndex * this.slideDistance + this.centerOffset;
    this.updateButtons();
    this.updateTransform();
  }

  updateButtons() {
    this.prevBtn.classList.toggle("btn-disabled", this.currentIndex === 0);
    this.nextBtn.classList.toggle(
      "btn-disabled",
      this.currentIndex === this.totalSlides - 1
    );
  }

  updateTransform() {
    this.updateDotsState();
    this.carouselBox.style.transform = `translateX(${this.position}px)`;
  }

  updateDotsState() {
    this.dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === this.currentIndex);
    });
  }

  createDots() {
    for (let i = 0, len = this.totalSlides; i < len; i++) {
      const el = document.createElement("div");
      el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><path d="M7.01 2.06 14 0l-2.04 7.01L14 14l-6.99-2.04L0 14l2.06-6.99L0 0l7.01 2.06Z"/></svg>`;
      if (i === this.currentIndex) {
        el.setAttribute("class", "dot-item active");
      } else {
        el.setAttribute("class", "dot-item");
      }
      this.dots.push(el);
      this.dotsBox.appendChild(el);
    }
  }
}

const addSafeEvent = (selector, event, handler, multiple = false) => {
  const elements = multiple
    ? document.querySelectorAll(selector)
    : [document.querySelector(selector)];

  elements.forEach((el) => {
    if (el) el.addEventListener(event, handler);
  });
};

const openMenu = (toggleBtn, navBox, overlay) => {
  toggleBtn?.classList.add("hidden");
  navBox?.classList.add("active");
  overlay?.classList.remove("hidden");
};

const closeMenu = (toggleBtn, navBox, overlay) => {
  toggleBtn?.classList.remove("hidden");
  navBox?.classList.remove("active");
  overlay?.classList.add("hidden");
};

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".btn-toggle");
  const closeBtn = document.querySelector(".btn-close");
  const navBox = document.querySelector(".nav-box");
  const overlay = document.querySelector(".overlay");

  if (toggleBtn && navBox && overlay) {
    addSafeEvent(".btn-toggle", "click", () =>
      openMenu(toggleBtn, navBox, overlay)
    );
    addSafeEvent(".btn-close", "click", () =>
      closeMenu(toggleBtn, navBox, overlay)
    );
    addSafeEvent(".overlay", "click", () =>
      closeMenu(toggleBtn, navBox, overlay)
    );
  }

  addSafeEvent(
    ".list-count-item",
    "click",
    function () {
      this.classList.toggle("active");
    },
    true
  );

  const menuItems = document.querySelectorAll(".navbar-menu");

  if (menuItems.length) {
    const toggleMenus = () => {
      menuItems.forEach((menu) => menu.classList.toggle("hidden"));
    };
    addSafeEvent(
      ".navbar-burger, .navbar-close, .navbar-backdrop",
      "click",
      toggleMenus,
      true
    );
  }
  const logos = document.querySelector(".logos");

  if (logos) {
    logos.insertAdjacentHTML("afterend", logos.outerHTML);

    const duplicate = logos.nextElementSibling;
    if (duplicate) {
      duplicate.setAttribute("aria-hidden", "true");
    }
  }

  new Carousel(document.getElementById("testimonial-container"));

  // [...document.querySelectorAll("*")].forEach((e) => {
  //   e.style.border = "1px solid red";
  // });
});
