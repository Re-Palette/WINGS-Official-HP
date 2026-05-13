import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CardsSection from '../components/CardsSection';
import NewsBar from '../components/NewsBar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardsSection />
      <footer className="relative mt-0">
        <NewsBar />
        <div className="bg-navy-dark pt-20 pb-12 px-12 border-t border-white/5">
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
             <div className="flex flex-col">
               <h2 className="font-display text-4xl tracking-widest text-off-white mb-2">WINGS</h2>
               <p className="font-sans text-[10px] tracking-[0.2em] text-white/40 uppercase">
                 Haneda International High School Cheerleading Team
               </p>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-6">
                <div className="space-y-2">
                  <p className="font-oswald text-[10px] tracking-widest text-gold mb-4">ORGANIZATION</p>
                  <a href="#" className="block text-xs text-white/50 hover:text-white transition-colors">About Us</a>
                  <a href="#" className="block text-xs text-white/50 hover:text-white transition-colors">Philosophy</a>
                  <a href="#" className="block text-xs text-white/50 hover:text-white transition-colors">Staff</a>
                </div>
                <div className="space-y-2">
                  <p className="font-oswald text-[10px] tracking-widest text-gold mb-4">ACTIVITY</p>
                  <a href="#" className="block text-xs text-white/50 hover:text-white transition-colors">Practice</a>
                  <a href="#" className="block text-xs text-white/50 hover:text-white transition-colors">Events</a>
                  <a href="#" className="block text-xs text-white/50 hover:text-white transition-colors">Results</a>
                </div>
                <div className="space-y-2">
                  <p className="font-oswald text-[10px] tracking-widest text-gold mb-4">RECRUIT</p>
                  <a href="#" className="block text-xs text-white/50 hover:text-white transition-colors">Member</a>
                  <a href="#" className="block text-xs text-white/50 hover:text-white transition-colors">Junior High</a>
                  <a href="#" className="block text-xs text-white/50 hover:text-white transition-colors">Contact</a>
                </div>
             </div>
           </div>

           <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
             <p className="text-[10px] tracking-widest text-white/20 uppercase font-oswald">
               &copy; 2024 HANEDA INTERNATIONAL HIGH SCHOOL CHEERLEADING TEAM WINGS. ALL RIGHTS RESERVED.
             </p>
             <div className="flex gap-8 text-[10px] tracking-widest text-white/20 font-oswald">
               <a href="#" className="hover:text-gold transition-colors">PRIVACY POLICY</a>
               <a href="#" className="hover:text-gold transition-colors">TERMS OF USE</a>
             </div>
           </div>
        </div>
      </footer>
    </>
  );
}
