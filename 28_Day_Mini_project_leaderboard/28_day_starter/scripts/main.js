let lists = document.getElementsByClassName("lists")[0];

let fistName = document.getElementsByClassName("input")[0];
let lastName = document.getElementsByClassName("input")[1];
let nation = document.getElementsByClassName("input")[2];
let score = document.getElementsByClassName("input")[3];

let button = document.getElementsByTagName("button")[0];
// create div

function createProfile() {}

// Check Input
function validateInput() {
  let fullName = fistName.value || lastName.value;
  let nationality = nation.value;
  let score1 = score.value;
  if (fullName === "" || nationality == "" || score1 == "") {
    document.getElementById("warn").innerHTML = "All fields are required";
    return false;
  } else {
    document.getElementById("warn").innerHTML = "";
    return true;
  }
}

//
// Sort Score Board
function sortScoreBoard() {
  let listItems = Array.from(lists.children);
  listItems.sort(
    (a, b) =>
      parseInt(a.children[2].textContent) - parseInt(b.children[2].textContent)
  );
  listItems.forEach((element) => {
    lists.appendChild(element);
  });
  console.log(listItems);
}

document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(score.value)) {
    alert("Invalid Score!");
    return;
  }
  let tag = document.createElement("li");
  tag.style.listStyle = "none";

  // Name
  let fullNameSpan = document.createElement("span");
  fullNameSpan.innerHTML = `${fistName.value} ${lastName.value}`;

  // Nation
  let nationalitySpan = document.createElement("span");
  nationalitySpan.innerHTML = nation.value;

  // Score
  let pointsSpan = document.createElement("span");
  pointsSpan.setAttribute("class", "score");
  pointsSpan.innerHTML = `${score.value}`;

  // Remove, Plus, Minus
  let buttonSpan = document.createElement("span");
  buttonSpan.classList.add("buttons");

  // Remove
  let removeButton = document.createElement("button");
  removeButton.innerHTML =
    '<i class="fa-solid fa-trash-can" style="color: red;"></i>';
  removeButton.addEventListener("click", function () {
    lists.removeChild(tag);
  });
  // Plus
  let plusButton = document.createElement("button");
  plusButton.innerHTML = "+5";
  plusButton.addEventListener("click", () => {
    let points = parseInt(pointsSpan.textContent) + 5;
    if (!isNaN(points)) pointsSpan.innerHTML = `${points}`;
    sortScoreBoard();
  });

  // Minus
  let minusButton = document.createElement("button");
  minusButton.innerHTML = "-5";
  minusButton.addEventListener("click", () => {
    let points = parseInt(pointsSpan.textContent) - 5;
    if (!isNaN(points)) pointsSpan.innerHTML = `${points}`;
    sortScoreBoard();
  });

  // Append Button
  buttonSpan.appendChild(removeButton);
  buttonSpan.appendChild(plusButton);
  buttonSpan.appendChild(minusButton);

  // Append List
  tag.appendChild(fullNameSpan);
  tag.appendChild(nationalitySpan);
  tag.appendChild(pointsSpan);
  tag.appendChild(buttonSpan);
  if (validateInput()) lists.appendChild(tag);
  sortScoreBoard();
});
