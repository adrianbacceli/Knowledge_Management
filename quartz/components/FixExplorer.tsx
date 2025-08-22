// Added to fix bug Explorer/sidebar duplicates on SPA navigation for specific page; Mermaid errors during render #24
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function FixExplorer(_: QuartzComponentProps) {
    return null
  }

  // Runs after DOM is ready and on every Quartz "nav" event
  FixExplorer.afterDOMLoaded = `
    (function () {
      const SEL = '#quartz-body .left.sidebar > .explorer';

      function dedupeExplorer() {
        const box = document.querySelector(SEL);
        if (!box) return;
        const seen = new Set();
        for (const child of Array.from(box.children)) {
          const sig = [
            child.tagName,
            child.className,
            child.getAttribute('data-role') || '',
            (child.querySelector('h1,h2,h3,header')?.textContent || '').trim()
          ].join('|');
          if (seen.has(sig)) child.remove();
          else seen.add(sig);
        }
      }

      const onNav = () => setTimeout(dedupeExplorer, 0); // after Quartz renders sidebar
      document.addEventListener('nav', onNav, { passive: true });
      window.addCleanup && window.addCleanup(() => document.removeEventListener('nav', onNav));
      onNav(); // initial load
    })();
  `

  return FixExplorer
}) satisfies QuartzComponentConstructor
