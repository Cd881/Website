function checkTime(i) {
    if (i < 10) {i = "0" + i; }
    return i;
}
function checkHour(o) {
    if (o > 12) {o = o - 12; }
    return o;
}
function timeClock() {
    var time, h, m, t = setTimeout(timeClock, 500);
    time = new Date();
    h = time.getHours();
    m = time.getMinutes();
    m = checkTime(m);
    h = checkHour(h);
    document.getElementById("clock").innerHTML = h + ":" + m;
}