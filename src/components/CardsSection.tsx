import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function CardsSection() {
  const { t } = useLanguage();

  const CARDS = [
    {
      title: t.cards.about.title,
      description: t.cards.about.desc,
      image: '/about-wings.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800',
      link: t.cards.about.button,
      path: '/about'
    },
    {
      title: t.cards.performance.title,
      description: t.cards.performance.desc,
      image: '/performance.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800',
      link: t.cards.performance.button,
      path: '/performance'
    },
    {
      title: t.cards.movie.title,
      description: t.cards.movie.desc,
      image: '/movie.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800',
      link: t.cards.movie.button,
      path: '/',
      isMovie: true,
    }
  ];

  return (
    <section className="bg-navy-dark py-0 -mt-20 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {CARDS.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[450px] group overflow-hidden border-r border-white/5 last:border-r-0"
          >
            {/* Background Image */}
            <img 
              src={card.image} 
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-50"
              referrerPolicy="no-referrer"
              onError={(e) => {
                if ('fallbackImage' in card && card.fallbackImage) {
                  e.currentTarget.src = card.fallbackImage;
                }
              }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
            
            {/* Content */}
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
              <h3 className="font-display text-2xl md:text-4xl tracking-widest text-white mb-6 transition-transform duration-500 group-hover:-translate-y-2 uppercase">
                {card.title}
              </h3>
              
              <p className="font-sans text-xs text-white/70 leading-relaxed whitespace-pre-line mb-10 opacity-80 h-12">
                {card.description}
              </p>
              
              <div className="flex items-center justify-between">
                <Link 
                  to={card.path} 
                  className="group/link inline-flex items-center gap-4 border border-white/20 px-6 py-2 transition-all hover:border-gold hover:text-gold"
                >
                  <span className="font-oswald text-[10px] tracking-[0.3em]">
                    {card.link}
                  </span>
                  <div className="w-4 h-[1px] bg-white/40 group-hover/link:bg-gold transition-colors" />
                </Link>

                {card.isMovie && (
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 border border-gold rounded-full flex items-center justify-center text-gold cursor-pointer"
                  >
                    <Play fill="currentColor" size={20} className="ml-1" />
                  </motion.div>
                )}
              </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
