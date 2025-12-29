// Game State
let isPaused = false;
let canvas, ctx;

// Input State
const input = {
    up: false, down: false, left: false, right: false,
    lp: false, mp: false, hp: false,
    lk: false, mk: false, hk: false,
    coin: false, start: false
};

// Initialize
document.addEventListener('DOMContentLoaded', init);

function init() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = 384;
    canvas.height = 224;
    
    setupControls();
    setupMenu();
    gameLoop();
    
    drawWelcome();
}

function setupControls() {
    // D-Pad
    document.querySelectorAll('.btn-dir').forEach(btn => {
        const dir = btn.dataset.dir;
        
        btn.addEventListener('touchstart', e => {
            e.preventDefault();
            input[dir] = true;
            vibrate(15);
        }, {passive: false});
        
        btn.addEventListener('touchend', e => {
            e.preventDefault();
            input[dir] = false;
        }, {passive: false});
    });
    
    // Action & System Buttons
    document.querySelectorAll('.btn-action, .btn-sys').forEach(btn => {
        const key = btn.dataset.btn;
        
        btn.addEventListener('touchstart', e => {
            e.preventDefault();
            input[key] = true;
            vibrate(20);
        }, {passive: false});
        
        btn.addEventListener('touchend', e => {
            e.preventDefault();
            input[key] = false;
        }, {passive: false});
    });
}

function setupMenu() {
    document.getElementById('menuBtn').addEventListener('click', togglePause);
}

function togglePause() {
    isPaused = !isPaused;
    document.getElementById('pauseMenu').classList.toggle('hidden', !isPaused);
}

function resumeGame() {
    isPaused = false;
    document.getElementById('pauseMenu').classList.add('hidden');
}

function onBackPress() {
    if (isPaused) {
        resumeGame();
    } else {
        togglePause();
    }
}

function vibrate(ms) {
    if (window.Android && Android.vibrate) {
        Android.vibrate(ms);
    } else if (navigator.vibrate) {
        navigator.vibrate(ms);
    }
}

// Game Loop
function gameLoop() {
    if (!isPaused) {
        update();
        render();
    }
    requestAnimationFrame(gameLoop);
}

function update() {
    // Game logic here
}

function render() {
    // Clear
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid
    ctx.strokeStyle = 'rgba(255,102,0,0.1)';
    for (let x = 0; x < canvas.width; x += 16) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 16) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
    
    // Draw input state indicator
    let y = 30;
    ctx.fillStyle = '#fff';
    ctx.font = '12px Arial';
    
    // Show active inputs
    const activeInputs = Object.entries(input)
        .filter(([k, v]) => v)
        .map(([k]) => k.toUpperCase());
    
    if (activeInputs.length > 0) {
        ctx.fillStyle = '#0f0';
        ctx.fillText('INPUT: ' + activeInputs.join(' + '), 10, canvas.height - 10);
    }
}

function drawWelcome() {
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#f60';
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('SF2 ARCADE', canvas.width/2, canvas.height/2 - 30);
    
    ctx.fillStyle = '#fff';
    ctx.font = '14px Arial';
    ctx.fillText('اضغط COIN ثم START', canvas.width/2, canvas.height/2 + 10);
    
    ctx.fillStyle = '#888';
    ctx.font = '12px Arial';
    ctx.fillText('محرك الألعاب الكلاسيكية', canvas.width/2, canvas.height/2 + 40);
}
