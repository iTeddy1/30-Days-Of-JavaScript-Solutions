let form = document.getElementById("myForm");
let input = document.getElementById("mass");
let select = document.getElementById("selection");
let planetImg = document.getElementById("planet-image");
let button = document.getElementById("myButton");
let descrip = document.getElementById("flex-item__description");

//  Input empty

button.addEventListener("click", () => {
  if (input.value == "") {
    descrip.innerHTML =
      "<h1 style='background-color: red;'>Mass is required</h1>";
    planetImg.src = "";
  } else if (select.value == "none") {
    descrip.innerHTML =
      "<h1 style='background-color: red;'>You did not choose a planet yet</h1>";
    planetImg.src = "";
  }
});

//

button.addEventListener("click", () => {
  if (input.value != "" && select.value !== "none" && isNumber(input.value)) {
    let massValue = parseFloat(input.value); // float
    let planet = select.value; // string

    document.getElementById("flex-container").style.display = "flex";

    descrip.innerHTML = `<p>The weight of object on ${planet.toUpperCase()}</p>`;
    descrip.style.backgroundColor = "red";

    let weight = calWeight(massValue, planet); // float
    let weightSpan = document.createElement("span");
    weightSpan.textContent = `${weight} N`;
    weightSpan.style.borderRadius = "50%";

    planetImg.src = `./images/${planet}.png`;
    descrip.appendChild(weightSpan);
  }
});

function isNumber(input) {
  return !isNaN(parseFloat(input)) && isFinite(input);
}

function calWeight(weight, planet) {
  switch (planet) {
    case "earth":
      weight = weight;
      break;
    case "mercury":
      weight *= 0.38;
      break;
    case "venus":
      weight *= 0.91;
      break;
    case "moon":
      weight *= 0.166;
      break;
    case "mars":
      weight *= 0.38;
      break;
    case "jupiter":
      weight *= 2.34;
      break;
    case "saturn":
      weight *= 1.06;
      break;
    case "uranus":
      weight *= 0.92;
      break;
    case "neptune":
      weight *= 1.19;
      break;
    case "pluto":
      weight *= 0.06;
      break;
    default:
      break;
  }
  return weight * 9.80665;
}
