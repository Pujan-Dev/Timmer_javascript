var Hour = document.querySelector(".time_H")
var Min = document.querySelector(".time_M")
var Sec = document.querySelector(".time_S")

var SBTN = document.querySelector("#Start")
var RBTN = document.querySelector("#Reset")
var PBTN = document.querySelector("#Pause")

let M_sec = S_sec = H_sec = 0;

const TIME = 60;

Hour.innerHTML = Min.innerHTML = Sec.innerHTML = 0

function timmer() {
    // Change of time 
    Min.innerHTML = M_sec;
    Hour.innerHTML = H_sec
    Sec.innerHTML = S_sec

    // change of min as the second turns into 60
    S_sec = S_sec + 1
    if (S_sec >= TIME - 1) {
        M_sec = M_sec + 1
        S_sec = -1
    }
    // change of hours as the min turns into 60
    if (M_sec >= 59) {
        H_sec = H_sec + 1
        M_sec = 0
    }
}
//reset button
var Z;
RBTN.addEventListener('click', function () {
    M_sec = S_sec = H_sec = 0;
    SBTN.disabled = false;
    Min.innerHTML = M_sec;
    Hour.innerHTML = H_sec
    Sec.innerHTML = S_sec
    clearInterval(Z)
})
// Pause
PBTN.addEventListener('click',function(){
    SBTN.disabled = false;
    clearInterval(Z)
    RBTN.disabled = true;
})
// to start the timmer
function run_timmer(){
    Z = setInterval(timmer, 1000)
    SBTN.disabled = true;
    PBTN.disabled = false;
    RBTN.disabled = false;
}

