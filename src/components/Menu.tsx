import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { logo } from "../assets";
import { services } from "../data";

const WHATSAPP_URL = "https://wa.me/85260188593";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Menu() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-brand-primary/95 backdrop-blur-md border-b border-brand-gold/20 shadow-sm shadow-brand-primary/20 pointer-events-none">
        <Link
          to="/"
          className="pointer-events-auto"
          aria-label="返回首頁"
        >
          <img
            src={logo}
            alt="德善軒"
            className="h-8 md:h-9 w-auto object-contain brightness-110"
          />
        </Link>

        <div className="flex items-center gap-2 pointer-events-auto">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 flex items-center justify-center gap-2 px-3 sm:px-4 rounded-lg border border-[#25D366]/60 bg-[#25D366] text-white hover:bg-[#20BD5A] hover:border-[#20BD5A] transition-colors"
            aria-label="Whatsapp查詢 +852 6018 8593"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span className="text-xs font-medium whitespace-nowrap">
              Whatsapp查詢
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="w-9 h-9 flex items-center justify-center border border-brand-gold/40 bg-brand-water/50 text-brand-gold-light hover:bg-brand-gold hover:text-brand-primary hover:border-brand-gold transition-colors"
            aria-label="開啟選單"
            aria-expanded={open}
          >
            <MenuIcon className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-brand-primary/40 backdrop-blur-[2px]"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm bg-brand-pearl border-l border-brand-line-gold shadow-2xl shadow-brand-primary/20 flex flex-col"
              aria-label="主選單"
            >
              <div className="flex items-center justify-between px-4 py-3 bg-brand-primary border-b border-brand-gold/20">
                <span className="text-[10px] tracking-[0.3em] text-brand-gold">
                  選單
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 flex items-center justify-center border border-brand-gold/40 text-brand-gold-light hover:bg-brand-gold hover:text-brand-primary transition-colors"
                  aria-label="關閉選單"
                >
                  <X className="w-5 h-5 stroke-[1.5]" />
                </button>
              </div>

              <ul className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                <li>
                  <Link
                    to="/"
                    className={`block py-2.5 px-3 border font-serif text-base tracking-wide transition-colors ${
                      pathname === "/"
                        ? "text-brand-primary border-brand-gold/50 bg-brand-gold-muted"
                        : "text-brand-body border-transparent hover:text-brand-water hover:border-brand-line hover:bg-white/50"
                    }`}
                  >
                    首頁
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className={`block py-2.5 px-3 border font-serif text-base tracking-wide transition-colors ${
                      pathname === "/services"
                        ? "text-brand-primary border-brand-gold/50 bg-brand-gold-muted"
                        : "text-brand-body border-transparent hover:text-brand-water hover:border-brand-line hover:bg-white/50"
                    }`}
                  >
                    服務
                  </Link>

                  <ul className="mt-1 ml-3 pl-3 border-l border-brand-line/80 space-y-0.5">
                    {services.map((service) => {
                      const servicePath = `/services/${service.id}`;
                      const isServiceActive = pathname === servicePath;

                      return (
                        <li key={service.id}>
                          <Link
                            to={servicePath}
                            className={`block py-2 px-2 border font-serif text-xs leading-snug tracking-wide transition-colors ${
                              isServiceActive
                                ? "text-brand-primary border-brand-gold/50 bg-brand-gold-muted"
                                : "text-brand-dim border-transparent hover:text-brand-water hover:border-brand-line hover:bg-white/50"
                            }`}
                          >
                            {service.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>

              <div className="px-4 py-4 border-t border-brand-line bg-brand-surface">
                <p className="text-[10px] tracking-[0.2em] uppercase text-brand-earth text-center">
                  德善軒 Auspice Atelier
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
