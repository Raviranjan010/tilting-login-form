// -------- Floating Particles --------
const particlesContainer = document.getElementById('particles');
const particleCount = 30;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 6 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    const hue = Math.random() * 360;
    const opacity = Math.random() * 0.5 + 0.1;
    particle.style.background = `hsla(${hue}, 100%, 70%, ${opacity})`;

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    const duration = Math.random() * 20 + 10;
    particle.style.animation = `float ${duration}s infinite linear`;
    particle.style.animationDelay = `${Math.random() * 5}s`;

    particlesContainer.appendChild(particle);
}

// -------- 3D Tilt on Container --------
const loginContainer = document.getElementById('loginContainer');

document.addEventListener('mousemove', e => {
    const { clientX: x, clientY: y } = e;
    const { innerWidth: w, innerHeight: h } = window;

    const tiltX = ((y / h) * 2 - 1) * 5;
    const tiltY = ((x / w) * 2 - 1) * -5;

    loginContainer.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
});

document.addEventListener('mouseleave', () => {
    loginContainer.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
});

// -------- Button Animation / Mock Login --------
const loginButton = document.getElementById('loginButton');
const buttonTextSpans = document.querySelectorAll('.button-text span');

loginButton.addEventListener('click', () => {
    loginButton.classList.add('loading');
    loginButton.disabled = true;
    loginButton.innerHTML = '<div class="button-text">Processing...</div>';

    // Simulate async login
    setTimeout(() => {
        loginButton.innerHTML = '<div class="button-text">Success! ✓</div>';

        setTimeout(() => {
            loginButton.disabled = false;
            loginButton.innerHTML = '<div class="button-text"><span>L</span><span>o</span><span>g</span><span>i</span><span>n</span></div>';
            loginButton.classList.remove('loading');
        }, 2000);
    }, 1500);
});

// Wave effect on hover
loginButton.addEventListener('mouseenter', () => {
    buttonTextSpans.forEach((span, idx) => {
        span.style.animationDelay = `${idx * 0.05}s`;
    });
});
