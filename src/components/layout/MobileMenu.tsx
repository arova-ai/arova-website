import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface NavLink {
  label: string;
  href: string;
}

interface Props {
  locale: string;
  currentPath: string;
  navLinks: NavLink[];
  langSwitchLabel: string;
  altLocale: string;
  bookDemoLabel: string;
}

export default function MobileMenu({ locale, currentPath, navLinks, langSwitchLabel, altLocale, bookDemoLabel }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Toggle menu"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-white/5 p-6"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-white/10 my-2" />
              <a
                href={`/${altLocale}${currentPath}`}
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                {langSwitchLabel}
              </a>
              <a
                href={`/${locale}/contact`}
                className="mt-2 flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-primary text-white rounded-full hover:bg-primary/90 transition-colors glow-cyan"
              >
                {bookDemoLabel}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
