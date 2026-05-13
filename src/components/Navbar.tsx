import { motion } from 'motion/react';
import { Instagram, Youtube, MessageCircle, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../translations';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const MENU_ITEMS = [
    { label: t.nav.about, path: '/about' },
    { label: t.nav.news, path: '/' },
    { label: t.nav.member, path: '/' },
    { label: t.nav.performance, path: '/performance' },
    { label: t.nav.gallery, path: '/gallery' },
    { label: t.nav.joinUs, path: '/' },
    { label: t.nav.contact, path: '/contact' },
  ];

  const langs: { code: Language; label: string }[] = [
    { code: 'ja', label: 'JP' },
    { code: 'en', label: 'EN' },
    { code: 'ko', label: 'KO' },
    { code: 'zh', label: 'ZH' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 bg-navy-dark/80 backdrop-blur-sm lg:bg-transparent"
    >
      {/* Logo Section */}
      <Link to="/" className="flex flex-col group">
        <h1 className="font-display text-4xl tracking-widest text-off-white leading-none group-hover:text-gold transition-colors">WINGS</h1>
        <p className="font-sans text-[8px] tracking-[0.2em] text-white/40 mt-1 uppercase">
          Haneda International High School<br />
          Cheerleading Team
        </p>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-8">
        {MENU_ITEMS.map((item) => (
          <li key={item.label}>
            <Link 
              to={item.path}
              className="nav-link-hover font-oswald text-xs tracking-widest font-light"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social & Language */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-4 mr-4">
          <motion.a whileHover={{ color: '#F4C542' }} href="https://www.instagram.com/hanedakokusaikoukou/" target="_blank" rel="noopener noreferrer" className="text-white/60 transition-colors">
            <Instagram size={18} strokeWidth={1.5} />
          </motion.a>
          <motion.a whileHover={{ color: '#F4C542' }} href="https://page.line.me/589sdhsw?oat_content=url&openQrModal=true" target="_blank" rel="noopener noreferrer" className="text-white/60 transition-colors">
            <MessageCircle size={18} strokeWidth={1.5} />
          </motion.a>
          <motion.a whileHover={{ color: '#F4C542' }} href="https://www.youtube.com/@user-ug5fl9ye5j" target="_blank" rel="noopener noreferrer" className="text-white/60 transition-colors">
            <Youtube size={18} strokeWidth={1.5} />
          </motion.a>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center gap-2 border-l border-white/10 pl-6">
          <Globe size={14} className="text-gold hidden sm:block" />
          <div className="flex gap-2">
            {langs.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`text-[10px] font-oswald tracking-tighter px-1.5 py-0.5 transition-colors ${
                  language === lang.code 
                    ? 'text-gold border-b border-gold' 
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-12 right-12 h-[1px] bg-white/10 hidden lg:block" />
    </motion.nav>
  );
}
