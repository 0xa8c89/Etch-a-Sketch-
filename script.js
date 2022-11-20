const body = document.querySelector('body');

function getRandomRGB() {
    return `${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}`;
}

function runSpanListener() {
    const spans =  document.querySelectorAll('span');
    spans.forEach(span => {
        span.addEventListener('mouseover', () => {
            console.log(span.style);
            if (!(span.style.backgroundColor.startsWith('rgb'))) {
                span.style.backgroundColor = `rgb(${getRandomRGB()})`;
                return
            }
            const oldRB = span.style.backgroundColor.split(',');
            newRGB = [oldRB[0].replace('rgb(', ''), oldRB[1], oldRB[2].replace(')', '')];
            let newRgbString = 'rgb('
            for (let i = 0; i < newRGB.length; ++i) {
                newRGB[i] = parseInt(newRGB[i]);
                newRGB[i] -= newRGB[i]/10;
                newRgbString += Math.floor(newRGB[i]);
                if (i !== 2)
                    newRgbString += ',';
            }
            newRgbString += ')';
            span.style.backgroundColor = newRgbString;
        })
    })
}

function drawGrid(num) {
    let sizeForumla = 500/num;

    // create container
    const container = document.createElement("div")
    container.classList.add('container');
    body.appendChild(container);

    // create inner container
    for (let i = 0; i < num; ++i) {
        const innerContainer = document.createElement('div')
        innerContainer.classList.add('inner-container');
        container.appendChild(innerContainer);
                
        // create spans
        for (let i = 0; i < num; ++i) {
            const span = document.createElement('span');
            span.style.height = `${sizeForumla}px`;
            span.style.width = `${sizeForumla}px`;
            span.style.backgroundColor = "white";
            innerContainer.appendChild(span);
        }
    }
    runSpanListener();
}

drawGrid(16);

const button = document.querySelector('button')
button.addEventListener('click', () => {
    size = prompt("Enter amount of squares per side.");
    while (isNaN(size)) {
        size = prompt("Bad input. Enter amount of squares per side.");
    }
    if (size !== null) {
        if (size > 100) {
            size = 100;
        }
        
        if (document.querySelector('.container'))
            body.removeChild(document.querySelector('.container'));
        drawGrid(size);
    }
})