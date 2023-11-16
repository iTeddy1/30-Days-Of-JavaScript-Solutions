document.getElementsByClassName(
    "subtitle"
  )[0].textContent = `Total Number of countries: ${countries.length}`;
  let des = document.getElementsByClassName("description")[0];
  
  let list = document.getElementsByClassName("bot-container")[0];
  
  let button1 = document.getElementsByClassName("fist-word button")[0];
  let button2 = document.getElementsByClassName("any-word button")[0];
  let button3 = document.getElementsByClassName("sorted-word button")[0];
  let input = document.getElementById("myInput");
  
  const countryUpper = countries.map((a) => a.toUpperCase());
  const reverseUpperCountries = countries.reverse().map((a) => a.toUpperCase());
  
  // Display full country
  function showFullCountry(array) {
    list.innerHTML = "";
    array.forEach((country) => {
      let countryDiv = document.createElement("div");
      countryDiv.textContent = country;
      countryDiv.setAttribute("class", "country");
      list.appendChild(countryDiv);
    });
  }
  
  showFullCountry(countryUpper);
  input.addEventListener("input", findAnyLetter);
  
  // Buttons
  // 1
  button1.addEventListener("click", (event) => {
    button1.classList.toggle("clicked");
    if (button1.classList.contains("clicked")) {
      button2.classList.remove("clicked");
      button3.classList.remove("clicked");
    }
    input.addEventListener("input", findFirstLetter);
  });
  
  // 2
  button2.addEventListener("click", (event) => {
    // toggle button
    button2.classList.toggle("clicked");
    if (button2.classList.contains("clicked")) {
      button1.classList.remove("clicked");
      button3.classList.remove("clicked");
    }
  
    input.addEventListener("input", findAnyLetter);
  });
  
  //  3
  button3.addEventListener("click", (event) => {
    button3.classList.toggle("clicked");
    if (button3.classList.contains("clicked")) {
      button3.innerHTML =
        "<strong><i class='fa-solid fa-arrow-up-a-z fa-xl'></i></strong>";
      event.target.value = "z-a";
      button2.classList.remove("clicked");
      button1.classList.remove("clicked");
      showFullCountry(reverseUpperCountries);
    } else {
      button3.innerHTML =
        "<strong><i class='fa-solid fa-arrow-down-a-z fa-xl'></i></strong>";
      showFullCountry(countryUpper);
    }
  });
  
  // Find first letter
  function findFirstLetter(e) {
    let pattern = new RegExp(`^${e.target.value.toUpperCase()}`);
    let validCountry = countryUpper.filter((country) => pattern.test(country));
  
    des.innerHTML = `Countries start with <strong style = 'color: black;'>${e.target.value}</strong> are <strong style = 'color: #F8DE22;'>${validCountry.length}</strong>`;
  
    if (e.target.value == "") {
      des.textContent = "";
    }
  
    showFullCountry(validCountry);
  }
  
  // Find any letter
  function findAnyLetter(e) {
    let pattern1 = new RegExp(e.target.value.toUpperCase());
    let validCountry1 = countryUpper.filter((country) => pattern1.test(country));
  
    des.innerHTML = `Countries containing <strong style = 'color: black;'>${e.target.value}</strong> are <strong style = 'color: #F8DE22;'>${validCountry1.length}</strong>`;
  
    if (e.target.value == "") {
      des.textContent = "";
    }
    showFullCountry(validCountry1);
  }
  