//Код для часов
let hourEl = document.querySelector('.hour');
let minuteEl = document.querySelector('.minute');

function updateTime() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();

    hourEl.innerHTML = h;
    minuteEl.innerHTML = m;

    setInterval(() => {
        updateTime()
    }, 1000)
}

updateTime();

let buttonEl = document.querySelector('.btn');
let containerTextEl = document.querySelector('.text');

buttonEl.addEventListener('click', (event) => {
    scrolling()
})


function scrolling() {
    let anchors = document.querySelectorAll('a[href*="#"]');
    let hrefEl = document.getElementById('href');

for(let anchor of anchors) {
    anchor.addEventListener("click", (event) => {
        event.preventDefault();
        let scrollEl = anchor.getAttribute('href');
        document.querySelector('' + scrollEl).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

hrefEl.click()
}
