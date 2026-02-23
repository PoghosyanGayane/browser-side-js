// TASK 6
// Fetch data from a public API and render the result on the page

"use strict";
const url = "https://api.open-meteo.com/v1/forecast?latitude=40.18&longitude=44.51&hourly=temperature_2m";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const hourlyData = data.hourly;
    const scale = data.hourly_units.temperature_2m;
    let i;
    for (i = 0; i < hourlyData.time.length & i <hourlyData.temperature_2m.length; i++) {
        const time = hourlyData.time[i];
        const temperature = hourlyData.temperature_2m[i];
        console.log(`weather at ${time} is ${temperature}${scale}`);
    }
  })
  .catch(error => console.error("Error:", error));
