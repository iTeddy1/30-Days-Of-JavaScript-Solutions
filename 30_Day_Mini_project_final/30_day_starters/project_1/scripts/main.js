document.getElementsByClassName(
    "heading__status"
  )[0].innerHTML = `Currently, we have ${countries.length} countries`;
  const worldPopulation = countries.reduce(
    (curr, acc) => curr + acc.population,
    0
  );
  
  //! Get countries sort by Name, Capital, Population ascending
  var countriesName = (data) => {
    return data.toSorted((a, b) => a.name.localeCompare(b.name));
  };
  var countriesCapital = (data) => {
    return data
      .filter((country) => country.capital != undefined)
      .toSorted((a, b) => a.capital.localeCompare(b.capital));
  };
  var countriesPopulation = (data) => {
    return data.toSorted((a, b) =>
      a.population > b.population ? -1 : b.population > a.population ? 1 : 0
    );
  };
  //! Sorting automatic
  function sortingMechanism(data, isDescendingIsTrue) {
    if (currentResults === undefined) return;
  
    if (isDescendingIsTrue) data.reverse();
  
    appendList(data);
  }
  
  //! Get fre of languages
  let languagesFre = (array) => {
    let f = {};
  
    for (let i = 0; i < array.length; i++) {
      if (array[i].languages == undefined) continue;
      for (let j = 0; j < array[i].languages.length; j++) {
        const country = array[i].languages[j];
        if (country in f) {
          f[country]++;
        } else {
          f[country] = 1;
        }
      }
    }
  
    let sortedLanguagesFre = Object.keys(f).sort((a, b) => f[b] - f[a]);
    return sortedLanguagesFre.map((name) => ({ name, f: f[name] }));
  };
  var currentResults = countries;
  
  let wrapper = document.getElementsByClassName("container__wrapper")[0];
  
  let list = document.getElementsByTagName("ul")[0];
  
  //! Get number of languages
  const languageSpoken = countries.map((country) => {
    let a = [];
    a.push(country.languages);
    return a;
  });
  let Languages = new Set(languageSpoken);
  numberLanguages = Languages.size;
  
  //! Append List
  function appendList(data) {
    list.innerHTML = "";
    data.forEach((country) => {
      // Create li element
      const itemList = document.createElement("li");
  
      // Add class to the created elements
      itemList.classList.add(`container__list--item`);
  
      // Set text content of the newly created element
      const countryName = `${country.name.toUpperCase()}`;
      const countryImage = `${country.flag}`;
      const countryCapital = `${country.capital}`;
      const countryLanguages = country.languages.join(", ");
      const countryPopulation = `${country.population.toLocaleString("en-US")}`;
  
      // Image
      let countryImageSpan = document.createElement("span");
      let img = document.createElement("img");
      img.src = `${countryImage}`;
      img.style.width = "150px";
      img.style.height = "100px";
      countryImageSpan.style.textAlign = "center";
      countryImageSpan.append(img);
  
      // Name
      let countryNameSpan = document.createElement("span");
      countryNameSpan.setAttribute("class", "container__list--item--title");
      countryNameSpan.textContent = countryName;
  
      // Capital
      let countryCapitalSpan = document.createElement("span");
      countryCapitalSpan.textContent =
        countryCapital !== "undefined" ? `Capital: ${countryCapital}` : "";
  
      // Languages
      let countryLanguagesSpan = document.createElement("span");
      countryLanguagesSpan.textContent = `Languages: ${countryLanguages}`;
  
      // Population
      let countryPopulationSpan = document.createElement("span");
      countryPopulationSpan.textContent = `Population: ${countryPopulation}`;
  
      // Append new items in the ul tag
      itemList.appendChild(countryImageSpan);
      itemList.appendChild(countryNameSpan);
      itemList.appendChild(countryCapitalSpan);
      itemList.appendChild(countryLanguagesSpan);
      itemList.appendChild(countryPopulationSpan);
  
      list.appendChild(itemList);
    });
  }
  
  let mostPopulationArray = [];
  const worldStat = [
    {
      name: "World",
      population: worldPopulation,
    },
  ];
  
  //! Input Event
  const input = document.getElementsByTagName("input")[0];
  
  input.addEventListener("keyup", (event) => {
    let val = event.target.value;
    let pattern = new RegExp(val, "i");
  
    const resultByName = Object.keys(countries)
      .map((key) => countries[key])
      .filter((country) => pattern.test(country.name));
    const resultByCapital = Object.keys(countries)
      .map((key) => countries[key])
      .filter((country) => {
        return country.capital !== undefined && pattern.test(country.capital);
      });
    const resultByLanguage = Object.keys(countries)
      .map((key) => countries[key])
      .filter((country) => country.languages.join(" ").match(pattern));
  
    // Get filter list
    let filterResult = [...resultByName, ...resultByCapital, ...resultByLanguage];
    filterResult = new Set(filterResult);
    filterResult = Array.from(filterResult).toSorted((a, b) =>
      a.name.localeCompare(b.name)
    );
  
    // update currentResult
    currentResults = filterResult;
    appendList(currentResults);
  
    // update description
    document.getElementsByClassName("heading__description")[0].innerHTML =
      //? if current.length = 0, 1, country.length => empty
      currentResults.length == countries.length
        ? ""
        : currentResults.length <= 1
        ? `${currentResults.length} country satisfied the search criteria`
        : `${currentResults.length} countries satisfied the search criteria`;
  
    // update chart
    updateChart("population");
  });
  
  //! Button Event
  let btnName = document.getElementsByClassName("container__form--btn")[0];
  let btnCapital = document.getElementsByClassName("container__form--btn")[1];
  let btnPopulation = document.getElementsByClassName("container__form--btn")[2];
  
  btnName.addEventListener("click", (e) => {
    btnName.classList.toggle("clicked");
    let sortedName = countriesName(currentResults);
  
    if (btnName.classList.contains("clicked")) {
      btnPopulation.classList.remove("clicked");
      btnPopulation.innerHTML = "Population";
      btnCapital.classList.remove("clicked");
      btnCapital.innerHTML = "Capital";
  
      btnName.innerHTML =
        "Name <i class='fa-solid fa-arrow-up' style='color: #000000;'></i>";
  
      sortingMechanism(sortedName, 1);
    } else {
      btnName.innerHTML =
        "Name <i class='fa-solid fa-arrow-down' style='color: #000000;'></i>";
  
      sortingMechanism(sortedName, 0);
    }
  });
  
  btnCapital.addEventListener("click", (e) => {
    btnCapital.classList.toggle("clicked");
    let sortedCapital = countriesCapital(currentResults);
  
    if (btnCapital.classList.contains("clicked")) {
      btnPopulation.classList.remove("clicked");
      btnPopulation.innerHTML = "Population";
      btnName.classList.remove("clicked");
      btnName.innerHTML = "Name";
  
      btnCapital.innerHTML =
        "Capital <i class='fa-solid fa-arrow-up' style='color: #000000;'></i>";
  
      sortingMechanism(sortedCapital, 1);
    } else {
      btnCapital.innerHTML =
        "Capital <i class='fa-solid fa-arrow-down' style='color: #000000;'></i>";
  
      sortingMechanism(sortedCapital, 0);
    }
  });
  
  btnPopulation.addEventListener("click", (e) => {
    btnPopulation.classList.toggle("clicked");
    let sortedPopulation = countriesPopulation(currentResults);
  
    if (btnPopulation.classList.contains("clicked")) {
      btnName.classList.remove("clicked");
      btnName.innerHTML = "Name";
      btnCapital.classList.remove("clicked");
      btnCapital.innerHTML = "Capital";
  
      btnPopulation.innerHTML =
        "Population <i class='fa-solid fa-arrow-up' style='color: #000000;'></i>";
  
      sortingMechanism(sortedPopulation, 1);
    } else {
      btnPopulation.innerHTML =
        "Population <i class='fa-solid fa-arrow-down' style='color: #000000;'></i>";
  
      sortingMechanism(sortedPopulation, 0);
    }
  });
  
  appendList(countries);
  
  const populationButton = document.querySelector(".graph-buttons .population");
  const languagesButton = document.querySelector(".graph-buttons .languages");
  var graph = document.getElementsByClassName("graph-wrapper")[0];
  
  // update chart
  function updateChart(option) {
    graph.innerHTML = "";
    if (option == "language") {
      // Languages
  
      document.getElementsByClassName("graph-title")[0].textContent =
        "World Languages";
  
      let mostLanguagesArray =
        languagesFre(currentResults).length >= 10
          ? languagesFre(currentResults).slice(0, 10)
          : languagesFre(currentResults);
      let languagesName = document.createElement("div");
      let chart1 = document.createElement("div");
      let numberCountry = document.createElement("div");
  
      // 1
      languagesName.setAttribute("class", "data1");
      mostLanguagesArray.forEach((language) => {
        let languagesNameSpan = document.createElement("div");
        languagesNameSpan.setAttribute("class", "country");
  
        languagesNameSpan.textContent = language.name;
  
        languagesName.appendChild(languagesNameSpan);
      });
  
      // 2
      chart1.setAttribute("class", "data2");
      mostLanguagesArray.forEach((language) => {
        let languagePercent = (language.f / mostLanguagesArray.length) * 10;
        let chartSpan1 = document.createElement("div");
        chartSpan1.setAttribute("class", "chart");
  
        chartSpan1.style.width = `${languagePercent}%`;
  
        chart1.appendChild(chartSpan1);
      });
  
      // 3
      numberCountry.setAttribute("class", "data3");
      mostLanguagesArray.forEach((language) => {
        let numberCountrySpan = document.createElement("div");
        numberCountrySpan.setAttribute("class", "num");
  
        numberCountrySpan.textContent = language.f;
  
        numberCountry.appendChild(numberCountrySpan);
      });
      graph.appendChild(languagesName);
      graph.appendChild(chart1);
      graph.appendChild(numberCountry);
      return;
    }
  
    // Population
    document.getElementsByClassName("graph-title")[0].textContent =
      "World Population";
  
    mostPopulationArray = Array.from(currentResults);
    mostPopulationArray = worldStat.concat(mostPopulationArray);
    mostPopulationArray =
      mostPopulationArray.length >= 10
        ? countriesPopulation(mostPopulationArray).slice(0, 10)
        : countriesPopulation(mostPopulationArray);
    let countriesNameDiv = document.createElement("div");
    let chart = document.createElement("div");
    let populationsValue = document.createElement("div");
  
    // 1
    countriesNameDiv.setAttribute("class", "data1");
    mostPopulationArray.forEach((country) => {
      let countriesNameSpan = document.createElement("div");
      countriesNameSpan.setAttribute("class", "country");
      countriesNameSpan.textContent = country.name;
      countriesNameDiv.appendChild(countriesNameSpan);
    });
  
    // 2
    chart.setAttribute("class", "data2");
    mostPopulationArray.forEach((country) => {
      let countryPercent = (country.population / worldPopulation) * 100;
      let chartSpan = document.createElement("div");
      chartSpan.setAttribute("class", "chart");
      chartSpan.style.width = `${countryPercent}%`;
      chart.appendChild(chartSpan);
    });
  
    // 3
    populationsValue.setAttribute("class", "data3");
    mostPopulationArray.forEach((country) => {
      let populationsValueSpan = document.createElement("div");
      populationsValueSpan.setAttribute("class", "pop");
      populationsValueSpan.textContent =
        country.population.toLocaleString("en-US");
      populationsValue.appendChild(populationsValueSpan);
    });
  
    graph.appendChild(countriesNameDiv);
    graph.appendChild(chart);
    graph.appendChild(populationsValue);
  }
  
  //! Button Chart
  updateChart("population");
  
  populationButton.addEventListener("click", () => {
    document.getElementsByClassName("graph-title")[0].innerHTML += "<hr>";
    graph.innerHTML = "";
    updateChart("population");
  });
  
  languagesButton.addEventListener("click", () => {
    graph.innerHTML = "";
    document.getElementsByClassName("graph-title")[0].innerHTML += "<hr>";
    updateChart("language");
  });
  
  //? Finish
  