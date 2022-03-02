function createLoveFall() {
    const love = document.createElement('i');
    love.style.position = 'absolute';
    love.classList.add('fas', 'fa-heart');
    love.style.left = Math.random() * window.innerWidth + 'px';
    love.style.animationDuration = Math.random() * 3 + 2 + 's';
    love.style.opacity = Math.random();
    love.style.fontSize = Math.random() * 10 + 10 + 'px';

    document.body.appendChild(love);

    setTimeout(() => {
        love.remove();
    }, 5000)
}

document.getElementById('heart').addEventListener('click', () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    document.body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";

})


setInterval(createLoveFall, 50)