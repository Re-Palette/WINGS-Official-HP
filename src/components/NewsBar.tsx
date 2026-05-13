import { motion } from 'motion/react';
import { Instagram, Youtube, MessageCircle, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NewsBar() {
  const navigate = useNavigate();

  return (
    <section className="bg-black/90 border-t border-white/10 flex flex-col md:flex-row items-stretch">
      {/* News Left */}
      <div 
        onClick={() => navigate('/news')}
        className="flex-1 flex items-center px-6 py-6 md:px-12 cursor-pointer hover:bg-white/[0.02] transition-colors group"
      >
        <div className="flex items-center gap-12 w-full">
          <span className="font-display text-2xl tracking-widest text-gold shrink-0">NEWS</span>
          
          <div className="hidden md:flex items-center gap-8 text-xs text-white/50 border-l border-white/10 pl-8">
            <span className="font-oswald tracking-widest">2024.05.12</span>
            <span className="bg-gold text-navy-dark font-display px-2 py-0.5 text-sm tracking-widest">NEW</span>
          </div>

          <p className="text-xs md:text-sm text-white/80 font-sans tracking-wide truncate flex-1">
            大会結果を更新しました。春季競技記念に向け、チーム一丸となって邁進いたします。
          </p>

          <ChevronRight size={18} className="text-white/30 group-hover:text-gold group-hover:translate-x-1 transition-all" />
        </div>
      </div>

      {/* Follow Us Right */}
      <div className="bg-gold px-12 py-6 flex items-center justify-between gap-12 min-w-[300px]">
        <span className="font-display text-xl tracking-widest text-navy-dark">FOLLOW US</span>
        <div className="flex items-center gap-6 text-navy-dark">
          <a href="https://www.instagram.com/hanedakokusaikoukou/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <Instagram size={20} />
          </a>
          <a href="https://page.line.me/589sdhsw?oat_content=url&openQrModal=true" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <MessageCircle size={20} />
          </a>
          <a href="https://www.youtube.com/@user-ug5fl9ye5j" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
