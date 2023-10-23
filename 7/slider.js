const slider = document.querySelector(".slider");
const pic = slider.querySelectorAll("img")[0];
const arrow = document.querySelectorAll(".arrow");
const dot = document.querySelectorAll(".dots");
const mediaQuery = window.matchMedia("(min-width: 768px)");

let desktopWidth;
let currentId;
let picWidth = pic.clientWidth + 16;


window.addEventListener("DOMContentLoaded", function (event) {
    currentId = 1;
    desktopWidth = mediaQuery.matches;

    arrow.forEach((dots) => {
        dots.addEventListener("click", () => {
            let value;
            if (!desktopWidth) {
                if (currentId === 1) {
                    if (dots.id === "left") {
                        currentId = 8;
                        value = 7 * picWidth;
                    } 
                    else {
                        currentId+=1;
                        value = picWidth;
                    }
                } 
                else if (currentId === 8) {
                    if (dots.id === "left") {
                        currentId-=1;
                        value = -picWidth;
                    } 
                    else {
                        currentId = 1;
                        value = -7 * picWidth;
                    }
                } 
                else {
                    if (dots.id === "left") {
                        currentId-=1;
                        value = -picWidth;
                    } 
                    else {
                        currentId+=1;
                        value = picWidth;
                    }
                }
            } 
            else {
                if (currentId === 1) {
                    if (dots.id === "left") {
                        currentId = 6;
                        value = 7 * picWidth;
                    } 
                    else {
                        currentId+=1;
                        value = picWidth;
                    }
                } 
                else if (currentId === 6) {
                    if (dots.id === "left") {
                        currentId-=1;
                        value = -picWidth;
                    } 
                    else {
                        currentId = 1;
                        value = -7 * picWidth;
                    }
                } 
                else {
                    if (dots.id === "left") {
                        currentId-=1;
                        value = -picWidth;
                    } 
                    else {
                        currentId+=1;
                        value = picWidth;
                    }
                }
            }

            setCurrent();
            setPager();
            slider.scrollLeft += value;
        });
    });
});

function setPager() {
    dot.forEach((dots) => {
        dots.classList.remove("current");
    });
}

function setCurrent() {
    if (!desktopWidth) {
        dot.forEach((dots) => {
            if (dots.id === currentId) {
                dots.classList.add("current");
            }
        });
    } 
    else {
        dot.forEach((dots) => {
            if (dots.id === currentId || dots.id === currentId + 1 || dots.id === currentId + 2) {
                dots.classList.add("current");
            }
        });
    }
}

function mobileVerst(e) {
    if (e.matches) {
        desktopWidth = true;
    } 
    else {
        desktopWidth = false;
    }
    currentId = 1;
    slider.scrollLeft -= 7 * picWidth;
    setPager();
    setCurrent();
}
