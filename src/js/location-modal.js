const mapBtn = document.querySelector('.location__information-link'),
  locationOverlayEl = document.querySelector('.location__overlay');

function handleOpen(e) {
  e.preventDefault();
  locationOverlayEl.classList.remove('visually-hidden');
  locationOverlayEl.addEventListener('click', handleClose);
  document.addEventListener('keydown', handleClose);
}
function handleClose(e) {
  e.preventDefault();
  if (e.target.className === 'location__overlay' || e.code === 'Escape') {
    locationOverlayEl.classList.add('visually-hidden');
  }
  locationOverlayEl.removeEventListener('click', handleClose);
  document.removeEventListener('keydown', handleClose);
  console.dir('all listeners remove');
}
mapBtn.addEventListener('click', handleOpen);
