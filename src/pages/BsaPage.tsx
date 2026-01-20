import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BSA_POSTS } from "../data/bsaPosts";
import "../styles/bsaPage.css";

type Tag = "All" | "Analysis" | "Model" | "Product";

export default function BsaPage() {
  const [tag, setTag] = useState<Tag>("All");

  const posts = useMemo(() => {
    if (tag === "All") return BSA_POSTS;
    return BSA_POSTS.filter((p) => p.tag === tag);
  }, [tag]);

  return (
    <main className="bsaPage">
      <div className="bsaPage__inner">
        <header className="bsaPage__head">
          {/* GRID PATCH (sadece header alanında) */}
          <div className="bsaPage__grid" aria-hidden="true" />

          <div className="bsaPage__eyebrow">BSA</div>
          <h1 className="bsaPage__title">Barış Science & Analytics</h1>
          <p className="bsaPage__subtitle">
            Data - Products Projeleri, Modeller, Analizler, Dashboardlar.
          </p>

          <div className="bsaPage__filters" role="tablist" aria-label="BSA filtreleri">
            {(["All", "Analysis", "Model","Product"] as Tag[]).map((t) => (
              <button
                key={t}
                type="button"
                className={"bsaFilterBtn" + (tag === t ? " is-active" : "")}
                onClick={() => setTag(t)}
                role="tab"
                aria-selected={tag === t}
              >
                <span className="bsaFilterLabel">{t}</span>
              </button>
            ))}
          </div>
        </header>

        <section className="bsaPage__list" aria-label="BSA yazıları">
          {posts.map((p) => (
            <Link key={p.slug} to={`/bsa/${p.slug}`} className="bsaRow">
              <div className="bsaRow__meta">
                <span className="bsaTag">{p.tag}</span>
                <span className="bsaMetaSep">•</span>
                <span className="bsaMetaText">{p.date}</span>
              </div>

              <div className="bsaRow__top">
                <span className="bsaLink">
                  <span className="bsaFade">{p.title}</span>
                </span>
                <span className="bsaRow__arrow" aria-hidden="true">
                  →
                </span>
              </div>

              <div className="bsaRow__excerpt">{p.excerpt}</div>
            </Link>
          ))}
        </section>

        <div className="bsaPage__foot">
          <span className="bsaPage__footText">
            Daha fazlası için GitHub veya BSA yazıları arasında gezebilirsin.
          </span>
        </div>
      </div>
    </main>
  );
}
