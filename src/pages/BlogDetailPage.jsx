import React, { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import useSplitReveal from '../utils/useSplitReveal';
import useFooterStackReveal from '../utils/useStackedPanels';
import './BlogDetailPage.css';

const POST_DATABASE = {
  1: {
    id: 1,
    category: 'news',
    date: 'july 3, 2024',
    title: 'integrations unleashed - how to improve web design process',
    image: '/project2.png',
    lead: "introduction: unleashing creativity through webflow's designer and agency templates",
    sections: [
      {
        heading: 'the art of webflow - where designers and agencies converge',
        text: "webflow, often regarded as the swiss army knife of web design, provides an innovative playground for designers and agencies alike. the platform's intuitive visual interface allows designers to bring their creative visions to life without grappling with intricate lines of code. with its user-friendly tools and comprehensive features, webflow acts as a seamless bridge between design and development, enabling designers and agencies to collaborate effortlessly and deliver stunning websites."
      },
      {
        heading: 'tailoring your vision - the customization powerhouse',
        text: 'one of the key aspects that sets webflow apart is its emphasis on customization. designers and agencies can start their journey with pre-designed templates tailored for a variety of industries, styles, and functionalities. these templates serve as the foundation upon which you can unleash your creativity, allowing you to customize every element to align with your vision. from typography to animations, color schemes to layout structures, the possibilities are virtually limitless.'
      },
      {
        heading: 'a symphony of responsiveness - perfecting every device experience',
        text: 'in the age of diverse devices, ensuring a consistent and delightful user experience across various screen sizes is paramount. webflow simplifies this intricate process by providing a responsive design framework. designers and agencies can craft layouts that adapt fluidly to different devices, eliminating the need for multiple designs or complex media queries.'
      },
      {
        subtitle: 'subtitle: seo and beyond: navigating the digital visibility landscape',
        heading: 'elevating your online presence - seo and beyond',
        text: "a beautifully designed website serves little purpose if it remains hidden in the vast expanse of the internet. this is where webflow's seo-friendly features step in. from customizable meta tags to automatic xml sitemaps, the platform equips designers and agencies with the tools to optimize their websites for search engines."
      },
      {
        heading: 'collaboration and beyond - fostering seamless workflows',
        text: 'the realm of design is often a collaborative endeavor, involving designers, developers, content creators, and clients. webflow acknowledges this reality and offers a suite of collaboration features that streamline workflows.'
      },
      {
        subtitle: 'subtitle: beyond boundaries: integrations and e-commerce possibilities',
        heading: 'integrations unleashed - seamlessly connecting your tools',
        text: "webflow integrates seamlessly with a myriad of third-party tools and services, amplifying its capabilities and opening up new avenues for creativity. whether you need to embed custom code snippets, connect your favorite marketing automation platform, or integrate e-commerce solutions, webflow's extensibility empowers designers and agencies to create holistic digital experiences."
      },
      {
        heading: 'crafting e-commerce marvels - from shelves to screens',
        text: "for agencies and designers venturing into the e-commerce landscape, webflow offers a dedicated toolkit for crafting visually compelling online stores. from product catalogs to secure checkout processes, the platform's e-commerce functionalities empower you to create immersive shopping experiences that resonate with customers."
      }
    ]
  },
  2: {
    id: 2,
    category: 'insight',
    date: 'june 18, 2024',
    title: '7 ways to improve website usability and accessibility',
    image: '/project5.png',
    lead: 'creating inclusive web experiences that delight users across every screen size and capability.',
    sections: [
      {
        heading: '1. prioritize clear typographic hierarchy',
        text: 'readable typography forms the backbone of digital usability. maintaining strong contrast ratios, comfortable line-heights, and distinct heading sizes ensures users can quickly scan and digest content.'
      },
      {
        heading: '2. intuitive navigation and clear visual landmarks',
        text: 'users should never wonder where they are or how to return home. streamlined menus, breadcrumbs, and predictable interactive states reduce cognitive load.'
      },
      {
        heading: '3. accessible contrast and color choices',
        text: 'ensure all key textual elements meet standard contrast thresholds. rely on supporting icons and structural cues rather than color alone to communicate state.'
      },
      {
        heading: '4. mobile-first responsive interactions',
        text: 'design touch targets for real human fingers. spacing buttons comfortably and eliminating accidental misclicks drastically improves satisfaction on mobile screens.'
      }
    ]
  },
  3: {
    id: 3,
    category: 'insight',
    date: 'may 24, 2024',
    title: 'the power of minimalistic design in modern branding',
    image: '/insight1.jpg',
    lead: 'crafting timeless identities by stripping away the unnecessary and highlighting what truly matters.',
    sections: [
      {
        heading: '1. clarity over noise',
        text: 'minimalism is not about removing features — it is about clarifying purpose. by reducing visual clutter, brands draw immediate focus to core messaging and product value.'
      },
      {
        heading: '2. purposeful use of negative space',
        text: 'whitespace is an active design element. giving layout components room to breathe creates a sense of luxury, calm, and confidence.'
      },
      {
        heading: '3. enduring identity systems',
        text: 'trendy ornamentations age quickly. clean geometry, refined typography, and purposeful color choices remain effective for decades.'
      }
    ]
  }
};

const ALL_POSTS = [POST_DATABASE[1], POST_DATABASE[2], POST_DATABASE[3]];

export function BlogDetailPage() {
  const pageRef = useRef(null);
  const mainRef = useRef(null);
  const footerRef = useRef(null);

  useSplitReveal(pageRef);
  useFooterStackReveal(mainRef, footerRef);

  // Extract post ID from URL params (e.g., ?id=2)
  const searchParams = new URLSearchParams(window.location.search);
  const postId = parseInt(searchParams.get('id'), 10) || 1;
  const currentPost = POST_DATABASE[postId] || POST_DATABASE[1];

  // Filter out current post for related cards
  const relatedPosts = ALL_POSTS.filter((p) => p.id !== currentPost.id).slice(0, 2);

  return (
    <div className="blog-detail-wrapper" ref={pageRef}>
      <Preloader />
      <Header />

      <main className="blog-detail-main main-content-flow" ref={mainRef}>
        {/* Top Header & Title Area */}
        <section className="blog-detail-header-section">
          <div className="blog-detail-header-container">
            {/* Main Article Title */}
            <h1 className="blog-detail-title">
              {currentPost.title}
            </h1>

            {/* Date and Category Meta */}
            <div className="blog-detail-meta">
              <span>{currentPost.date}</span>
              <span className="meta-separator">|</span>
              <span className="meta-category">{currentPost.category}</span>
            </div>
          </div>
        </section>

        {/* Hero Rounded Image Banner */}
        <section className="blog-detail-hero-section">
          <div className="blog-detail-hero-container">
            <div className="blog-detail-hero-card">
              <img
                src={currentPost.image}
                alt={currentPost.title}
                className="blog-detail-hero-img"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="blog-detail-body-section">
          <div className="blog-detail-body-container">
            <p className="blog-detail-lead">
              {currentPost.lead}
            </p>

            {currentPost.sections.map((sec, idx) => (
              <React.Fragment key={idx}>
                {sec.subtitle && (
                  <span className="blog-detail-subtitle">
                    {sec.subtitle}
                  </span>
                )}
                {sec.heading && (
                  <h2 className="blog-detail-heading">
                    {sec.heading}
                  </h2>
                )}
                <p className="blog-detail-paragraph">
                  {sec.text}
                </p>
              </React.Fragment>
            ))}
          </div>
        </article>

        {/* Bottom Related Blog Cards Section */}
        <section className="blog-detail-related-section">
          <div className="blog-detail-related-container">
            <h3 className="blog-detail-related-title">
              more articles
            </h3>

            <div className="blog-detail-related-grid">
              {relatedPosts.map((post) => (
                <a
                  key={post.id}
                  href={`/blog-detail?id=${post.id}`}
                  className="blog-detail-related-card-link"
                >
                  <article className="blog-detail-related-card">
                    <div className="blog-detail-related-img-wrap">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="blog-detail-related-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="blog-detail-related-content">
                      <h4 className="blog-detail-related-card-title">
                        {post.title}
                      </h4>
                      <p className="blog-detail-related-card-excerpt">
                        {post.lead}
                      </p>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <div className="footer-stack-panel" ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default BlogDetailPage;
