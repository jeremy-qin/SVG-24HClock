let tempUnit = "C";
let hoursFormat = "24";

function getJSON(path, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  };
  xhr.open('GET', path, true);
  xhr.send();
}

function display_t() {
  var refresh = 1000;
  time = setTimeout(display_time, refresh);
}

function display_time() {
  var date = new Date();
  var y = date.getFullYear();
  var m = date.getMonth();
  var d = date.getDate();

  var mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  switch (new Date().getDay()) {
    case 0:
      day = "Dimanche";
      break;
    case 1:
      day = "Lundi";
      break;
    case 2:
      day = "Mardi";
      break;
    case 3:
      day = "Mercredi";
      break;
    case 4:
      day = "Jeudi";
      break;
    case 5:
      day = "Vendredi";
      break;
    case 6:
      day = "Samedi";
  }
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let hr = date.getHours();

  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  let hour = (hoursFormat == "24") ? (hr  + ":" + min + ":" + sec) : ((hr-12)  + ":" + min + ":" + sec + (hr>12 ? "PM" : "AM") );

  document.getElementById("date").innerHTML = day + " " + d + " " + mois[m] + " " + y;
  document.getElementById("clockhour").innerHTML = hour;
  time = display_t();
  document.getElementById("aiguille-heure").setAttribute("transform", "rotate(" + (hr * 360 / 24) + " 250 250)");
  document.getElementById("aiguille-minute").setAttribute("transform", "rotate(" + (min * 360 / 60) + " 250 250)");
  document.getElementById("aiguille-seconde").setAttribute("transform", "rotate(" + (sec * 360 / 60) + " 250 250)");
}

function formatHeure() {

  const element = document.getElementById("hours");
  if (hoursFormat == "24") {
    const newHours = `
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(0 250 250)">12AM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(15 250 250)">1AM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(30 250 250)">2AM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(45 250 250)">3AM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(60 250 250)">4AM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(75 250 250)">5AM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(90 250 250)">6AM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(105 250 250)">7AM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(120 250 250)">8AM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(135 250 250)">9AM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(150 250 250)">10AM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(165 250 250)">11AM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(180 250 250)">12PM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(195 250 250)">1PM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(210 250 250)">2PM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(225 250 250)">3PM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(240 250 250)">4PM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(255 250 250)">5PM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(270 250 250)">6PM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(285 250 250)">7PM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(300 250 250)">8PM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(315 250 250)">9PM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(330 250 250)">10PM</text>
    <text x="250" y="80" fill="black" style="text-anchor:middle; font-family:Lucida Sans; font-weight: bold; font-size:15;" transform="rotate(345 250 250)">11PM</text>
    `;
    document.getElementById("hours").innerHTML = newHours;
    hoursFormat = "am/pm";
  }
  else {
    const newHours = `
    <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(0 250 250)">0</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(15 250 250)">1</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(30 250 250)">2</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(45 250 250)">3</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(60 250 250)">4</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(75 250 250)">5</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(90 250 250)">6</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(105 250 250)">7</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(120 250 250)">8</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(135 250 250)">9</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(150 250 250)">10</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(165 250 250)">11</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(180 250 250)">12</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(195 250 250)">13</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(210 250 250)">14</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(225 250 250)">15</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(240 250 250)">16</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(255 250 250)">17</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(270 250 250)">18</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(285 250 250)">19</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(300 250 250)">20</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(315 250 250)">21</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(330 250 250)">22</text>
        <text x="250" y="80" fill="black"
          style="text-anchor:middle; font-family:Lucida Sans; font-weight: bolder; font-size:20;"
          transform="rotate(345 250 250)">23</text>
          `;
    document.getElementById("hours").innerHTML = newHours;
    hoursFormat = "24";
  }
}

function chercherTemperaturesC() {
  let h = new Date().getHours();
  getJSON('https://api.openweathermap.org/data/2.5/onecall?lat=45.5028&lon=-73.608&units=metric&lang=fr&appid=f84f3dfb9089d7ca104d69ffca8d8fa0', function (data) {
    for (let i = 0; i < 24; i++) {
      if (h + i == 24) h = -i;
      document.getElementById("temp" + (h + i)).innerHTML = Math.round(data.hourly[i].temp) + "°C";
    }
  });
}

function chercherTemperaturesF() {
  let h = new Date().getHours();
  getJSON('https://api.openweathermap.org/data/2.5/onecall?lat=45.5028&lon=-73.608&units=imperial&lang=fr&appid=f84f3dfb9089d7ca104d69ffca8d8fa0', function (data) {
    for (let i = 0; i < 24; i++) {
      if (h + i == 24) h = -i;
      document.getElementById("temp" + (h + i)).innerHTML = Math.round(data.hourly[i].temp) + "°F";
    }
  });
}

