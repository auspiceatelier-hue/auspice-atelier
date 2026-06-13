import { motion } from "motion/react";
import { philosophy } from "../data";

export function Philosophy() {
  return (
    <section className="section bg-brand-pearl/50 border-b border-brand-line">
      <div className="section-inner grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
        <motion.article
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="card-elevated p-5 md:p-6"
        >
          <h2 className="section-heading mb-3">{philosophy.brand.title}</h2>
          <div className="divider-gold mb-3" />
          <p className="section-lead whitespace-pre-wrap text-justify">
            {philosophy.brand.content}
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="card p-5 md:p-6 border-l-2 border-l-brand-gold bg-brand-surface"
        >
          <h3 className="text-lg md:text-xl font-serif text-brand-water mb-3">
            {philosophy.mission.title}
          </h3>
          <p className="section-lead whitespace-pre-wrap text-justify">
            {philosophy.mission.content}
          </p>
        </motion.article>
      </div>
    </section>
  );
}
