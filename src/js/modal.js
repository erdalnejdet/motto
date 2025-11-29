document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('videoModal');
  const btn = document.getElementById('modalTrigger');
  const closeBtn = document.getElementsByClassName('close-modal')[0];
  const iframe = document.getElementById('promoVideo');
  let player;

  // Function to open modal
  function openModal() {
    modal.classList.add('show');
    modal.style.display = 'flex';
    // Autoplay video if API is ready, or just let iframe autoplay attribute handle it
    // For better control, we could use YouTube Player API, but for now iframe src update is simple
    const src = iframe.src;
    if (!src.includes('autoplay=1')) {
      iframe.src = src + "&autoplay=1";
    }
  }

  // Function to close modal
  function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300); // Wait for transition

    // Stop video by resetting src
    const src = iframe.src;
    iframe.src = src.replace('&autoplay=1', '');
  }

  // Open on load (first time only per session)
  if (!sessionStorage.getItem('modalShown')) {
    setTimeout(openModal, 1000); // Delay slightly for effect
    sessionStorage.setItem('modalShown', 'true');
  }

  // Trigger button click
  btn.addEventListener('click', openModal);

  // Close button click
  closeBtn.addEventListener('click', closeModal);

  // Click outside modal to close
  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      closeModal();
    }
  });
});
