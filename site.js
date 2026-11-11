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

// Embedded citations also work when the HTML is opened directly via file://.
const bibButtons = document.querySelectorAll('.bib-button');
if (bibButtons.length) {
  const dialog = document.createElement('dialog');
  dialog.className = 'bib-dialog';
  dialog.setAttribute('aria-labelledby', 'bib-dialog-heading');
  dialog.innerHTML = `
    <div class="bib-dialog-header">
      <h2 id="bib-dialog-heading">BibTeX</h2>
      <button type="button" class="bib-close" aria-label="Close citation">Close</button>
    </div>
    <p class="bib-dialog-title"></p>
    <textarea readonly aria-label="BibTeX citation" spellcheck="false"></textarea>
    <div class="bib-dialog-actions">
      <button type="button" class="bib-copy">Copy BibTeX</button>
      <span class="bib-status" role="status" aria-live="polite"></span>
    </div>`;
  document.body.append(dialog);
  const citation = dialog.querySelector('textarea');
  const status = dialog.querySelector('.bib-status');
  const copy = dialog.querySelector('.bib-copy');
  let trigger;
  let opening = 0;
  bibButtons.forEach((button) => {
    button.addEventListener('click', () => {
      trigger = button;
      opening += 1;
      citation.value = button.dataset.bibtex;
      dialog.querySelector('.bib-dialog-title').textContent = button.closest('.paper').querySelector('h3').textContent;
      status.textContent = '';
      copy.textContent = 'Copy BibTeX';
      dialog.showModal();
      dialog.querySelector('.bib-close').focus();
    });
  });
  dialog.querySelector('.bib-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    opening += 1;
    trigger?.focus({ preventScroll: true });
  });
  copy.addEventListener('click', async () => {
    const currentOpening = opening;
    let copied = false;
    try {
      await navigator.clipboard.writeText(citation.value);
      copied = true;
    } catch {
      // Local previews or denied clipboard permission can use selected text.
      if (!dialog.open || currentOpening !== opening) return;
      citation.focus();
      citation.select();
      try { copied = document.execCommand('copy'); } catch { /* Keep text selected. */ }
    }
    if (!dialog.open || currentOpening !== opening) return;
    copy.textContent = copied ? 'Copied!' : 'Copy BibTeX';
    status.textContent = copied ? 'Citation copied.' : 'Text selected. Press ⌘C or Ctrl+C to copy.';
  });
}
