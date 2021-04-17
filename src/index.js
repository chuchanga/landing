
(function() {
  const sliderImages = document.querySelectorAll(".slider-item");
  const arrowLeft = document.querySelector("#left-arrow");
  const arrowRight = document.querySelector("#right-arrow");
  let currentImg = 0;

  function initSlider() {
    resetSlider();
    sliderImages[0].style.display = "block";
  }

  function resetSlider() {
    for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = "none";
    }
  }

  function toLeft() {
    resetSlider();
    sliderImages[currentImg - 1].style.display = "block";
    currentImg--;
  }

  function toRight() {
    resetSlider();
    sliderImages[currentImg + 1].style.display = "block";
    currentImg++;
  }

  arrowLeft.addEventListener("click", function() {
    if (currentImg === 0) {
      currentImg = sliderImages.length;
    }
    toLeft();
  });

  arrowRight.addEventListener("click", function() {
    if (currentImg === sliderImages.length - 1) {
      currentImg = -1;
    }
    toRight();
  });

  initSlider();
})();

(function() {
  let elements = [];
  let windowHeight;

  function init() {
    elements = document.querySelectorAll(".hidden");
    elements = Array.prototype.slice.call(elements);
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add("fade-in-element");
        element.classList.remove("hidden");

        elements = elements.filter((item) => element !== item);
        if (elements.length <= 0) {
          window.removeEventListener("scroll", checkPosition);
          window.removeEventListener("resize", init);
        }
      }
    }
  }
  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

const formcontact = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");
const textarea = document.querySelectorAll("#form textarea");

const
  expression = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    textarea: /^[^$%&&|<>#]+$/,
    phone: /^\d{7,14}$/
  };

const
  fields = {
    name: false,
    email: false,
    phone: false,
    textarea: false,
  };

const validateform = (e) => {
  switch (e.target.name) {
    case "name":
      validatefield(expression.name, e.target, "name");
      break;
    case "email":
      validatefield(expression.email, e.target, "email");
      break;
    case "phone":
      validatefield(expression.phone, e.target, "phone");
      break;
    case "textarea":
      validatefield(expression.textarea, e.target, "textarea");
      break;
  }
};

function validatefield(expression, input, field) {
  if (expression.test(input.value)) {
    document.getElementById(`group--${field}`).classList.remove("form--group-incorrect");
    document.getElementById(`group--${field}`).classList.add("form--group-correct");
    document.querySelector(`#group--${field} i`).classList.add("fa-check-circle");
    document.querySelector(`#group--${field} i`).classList.remove("fa-times-circle");
    document.querySelector(`#group--${field} .form--input-error`).classList.remove("form--input-error-active");
    fields[field] = true;
  } else {
    document.getElementById(`group--${field}`).classList.add("form--group-incorrect");
    document.getElementById(`group--${field}`).classList.remove("form--group-correct");
    document.querySelector(`#group--${field} i`).classList.add("fa-times-circle");
    document.querySelector(`#group--${field} i`).classList.remove("fa-check-circle");
    document.querySelector(`#group--${field} .form--input-error`).classList.add("form--input-error-active");

    fields[field] = false;
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", validateform);
  input.addEventListener("blur", validateform);
});

textarea.forEach((textarea) => {
  textarea.addEventListener("keyup", validateform);
  textarea.addEventListener("blur", validateform);
});

formcontact.addEventListener("submit", (e) => {
  e.preventDefault();
  if (fields.name && fields.email && fields.phone && fields.textarea) {
    document.getElementById("form--message").classList.remove("form--message-active");
    document.getElementById("form--message-correct").classList.add("form--message-correct-active");
    formcontact.reset();
    document.querySelectorAll(".form--group").forEach(item => (item.classList = "form--group"));
    setTimeout(() => {
      document.getElementById("form--message-correct").classList.remove("form--message-correct-active");
    }, 5000);
  } else if (!fields.name && !fields.email && !fields.phone && fields.textarea) {
    document.getElementById("form--message").classList.add("form--message-active");
  } else {
    document.getElementById("form--message").classList.add("form--message-active");
  }
});
