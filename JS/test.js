// Get array from imgs
let sliderImags = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get number of imgs
let numberImgs = sliderImags.length;

//Set current slide
let currentSlide = 1;

//Get number of slide
let imgCount = document.getElementById("slide-number");

// Get indecators
let indicators = document.getElementById("indecators");

//Get next and previous button
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

//creat collectin of polits
let collectionUl = document.createElement("ul");
collectionUl.id = "coll-ul";

for (let i = 1; i <= numberImgs; i++) {
  let collectionLi = document.createElement("li");
  collectionLi.setAttribute("data-index", i);
  collectionLi.textContent = i;
  collectionUl.appendChild(collectionLi);
}
indicators.appendChild(collectionUl);

let ulChildren = Array.from(document.querySelectorAll("#coll-ul li"));

for (let i = 0; i < ulChildren.length; i++) {
  ulChildren[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    checkUp();
  };
}

prevButton.onclick = function () {
  if (currentSlide === 1) {
    return false;
  } else {
    currentSlide--;
  }

  checkUp();
};

nextButton.onclick = function () {
  if (currentSlide === numberImgs) {
    return false;
  } else {
    currentSlide++;
  }

  checkUp();
};

checkUp();

function checkUp() {
  imgCount.textContent = `Count # ${currentSlide} Of ${numberImgs}`;

  removeAllActive();

  sliderImags[currentSlide - 1].classList.add("active");
  ulChildren[currentSlide - 1].classList.add("active");

  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currentSlide == numberImgs) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

function removeAllActive() {
  sliderImags.forEach((img) => {
    img.classList.remove("active");
  });

  ulChildren.forEach((li) => {
    li.classList.remove("active");
  });
}
