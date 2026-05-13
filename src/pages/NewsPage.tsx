import { motion } from 'motion/react';
import { ArrowLeft, Megaphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NewsBar from '../components/NewsBar';
import { useLanguage } from '../context/LanguageContext';

export default function NewsPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen bg-navy-dark selection:bg-gold selection:text-navy-dark overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center pt-32">
        <div className="absolute inset-0 z-0 bg-navy-dark/40" />
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-7xl tracking-[0.2em] text-white uppercase"
          >
            {t.news.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-oswald text-gold tracking-[0.5em] text-sm md:text-base mt-4 uppercase"
          >
            {t.news.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-24 min-h-[40vh] flex flex-col items-center justify-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
           className="text-center"
        >
          <div className="mb-8 flex justify-center">
            <Megaphone size={64} className="text-white/10" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-white/20 tracking-[0.3em] mb-12 italic">
            {t.news.comingSoon}
          </h2>
          
          <button 
            onClick={() => navigate('/')}
            className="group relative border border-gold/50 px-12 py-4 overflow-hidden transition-all hover:border-gold"
          >
            <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 font-oswald text-sm tracking-[0.3em] text-gold group-hover:text-navy-dark transition-colors flex items-center gap-4 uppercase">
               <ArrowLeft size={18} /> {t.about.backHome}
            </span>
          </button>
        </motion.div>
      </section>

      <footer className="relative">
        <NewsBar />
        <div className="bg-navy-dark py-12 text-center border-t border-white/5">
             <h2 className="font-display text-4xl tracking-widest text-off-white mb-2">WINGS</h2>
             <p className="font-sans text-[10px] tracking-[0.2em] text-white/40 uppercase mb-4">
               Haneda International High School Cheerleading Team
             </p>
             <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
               <p className="font-oswald text-[10px] tracking-widest text-white/40 uppercase">{t.footer.tel}</p>
               <p className="font-oswald text-[10px] tracking-widest text-white/40 uppercase">{t.footer.fax}</p>
             </div>
        </div>
      </footer>
    </main>
  );
}
