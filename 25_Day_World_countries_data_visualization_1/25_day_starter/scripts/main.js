document.getElementsByClassName(
    "subtitle"
  )[0].textContent = `Currently, we have ${countries_data.length} countries`;
  
  const populationButton = document.querySelector(".graph-buttons .population");
  const languagesButton = document.querySelector(".graph-buttons .languages");
  const graph = document.getElementsByClassName("graph-wrapper")[0];
  
  const worldPopulation = countries_data.reduce(
    (curr, acc) => curr + acc.population,
    0
  );
  const tenMostPopulated = countries_data
    .sort((a, b) => b.population - a.population)
    .slice(0, 10);
  const worldStat = {
    name: "World",
    population: worldPopulation,
  };
  tenMostPopulated.unshift(worldStat);
  
  // Button
  
  function showPopulation() {
    graph.appendChild(countriesName);
    graph.appendChild(chart);
    graph.appendChild(populationsValue);
  }
  
  function removePopulation() {
    graph.removeChild(countriesName);
    graph.removeChild(chart);
    graph.removeChild(populationsValue);
  }
  
  populationButton.addEventListener("click", () => {
    document.getElementsByClassName("graph-title")[0].textContent =
      "10 Most populated countries in the world";
    document.getElementsByClassName("graph-title")[0].innerHTML += "<hr>";
    showPopulation();
    removeLanguages();
  });
  
  function showLanguages() {
    graph.appendChild(languagesName);
    graph.appendChild(chart1);
    graph.appendChild(numberCountry);
  }
  function removeLanguages() {
    graph.removeChild(languagesName);
    graph.removeChild(chart1);
    graph.removeChild(numberCountry);
  }
  
  languagesButton.addEventListener("click", () => {
    document.getElementsByClassName("graph-title")[0].textContent =
      "10 Most Spoken languages in the world";
    document.getElementsByClassName("graph-title")[0].innerHTML += "<hr>";
    showLanguages();
    removePopulation();
  });
  
  // Population
  
  // 1
  
  let countriesName = document.createElement("div");
  countriesName.setAttribute("class", "data1");
  
  tenMostPopulated.forEach((country) => {
    let countriesNameSpan = document.createElement("div");
    countriesNameSpan.setAttribute("class", "country");
    countriesNameSpan.textContent = country.name;
    countriesName.appendChild(countriesNameSpan);
  });
  
  // 2
  
  let chart = document.createElement("div");
  chart.setAttribute("class", "data2");
  tenMostPopulated.forEach((country) => {
    let countryPercent = (country.population / worldPopulation) * 100;
    let chartSpan = document.createElement("div");
    chartSpan.setAttribute("class", "chart");
    chartSpan.style.width = `${countryPercent}%`;
    chart.appendChild(chartSpan);
  });
  
  // 3
  
  let populationsValue = document.createElement("div");
  populationsValue.setAttribute("class", "data3");
  
  tenMostPopulated.forEach((country) => {
    let populationsValueSpan = document.createElement("div");
    populationsValueSpan.setAttribute("class", "pop");
    populationsValueSpan.textContent = country.population.toLocaleString("en-US");
    populationsValue.appendChild(populationsValueSpan);
  });
  
  // Get number of languages
  const languageSpoken = countries_data.map((country) => {
    let a = [];
    a.push(country.languages);
    return a;
  });
  let Languages = new Set(languageSpoken);
  numberLanguages = Languages.size;
  
  let languagesFre = () => {
    let f = {};
  
    for (let i = 0; i < countries_data.length; i++) {
      for (let j = 0; j < countries_data[i].languages.length; j++) {
        const country = countries_data[i].languages[j];
        if (country in f) {
          f[country]++;
        } else {
          f[country] = 1;
        }
      }
    }
  
    let sortedLanguagesFre = Object.keys(f)
      .sort((a, b) => f[b] - f[a])
      .slice(0, 10);
    return sortedLanguagesFre.map((name) => ({ name, f: f[name] }));
  };
  
  const tenMostLanguages = languagesFre();
  
  // Languages
  
  // 1
  
  let languagesName = document.createElement("div");
  languagesName.setAttribute("class", "data1");
  
  tenMostLanguages.forEach((language) => {
    let languagesNameSpan = document.createElement("div");
    languagesNameSpan.setAttribute("class", "country");
  
    languagesNameSpan.textContent = language.name;
  
    languagesName.appendChild(languagesNameSpan);
  });
  
  // 2
  
  let chart1 = document.createElement("div");
  chart1.setAttribute("class", "data2");
  
  tenMostLanguages.forEach((language) => {
    let languagePercent = (language.f / tenMostLanguages.length) * 10;
    let chartSpan1 = document.createElement("div");
    chartSpan1.setAttribute("class", "chart");
  
    chartSpan1.style.width = `${languagePercent}%`;
  
    chart1.appendChild(chartSpan1);
  });
  
  // 3
  
  let numberCountry = document.createElement("div");
  numberCountry.setAttribute("class", "data3");
  
  tenMostLanguages.forEach((language) => {
    let numberCountrySpan = document.createElement("div");
    numberCountrySpan.setAttribute("class", "num");
  
    numberCountrySpan.textContent = language.f;
  
    numberCountry.appendChild(numberCountrySpan);
  });
  