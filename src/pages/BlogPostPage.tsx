import { Link, useParams } from "react-router-dom";
import { BLOG_POSTS } from "../data/blogPosts";
import "../styles/blogPostPage.css";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="blogPost">
        <div className="blogPost__inner">
          <Link to="/blog">← Blog’a dön</Link>
          <h1>Yazı bulunamadı</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="blogPost">
      <div className="blogPost__inner">
        <Link className="blogBackLink" to="/blog">
          ← Blog’a dön
        </Link>

        <header className="blogPost__head">
          <div className="blogPost__meta">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="blogPost__title">{post.title}</h1>
          <p className="blogPost__subtitle">{post.excerpt}</p>
        </header>

        <article className="blogPost__article">
          {post.body.map((b, i) => {
            if (b.type === "p") return <p key={i}>{b.text}</p>;
            if (b.type === "h3") return <h3 key={i}>{b.text}</h3>;
            if (b.type === "ul")
              return (
                <ul key={i}>
                  {b.items.map((x, idx) => (
                    <li key={idx}>{x}</li>
                  ))}
                </ul>
              );
            if (b.type === "quote") return <blockquote key={i}>{b.text}</blockquote>;
            return null;
          })}
        </article>
      </div>
    </main>
  );
}
