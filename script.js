const body = document.querySelector("body");

function runEventListener() {
    const spans = document.querySelectorAll("span");
    spans.forEach(span => {
        const randomColor = `rgb(${getRandomRGB()},${getRandomRGB()},${getRandomRGB()})`;
        span.addEventListener('mouseover', () => {
        span.style = `background-color:${randomColor}`;
        });
    });
}

function drawGrid(num) {
    const container = document.createElement("div");
    container.classList.add('container');
    body.appendChild(container);

    for (let i = 0; i < num; ++i) {
        const div = document.createElement("div");
        container.appendChild(div);
        for (let i = 0; i < num; ++i) {
            const span = document.createElement("span");
            div.appendChild(span);
        }
    }
}

function getRandomRGB() {
    return Math.floor(Math.random() * 255 + 1);
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let size = +prompt("Enter ammount of squares per side: ");
    while (size > 100 || size === NaN) {
        size = +prompt("Grid too big, enter a number no bigger than 100");
    }
    if (document.querySelector(".container")) {
        body.removeChild(document.querySelector(".container"));
    }

    drawGrid(size);
    runEventListener();
})