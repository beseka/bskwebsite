import { useMemo } from "react";
import { motion } from "framer-motion";
import "../styles/contact.css";

export default function Contact() {
  const email = "bsirhatk@gmail.com"; 
  const cvHref = "/cv.pdf";

  const links = useMemo(
    () => [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/bar%C4%B1%C5%9F-serhat-kaplan-15416a230/" },
      { label: "GitHub", href: "https://github.com/beseka" },
      { label: "Instagram", href: "https://instagram.com/bsirhatk" },
      { label: "BSA", href: "/bsa" },
    ],
    []
  );

  return (
    <section id="iletisim" className="contact">
      <motion.div
        className="contact__inner"
        initial={{ opacity: 0, y: 12, filter: "blur(2px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="contact__head">
          <div className="contact__eyebrow">CONTACT</div>
          <h2 className="contact__title">Let’s talk.</h2>
          <p className="contact__subtitle">
            İşbirliği, rol, ya da sadece iyi bir ürün için — iletişim için açık bir hat.
          </p>
        </div>

        <div className="contact__grid">
          {/* LEFT: PRIMARY (centered) */}
          <div className="contact__block contact__block--center">
            <div className="contact__label">PRIMARY</div>

            <a className="contactLink" href={`mailto:${email}`}>
              <span className="contactFade">{email}</span>
            </a>


            {/* CV as its own row (explicit) */}
            <div className="contact__rowLink">
              <a
                className="contactRowLink"
                href={cvHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contactRowFade">CV (PDF)</span>
                <span className="contactRowHint">— indirilebilir</span>
              </a>
            </div>
          </div>

          {/* RIGHT: ELSEWHERE */}
          <div className="contact__block">
            <div className="contact__label">DİĞERLERİ</div>

            <div className="contact__links">
              {links.map((l) => {
                const isExternal = l.href.startsWith("http");
                return (
                  <a
                    key={l.label}
                    className="contactMiniLink contactMiniLink--row"
                    href={l.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    <span className="contactMiniFade">{l.label}</span>
                    <span className="contact__arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="contactGrid__footer contactGrid__footer--grid">
          © {new Date().getFullYear()} Barış Serhat Kaplan
        </div>
      </motion.div>
    </section>
  );
}