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