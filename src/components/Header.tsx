import { motion } from "framer-motion";
import "../styles/header.css";

export default function Header() {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="header__inner">
        <a href="/" className="header__brand">Barış Serhat Kaplan</a>

        <nav className="header__nav" aria-label="Primary">
          <a className="link-underline" href="#cases">
            <span className="serif-fade">Cases</span>
          </a>
          <a className="link-underline" href="#hakkinda">
            <span className="serif-fade">Hakkında</span>
          </a>
          <a className="link-underline" href="#iletisim">
            <span className="serif-fade">Iletişim</span>
          </a>
          <a className="link-underline" href="/bsa">
            <span className="serif-fade">BSA</span>
          </a>
          {/* <a className="link-underline" href="#blog">
            <span className="serif-fade">Blog</span>
          </a> */}
        </nav>
      </div>
    </motion.header>
  );
}
