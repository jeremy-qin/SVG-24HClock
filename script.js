function display_t() {
    var refresh = 1000;
    time = setTimeout("display_time()", refresh)
}



function display_time() {
    var date = new Date();
    var date1 = date.toDateString()
    var hour = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() 
    document.getElementById("time").innerHTML = date1 + " " +  hour
    time = display_t()
}

function formatHeure() {
    const element = document.getElementById("hours");
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
    const newHours = `
    <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(0 250 250)">0</text>
    <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(30 250 250)">1</text>
    <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(60 250 250)">2</text>
    <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(90 250 250)">3</text>
    <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(120 250 250)">4</text>
    <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(150 250 250)">5</text>
    <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(180 250 250)">6</text>
    <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(210 250 250)">7</text>
    <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(240 250 250)">8</text>
    <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(270 250 250)">9</text>
    <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(300 250 250)">10</text>
    <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(330 250 250)">11</text>
    `
    document.getElementById("hours").innerHTML = newHours
}