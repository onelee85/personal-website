// The static links and panels are a complete document before the tab controls are enhanced.
function enhanceRoadmap(bar: HTMLElement) {
  const article = document.querySelector<HTMLElement>('.roadmap')!;
  const revealPanel = new Map<HTMLElement, () => void>();
  const chapterLinks = Array.from(bar.querySelectorAll<HTMLAnchorElement>('nav a'));
  const sections = chapterLinks.map((link) => document.getElementById(link.hash.slice(1))!);

  function updateNavigation() {
    const limit = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.setProperty('--progress', String(Math.min(1, Math.max(0, window.scrollY / (limit || 1)))));
    const readingLine = bar.offsetHeight + window.innerHeight * 0.2;
    let current = -1;
    sections.forEach((section, i) => {
      if (section.getBoundingClientRect().top <= readingLine) current = i;
    });
    chapterLinks.forEach((link, i) => {
      if (i === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  article.querySelectorAll<HTMLElement>('[data-explorer]').forEach((group) => {
    const list = group.querySelector<HTMLElement>('[data-choices]')!;
    const tabs = Array.from(list.querySelectorAll<HTMLAnchorElement>('[data-select]'));
    const panels = tabs.map((tab) => document.getElementById(tab.hash.slice(1))!);
    const vertical = group.dataset.orientation === 'vertical';
    list.setAttribute('role', 'tablist');
    list.setAttribute('aria-orientation', vertical ? 'vertical' : 'horizontal');

    function select(index: number) {
      tabs.forEach((tab, i) => {
        const selected = i === index;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
        panels[i].hidden = !selected;
      });
    }

    tabs.forEach((tab, i) => {
      const panel = panels[i];
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', panel.id);
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', tab.id);
      panel.tabIndex = 0;
      revealPanel.set(panel, () => select(i));

      tab.addEventListener('click', (event) => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        select(i);
        history.replaceState(history.state, '', tab.hash);
        updateNavigation();
      });
      tab.addEventListener('keydown', (event) => {
        let next = i;
        switch (event.key) {
          case 'Home': next = 0; break;
          case 'End': next = tabs.length - 1; break;
          case vertical ? 'ArrowDown' : 'ArrowRight': next = (i + 1) % tabs.length; break;
          case vertical ? 'ArrowUp' : 'ArrowLeft': next = (i - 1 + tabs.length) % tabs.length; break;
          case ' ': break;
          default: return;
        }
        event.preventDefault();
        tabs[next].focus();
        tabs[next].click();
      });
    });
    select(0);
  });

  function showLinkedPanel() {
    const target = document.getElementById(location.hash.slice(1));
    if (!target || !revealPanel.has(target)) return;
    // A deep link into a component list also opens the system layer that contains it.
    for (let node: HTMLElement | null = target; node; node = node.parentElement) {
      revealPanel.get(node)?.();
    }
    target.focus({ preventScroll: true });
    target.scrollIntoView({ block: 'start' });
  }

  showLinkedPanel();
  updateNavigation();
  window.addEventListener('hashchange', showLinkedPanel);
  window.addEventListener('resize', updateNavigation);
  window.addEventListener('scroll', updateNavigation, { passive: true });
}

const bar = document.querySelector<HTMLElement>('[data-roadmap-bar]');
if (bar) enhanceRoadmap(bar);
