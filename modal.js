const backdropElement = document.getElementById('backdrop');
const modalLinkElements = document.querySelectorAll('.continents-item');
let infoModal;

function toggleBackdrop() {
  backdropElement.classList.toggle('visible');
}

function presentInfoModal(event) {
  const text = event.target.dataset.text;
  toggleBackdrop();
  infoModal = document.createElement('div');
  infoModal.classList.add('modal');
  infoModal.innerHTML = `<h2>Вот некоторые места, которые понравились уже не одному миллиону человек
  по всему миру!</h2> <p>${text}</p>`;
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Okay';
  infoModal.appendChild(closeButton);
  document.body.appendChild(infoModal);
}

function hideInfoModal() {
  toggleBackdrop();
  document.body.removeChild(infoModal);
}

for (const linkElement of modalLinkElements) {
  linkElement.addEventListener('click', presentInfoModal);
}

backdropElement.addEventListener('click', hideInfoModal);