function chercherMessageJSON() {
  getJSON('https://www-labs.iro.umontreal.ca/~roys/ift1005/calendrier/test.php?cal=now%2C%2B5sec%2CBienvenue%21%0D%0A%2B5sec%2C%2B5sec%2CHorloge+SVG+r%C3%A9alis%C3%A9+par%0D%0A%2B5sec%2C%2B10sec%2CMehdi+Aqdim%0D%0A%2B15sec%2C%2B20sec%2CJeremy+Qin%0D%0A%2B20sec%2C%2B30sec%2CFrancisco+Lopez+Saavedra', function (data) {
    for (let message of data) {
      setTimeout(changerMessageTicker(message.message), (message.fin - message.debut) * 1000);
    }
  });
}

function changerMessageTicker(message) {
  document.getElementById("ticker").innerHTML += '<div class="hitem">' + message + '</div> ';
}

function changeTempUnit() {
  if (tempUnit == "C") {
    chercherTemperaturesF();
    tempUnit = "F";
  }
  else {
    chercherTemperaturesC();
    tempUnit = "C";
  }
}

// Makes an api call to retrieve data, handles sun data to modify svg 
function sunState() {
  var url = "https://api.openweathermap.org/data/2.5/onecall?lat=45.50884&lon=-73.58781&exclude=&appid=880e2051f8f66e8275b6bd25f116d6f3"
  var req = new XMLHttpRequest();

  req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var jSunState = JSON.parse(this.responseText);
      var daily = jSunState.daily;
      // Moon data and Moon function call
      var moonPhase = daily[1].moon_phase;
      moonState(moonPhase);
      // sunrise data
      var srDate = new Date(daily[1].sunrise * 1000);
      var srHour = srDate.getHours();
      var srMin = srDate.getMinutes();
      var srMinForm = srHour * 60 + srMin;
      // sunset data
      var ssDate = new Date(daily[1].sunset * 1000);
      var ssHour = ssDate.getHours();
      var ssMin = ssDate.getMinutes();
      var ssMinForm = ssHour * 60 + ssMin;
      // Data handling
      var dayRatio = (ssMinForm - srMinForm) / 1440; // Compute the ratio of duration between sunrise and sunset by a day
      // sets the form of our day circle according to the ratio
      document.getElementById("day_circle").setAttribute("stroke-dasharray", (dayRatio * 502) + " 502");
      const degreeOffset = 90;
      // Positions the day circle
      var daystart = ((srMinForm + 60) / 1440) * 360; // Daystart adds 60 to srminform to correct the offset
      document.getElementById("day_cycle_rotation").setAttribute("to", (daystart - degreeOffset) + " 250 250");
      var rotation = document.getElementById("day_cycle_rotation");
      rotation.beginElement();
    }
  };
  req.open("GET", url, true);
  req.send();
}

// handles data retrieved from Api, changes the html to show the current moon phase
function moonState(moonphase) {
  const newMoonSVG = `<circle cx="160 " cy="300" r="40" fill="black" stroke="#c9c9c9" />`
  const waningSVG = `<circle cx="160" cy="300" r="40" stroke="#c9c9c9" stroke-width="2" fill="url(#moon_color)" />
  <circle cx="175" cy="300" r="30" stroke="#c9c9c9" stroke-width="2" fill="yellow" />
  <circle cx="190" cy="300" r="23" stroke="yellow" stroke-width="2" fill="yellow" />`
  const waxingSVG = ` <circle cx="160" cy="300" r="40" stroke="#c9c9c9" stroke-width="2" fill="url(#moon_color)" />
  <circle cx="190" cy="300" r="36" stroke="yellow" stroke-width="2" fill="yellow" />`
  const quarterSVG = `<circle cx="160" cy="300" r="40" stroke="#c9c9c9" stroke-width="2" fill="url(#moon_color)" />
  <rect x="160" y="255" width="45" height="90" fill="yellow"/>`
  if (moonphase == 0 || moonphase == 1) {
    document.getElementById("moontxt").innerHTML = "New Moon";
    document.getElementById("moon").innerHTML = newMoonSVG;
    return;
  }
  if (moonphase == 0.25) {
    document.getElementById("moontxt").innerHTML = "First Quarter Moon";
    document.getElementById("moon").innerHTML = quarterSVG;
    return;
  }
  if (moonphase == 0.5) {
    document.getElementById("moontxt").innerHTML = "Full Moon";
    return
  }
  if (moonphase == 0.75) {
    document.getElementById("moontxt").innerHTML = "Last Quarter Moon";
    document.getElementById("moon").innerHTML = quarterSVG;
    return;
  }
  if (moonphase < 0.25) {
    document.getElementById("moontxt").innerHTML = "Waxing crescent";
    document.getElementById("moon").innerHTML = waxingSVG;
    return;
  }
  if (moonphase < 0.5) {
    document.getElementById("moontxt").innerHTML = "Waxing Gibous";
    document.getElementById("moon").innerHTML = waxingSVG;
    return;
  }
  if (moonphase < 0.75) {
    document.getElementById("moontxt").innerHTML = "Waning Gibous";
    document.getElementById("moon").innerHTML = waningSVG;
    return;
  }
  if (moonphase < 1) {
    document.getElementById("moontxt").innerHTML = "Waning Crescent";
    document.getElementById("moon").innerHTML = waningSVG;
    return;
  }
}

window.onload = function () {
  display_time();
  chercherMessageJSON();
  chercherTemperaturesC();
  sunState();
}