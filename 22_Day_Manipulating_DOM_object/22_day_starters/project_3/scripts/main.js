
let wrapper = document.querySelector(".wrapper");

// Calling showTime function at every second
setInterval(showTime, 1000);

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

//	Create random colors for years and clock

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

function generateNewColor() {
  let hexColorRep = "#";

  for (let index = 0; index < 6; index++) {
    const randomPosition = Math.floor(Math.random() * hexCharacters.length);
    hexColorRep += getCharacter(randomPosition);
  }
  return hexColorRep;
}

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
list.style.listStyleType = "none";
list.style.margin = "auto";

// Item List
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

// About me
let author = document.createElement("div");
author.setAttribute("id", "author");

// AuthorName
let AuthorName = document.createElement("h2");
AuthorName.textContent = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`;
author.appendChild(AuthorName);

// Social
let icons = document.createElement("div");
asabenehChallenges2020.author.socialLinks.forEach((x) => {
  let icon = document.createElement("span");
  icon.setAttribute("class", "icon");
  icon.style.padding = "5px";
  icon.style.fontSize = "2rem";
  icon.innerHTML = x.fontawesomeIcon;
  icons.appendChild(icon);
});
author.appendChild(icons);

// Bio
let bio = document.createElement("p");
bio.textContent = asabenehChallenges2020.author.bio;
bio.style.padding = "25px";
bio.style.fontSize = "15px";
bio.style.margin = "auto";
author.appendChild(bio);

// Description
let description = document.createElement("div");
description.setAttribute("id", "description");

// Titles
let titles = document.createElement("ul");
//title
titles.style.listStyleType = "none";

let a = document.createElement("li");
a.textContent = "Titles";
a.style.fontWeight = "bold";
a.style.listStyleType = "none";
a.style.fontSize = "20px";
titles.appendChild(a);

titles.setAttribute("class", "titlee");
asabenehChallenges2020.author.titles.forEach((x) => {
  let title = document.createElement("li");
  title.textContent = `${x[0]} ${x[1]}`;
  titles.appendChild(title);
});

// Qualifications
let qualifications = document.createElement("ul");
qualifications.style.listStyleType = "none";
//title
let b = document.createElement("li");
b.textContent = "Qualifications";
b.style.fontWeight = "bold";
b.style.listStyleType = "none";
b.style.fontSize = "20px";
qualifications.appendChild(b);

qualifications.setAttribute("class", "titlee");
asabenehChallenges2020.author.qualifications.forEach((x) => {
  let qualification = document.createElement("li");
  qualification.innerHTML = `${"&#127891;"} ${x}`;
  qualifications.appendChild(qualification);
});

// 	Skills
let skills = document.createElement("ul");
skills.style.listStyleType = "none";
//title
let c = document.createElement("li");
c.textContent = "Skills";
c.style.fontWeight = "bold";
c.style.listStyleType = "none";
c.style.fontSize = "20px";
skills.appendChild(c);

skills.setAttribute("class", "titlee");
asabenehChallenges2020.author.skills.forEach((x) => {
  let skill = document.createElement("li");
  skill.innerHTML = `${"&#9989;"} ${x}`;
  skills.appendChild(skill);
});

description.appendChild(titles);
description.appendChild(skills);
description.appendChild(qualifications);
author.appendChild(description);

wrapper.appendChild(author);

// Keywords
let keysDiv = document.createElement("div");

// title
let keyTitle = document.createElement("h3");
keyTitle.textContent = "Keywords";
keysDiv.appendChild(keyTitle);

let keywords = document.createElement("div");
keywords.setAttribute("class", "keywords");

asabenehChallenges2020.keywords.forEach((x) => {
  let keyword = document.createElement("span");
  keyword.textContent = `# ${x}`;
  keyword.style.padding = "5px";
  keyword.style.margin = "5px";
  keyword.style.borderStyle = "hidden";
  keyword.style.borderRadius = "20px";
  keyword.style.backgroundColor = generateNewColor();
  keywords.appendChild(keyword);
});

keysDiv.appendChild(keywords);

wrapper.appendChild(keysDiv);
