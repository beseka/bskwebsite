import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/hero.css";

type LineItem = { id: string; label: string };

export default function Hero() {
  const items = useMemo<LineItem[]>(
    () => [
      { id: "focus", label: "Data Science and Analytics | Product" },

    ],
    []
  );

  const [checked, setChecked] = useState<Record<string, boolean>>({
    focus: false,
    tag: false,
  });

  // Kullanıcı tıklarsa otomatik animasyonu iptal et
  const userInteracted = useRef(false);
  const timeouts = useRef<number[]>([]);

  const cancelAuto = () => {
    userInteracted.current = true;
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  };

  // Otomatik "tıklama" animasyonu:
  // 1 aç-kapa, 2 aç-kapa, 3 aç ve açık kalsın
  useEffect(() => {
    const t = (ms: number, fn: () => void) => {
      const id = window.setTimeout(() => {
        if (!userInteracted.current) fn();
      }, ms);
      timeouts.current.push(id);
    };

    const on = (k: string) => setChecked((p) => ({ ...p, [k]: true }));

    t(700, () => on("focus"));


    return () => {
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
    };
  }, []);

  const listVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.085, delayChildren: 0.18 } },
  } as const;

  const rowVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] },
    },
  } as const;

  return (
    <main className="hero">
      <div className="grain">
        {/* Background accents */}
        <div className="bg-accents" aria-hidden="true">
          <motion.div
            className="bg-accents__layer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="glow glow--center" />
            <div className="glow glow--left" />
            <div className="glow glow--right" />
          </motion.div>
        </div>

        {/* Opening animation container */}
        <motion.div
          className="hero__inner"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.2, 0.8, 0.2, 1],
            }}
          >
            Barış Serhat Kaplan

          </motion.h1>

          {/* Checklist */}
          <motion.div
            className="lines"
            initial="hidden"
            animate="show"
            variants={listVariants}
          >
            <div className="lines__stack">
              {items.map((it, idx) => {
                const isOn = !!checked[it.id];

                return (
                  <motion.button
                    key={it.id}
                    type="button"
                    className="line"
                    variants={rowVariants}
                    onClick={() => {
                      cancelAuto();
                      setChecked((p) => ({ ...p, [it.id]: !p[it.id] }));
                    }}
                    aria-pressed={isOn}
                  >
                    {/* checkbox */}
                    <div className="box" aria-hidden="true">
                      <div
                        className={
                          "box__ring" + (isOn ? " box__ring--on" : "")
                        }
                      />
                      <AnimatePresence>
                        {isOn && (
                          <motion.div
                            className="box__fill"
                            initial={{ opacity: 0, scale: 0.88 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ duration: 0.16 }}
                          >
                            <div className="box__blue" />
                            <motion.svg
                              viewBox="0 0 24 24"
                              className="box__check"
                              fill="none"
                            >
                              <motion.path
                                d="M20 6L9 17l-5-5"
                                stroke="#ffffff"
                                strokeWidth="2.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.22 }}
                              />
                            </motion.svg>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* text */}
                    <div className="line__textWrap">
                      <motion.div
                        className="line__text"
                        animate={{ opacity: isOn ? 0.72 : 1 }}
                        transition={{ duration: 0.18 }}
                      >
                        <span className="serif-fade">{it.label}</span>
                      </motion.div>

                      {/* strike only when active */}
                      <AnimatePresence>
                        {isOn && (
                          <motion.div
                            className="strike"
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            exit={{ scaleX: 0, opacity: 0 }}
                            transition={{
                              duration: 0.22,
                              ease: [0.2, 0.8, 0.2, 1],
                            }}
                          />
                        )}
                      </AnimatePresence>

                      {/* caret pulse on the last line only when NOT crossed */}
                      {idx === 2 && (
                        <motion.span
                          className="caret"
                          animate={{
                            opacity: !isOn ? [0.22, 0.8, 0.22] : 0,
                          }}
                          transition={{ duration: 1.15, repeat: Infinity }}
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
