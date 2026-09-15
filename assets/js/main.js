(() => {
  const dialog = document.querySelector('#resource-dialog');
  const dialogTitle = document.querySelector('#dialog-title');
  const dialogMessage = document.querySelector('#dialog-message');
  const resourceButtons = document.querySelectorAll('[data-resource]');
  const closeButtons = document.querySelectorAll('[data-dialog-close]');
  const autoplayVideos = document.querySelectorAll('[data-autoplay-video]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  resourceButtons.forEach((button) => {
    button.addEventListener('click', () => {
      dialogTitle.textContent = `${button.dataset.resource} coming soon`;
      dialogMessage.textContent = button.dataset.message;
      if (typeof dialog.showModal === 'function') {
        dialog.showModal();
      } else {
        window.alert(dialogMessage.textContent);
      }
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', () => dialog.close());
  });

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  const applyMotionPreference = () => {
    autoplayVideos.forEach((video) => {
      if (reducedMotion.matches) {
        video.pause();
        video.removeAttribute('autoplay');
        video.controls = true;
      }
    });
  };

  applyMotionPreference();
  reducedMotion.addEventListener?.('change', applyMotionPreference);

  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => { video.controls = true; });
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.2 });

    autoplayVideos.forEach((video) => observer.observe(video));
  }
})();
