const starContainer = document.getElementById('starContainer');

for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('untoldcoing');
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  starContainer.appendChild(star);
}
