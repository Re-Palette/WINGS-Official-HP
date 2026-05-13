import { motion } from 'motion/react';
import { ArrowLeft, Trophy, Users, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NewsBar from '../components/NewsBar';
import { useLanguage } from '../context/LanguageContext';

export default function PerformancePage() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen bg-navy-dark selection:bg-gold selection:text-navy-dark overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/performance.jpg"
            alt="WINGS Performance"
            className="w-full h-full object-cover opacity-40 brightness-75 grayscale-[10%]"
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
            className="font-display text-4xl md:text-7xl tracking-[0.2em] text-white uppercase"
          >
            {t.performance.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-oswald text-gold tracking-[0.5em] text-sm md:text-base mt-4 uppercase"
          >
            {t.performance.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        {/* 1. Competition */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="mb-32"
        >
          <div className="flex items-center gap-4 mb-12">
            <Trophy className="text-gold" size={32} />
            <h2 className="font-display text-xl md:text-4xl text-white tracking-widest uppercase">
              {t.performance.competitionTitle}
            </h2>
          </div>
          
          <p className="font-sans text-white/80 leading-loose text-lg mb-12 max-w-3xl">
            {t.performance.competitionDesc}
          </p>

          <div className="space-y-12">
            {/* JAPAN CUP */}
            <div className="bg-white/5 border-l-2 border-gold p-8">
              <h3 className="font-sans font-bold text-xl text-white mb-6 underline decoration-gold/30 underline-offset-8">
                {t.performance.japanCup}
              </h3>
              <ul className="space-y-4 font-sans text-white/70">
                <li className="flex items-start gap-4">
                  <span className="text-gold font-oswald text-sm mt-1">2025</span>
                  <span>男女混成部門フライデートーナメント（全国ベスト5位）</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-gold font-oswald text-sm mt-1">2024</span>
                  <span>Division1 高等学校の部 出場</span>
                </li>
              </ul>
            </div>

            {/* Kanto */}
            <div className="bg-white/5 border-l-2 border-white/20 p-8">
              <h3 className="font-sans font-bold text-xl text-white mb-6">
                {t.performance.kantoRegion}
              </h3>
              <ul className="space-y-4 font-sans text-white/70">
                <li className="flex items-start gap-4">
                  <span className="text-white/40 font-oswald text-sm mt-1">2025</span>
                  <span>Division1 高等学校の部 出場</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white/40 font-oswald text-sm mt-1">2024</span>
                  <span>Division1 高等学校の部 出場</span>
                </li>
              </ul>
            </div>

            {/* Tokyo */}
            <div className="bg-white/5 border-l-2 border-white/20 p-8">
              <h3 className="font-sans font-bold text-xl text-white mb-6">
                {t.performance.tokyoHigh}
              </h3>
              <ul className="space-y-4 font-sans text-white/70">
                <li className="flex items-start gap-4">
                  <span className="text-white/40 font-oswald text-sm mt-1">2025</span>
                  <span>出場</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white/40 font-oswald text-sm mt-1">2024</span>
                  <span>出場</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 2. School Life */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="mb-32"
        >
          <div className="flex items-center gap-4 mb-12">
            <Users className="text-gold" size={32} />
            <h2 className="font-display text-xl md:text-4xl text-white tracking-widest uppercase">
              {t.performance.schoolLifeTitle}
            </h2>
          </div>

          <p className="font-sans text-white/80 leading-loose text-lg mb-12 max-w-3xl">
            {t.performance.schoolLifeDesc}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="relative group overflow-hidden border border-white/10 p-8 bg-white/5">
              <h4 className="font-sans font-bold text-xl text-gold mb-4">{t.performance.aritakeFestival}</h4>
              <p className="font-sans text-white/70 leading-relaxed italic">
                {t.performance.aritakeFestivalDesc}
              </p>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users size={64} />
              </div>
            </div>
            <div className="relative group overflow-hidden border border-white/10 p-8 bg-white/5">
              <h4 className="font-sans font-bold text-xl text-gold mb-4">{t.performance.clubIntro}</h4>
              <p className="font-sans text-white/70 leading-relaxed italic">
                {t.performance.clubIntroDesc}
              </p>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe size={64} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. Community */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="mb-32"
        >
          <div className="flex items-center gap-4 mb-12">
            <Globe className="text-gold" size={32} />
            <h2 className="font-display text-xl md:text-4xl text-white tracking-widest uppercase">
              {t.performance.communityTitle}
            </h2>
          </div>

          <p className="font-sans text-white/80 leading-loose text-lg mb-12 max-w-3xl">
            {t.performance.communityDesc}
          </p>

          <div className="bg-white/5 border border-white/10 rounded-sm divide-y divide-white/5">
            {[
              { name: t.performance.kamataPolice, category: 'TRAFFIC SAFETY' },
              { name: t.performance.haginakaParty, category: 'GARDEN PARTY' },
              { name: t.performance.gundamEvent, category: 'SPECIAL EVENT' }
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center p-6 hover:bg-white/5 transition-colors group">
                <span className="font-sans text-white group-hover:text-gold transition-colors">{item.name}</span>
                <span className="font-oswald text-[10px] tracking-widest text-white/30">{item.category}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center pt-12"
        >
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
