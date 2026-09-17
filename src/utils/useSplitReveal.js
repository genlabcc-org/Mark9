import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TEXT_SELECTOR = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'p',
  '[class*="desc"]',
  '[class*="description"]',
  '[class*="subtitle"]',
  '[class*="subheadline"]',
  '[class*="paragraph"]',
  '[class*="caption"]',
  '[class*="deliverable"]',
  '.split-line-content',
  '.section-label',
  '.bullet-square + span',
  '.agency-bullet-tag span',
  '.works-header-label span',
  '.about-header-label span',
  '.mentors-header-label span',
  '.services-header-label span',
  '.faq-header-label span',
  '.clients-header-label span',
  '.meta-year',
  '.category-num',
  '.stat-num',
  '.stat-label',
  '.mentor-name',
  '.mentor-role',
  '.faq-question-text',
  '.about-cta-sub',
  '.about-cta-title',
  '.footer-headline',
  '.footer-cta-link',
  '.footer-col-title',
  '.footer-link',
  '.footer-item-text',
  '.footer-link-highlight',
  '.footer-address-text',
  '.footer-bottom-left span',
  '.footer-social-link'
].join(', ');

export function useSplitReveal(containerRef, deps = []) {
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Gather all candidates
      const rawElements = Array.from(containerRef.current.querySelectorAll(TEXT_SELECTOR));

      // 2. Filter out elements that should not be animated
      const validElements = rawElements.filter((el) => {
        // Exclude active interactive controls, forms, and loop marquees
        if (
          el.closest(
            'nav, header, .header, input, textarea, select, .preloader, .marquee-content, .marquee-group, .mark9-scroll-track, .faq-answer-wrapper, .service-hover-card'
          )
        ) {
          return false;
        }

        // Avoid double-animating parents if they contain split-line-content
        if (!el.classList.contains('split-line-content') && el.querySelector('.split-line-content')) {
          return false;
        }

        // Exclude empty whitespace elements
        const text = el.textContent ? el.textContent.trim() : '';
        if (text.length === 0) {
          return false;
        }

        return true;
      });

      if (validElements.length === 0) return;

      // 3. Animate each text & description element when it scrolls into view
      validElements.forEach((item) => {
        const isSplitLine = item.classList.contains('split-line-content');
        const isDescription =
          item.tagName === 'P' ||
          (typeof item.className === 'string' &&
            (item.className.includes('desc') ||
              item.className.includes('subtitle') ||
              item.className.includes('subheadline') ||
              item.className.includes('paragraph') ||
              item.className.includes('address-text')));

        // Calculate stagger delay for footer list menus and social links
        let staggerDelay = 0;
        let triggerElement = item;

        if (item.closest('.footer-links-list')) {
          const listItems = Array.from(item.closest('.footer-links-list').children);
          const li = item.closest('li') || item;
          const idx = listItems.indexOf(li);
          if (idx >= 0) staggerDelay = idx * 0.05;
          triggerElement = item.closest('.footer-col') || item;
        } else if (item.matches('.footer-social-link')) {
          const socials = Array.from(item.parentElement?.children || []);
          const idx = socials.indexOf(item);
          if (idx >= 0) staggerDelay = idx * 0.08;
        }

        gsap.fromTo(
          item,
          {
            y: isSplitLine ? 0 : 24,
            yPercent: isSplitLine ? 115 : 0,
            opacity: 0,
            filter: isSplitLine ? 'none' : 'blur(4px)',
          },
          {
            y: 0,
            yPercent: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: isDescription ? 1.0 : isSplitLine ? 1.05 : 0.85,
            delay: staggerDelay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: triggerElement,
              start: 'top 92%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, deps);
}

export default useSplitReveal;
