import { useParams, Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import { motion } from "motion/react";
import { services } from "../data";

export function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] pt-16 px-4">
        <h1 className="text-lg font-serif text-brand-primary mb-3">找不到相關服務</h1>
        <Link
          to="/services"
          className="text-brand-gold tracking-widest text-[10px] uppercase flex items-center gap-1.5 hover:text-brand-water transition-colors"
        >
          <MoveLeft className="w-3.5 h-3.5" /> 返回服務列表
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="section-inner px-4 md:px-5 pt-14 md:pt-16 pb-8"
    >
      <Link
        to="/services"
        className="inline-flex items-center gap-1.5 text-brand-dim hover:text-brand-gold transition-colors tracking-widest text-[10px] uppercase mb-4"
      >
        <MoveLeft className="w-3 h-3" /> 返回服務列表
      </Link>

      <article className="card-elevated p-5 md:p-6">
        <header className="flex items-center gap-3 mb-4 pb-4 border-b border-brand-line">
          <div className="w-11 h-11 shrink-0 bg-brand-gold-muted border border-brand-line-gold flex items-center justify-center text-brand-gold">
            <Icon className="w-5 h-5 stroke-[1.5]" />
          </div>
          <h1 className="text-xl md:text-2xl font-serif text-brand-primary">
            {service.title}
          </h1>
        </header>

        <div className="space-y-3">
          {service.content.split("\n").map((paragraph, index) => (
            <p key={index} className="text-sm text-brand-dim leading-relaxed whitespace-pre-wrap">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <img
        src={service.backgroundImage}
        alt=""
        aria-hidden="true"
        className="w-full max-w-sm mx-auto mt-5 opacity-50 object-contain"
      />
    </motion.div>
  );
}
