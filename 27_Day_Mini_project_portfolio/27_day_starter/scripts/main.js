let des = document.getElementsByClassName("container-description")[0];
let jobDiv = document.getElementsByClassName("container-slide")[0];
let slidesJob = document.getElementsByClassName("mySlide");
let slidesLanguage = document.getElementsByClassName("current-slide");
// slide job

var slideIndex = 0;

function slideJob() {
  for (let i = 0; i < slidesJob.length; i++) {
    slidesJob[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slidesJob.length) slideIndex = 1;

  slidesJob[slideIndex - 1].style.display = "block";
  setTimeout(slideJob, 1500);
}
slideJob();
var slideIndex1 = 0;

function slideTech() {
  for (let i = 0; i < slidesLanguage.length; i++) {
    slidesLanguage[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slidesLanguage.length) slideIndex1 = 1;

  slidesLanguage[slideIndex1 - 1].style.display = "inline";
  slidesLanguage[slideIndex1 - 1].style.fontSize = "3rem";
  setTimeout(slideTech, 1500);
}
slideTech();
