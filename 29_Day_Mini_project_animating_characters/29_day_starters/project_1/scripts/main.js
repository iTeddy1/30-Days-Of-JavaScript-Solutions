let container = document.getElementsByClassName("container")[0];
const randomWeight = [300, 400, 500, 600, 700];
const textString = "30 Days Of JavaScript Challenge 2020 ASABENEH YETAYEH"
  .toUpperCase()
  .split("");

function setHeading() {
  container.innerHTML = "";
  let title = document.createElement("h1");

  textString.forEach((letter) => {
    let titleSpan = document.createElement("span");
    titleSpan.textContent = letter;
    titleSpan.style.color = generateNewColor();
    title.appendChild(titleSpan);
  });

  container.style.backgroundColor = generateNewColor();
  title.style.fontWeight = randomWeight[Math.round(Math.random() * 5)];

  container.appendChild(title);
}

setInterval(setHeading, 2000);

let link = document.getElementsByTagName("link")[1].href;
const pattern = /font-family: '\w*'/g;

fetch(link)
  .then((res) => res.text())
  .then((data) => {
    // get Array of fontFamily
    let fontFam = new Set();
    data.match(pattern).forEach((font) => {
      fontFam = fontFam.add(font.slice(13));
    });
    fontFam = Array.from(fontFam); // fontFam = ["'Aldrich'", "'Lato'", "'Montserrat'", "'Nunito'", "'Oswald'", "'Raleway'", "'Roboto'"]

    // Set fontFamily
    setInterval(() => {
      container.style.fontFamily = fontFam[Math.round(Math.random() * 6)];
    }, 2000);
  });
