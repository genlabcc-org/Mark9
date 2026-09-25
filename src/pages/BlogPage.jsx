import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import useSplitReveal from '../utils/useSplitReveal';
import useFooterStackReveal from '../utils/useStackedPanels';
import './BlogPage.css';

const BLOG_POSTS = [
  {
    id: 1,
    category: 'news',
    title: 'integrations unleashed - how to improve web design process',
    excerpt: 'veniam est ipsum deserunt repellendus aut omnis officiis beatae. id consectetur animi id quia voluptatem ut aliquid.',
    image: '/project2.png'
  },
  {
    id: 2,
    category: 'insight',
    title: '7 ways to improve website usability and accessibility',
    excerpt: 'veniam est ipsum deserunt repellendus aut omnis officiis beatae. id consectetur animi id quia voluptatem ut aliquid.',
    image: '/project5.png'
  },
  {
    id: 3,
    category: 'insight',
    title: 'the power of minimalistic design in modern branding',
    excerpt: 'crafting timeless identities by stripping away the unnecessary and highlighting what truly resonates with people.',
    image: '/insight1.jpg'
  },
  {
    id: 4,
    category: 'news',
    title: 'digital typography trends shaping tomorrow\'s web experiences',
    excerpt: 'exploring dynamic letterforms, variable typefaces, and kinetic typography in contemporary interface design.',
    image: '/about-banner.jpg'
  }
];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const pageRef = useRef(null);
  const mainRef = useRef(null);
  const footerRef = useRef(null);

  useSplitReveal(pageRef);
  useFooterStackReveal(mainRef, footerRef);

  const filteredPosts = activeCategory === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((post) => post.category === activeCategory);

  return (
    <div className="blog-page-wrapper" ref={pageRef}>
      <Preloader />
      <Header />

      <main className="blog-main-content main-content-flow" ref={mainRef}>
        {/* Editorial Statement / Hero Section */}
        <section className="blog-editorial-section">
          <div className="blog-editorial-container">
            <h1 className="blog-editorial-quote">
              crafting <span className="highlight-timeless">timeless</span> designs<br />
              for inspired living
            </h1>

            <p className="blog-editorial-sub">
              our expertise is the cornerstone of our success. with years of experience in web design, development, and branding, we've honed our skills to perfection.
            </p>

            {/* Filter Tabs */}
            <div className="blog-filter-bar">
              <button
                type="button"
                className={`blog-filter-btn ${activeCategory === 'all' ? 'is-active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                {activeCategory === 'all' && <span className="filter-bullet">●</span>}
                <span>view all</span>
              </button>

              <span className="filter-divider">|</span>

              <button
                type="button"
                className={`blog-filter-btn ${activeCategory === 'news' ? 'is-active' : ''}`}
                onClick={() => setActiveCategory('news')}
              >
                {activeCategory === 'news' && <span className="filter-bullet">●</span>}
                <span>news</span>
              </button>

              <button
                type="button"
                className={`blog-filter-btn ${activeCategory === 'insight' ? 'is-active' : ''}`}
                onClick={() => setActiveCategory('insight')}
              >
                {activeCategory === 'insight' && <span className="filter-bullet">●</span>}
                <span>insight</span>
              </button>
            </div>
          </div>
        </section>

        {/* 2-Column Blog Grid Section */}
        <section className="blog-grid-section" aria-label="blog articles">
          <div className="blog-grid-container">
            {filteredPosts.map((post) => (
              <a href={`/blog-detail?id=${post.id}`} key={post.id} className="blog-card-link" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <article className="blog-card">
                  {/* Image Wrap */}
                  <div className="blog-card-image-wrap">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-card-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="blog-card-content">
                    <h2 className="blog-card-title">
                      {post.title}
                    </h2>
                    <p className="blog-card-excerpt">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </section>
      </main>

      <div className="footer-stack-panel" ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default BlogPage;
