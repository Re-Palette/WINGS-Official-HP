import { motion } from 'motion/react';
import { Instagram, Youtube, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const MENU_ITEMS = ['ABOUT', 'NEWS', 'MEMBER', 'PERFORMANCE', 'GALLERY', 'JOIN US', 'CONTACT'];

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12"
    >
      {/* Logo Section */}
      <Link to="/" className="flex flex-col group">
        <h1 className="font-display text-4xl tracking-widest text-off-white leading-none group-hover:text-gold transition-colors">WINGS</h1>
        <p className="font-sans text-[8px] tracking-[0.2em] text-white/60 mt-1 uppercase">
          Haneda International High School<br />
          Cheerleading Team
        </p>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-8">
        {MENU_ITEMS.map((item) => (
          <li key={item}>
            <Link 
              to={item === 'ABOUT' ? '/about' : '/'}
              className="nav-link-hover font-oswald text-xs tracking-widest font-light"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="flex items-center gap-6">
        <motion.a whileHover={{ color: '#F4C542' }} href="#" className="text-white/80 transition-colors">
          <Instagram size={20} strokeWidth={1.5} />
        </motion.a>
        <motion.a whileHover={{ color: '#F4C542' }} href="#" className="text-white/80 transition-colors">
          <Twitter size={20} strokeWidth={1.5} />
        </motion.a>
        <motion.a whileHover={{ color: '#F4C542' }} href="#" className="text-white/80 transition-colors">
          <Youtube size={20} strokeWidth={1.5} />
        </motion.a>
      </div>

      {/* Gold accent line at the bottom of header if needed, but the design shows it more minimal */}
      <div className="absolute bottom-0 left-12 right-12 h-[1px] bg-white/10 hidden lg:block" />
    </motion.nav>
  );
}
