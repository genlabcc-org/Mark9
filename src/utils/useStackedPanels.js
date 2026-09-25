import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useFooterStackReveal(mainRef, footerRef) {
  useEffect(() => {
    if (!mainRef.current || !footerRef.current) return;

    let ctx;
    const timer = setTimeout(() => {
      const mainEl = mainRef.current;
      const footerEl = footerRef.current;
      if (!mainEl || !footerEl) return;

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainEl,
            start: 'bottom bottom',
            end: () => `+=${footerEl.offsetHeight}`,
            pin: true,
            pinSpacing: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          mainEl,
          { scale: 1, opacity: 1 },
          {
            scale: 0.88,
            opacity: 0.5,
            ease: 'none',
          }
        );
      });

      ScrollTrigger.refresh();

      if (mainEl) {
        mainEl.querySelectorAll('img').forEach((img) => {
          if (!img.complete) {
            img.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
          }
        });
      }
    }, 200);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      ctx && ctx.revert();
    };
  }, []);
}

export default useFooterStackReveal;
