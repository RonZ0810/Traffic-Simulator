const canvas = document.getElementById('sim');
const ctx = canvas.getContext('2d');

const agents = [];

class Agent {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.fill();
    }
}

for (let i = 0; i < 100; i++) {
    agents.push(new Agent(Math.random() * canvas.width, Math.random() * canvas.height));
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let a of agents) {
        a.update();
        a.draw();
    }
    requestAnimationFrame(loop);
}

loop();
