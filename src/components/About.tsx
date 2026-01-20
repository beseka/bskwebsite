import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import "../styles/about.css";

type AboutRow = {
  title: string;
  desc: string;
  href?: string;
};

export default function About() {
  const rows = useMemo<AboutRow[]>(
    () => [
      {
        title: "Barış Serhat Kaplan",
        desc: "Sabancı Üniversitesi, Bilgisayar Bilimleri ve Mühendisliği. Doğru içgörüleri doğru şekillerde ortaya çıkarıp kullanarak ürün, ekip ve şirketlerin gelişimine katkı sağlamaya çalışıyorum ve bu odakta ürünler ve içgörüler geliştirmeye devam ediyorum.",
        href: "#",
      },
      {
        title: "Data & Insights",
        desc: "İçgörüler ortaya çıkarmak ve tüm süreçleri veri odaklı tasarlamak bence çok önemli. Veri, doğru kullanıldığında güçlü bir araçtır. Tüm süreçlerde bun fikri kullanarak ilerlemeye çalışıyorum",
        href: "#",
      },
      {
        title: "Coding <>",
        desc: "Bir bilgisayar mühendisi olarak algoritmaların temel yapılarını ve kodlamayı bir sonuç olarak kullanmak yerine bunu çok güçlü bir araç olarak kullanmaya çalışıyorum.",
        href: "#",
      },
      {
        title: "Product & Company Journey",
        desc: "Tüm düşündüklerimi baştan uca bir ürünün veya şirketin yol haritalarına çevirmeye çalışıyorum. Demirbaş sistemler ve taktikler geliştiriyorum.",
        href: "#",
      },
    ],
    []
  );

  const [activeIdx, setActiveIdx] = useState<number>(0);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
  } as const;

  const item = {
    hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] },
    },
  } as const;

  return (
    <section id="hakkinda" className="aboutWide motifSection">
      {/* motif patches (content arkasında) */}
      <div className="motifPatch motifPatch--left" aria-hidden="true" />
      <div className="motifPatch motifPatch--right" aria-hidden="true" />
      <div className="motifPatch motifPatch--center" aria-hidden="true" />

      <motion.div
        className="aboutWide__inner motifContent"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.0 }}
      >
        {/* Branch-like divider */}
        <div className="section-divider" aria-hidden="true" />

        <div className="aboutWide__head">
          <div className="aboutWide__eyebrow">ABOUT / HAKKINDA</div>
          <h2 className="aboutWide__title">Ne / Nasıl Düşünüyorum?</h2>
        </div>

        <motion.div className="aboutWide__rows" variants={container} initial="hidden" animate="show">
          {rows.map((r, i) => {
            const flipped = i % 2 === 1;
            const isActive = i === activeIdx;

            return (
              <motion.div
                key={r.title}
                className={
                  "aboutWideRow" +
                  (flipped ? " aboutWideRow--flip" : "") +
                  (isActive ? " is-active" : "")
                }
                variants={item}
                onViewportEnter={() => setActiveIdx(i)}
                viewport={{ amount: "some", margin: "-40% 0px -40% 0px" }}
              >
                <div className="aboutWideRow__title">
                  <button
                    type="button"
                    className="aboutWideTitleLink"
                    onClick={() => setActiveIdx(i)}
                    aria-current={isActive ? "true" : "false"}
                  >
                    <span className="aboutWideTitleFade">{r.title}</span>
                  </button>
                </div>

                <div className="aboutWideRow__axis" aria-hidden="true">
                  <span className="aboutWideDot" />
                  <span className="aboutWideLine" />
                </div>

                <div className="aboutWideRow__desc">
                  <p className="aboutWideDesc">{r.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
