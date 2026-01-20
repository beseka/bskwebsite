import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../data/blogPosts";
import "../styles/blogPage.css";

export default function BlogPage() {
  return (
    <main className="blogPage">
      <div className="blogPage__inner">
        <header className="blogPage__head">
          {/* GRID sadece başlık alanı */}
          <div className="blogPageHeadGrid" aria-hidden="true" />

          <div className="blogPage__eyebrow">BLOG</div>
          <h1 className="blogPage__title">Notes & Writing</h1>
          <p className="blogPage__subtitle">
            Ürün, sistemler ve üretme süreci üzerine kısa yazılar.
          </p>
        </header>

        <section className="blogPage__list">
          {BLOG_POSTS.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="blogRow">
              <div className="blogRow__meta">
                <span>{p.date}</span>
                <span className="blogMetaDot">•</span>
                <span>{p.readTime}</span>
              </div>

              <div className="blogRow__top">
                <span className="blogLink">
                  <span className="blogFade">{p.title}</span>
                </span>
                <span className="blogRow__arrow">→</span>
              </div>

              <div className="blogRow__excerpt">{p.excerpt}</div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
