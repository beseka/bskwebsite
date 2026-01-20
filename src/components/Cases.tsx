import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/cases.css";

type LinkItem = {
  title: string;
  desc: string;
  href: string;
};

export default function Cases() {
  const webPublished = useMemo<LinkItem[]>(
    () => [
      { title: "Barış Serhat Kaplan", desc: "Tam olarak buradasınız :)", href: "#" },
      { title: "Land of Burger", desc: "Land of Burger resmi websitesi", href: "https://landofburger.vercel.app/" },
      { title: "Cevap42", desc: "Cevap42 Podcast Websitesi (Podcaster: Barış Serhat Kaplan).", href: "https://cevap42.vercel.app/" },
      { title: "Odus Digital", desc: "Odus Digital Web Solutions Resmi Websitesi.", href: "https://odusdigital.com/" },
    ],
    []
  );

  const dataProjects = useMemo<LinkItem[]>(
    () => [
      { title: "Influencer Sponsor Analizi", desc: "Video açıklamalarından iş birliği tespit eden model ve analizleri - Text Mining, Regex.", href: "/bsa/influencer-sponsorship-analysis" },
      { title: "İnstagram yorumları ve duygu analizi", desc: "Yorum pozitifliğinin ve sayısının izlenmeler üzerinde bir ilgisi var mı? - NLP.", href: "/bsa/yorum-ve-trend" },
      { title: "Müşteri Psikolojisinin Finansal Etkileri", desc: "Müsteri psikolojininın finansal metriklere etkisi ve ürün kararlarına yansımaları. - Product.", href: "/bsa/müsteri-psikolojisi-finansal-etkiler" },
    ],
    []
  );

  const [tab, setTab] = useState<"web" | "data">("web");
  const currentList = tab === "web" ? webPublished : dataProjects;

  return (
    <section id="cases" className="cases motifSection">
      {/* motif patches */}
      <div className="motifPatch motifPatch--left" aria-hidden="true" />
      <div className="motifPatch motifPatch--right" aria-hidden="true" />
      <div className="motifPatch motifPatch--center" aria-hidden="true" />

      <motion.div
        className="cases__inner motifContent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {/* Branch-like divider */}
        <div className="section-divider" aria-hidden="true" />

        <div className="cases__heading">
          <div className="cases__eyebrow">SELECTED PROJECTS  </div>
          <h2 className="cases__title">Cases</h2>
          <p className="cases__subtitle">
            Çalışmalarımdan ve projelerimden bazılarını buradan inceleyebilirsiniz. Daha Fazlası için GitHub ve{" "}
            <a href="#iletisim" className="text-inherit underline decoration-dotted underline-offset-4 hover:opacity-80 transition-opacity">
              CV'mi
            </a>{" "}
            inceleyebilirsiniz.
          </p>
        </div>

        <div className="cases__divider" />

        <div className="switch">
          <button
            type="button"
            className={"switch__btn" + (tab === "web" ? " is-active" : "")}
            onClick={() => setTab("web")}
          >
            <span className="switch__label">Web</span>
          </button>
          <button
            type="button"
            className={"switch__btn" + (tab === "data" ? " is-active" : "")}
            onClick={() => setTab("data")}
          >
            <span className="switch__label">Data</span>
          </button>
        </div>

        <div className="switch__body">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.0 }}
            >
              <div className="cases__miniList">
                {currentList.map((p) => (
                  <a
                    key={p.title}
                    href={p.href}
                    target={p.href.startsWith("http") ? "_blank" : undefined}
                    rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="miniRow"
                  >
                    <div className="miniRow__top">
                      <span className="miniLink">
                        <span className="miniFade">{p.title}</span>
                      </span>
                      <span className="miniRow__hint" aria-hidden="true">open</span>
                    </div>
                    <div className="miniRow__desc">{p.desc}</div>
                  </a>
                ))}
              </div>

              {tab === "web" ? (
                <p className="casesNote">
                  Bunlar publish edilmiş caselerdir. Daha fazlası için{" "}
                  <a className="casesNote__link" href="https://github.com/beseka" target="_blank" rel="noreferrer">
                    GitHub
                  </a>{" "}
                  hesabıma bakabilirsin.
                </p>
              ) : (
                <p className="casesNote">
                  Daha fazlası için{" "}
                  <a className="casesNote__link" href="https://github.com/beseka" target="_blank" rel="noreferrer">
                    GitHub
                  </a>{" "}
                  hesabıma bakabilir veya{" "}
                  <a className="casesNote__link" href="/bsa">
                    BSA
                  </a>{" "}
                  sayfasını ziyaret edebilirsin.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
