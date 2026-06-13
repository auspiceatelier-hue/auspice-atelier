import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-[72dvh] flex flex-col items-center justify-center px-4 pt-16 pb-12 border-b border-brand-line overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-brand-water/8 to-transparent -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-brand-gold/8 rounded-full blur-[80px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-2xl mx-auto flex flex-col items-center text-center"
      >
        <h1 className="text-4xl md:text-[2.8125rem] font-serif text-brand-primary mb-4 tracking-wide">
          德善軒
        </h1>
        <span className="text-brand-gold font-light tracking-[0.25em] text-[15px] mb-4 uppercase border border-brand-line-gold bg-white/60 px-5 py-1.5 rounded-full">
          現代問米調解師
        </span>
        <p className="text-[1.3125rem] md:text-2xl text-brand-dim tracking-wide leading-relaxed max-w-xl">
          褪去迷信色彩，還原傳統文化。為您接通
          <span className="text-brand-primary font-medium">跨越時空的心靈對話</span>
          ，帶來
          <span className="text-brand-gold">生死兩安</span>
          的圓滿。
        </p>
      </motion.div>
    </section>
  );
}
