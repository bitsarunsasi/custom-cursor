
let cursorPointer = document.querySelector('.cursor');
let boxContent = document.querySelectorAll('.content');
let mousePos = { x: 0, y: 0 }

window.addEventListener('mousemove', function (event) {
    const easting = 8;
    mousePos.y = event.clientY;
    mousePos.x = event.clientX;
    cursorPointer.style.left = mousePos.x + 'px'
    cursorPointer.style.top = mousePos.y + 'px'
});


boxContent.forEach(function (item, index) {
    // mouse enter event
    item.addEventListener('mouseenter', function (event) {
        cursorPointer.classList.add('cursor--scale');
        cursorPointer.textContent = "Explore"
    });
    // mouse leave event
    item.addEventListener('mouseleave', function (event) {
        cursorPointer.innerHTML = '';
        cursorPointer.classList.remove('cursor--scale')

    });
});
