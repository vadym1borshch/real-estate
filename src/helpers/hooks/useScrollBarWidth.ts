import { useState, useEffect, useRef, RefObject } from 'react'

export const useScrollbarWidth = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    const calculateScrollbarWidth = () => {
      const width = window.innerWidth - document.documentElement.clientWidth;
      setScrollbarWidth(width);
    };

    calculateScrollbarWidth();
    window.addEventListener('resize', calculateScrollbarWidth);

    return () => {
      window.removeEventListener('resize', calculateScrollbarWidth);
    };
  }, []);

  return scrollbarWidth;
};

export const useDefineScrollbar = (menuSelector: string) => {
  const [hasScrollbar, setHasScrollbar] = useState(false);
  const [menuElement, setMenuElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const findMenu = () => {
      const element = document.querySelector(menuSelector) as HTMLElement;
      if (element) {
        setMenuElement(element);
      }
    };

    findMenu();

    const observer = new MutationObserver(() => findMenu());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [menuSelector]);

  useEffect(() => {
    if (!menuElement) return;

    const checkScrollbar = () => {
      const { scrollHeight, clientHeight } = menuElement;
      setHasScrollbar(scrollHeight > clientHeight);
    };

    checkScrollbar();

    const resizeObserver = new ResizeObserver(checkScrollbar);
    resizeObserver.observe(menuElement);

    return () => resizeObserver.disconnect();
  }, [menuElement]);

  return hasScrollbar;
};
