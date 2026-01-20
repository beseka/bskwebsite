import { useMemo } from "react";
import { Link } from "react-router-dom";
import "../styles/bsa.css";
import { BSA_POSTS } from "../data/bsaPosts";

export default function Bsa() {
  const posts = useMemo(() => BSA_POSTS.slice(0, 3), []);

  return (
    <section id="bsa" className="bsa motifSection">
      <div className="motifPatch motifPatch--left" aria-hidden="true" />
      <div className="motifPatch motifPatch--right" aria-hidden="true" />
      <div className="motifPatch motifPatch--center" aria-hidden="true" />

      <div className="bsa__inner motifContent">


        <div className="bsa__head">
          <div className="bsa__eyebrow">BSA</div>
          <h2 className="bsa__title">Barış Science & Analytics</h2>
          <p className="bsa__subtitle">
            Data ve Product projelerimi test caselerle yazı formatında okuyabilirsiniz — Detay okumak için BSA sayfasına geç.
          </p>

          <div className="bsa__actions">
            <Link className="bsaActionLink" to="/bsa">
              <span className="bsaActionFade">BSA sayfası</span>
            </Link>
            <span className="bsa__dot">•</span>
            <a className="bsaActionLink" href="https://github.com/beseka" target="_blank" rel="noopener noreferrer">
              <span className="bsaActionFade">GitHub</span>
            </a>
          </div>
        </div>

        <div className="bsa__list">
          {posts.map((p) => (
            <Link key={p.slug}
              to={`/bsa/${p.slug}`}
              className="bsa__linkBlock"
              reloadDocument
            >
              <div className="bsaRow__meta">
                <span className="bsaTag">{p.tag}</span>
                <span className="bsaMetaSep">•</span>
                <span className="bsaMetaText">{p.date}</span>
              </div>

              <div className="bsaRow__top">
                <span className="bsaLink">
                  <span className="bsaFade">{p.title}</span>
                </span>
                <span className="bsaRow__arrow" aria-hidden="true">→</span>
              </div>

              <div className="bsaRow__excerpt">{p.excerpt}</div>
            </Link>
          ))}
        </div>

        <div className="bsa__note">
          Tüm yazılar için <Link className="bsaNoteLink" to="/bsa">BSA sayfasına</Link> geçebilirsin.
        </div>
      </div>
    </section>
  );
}
