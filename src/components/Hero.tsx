import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-navy-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          src="/hero-huddle.jpg"
          alt="Wings Cheerleading Team Huddle"
          className="w-full h-full object-cover opacity-70 grayscale-[20%] brightness-90 transition-all"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback if local image is not yet uploaded
            e.currentTarget.src = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920";
          }}
        />
        <div className="absolute inset-0 bg-navy-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-transparent to-transparent" />
        <div className="absolute inset-0 cinematic-vignette opacity-80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col"
        >
          <h2 className="font-display text-[12vw] md:text-[8vw] leading-[0.8] tracking-tighter text-white">
            ONE TEAM.
          </h2>
          <h2 className="font-display text-[12vw] md:text-[8vw] leading-[0.8] tracking-tighter text-gold">
            ONE SKY.
          </h2>
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-4 space-y-0.5"
        >
          <p className="font-oswald text-[10px] md:text-xs tracking-[0.3em] text-white/90">
            HANEDA INTERNATIONAL HIGH SCHOOL
          </p>
          <p className="font-oswald text-[10px] md:text-xs tracking-[0.3em] text-white/90">
            CHEERLEADING TEAM
          </p>
          <p className="font-display text-4xl md:text-5xl tracking-widest text-white mt-3">
            “WINGS”
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-6"
        >
          <button className="group relative border border-gold/50 px-8 py-3 overflow-hidden transition-all hover:border-gold">
             <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
             <span className="relative z-10 font-oswald text-sm tracking-[0.3em] text-gold group-hover:text-navy-dark transition-colors flex items-center gap-4">
                JOIN US <ArrowRight size={18} />
             </span>
          </button>
        </motion.div>
      </div>

      {/* Side Vertical Text */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block overflow-hidden">
        <motion.div
           initial={{ y: 100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 1.8, duration: 1 }}
           className="writing-vertical font-display text-2xl tracking-[0.5em] text-gold opacity-50"
           style={{ writingMode: 'vertical-rl' }}
        >
          KEEP FLYING
        </motion.div>
        {/* Accent line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gold/30 mt-4" />
      </div>
    </section>
  );
}
