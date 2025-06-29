const btn = document.getElementById('burn-btn');
const stickman = document.getElementById('stickman');

btn.addEventListener('click', () => {
  stickman.classList.add('burning');
  btn.disabled = true;
  btn.textContent = "Han brænder!";
});
