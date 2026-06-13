import { motion } from "motion/react";
import { values } from "../data";

export function Values() {
  return (
    <section className="section bg-brand-surface-alt/60 border-b border-brand-line">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <h2 className="section-heading">核心價值與堅持</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {values.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="card-elevated p-4 hover:border-brand-gold/50 hover:shadow-md hover:shadow-brand-primary/5 transition-all"
              >
                <h3 className="text-sm font-bold tracking-wide text-brand-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-dim text-xs leading-relaxed">
                  {item.content}
                </p>
              </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
