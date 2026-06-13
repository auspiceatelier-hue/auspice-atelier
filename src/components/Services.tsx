import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { services } from "../data";

export function Services() {
  return (
    <section className="section bg-brand-bg pt-14 md:pt-16">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <h2 className="section-heading">服務</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-line border border-brand-line">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group bg-brand-surface/90 hover:bg-white transition-colors"
              >
                <Link
                  to={`/services/${item.id}`}
                  className="block p-4 h-full"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] tracking-widest text-brand-gold uppercase font-medium">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon className="w-4 h-4 text-brand-earth group-hover:text-brand-gold transition-colors stroke-[1.5]" />
                  </div>
                  <h3 className="text-base font-serif text-brand-primary mb-2 group-hover:text-brand-water transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-brand-dim text-xs leading-relaxed line-clamp-3">
                    {item.content}
                  </p>
                  <div className="mt-3 flex items-center text-[9px] uppercase font-bold tracking-widest text-brand-gold">
                    了解詳情
                    <span className="ml-1.5 group-hover:translate-x-0.5 transition-transform">→</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
