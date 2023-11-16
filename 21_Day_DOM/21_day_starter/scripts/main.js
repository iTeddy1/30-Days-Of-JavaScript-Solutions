let wrapper = document.querySelector(".wrapper");
// Calling showTime function at every second
setInterval(showTime, 1000);

//	Create random colors

const hexCharacters = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getCharacter(index) {
  return hexCharacters[index];
}
const generateNewColor = () => {
  let hexColorRep = "#";

  for (let index = 0; index < 6; index++) {
    const randomPosition = Math.floor(Math.random() * hexCharacters.length);
    hexColorRep += getCharacter(randomPosition);
  }
  return hexColorRep;
};

var clock = document.createElement("h4");
clock.setAttribute("id", "clock");
wrapper.appendChild(clock);

// Defining showTime funcion
function showTime() {
  // Getting current time and date
  let time = new Date();
  let date = time.getDate();

  let year = time.getFullYear();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  // Get month
  const month1 = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let month = month1[d.getMonth()];
  // Setting time for 12 Hrs format
  if (hour >= 12) {
    if (hour > 12) hour -= 12;
  } else if (hour == 0) {
    hr = 12;
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime =
    month + " " + date + ", " + year + " " + hour + ":" + min + ":" + sec;

  // Displaying the time
  clock.innerHTML = currentTime;
}

showTime();

let changeColor = () => {
  const randomClockColor = generateNewColor();
  const randomYearColor = generateNewColor();
  clock.style.backgroundColor = randomClockColor;
  year = document.querySelector(".Year");
  year.style.color = randomYearColor;
};

changeColor();

setInterval(changeColor, 1000); // Random colors every 1sw

// prereuisites end
let list = document.createElement("ul");

// let us do it
asabenehChallenges2020.challenges.forEach((x) => {
  let item = document.createElement("li");
  item.setAttribute("class", "item");
  // innerHTML live :)

  // 1
  let titleSpan = document.createElement("span");
  let title1 = document.createTextNode(x.name);
  titleSpan.style.fontWeight = "lighter";
  titleSpan.appendChild(title1);

  // 2
  let dropdown = document.createElement("details");
  let dropdownSpan = document.createElement("span");

  // sumary
  let summary = document.createElement("summary");
  summary.textContent = x.name.slice(11);
  summary.style.fontWeight = "500";

  // topic
  let topics = document.createElement("ul");
  topics.style.listStyleType = "none";
  x.topics.forEach((i) => {
    let item = document.createElement("li");
    item.textContent = i;
    topics.appendChild(item);
  });
  dropdownSpan.appendChild(dropdown);

  //3

  let status = document.createTextNode(x.status);
  statusSpan = document.createElement("span");
  statusSpan.style.fontWeight = "100";
  statusSpan.appendChild(status);

  // item color
  item.style.fontSize = "20px";

  if (statusSpan.textContent.includes("Coming")) {
    item.style.backgroundColor = "#FF6666";
  } else if (statusSpan.textContent.includes("Done")) {
    item.style.backgroundColor = "#00DFA2";
  } else {
    item.style.backgroundColor = "#FFE569";
  }

  // Append
  item.appendChild(titleSpan);
  dropdown.appendChild(summary);
  dropdown.appendChild(topics);
  item.appendChild(dropdownSpan);
  item.appendChild(statusSpan);
  list.appendChild(item);
});

wrapper.appendChild(list);
