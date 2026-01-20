import { Link, useParams } from "react-router-dom";
import { BSA_POSTS } from "../data/bsaPosts";
import "../styles/bsaPostPage.css";

function linkify(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return text.split(urlRegex).map((part, i) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="bsaLink"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

export default function BsaPostPage() {
  const { slug } = useParams();
  const post = BSA_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="bsaPost">
        <div className="bsaPost__inner">
          <div className="bsaPost__top">
            <Link className="bsaBackLink" to="/bsa">
              ← BSA’ya dön
            </Link>
          </div>
          <h1 className="bsaPost__title">Yazı bulunamadı</h1>
          <p className="bsaPost__subtitle">Bu slug için içerik yok.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bsaPost">
      <div className="bsaPost__inner">
        <div className="bsaPost__top">
          <Link className="bsaBackLink" to="/bsa">
            ← BSA’ya dön
          </Link>
        </div>

        <header className="bsaPost__head">
          <div className="bsaPost__meta">
            <span className="bsaPost__tag">{post.tag}</span>
            <span className="bsaPost__sep">•</span>
            <span>{post.date}</span>
          </div>

          <h1 className="bsaPost__title">{post.title}</h1>
          <p className="bsaPost__subtitle">{post.excerpt}</p>
        </header>

        <article className="bsaPost__article">
          {post.body.map((b, i) => {
            if (b.type === "image") {
              return (
                <figure key={i} className="bsaFigure">
                  <img
                    className="bsaImg"
                    src={b.src}
                    alt={b.alt ?? ""}
                    loading="lazy"
                  />
                  {b.alt ? (
                    <figcaption className="bsaCaption">{b.alt}</figcaption>
                  ) : null}
                </figure>
              );
            }
            if (b.type === "imageRow") {
              return (
                <div key={i} className="bsaImageRow">
                  {b.images.map((img, idx) => (
                    <figure key={idx} className="bsaFigure">
                      <img
                        className="bsaImg"
                        src={img.src}
                        alt={img.alt ?? ""}
                        loading="lazy"
                      />
                      {img.alt ? (
                        <figcaption className="bsaCaption">{img.alt}</figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              );
            }

            if (b.type === "separator") {
              return <hr key={i} className="bsaSeparator" />;
            }


            if (b.type === "p") {
              return (
                <p key={i} className="bsaP">
                  {linkify(b.text)}
                </p>
              );
            }

            if (b.type === "h3") return <h3 key={i} className="bsaH3">{b.text}</h3>;

            if (b.type === "ul") {
              return (
                <ul key={i} className="bsaUl">
                  {b.items.map((x, idx) => (
                    <li key={idx}>{x}</li>
                  ))}
                </ul>
              );
            }

            if (b.type === "quote") return <blockquote key={i} className="bsaQuote">{b.text}</blockquote>;

            if (b.type === "code") {
              return (
                <pre key={i} className="bsaCode">
                  <code>{b.code}</code>
                </pre>
              );
            }

            return null;
          })}
        </article>
      </div>
    </main>
  );
}
