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
    if (element.childElementCount == 24) {
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
    else {
        const Hours = `
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(0 250 250)">0</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(15 250 250)">1</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(30 250 250)">2</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(45 250 250)">3</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(60 250 250)">4</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(75 250 250)">5</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(90 250 250)">6</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(105 250 250)">7</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(120 250 250)">8</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(135 250 250)">9</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(150 250 250)">10</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(165 250 250)">11</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(180 250 250)">12</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(195 250 250)">13</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(210 250 250)">14</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(225 250 250)">15</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(240 250 250)">16</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(255 250 250)">17</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(270 250 250)">18</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(285 250 250)">19</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(300 250 250)">20</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(315 250 250)">21</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(330 250 250)">22</text>
                <text x="250" y="80" fill="red" style="text-anchor:middle; font-family:Ubuntu; font-weight: bold; font-size:25;" transform="rotate(345 250 250)">23</text>
                `
                document.getElementById("hours").innerHTML = Hours
    }
}