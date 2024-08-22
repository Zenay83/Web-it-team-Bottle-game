let coinCount = 0;

document.getElementById('bottle').addEventListener('click', function () {
    const bottle = document.getElementById('bottle');
    bottle.style.transform = 'translateY(-100px) rotate(360deg)'; 

    setTimeout(() => {
        bottle.style.transform = 'translateY(0) rotate(0deg)'; 
        coinCount++;
        document.getElementById('coins').innerText = `Монеты: ${coinCount}`;
    }, 300);
});
