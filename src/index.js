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
