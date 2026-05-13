import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NewsBar from '../components/NewsBar';
import { useLanguage } from '../context/LanguageContext';

export default function AboutPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen bg-navy-dark selection:bg-gold selection:text-navy-dark overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-wings.jpg"
            alt="WINGS Team"
            className="w-full h-full object-cover opacity-40 brightness-75 grayscale-[20%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent" />
          <div className="absolute inset-0 cinematic-vignette opacity-60" />
        </div>

        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-7xl md:text-9xl tracking-[0.2em] text-white uppercase"
          >
            {t.about.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-oswald text-gold tracking-[0.5em] text-sm md:text-base mt-4 uppercase"
          >
            {t.about.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="mb-24"
        >
          <h2 className="font-display text-4xl text-gold mb-8 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-gold" /> {t.about.wingsTitle}
          </h2>
          <div className="space-y-6">
            <h3 className="font-sans font-bold text-2xl text-white">{t.about.identity}</h3>
            <p className="font-sans text-white/80 leading-loose text-lg whitespace-pre-line">
              {t.about.wingsDesc}
            </p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="mb-24 relative p-8 md:p-12 border border-white/10 bg-white/5"
        >
          <h2 className="font-display text-4xl text-gold mb-8 italic uppercase">{t.about.shinesTitle}</h2>
          <div className="space-y-6">
            <h3 className="font-sans font-bold text-2xl text-white">{t.about.legacy}</h3>
            <p className="font-sans text-white/80 leading-loose text-lg">
              {t.about.shinesDesc1}
            </p>
            <p className="font-sans text-white/80 leading-loose text-lg whitespace-pre-line">
              {t.about.shinesDesc2}
            </p>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold/30 -mr-2 -mt-2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-gold/30 -ml-2 -mb-2" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="mb-24"
        >
          <h2 className="font-display text-4xl text-gold mb-8 flex items-center gap-4">
             {t.about.activityTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-4">
              <h4 className="font-display text-xl text-white tracking-widest border-b border-white/20 pb-2">{t.about.challengeTitle}</h4>
              <p className="font-sans text-white/70 leading-relaxed">
                {t.about.challengeDesc}
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-display text-xl text-white tracking-widest border-b border-white/20 pb-2">{t.about.proTitle}</h4>
              <p className="font-sans text-white/70 leading-relaxed">
                {t.about.proDesc}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="text-center bg-royal/10 p-12 md:p-20 rounded-sm border border-royal/20"
        >
          <h2 className="font-display text-5xl text-white mb-6 tracking-widest uppercase">{t.about.futureTitle}</h2>
          <p className="font-sans text-white/80 leading-loose text-lg mb-10 max-w-2xl mx-auto whitespace-pre-line">
            {t.about.futureDesc}
          </p>
          <button 
            onClick={() => navigate('/')}
            className="group relative border border-gold/50 px-12 py-4 overflow-hidden transition-all hover:border-gold"
          >
            <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 font-oswald text-sm tracking-[0.3em] text-gold group-hover:text-navy-dark transition-colors flex items-center gap-4">
               <ArrowLeft size={18} /> {t.about.backHome}
            </span>
          </button>
        </motion.div>
      </section>

      <footer className="relative">
        <NewsBar />
        <div className="bg-navy-dark py-12 text-center border-t border-white/5">
             <h2 className="font-display text-4xl tracking-widest text-off-white mb-2">WINGS</h2>
             <p className="font-sans text-[10px] tracking-[0.2em] text-white/40 uppercase">
               Haneda International High School Cheerleading Team
             </p>
        </div>
      </footer>
    </main>
  );
}
