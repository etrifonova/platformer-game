const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
// 2d methods to draw

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; // 576

const player = new Player();
const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    }
}

// let bottom = y + 100;
function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    player.velocity.x = 0;
    if (keys.d.pressed) player.velocity.x = 5 // if there's only one statement, curly braces aren't necessary
    else if (keys.a.pressed) player.velocity.x = -5 // if there's only one statement, curly braces aren't necessary
    player.draw();
    player.update();
};

animate();

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w': 
            if (player.velocity.y === 0) player.velocity.y = -10;
            
            break;
        case 'a': 
            // move player to the left
            keys.a.pressed = true;
            break;
        case 'd': 
            // move player to the right
            keys.d.pressed = true;
            break;
        }
    }
)

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a': 
            // move player to the left
            keys.a.pressed = false;
            break;
        case 'd': 
            // move player to the right
            keys.d.pressed = false;
            break;
        }
    }
)