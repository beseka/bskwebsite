import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../data/blogPosts";
import "../styles/blog.css";

export default function Blog() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog" className="blog motifRow">
      <div className="motifPatch motifPatch--center" aria-hidden="true" />

      <div className="blog__inner motifContent">
        <div className="blog__head">
          <div className="blog__eyebrow">BLOG</div>
          <h2 className="blog__title">Notes & Writing</h2>
        </div>

        <div className="blog__grid">
          {posts.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="blogCard">
              <div className="blogCard__meta">
                <span>{p.date}</span>
                <span>•</span>
                <span>{p.readTime}</span>
              </div>

              <span className="blogLink">
                <span className="blogFade">{p.title}</span>
              </span>

              <p className="blogCard__excerpt">{p.excerpt}</p>
            </Link>
          ))}
        </div>

        <div className="blog__note">
          <Link to="/blog" className="blogNoteLink">
            Tüm blog yazıları →
          </Link>
        </div>
      </div>
    </section>
  );
}
