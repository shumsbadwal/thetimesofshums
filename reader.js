/* The Times of Shums — accessible, dependency-free story navigation. */
(() => {
  'use strict';
  const reader = document.querySelector('[data-reader]');
  if (!reader) return;
  const stories = Array.from(reader.querySelectorAll('article.story'));
  if (!stories.length) return;
  // Guard future editions against missing mobile controls in generated desk HTML.
  if (!document.querySelector('.reader-mobile-controls')) {
    const nav = document.createElement('nav');
    nav.className = 'reader-mobile-controls';
    nav.setAttribute('aria-label', 'Story controls');
    nav.innerHTML = '<button type="button" class="mobile-story-button" data-prev aria-label="Previous story">← Previous</button><span class="mobile-story-status" aria-live="polite" data-mobile-count></span><button type="button" class="mobile-story-button" data-next aria-label="Next story">Next →</button>';
    reader.insertAdjacentElement('afterend', nav);
  }
  const controls = document.querySelectorAll('[data-prev], [data-next]');
  const status = document.querySelector('[data-mobile-count]');
  const card = reader.querySelector('[data-reader-card]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fromHash = () => {
    const found = /^#story-(\d+)$/.exec(window.location.hash);
    return found ? Math.min(stories.length-1,Math.max(0, Number(found[1])-1)) : 0;
  };
  let index = fromHash();
  function show(nextIndex, fromUser = false) {
    index = Math.min(stories.length - 1, Math.max(0, nextIndex));
    stories.forEach((story, i) => { story.hidden = i !== index; });
    document.querySelectorAll('[data-prev]').forEach(btn => btn.disabled = (index === 0));
    document.querySelectorAll('[data-next]').forEach(btn => btn.disabled = (index === stories.length-1));
    if (status) status.textContent = `${index + 1} / ${stories.length}`;
    if (fromUser) {
      try { window.history.replaceState(null, '', `#story-${index+1}`); } catch (err) { /* File URLs may restrict history updates. */ }
      const destination = Math.max(0, window.scrollY + card.getBoundingClientRect().top - 20);
      window.scrollTo({top: destination, behavior: reducedMotion ? 'instant' : 'smooth'});
    }
  }
  controls.forEach(btn => btn.addEventListener('click', () => {
    show(index + (btn.hasAttribute('data-next') ? 1 : -1), true);
  }));
  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.target.closest('input, textarea, select, a, [contenteditable="true"]')) return;
    if (event.key === 'ArrowRight' && index < stories.length - 1) { event.preventDefault(); show(index + 1, true); }
    if (event.key === 'ArrowLeft' && index > 0) { event.preventDefault(); show(index - 1, true); }
  });
  window.addEventListener('hashchange', () => show(fromHash(), false));
  show(index);
})();
