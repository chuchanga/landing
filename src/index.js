
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

/* Formulario */
const formcontact = document.getElementById("form");
const inputs = document.querySelectorAll("#form input"); // nos trae un arreglo con todos los inputs
const textarea = document.querySelectorAll("#form textarea");
// objeto
const
  expression = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    textarea: /^[^$%&|<>#]*$/, // Letras y espacios, pueden llevar acentos.
    phone: /^\d{7,14}$/ // 7 a 14 numeros.
  };

const
  fields = {
    name: false,
    email: false,
    phone: false,
    textarea: false,
  };

// Se comprueba que cuando clickas en el input se escribe lo que tengamos en el atributo name
const validateform = (e) => {
  // Se ejecuta cuando el atributo name le corresponde input name
  switch (e.target.name) {
    case "name":
      // Se comprueba que el valor del input se corresponda con la expresion regular
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

// para acceder a la expresion del input nombre o email o etc hay que pasarle 3 parámetros
const validatefield = (expression, input, field) => {
  if (expression.test(input.value)) {
    document.getElementById(`group__${field}`).classList.remove("form__group-incorrect");
    document.getElementById(`group__${field}`).classList.add("form__group-correct");
    document.querySelector(`#group__${field} i`).classList.add("fa-check-circle");
    document.querySelector(`#group__${field} i`).classList.remove("fa-times-circle");
    document.querySelector(`#group__${field} .form__input-error`).classList.remove("form__input-error-active");
    // se conprueban que los datos están todos correctos para enviar

    fields[field] = "true";
  } else {
    document.getElementById(`group__${field}`).classList.add("form__group-incorrect");
    document.getElementById(`group__${field}`).classList.remove("form__group-correct");
    document.querySelector(`#group__${field} i`).classList.add("fa-times-circle");
    document.querySelector(`#group__${field} i`).classList.remove("fa-check-circle");
    document.querySelector(`#group__${field} .form__input-error`).classList.add("form__input-error-active");

    fields[field] = "false";
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validateform);
  input.addEventListener("blur", validateform);
  // Al levantar y presionar se comprueba que se validan los campos tanto en el input como fuera de él---
});

textarea.forEach((textarea) => {
  textarea.addEventListener("keyup", validateform);
  textarea.addEventListener("blur", validateform);
  // Al levantar y presionar se comprueba que se validan los campos tanto en el input como fuera de él---
});

formcontact.addEventListener("submit", (e) => {
  e.preventDefault();
  if (fields.name && fields.email && fields.phone && fields.textarea) {
    formcontact.reset();

    document.getElementById("form__message-correct").classList.add("form__message-correct-active");
    setTimeout(() => {
      document.getElementById("form__message-correct").classList.remove("formulario__message-correct-active");
    }, 5000);
  } else {
    document.getElementById("form__message").classList.add("form__message-active");
  }
});
