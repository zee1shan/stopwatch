let sec = document.querySelector(".sec");
let ten = document.querySelector(".tens")
let audio = document.getElementById("audio");
let music = document.querySelector(".music");
let tsec = 0;
let tmin = 0;
let watchimg = document.querySelector(".watch img");
let strt = document.querySelector(".button-start");
let reset = document.querySelector(".button-reset");
let strtid;
strt.addEventListener("click", () => {
        watchimg.classList.add("ani")
        strt.innerHTML == "stop";
        strtid = setInterval(() => {
            tsec++;
            if (tsec < 9) {
                ten.innerHTML = '0' + tsec;
            }
            if (tsec > 9) {
                ten.innerHTML = tsec;
            }
            if (tsec > 99) {
                tmin++;
                sec.innerHTML = tmin;
                tsec = 0;
            }
        }, 10);
    
    console.log(strt.value)
    if (strt.value == "stop") {
        clearInterval(strtid);
        audio.pause();
        strt.innerHTML = "start";
        music.innerHTML = "kch gana shana"
        watchimg.classList.remove("ani")
    }

})
music.addEventListener('click', () => {
    if (music.innerHTML == "kch gana shana") {
        audio.play();
        music.innerHTML = "shanti"
    } else {
        audio.pause();
        audio.currentTime = 0;
        music.innerHTML = "kch gana shana";
    }
})
reset.addEventListener("click", () => {
    clearInterval(strtid)
    sec.innerHTML = "00";
    ten.innerHTML = "00";
    music.innerHTML = "kch gana shana";
})
