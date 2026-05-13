import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NewsBar from '../components/NewsBar';

export default function AboutPage() {
  const navigate = useNavigate();

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
            className="font-display text-7xl md:text-9xl tracking-[0.2em] text-white"
          >
            ABOUT WINGS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-oswald text-gold tracking-[0.5em] text-sm md:text-base mt-4"
          >
            OUR IDENTITY & SPIRIT
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
            <span className="w-12 h-[1px] bg-gold" /> WINGS（ウィングス）
          </h2>
          <div className="space-y-6">
            <h3 className="font-sans font-bold text-2xl text-white">私たちのアイデンティティ</h3>
            <p className="font-sans text-white/80 leading-loose text-lg">
              羽田国際高等学校チアリーディング部「WINGS」は、その名の通り「世界へ、そして未来へ羽ばたく」をモットーに活動しているチームです。<br />
              チアリーディングの技術向上はもちろんのこと、見ているすべての人に勇気と元気を届け、応援される存在であることを大切にしています。
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
          <h2 className="font-display text-4xl text-gold mb-8 italic">“SHINES” TO “WINGS”</h2>
          <div className="space-y-6">
            <h3 className="font-sans font-bold text-2xl text-white">継承される魂</h3>
            <p className="font-sans text-white/80 leading-loose text-lg">
              私たちのルーツは、前身である蒲田女子高等学校チアリーディング部「SHINES（シャインズ）」にあります。
            </p>
            <p className="font-sans text-white/80 leading-loose text-lg">
              長年、多くの方々に愛され、数々の功績を残してきた「SHINES」。その伝統である「明るさ・礼儀・不屈の精神」は、校名が変わった今も、私たちの根底に脈々と流れています。<br />
              「SHINES」として築き上げた輝かしい歴史と、地域の方々や卒業生との絆を大切にしながら、私たちは「WINGS」として新たな空へと飛び立ちました。
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
             活動内容と目標
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-4">
              <h4 className="font-display text-xl text-white tracking-widest border-b border-white/20 pb-2">競技への挑戦</h4>
              <p className="font-sans text-white/70 leading-relaxed">
                競技チアリーディングにおける大会出場（JCA主催大会など）を主軸に、難度の高いタンブリングやスタンツに挑戦し、全国大会での上位入賞を目指します。
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-display text-xl text-white tracking-widest border-b border-white/20 pb-2">「応援」のプロとして</h4>
              <p className="font-sans text-white/70 leading-relaxed">
                学内の部活動応援や地域イベントでのパフォーマンスを通じて、誰かを励ますことの素晴らしさを学び、チームメイトとの信頼関係を築きます。
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
          <h2 className="font-display text-5xl text-white mb-6 tracking-widest">未来のWINGSへ</h2>
          <p className="font-sans text-white/80 leading-loose text-lg mb-10 max-w-2xl mx-auto">
            初心者・経験者は問いません。「誰かを応援したい」「自分を成長させたい」という強い気持ちがあれば、誰もが輝ける場所です。<br />
            「SHINES」が灯してくれた情熱の光を胸に、私たちと一緒に「WINGS」として新しい歴史を作っていきませんか？
          </p>
          <button 
            onClick={() => navigate('/')}
            className="group relative border border-gold/50 px-12 py-4 overflow-hidden transition-all hover:border-gold"
          >
            <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 font-oswald text-sm tracking-[0.3em] text-gold group-hover:text-navy-dark transition-colors flex items-center gap-4">
               <ArrowLeft size={18} /> BACK TO HOME
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
