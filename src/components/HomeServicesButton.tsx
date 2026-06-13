import { Link } from "react-router-dom";

const label = "我們的服務";

export function HomeServicesButton() {
  return (
    <Link
      to="/services"
      className="fixed right-2 top-3/4 -translate-y-1/2 z-40 inline-flex flex-col items-center justify-center gap-0.5 py-4 px-2.5 opacity-70 bg-brand-primary text-brand-gold-light border border-brand-gold/40 rounded-full shadow-md shadow-brand-primary/15 hover:opacity-90 hover:bg-brand-water transition-all min-w-[2.25rem]"
      aria-label={label}
    >
      {Array.from(label).map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="block w-full text-center text-[13px] leading-none font-serif"
        >
          {char}
        </span>
      ))}
    </Link>
  );
}
