// Respect motion preferences for looping publication previews.
const paperDemos = document.querySelectorAll('.paper-demo');
if (paperDemos.length) {
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  paperDemos.forEach((video) => {
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'demo-toggle';
    const updateLabel = () => {
      toggle.textContent = video.paused ? '▶' : 'Ⅱ';
      toggle.setAttribute('aria-label', video.paused ? 'Play VGAS demonstration' : 'Pause VGAS demonstration');
      toggle.title = video.paused ? 'Play' : 'Pause';
    };
    toggle.addEventListener('click', () => {
      if (video.paused) {
        video.dataset.userPaused = 'false';
        video.play().catch(() => {});
      } else {
        video.dataset.userPaused = 'true';
        video.pause();
      }
    });
    video.addEventListener('play', updateLabel);
    video.addEventListener('pause', updateLabel);
    video.closest('.paper-figure').append(toggle);
    updateLabel();
  });
  const updateDemos = () => {
    paperDemos.forEach((video) => {
      if (motionPreference.matches || document.hidden || video.dataset.userPaused === 'true') {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    });
  };
  motionPreference.addEventListener('change', updateDemos);
  document.addEventListener('visibilitychange', updateDemos);
  updateDemos();
}

// Native horizontal scrolling also works without JavaScript.
const researchTrack = document.querySelector('.research-track');
if (researchTrack) {
  const controls = document.querySelector('.research-controls');
  const previous = controls.querySelector('[data-research-direction="-1"]');
  const next = controls.querySelector('[data-research-direction="1"]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const updateControls = () => {
    const limit = researchTrack.scrollWidth - researchTrack.clientWidth;
    controls.hidden = limit <= 1;
    previous.disabled = researchTrack.scrollLeft <= 1;
    next.disabled = researchTrack.scrollLeft >= limit - 1;
  };
  controls.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button || button.disabled) return;
    const card = researchTrack.querySelector('.research-card');
    const gap = parseFloat(getComputedStyle(researchTrack).columnGap) || 0;
    researchTrack.scrollBy({
      left: Number(button.dataset.researchDirection) * (card.offsetWidth + gap),
      behavior: reducedMotion.matches ? 'instant' : 'smooth'
    });
  });
  researchTrack.addEventListener('scroll', updateControls, { passive: true });
  window.addEventListener('resize', updateControls);
  updateControls();
}
