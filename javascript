// === KONFIGURASI KODE RAHASIA ===
// Ganti tulisan di dalam tanda petik dengan password kalian
const kodeRahasia = "sayangku"; 

// Elemen Login
const loginScreen = document.getElementById('login-screen');
const passwordInput = document.getElementById('password-input');
const loginBtn = document.getElementById('login-btn');
const errorMsg = document.getElementById('error-msg');

// Elemen Kado & Konten
const giftTrigger = document.getElementById('gift-trigger');
const introScreen = document.getElementById('intro-screen');
const mainContent = document.getElementById('main-content');
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const introText = document.getElementById('intro-text');
const surpriseBtn = document.getElementById('surprise-btn');
const hiddenMessage = document.getElementById('hidden-message');

let isPlaying = false;

// Event Login
function handleLogin() {
    const enteredPassword = passwordInput.value.trim().toLowerCase();
    
    if (enteredPassword === kodeRahasia.toLowerCase()) {
        // Jika kode benar
        errorMsg.style.display = 'none';
        loginScreen.style.opacity = '0';
        loginScreen.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            loginScreen.style.display = 'none';
            // Tampilkan layar kado
            introScreen.style.display = 'flex';
            musicToggle.style.display = 'flex';
        }, 800);
    } else {
        // Jika kode salah
        errorMsg.style.display = 'block';
        passwordInput.value = '';
        
        // Reset animasi shake
        errorMsg.style.animation = 'none';
        setTimeout(() => {
            errorMsg.style.animation = 'shake 0.4s ease';
        }, 10);
    }
}

loginBtn.addEventListener('click', handleLogin);
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleLogin();
});

// Fungsi Memutar Musik
function playMusic() {
    bgMusic.play().then(() => {
        isPlaying = true;
        musicToggle.innerText = "🔊";
    }).catch(err => {
        console.log("Autoplay dicegah browser");
    });
}

// Event Klik Kado
giftTrigger.addEventListener('click', () => {
    giftTrigger.classList.add('opened');
    introText.innerText = "Tadaa! 🎉";

    // Confetti
    var duration = 3 * 1000;
    var end = Date.now() + duration;
    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

    playMusic();

    setTimeout(() => {
        introScreen.style.opacity = '0';
        introScreen.style.transform = 'scale(1.5)';
        
        setTimeout(() => {
            introScreen.style.display = 'none';
            mainContent.style.display = 'block';
            setTimeout(() => {
                mainContent.style.opacity = '1';
            }, 100);
        }, 1000);
    }, 2000);
});

// Toggle Musik
musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.innerText = "🔇";
        isPlaying = false;
    } else {
        bgMusic.play();
        musicToggle.innerText = "🔊";
        isPlaying = true;
    }
});

// Tombol Kejutan Tambahan
surpriseBtn.addEventListener('click', () => {
    hiddenMessage.style.display = 'block';
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });
});

// Efek Bintang di Background
function createStars() {
    for(let i=0; i<50; i++) {
        let star = document.createElement('div');
        star.style.position = 'fixed';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = Math.random() * 3 + 'px';
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.zIndex = '0';
        star.style.opacity = Math.random();
        document.body.appendChild(star);
    }
}
createStars();