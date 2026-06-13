import { motion } from "motion/react";
import { philosophy } from "../data";

export function Footer() {
  return (
    <footer className="section bg-brand-footer text-brand-footer-text border-t border-brand-earth/30">
      <div className="section-inner text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg md:text-xl font-serif text-brand-pearl mb-2">
            {philosophy.closing.title}
          </h2>
          <div className="divider-gold mb-3" />
          <p className="text-sm leading-relaxed text-brand-footer-text/90 max-w-xl mx-auto">
            {philosophy.closing.content}
          </p>

          <div className="mt-6 pt-4 border-t border-brand-earth/40 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[9px] tracking-[0.15em] uppercase text-brand-gold-light/80">
              &copy; {new Date().getFullYear()} 德善軒 AUSPICE ATELIER
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[9px] tracking-[0.15em] uppercase text-brand-footer-text/70">
              <span>Modern & Calm</span>
              <span>Professional Integrity</span>
              <span>Healing First</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
