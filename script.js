var i = 0,
    bg = ["1.jpeg", "2.jpeg"],
    console;

//this will check it the minutes are less than 10 and if so it will add a 0 before it.
function checkTime(i) {
    "use strict";
    
    if (i < 10) {i = "0" + i; }
    return i;
}

//this turns the hour time into 12 hour not 24 hour.
function checkHour(o) {
    "use strict";
    
    if (o > 12) {o = o - 12; }
    return o;
}

//this is the clock itself
function timeClock() {
    "use strict";
    
    var time, h, m, t = setTimeout(timeClock, 500);
    time = new Date();
    h = time.getHours();
    m = time.getMinutes();
    m = checkTime(m);
    h = checkHour(h);
    document.getElementById("clock").innerHTML = h + ":" + m;
}

//this is a counter for the background
function count(x) {
    "use strict";
    
    if (i === 3) {
        
    }
    
//    i += 1;
//    if (i === 3) {
//        i = 0;
//    }
//    console.log(i);
}

function negCount() {
    "use strict";
    
//    i += -1;
//    if (i === -1) {
//        i = 2;
//    }
//    console.log(i);
}


//this changes the background
function bgChange() {
    "use strict";
    document.body.style.background = bg[i];
}