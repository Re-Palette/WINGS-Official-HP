import { motion } from 'motion/react';
import { ArrowLeft, Phone, Printer, MapPin, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NewsBar from '../components/NewsBar';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: t.contact.instagram,
      icon: <Instagram size={24} />,
      url: 'https://www.instagram.com/hanedakokusaikoukou/',
      color: 'hover:text-[#E1306C]',
    },
    {
      name: t.contact.line,
      icon: <MessageCircle size={24} />,
      url: 'https://page.line.me/589sdhsw?oat_content=url&openQrModal=true',
      color: 'hover:text-[#06C755]',
    },
    {
      name: t.contact.youtube,
      icon: <Youtube size={24} />,
      url: 'https://www.youtube.com/@user-ug5fl9ye5j',
      color: 'hover:text-[#FF0000]',
    },
  ];

  return (
    <main className="relative min-h-screen bg-navy-dark selection:bg-gold selection:text-navy-dark overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-navy-dark/80 to-navy-dark z-0" />
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-7xl tracking-[0.2em] text-white uppercase"
          >
            {t.contact.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-oswald text-gold tracking-[0.5em] text-sm md:text-base mt-4 uppercase"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="flex gap-6 items-start group">
              <div className="bg-white/5 p-4 border border-white/10 group-hover:border-gold transition-colors">
                <Phone className="text-gold" size={24} />
              </div>
              <div>
                <p className="font-oswald text-xs tracking-widest text-gold mb-1 uppercase">{t.contact.telLabel}</p>
                <p className="font-display text-2xl text-white tracking-widest">{t.footer.tel.replace('TEL.', '')}</p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="bg-white/5 p-4 border border-white/10 group-hover:border-gold transition-colors">
                <Printer className="text-gold" size={24} />
              </div>
              <div>
                <p className="font-oswald text-xs tracking-widest text-gold mb-1 uppercase">{t.contact.faxLabel}</p>
                <p className="font-display text-2xl text-white tracking-widest">{t.footer.fax.replace('FAX.', '')}</p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="bg-white/5 p-4 border border-white/10 group-hover:border-gold transition-colors">
                <MapPin className="text-gold" size={24} />
              </div>
              <div>
                <p className="font-oswald text-xs tracking-widest text-gold mb-1 uppercase">{t.contact.addressLabel}</p>
                <p className="font-sans text-white/80 leading-relaxed max-w-xs">{t.contact.addressValue}</p>
              </div>
            </div>
          </motion.div>

          {/* Social Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 p-8 md:p-12 border border-white/10"
          >
            <h3 className="font-display text-2xl text-white tracking-widest mb-10">{t.contact.socialLabel}</h3>
            <div className="space-y-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center gap-6 p-4 border border-white/5 hover:border-gold/30 bg-navy-dark group transition-all ${link.color}`}
                >
                  <div className="text-white/40 group-hover:text-inherit">
                    {link.icon}
                  </div>
                  <span className="font-oswald text-sm tracking-widest text-white/60 group-hover:text-white uppercase transition-colors">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 0.8 }}
           className="text-center mt-24"
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
