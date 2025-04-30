// Parallax effect
document.addEventListener('mousemove', (e) => {
  const parallaxBg = document.querySelector('.parallax-bg');
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const moveX = (mouseX - windowWidth / 2) * 0.05;
  const moveY = (mouseY - windowHeight / 2) * 0.05;

  parallaxBg.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Countdown timer
const countdown = document.getElementById('countdown');
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 60);

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdown.textContent = "00d 00h 00m 00s";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
  const minutes = Math.floor((diff / (1000 * 60)) % 60).toString().padStart(2, '0');
  const seconds = Math.floor((diff / 1000) % 60).toString().padStart(2, '0');

  countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
