import { useState } from 'react';
import { MapView } from "@/components/Map";
import { Sparkles, MapPin, ShieldCheck, ArrowRight, Menu, X, MessageCircle, CheckCircle2, ChevronDown, Phone, Clock } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whatsappUrl = "https://wa.me/5511947156038?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação%20gratuita.";
  const googleReviewsUrl = "https://www.google.com/maps/search/Av.+Benedito+de+Andrade,+54A,+Pirituba,+São+Paulo";

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#F5F5F3] text-[#1A1A1A] font-sans antialiased selection:bg-[#C99A3A] selection:text-white overflow-x-hidden">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        .font-line-art {
          font-family: 'Caveat', cursive;
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shine {
          animation: shine 2.5s infinite ease-in-out;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .card-hover-effect {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .card-hover-effect:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 20px 40px -15px rgba(37, 211, 102, 0.3);
        }
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 15px 35px rgba(37, 211, 102, 0.6); }
        }
        .whatsapp-float-btn {
          animation: pulse-soft 3s infinite ease-in-out;
        }
      `}</style>

      {/* =========================================================
          BOTÃO FLUTUANTE FIXO DO WHATSAPP (CANTO INFERIOR DIREITO)
         ========================================================= */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl whatsapp-float-btn transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <svg className="w-8 h-8 md:w-9 md:h-9 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

      {/* =========================================================
          BLOCO 1: HERO (DESKTOP)
         ========================================================= */}
      <div id="inicio" className="hidden lg:block relative w-full min-h-screen overflow-hidden bg-[#F5F5F3]">
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0 opacity-100"
          style={{
            backgroundImage: `url('/manus-storage/hero_bg_curved_d78f9904.webp')`,
            backgroundPosition: 'center center',
          }}
          aria-label="Fundo do Home"
        />

        <div className="absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-[#F5F5F3] via-[#F5F5F3]/80 to-transparent z-10 pointer-events-none" />

        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1080px] px-4">
          <nav 
            className="flex items-center justify-between px-8 h-[68px] rounded-full shadow-lg transition-all duration-300"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.65)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1.5px solid rgba(255, 255, 255, 0.85)',
            }}
          >
            <div className="flex items-center gap-2.5 mr-2">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-[#C99A3A]/40 bg-black flex items-center justify-center shadow-sm">
                <img src="/manus-storage/logo-ueda-simbolo_b1115bb5.png" alt="Símbolo UEDA Odontologia Integrada" className="w-full h-full object-contain" />
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <a 
                href="#inicio" 
                className="text-[13.5px] tracking-wide text-black font-semibold px-4 py-2 rounded-full transition-all"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                }}
              >
                Início
              </a>
              <a href="#sobre" className="text-[13.5px] tracking-wide text-neutral-800 hover:text-black transition-colors px-3 py-1 font-medium">Sobre Nós</a>
              <a href="#servicos" className="text-[13.5px] tracking-wide text-neutral-800 hover:text-black transition-colors px-3 py-1 font-medium">Serviços</a>
              <a href="#nossas-lentes" className="text-[13.5px] tracking-wide text-neutral-800 hover:text-black transition-colors px-3 py-1 font-medium">Nossas Lentes</a>
              <a href="#depoimentos" className="text-[13.5px] tracking-wide text-neutral-800 hover:text-black transition-colors px-3 py-1 font-medium">Depoimentos</a>
              <a href="#faq" className="text-[13.5px] tracking-wide text-neutral-800 hover:text-black transition-colors px-3 py-1 font-medium">FAQ</a>
              <a href="/implantes" className="text-[13.5px] tracking-wide text-neutral-800 hover:text-black transition-colors px-3 py-1 font-medium">Implantes</a>
            </div>
          </nav>
        </header>

        <main className="relative z-20 w-full min-h-screen flex items-center">
          <div className="w-full max-w-[1400px] mx-auto px-16 pt-32 pb-16">
            <div className="w-[48%] flex flex-col items-start justify-center pl-4 animate-fade-in-up">
              
              <span 
                className="uppercase tracking-[1.8px] text-[11px] font-semibold mb-3.5 block"
                style={{ color: '#A07828' }}
              >
                ODONTOLOGIA ESTÉTICA E SAÚDE BUCAL
              </span>

              <h1 className="text-[44px] lg:text-[50px] font-bold leading-[1.12] tracking-[-0.02em] text-[#1A1A1A] mb-5">
                Volte a sorrir <span style={{ color: '#A07828' }}>com confiança.</span>
              </h1>

              <p className="text-[15.5px] text-neutral-600 leading-[1.65] font-normal mb-6 max-w-[500px]">
                A melhor versão do seu sorriso com um cuidado personalizado, tecnologia e atendimento humanizado. Cada detalhe pensado para que você se sinta mais confiante, saudável e bem com você.
              </p>

              <div className="text-[14.5px] text-neutral-700 mb-8 font-medium bg-white/70 px-4 py-2.5 rounded-xl border border-[#C99A3A]/30 shadow-sm backdrop-blur-sm">
                <span>Tratamentos completos para todas as fases do seu sorriso: </span>
                <strong className="text-neutral-900 font-semibold">Implantes, lentes, prótese, endodontia, ortodontia e periodontia.</strong>
              </div>

              <div className="w-full max-w-[420px] mb-8">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-[#C99A3A]/40 flex flex-col gap-2.5">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#A07828]/15 flex items-center justify-center shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-[#A07828]" />
                    </div>
                    <span className="text-[13.5px] text-neutral-800 font-medium">Resultados naturais e personalizados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#A07828]/15 flex items-center justify-center shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-[#A07828]" />
                    </div>
                    <span className="text-[13.5px] text-neutral-800 font-medium">Atendimento em Pirituba, São Paulo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#A07828]/15 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#A07828]" />
                    </div>
                    <span className="text-[13.5px] text-neutral-800 font-medium">Um cuidado pensado para você</span>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-[420px]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-[60px] rounded-full flex items-center justify-center gap-3 font-semibold text-[15px] text-white tracking-[0.3px] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] relative overflow-hidden group shadow-2xl"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine pointer-events-none" />
                  
                  <MessageCircle className="w-[20px] h-[20px] text-white fill-current" />
                  <span>AGENDE SUA AVALIAÇÃO GRATUITA</span>
                  <ArrowRight className="w-[18px] h-[18px] text-white transition-transform group-hover:translate-x-1.5" />
                </a>
              </div>

              <div className="mt-5 text-[12px] uppercase tracking-[1.5px] text-neutral-500 font-medium pl-1">
                SEU SORRISO. NOSSA ESPECIALIDADE.
              </div>

            </div>
          </div>
        </main>
      </div>


      {/* =========================================================
          BLOCO 1: HERO (MOBILE)
         ========================================================= */}
      <div className="block lg:hidden relative w-full min-h-screen bg-[#F5F5F3] overflow-hidden pt-20 pb-12 px-4">
        <div 
          className="absolute inset-0 bg-no-repeat z-0 opacity-100"
          style={{
            backgroundImage: `url('/manus-storage/hero_bg_curved_d78f9904.webp')`,
            backgroundPosition: '64% top',
            backgroundSize: 'auto 100%',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F3]/16 via-[#F5F5F3]/10 to-[#F5F5F3]/42 z-10 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#F5F5F3]/72 via-[#F5F5F3]/24 to-transparent z-10 pointer-events-none" />

        <header className="absolute top-4 left-4 right-4 z-30">
          <nav 
            className="flex items-center justify-between px-5 h-[56px] rounded-full shadow-md"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.9)',
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#C99A3A]/40 bg-black flex items-center justify-center">
                <img src="/manus-storage/logo-ueda-simbolo_b1115bb5.png" alt="Símbolo UEDA Odontologia Integrada" className="w-full h-full object-contain" />
              </div>
              <span className="text-[13px] font-semibold text-neutral-900 tracking-tight">Dr. Alexandre Ueda</span>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-neutral-900/5 flex items-center justify-center text-neutral-800"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>

          {mobileMenuOpen && (
            <div className="mt-2 py-4 px-6 rounded-2xl bg-white/95 backdrop-blur-xl shadow-xl border border-neutral-200 flex flex-col gap-3 animate-fade-in-up">
              <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-neutral-900 py-1">Início</a>
              <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="text-sm text-neutral-700 py-1">Sobre Nós</a>
              <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="text-sm text-neutral-700 py-1">Serviços</a>
              <a href="#nossas-lentes" onClick={() => setMobileMenuOpen(false)} className="text-sm text-neutral-700 py-1">Nossas Lentes</a>
              <a href="#depoimentos" onClick={() => setMobileMenuOpen(false)} className="text-sm text-neutral-700 py-1">Depoimentos</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-sm text-neutral-700 py-1">FAQ</a>
              <a href="/implantes" onClick={() => setMobileMenuOpen(false)} className="text-sm text-neutral-700 py-1">Implantes</a>
            </div>
          )}
        </header>

        <main className="relative z-20 flex flex-col items-center text-center pt-8">
          <span className="uppercase tracking-[1.5px] text-[10.5px] font-semibold mb-3 text-[#A07828]">
            ODONTOLOGIA ESTÉTICA E SAÚDE BUCAL
          </span>

          <h1 className="text-[32px] font-bold leading-[1.15] text-[#1A1A1A] mb-4">
            Volte a sorrir <span style={{ color: '#A07828' }}>com confiança.</span>
          </h1>

          <p className="text-[14px] text-neutral-700 leading-relaxed mb-6 px-1">
            A melhor versão do seu sorriso com um cuidado personalizado, tecnologia e atendimento humanizado. Cada detalhe pensado para você.
          </p>

          <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[#C99A3A]/40 mb-6 text-left flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#A07828] shrink-0" />
              <span className="text-[13px] text-neutral-800 font-medium">Resultados naturais e personalizados</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#A07828] shrink-0" />
              <span className="text-[13px] text-neutral-800 font-medium">Atendimento em Pirituba, São Paulo</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#A07828] shrink-0" />
              <span className="text-[13px] text-neutral-800 font-medium">Um cuidado pensado para você</span>
            </div>
          </div>

          <div className="w-full mb-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-[56px] rounded-full flex items-center justify-center gap-2.5 font-semibold text-[14px] text-white tracking-[0.3px] shadow-xl relative overflow-hidden"
              style={{ backgroundColor: '#25D366' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine pointer-events-none" />
              <MessageCircle className="w-[18px] h-[18px] text-white fill-current" />
              <span>AGENDE SUA AVALIAÇÃO GRATUITA</span>
              <ArrowRight className="w-[16px] h-[16px] text-white" />
            </a>
          </div>

          <div className="text-[11px] uppercase tracking-[1.2px] text-neutral-500 font-medium">
            SEU SORRISO. NOSSA ESPECIALIDADE.
          </div>
        </main>
      </div>


      {/* =========================================================
          BLOCO 2: SOBRE NÓS & GALERIA DE TRANSFORMAÇÕES
         ========================================================= */}
      <section id="sobre" className="relative w-full py-24 bg-[#141414] text-white overflow-hidden">
        {/* Malha densa de 5x mais linhas geométricas douradas (finas e grossas) */}
        <div className="absolute inset-0 opacity-25 pointer-events-none overflow-hidden">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C99A3A" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#E5C158" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#997022" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            {/* Linhas geométricas finas e grossas abundantes */}
            <path d="M 0,100 Q 400,200 800,50 T 1440,300" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" />
            <path d="M 1440,800 Q 900,600 400,900 T 0,700" fill="none" stroke="url(#goldGrad)" strokeWidth="0.7" />
            <path d="M 200,0 Q 600,400 1200,100 T 1440,900" fill="none" stroke="url(#goldGrad)" strokeWidth="2" />
            <path d="M 0,500 Q 500,800 1000,400 T 1440,600" fill="none" stroke="url(#goldGrad)" strokeWidth="1" />
            <path d="M 100,1440 Q 700,800 1300,1200 T 0,200" fill="none" stroke="url(#goldGrad)" strokeWidth="0.5" />
            <circle cx="300" cy="300" r="150" fill="none" stroke="url(#goldGrad)" strokeWidth="1" />
            <circle cx="1100" cy="700" r="220" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" />
            <polygon points="720,200 900,500 540,500" fill="none" stroke="url(#goldGrad)" strokeWidth="0.8" />
            <line x1="0" y1="0" x2="1440" y2="900" stroke="url(#goldGrad)" strokeWidth="0.6" />
            <line x1="1440" y1="0" x2="0" y2="900" stroke="url(#goldGrad)" strokeWidth="1.2" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
            <span className="uppercase tracking-[2px] text-xs font-semibold text-[#C99A3A] mb-3 block">
              EXCELÊNCIA E PRECISÃO
            </span>
            <h2 className="text-[36px] lg:text-[46px] font-bold tracking-tight text-white mb-6">
              Excelência que transforma <span style={{ color: '#C99A3A' }}>sorrisos e histórias</span>
            </h2>
            <p className="text-neutral-400 text-base lg:text-lg leading-relaxed">
              Combinamos tecnologia de ponta, materiais de altíssimo padrão e um olhar artístico exclusivo para entregar resultados que superam expectativas.
            </p>
          </div>

          {/* Grid de Fotos com Legendas Flutuantes e Continuous Line Art */}
          <div className="grid grid-cols-2 items-center gap-3 sm:gap-5 md:gap-8 lg:gap-12">
            
            {/* Foto 1: Paciente */}
            <div className="relative group flex flex-col items-center">
              <div className="absolute -top-10 -left-6 z-20 pointer-events-none hidden lg:block">
                <span className="font-line-art text-[28px] text-[#E5C158] tracking-wider block rotate-[-6deg]">
                  Atendimento humanizado →
                </span>
              </div>
              <div className="w-full rounded-2xl border border-[#C99A3A]/30 bg-neutral-900/85 p-2.5 shadow-2xl backdrop-blur-md card-hover-effect sm:rounded-3xl sm:p-3.5 lg:p-5">
                <div className="aspect-square w-full overflow-hidden rounded-xl bg-[#111] p-1.5 sm:rounded-2xl sm:p-2 border border-neutral-800 flex items-center justify-center">
                  <img src="/manus-storage/pasted_file_IA41jz_image_164e2fed.png" alt="Caso clínico real - Transformação de sorriso" className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="pt-2 text-center sm:pt-3 lg:pt-4">
                  <h3 className="text-[11px] font-semibold leading-tight text-white sm:text-base lg:text-lg">Conforto e Segurança</h3>
                  <p className="mt-1 text-[10px] leading-[1.35] text-neutral-400 sm:text-sm">Ambiente acolhedor e técnicas indolores para o seu bem-estar.</p>
                </div>
              </div>
            </div>

            {/* Foto 2: Lentes */}
            <div className="relative group flex flex-col items-center">
              <div className="absolute -top-10 -right-6 z-20 pointer-events-none hidden lg:block">
                <span className="font-line-art text-[28px] text-[#E5C158] tracking-wider block rotate-[6deg]">
                  ← Lentes de Porcelana
                </span>
              </div>
              <div className="w-full rounded-2xl border border-[#C99A3A]/30 bg-neutral-900/85 p-2.5 shadow-2xl backdrop-blur-md card-hover-effect sm:rounded-3xl sm:p-3.5 lg:p-5">
                <div className="aspect-square w-full overflow-hidden rounded-xl bg-[#111] p-1.5 sm:rounded-2xl sm:p-2 border border-neutral-800 flex items-center justify-center">
                  <img src="/manus-storage/pasted_file_FnX8vI_image_a6a8615d.png" alt="Caso clínico real - Lentes e acabamento" className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="pt-2 text-center sm:pt-3 lg:pt-4">
                  <h3 className="text-[11px] font-semibold leading-tight text-white sm:text-base lg:text-lg">Estética Superior</h3>
                  <p className="mt-1 text-[10px] leading-[1.35] text-neutral-400 sm:text-sm">Harmonia entre formato, cor e naturalidade.</p>
                </div>
              </div>
            </div>

            {/* Foto 3: Antes e Depois */}
            <div className="relative group flex flex-col items-center">
              <div className="absolute -bottom-8 -left-6 z-20 pointer-events-none hidden lg:block">
                <span className="font-line-art text-[28px] text-[#E5C158] tracking-wider block rotate-[-4deg]">
                  Transformação real ↓
                </span>
              </div>
              <div className="w-full rounded-2xl border border-[#C99A3A]/30 bg-neutral-900/85 p-2.5 shadow-2xl backdrop-blur-md card-hover-effect sm:rounded-3xl sm:p-3.5 lg:p-5">
                <div className="aspect-square w-full overflow-hidden rounded-xl bg-[#111] p-1.5 sm:rounded-2xl sm:p-2 border border-neutral-800 flex items-center justify-center">
                  <img src="/manus-storage/pasted_file_X48Dsm_04a52b44.png" alt="Caso clínico real - Procedimento com afastador" className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="pt-2 text-center sm:pt-3 lg:pt-4">
                  <h3 className="text-[11px] font-semibold leading-tight text-white sm:text-base lg:text-lg">Resultados Reais</h3>
                  <p className="mt-1 text-[10px] leading-[1.35] text-neutral-400 sm:text-sm">Mudanças que devolvem a alegria de sorrir.</p>
                </div>
              </div>
            </div>

            {/* Foto 4: Procedimento */}
            <div className="relative group flex flex-col items-center">
              <div className="absolute -bottom-8 -right-6 z-20 pointer-events-none hidden lg:block">
                <span className="font-line-art text-[28px] text-[#E5C158] tracking-wider block rotate-[4deg]">
                  Técnica de ponta →
                </span>
              </div>
              <div className="w-full rounded-2xl border border-[#C99A3A]/30 bg-neutral-900/85 p-2.5 shadow-2xl backdrop-blur-md card-hover-effect sm:rounded-3xl sm:p-3.5 lg:p-5">
                <div className="aspect-square w-full overflow-hidden rounded-xl bg-[#111] p-1.5 sm:rounded-2xl sm:p-2 border border-neutral-800 flex items-center justify-center">
                  <img src="/manus-storage/pasted_file_JDxGL1_image_12168aa1.png" alt="Caso clínico real - Resultado final" className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="pt-2 text-center sm:pt-3 lg:pt-4">
                  <h3 className="text-[11px] font-semibold leading-tight text-white sm:text-base lg:text-lg">Tecnologia Avançada</h3>
                  <p className="mt-1 text-[10px] leading-[1.35] text-neutral-400 sm:text-sm">Equipamentos modernos para diagnósticos precisos.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          BLOCO 3: TRATAMENTOS AVANÇADOS (COM AS NOVAS FOTOS DO USUÁRIO)
         ========================================================= */}
      <section id="servicos" className="relative w-full py-24 bg-[#F5F5F3] text-[#1A1A1A]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="uppercase tracking-[2px] text-xs font-semibold text-[#A07828] mb-3 block">
              SERVIÇOS EM DESTAQUE
            </span>
            <h2 className="text-[36px] lg:text-[44px] font-bold tracking-tight text-neutral-900 mb-6">
              Escolha o cuidado que faz sentido para o seu sorriso
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed">
              Páginas objetivas para você entender cada serviço e conversar com a clínica.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            <a href="/implantes" className="bg-white rounded-2xl p-3 shadow-xl border border-neutral-200/80 flex flex-col justify-between card-hover-effect relative overflow-hidden sm:rounded-3xl sm:p-5 lg:p-6">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C99A3A] to-[#E5C158]" />
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100 border border-neutral-100 sm:rounded-2xl">
                  <img src="/manus-storage/service-implant-detail_186973c0.jpg" alt="Planejamento e componentes de implante dentário" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <h3 className="mt-3 text-sm font-bold leading-tight text-neutral-900 sm:mt-5 sm:text-xl">Implante Dentário</h3>
                <p className="mt-2 text-[11px] leading-[1.45] text-neutral-600 sm:mt-3 sm:text-sm">Avaliação, planejamento e reabilitação para o seu caso.</p>
              </div>
              <span className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-neutral-900 py-2.5 text-[11px] font-semibold text-white sm:mt-6 sm:py-3.5 sm:text-sm">Conhecer serviço <ArrowRight className="h-3.5 w-3.5" /></span>
            </a>
            <a href="/invisalign" className="bg-white rounded-2xl p-3 shadow-xl border border-neutral-200/80 flex flex-col justify-between card-hover-effect relative overflow-hidden sm:rounded-3xl sm:p-5 lg:p-6">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C99A3A] to-[#E5C158]" />
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100 border border-neutral-100 sm:rounded-2xl">
                  <img src="/manus-storage/service-invisalign-detail_99d6e8cb.jpg" alt="Alinhador transparente sobre modelo odontológico" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <h3 className="mt-3 text-sm font-bold leading-tight text-neutral-900 sm:mt-5 sm:text-xl">Invisalign</h3>
                <p className="mt-2 text-[11px] leading-[1.45] text-neutral-600 sm:mt-3 sm:text-sm">Alinhadores transparentes com planejamento individual.</p>
              </div>
              <span className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-neutral-900 py-2.5 text-[11px] font-semibold text-white sm:mt-6 sm:py-3.5 sm:text-sm">Conhecer serviço <ArrowRight className="h-3.5 w-3.5" /></span>
            </a>
            <a href="/clareamento-dental" className="bg-white rounded-2xl p-3 shadow-xl border border-neutral-200/80 flex flex-col justify-between card-hover-effect relative overflow-hidden sm:rounded-3xl sm:p-5 lg:p-6">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C99A3A] to-[#E5C158]" />
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center p-1 sm:rounded-2xl">
                  <img src="/manus-storage/pasted_file_IA41jz_image_164e2fed.png" alt="Resultado de clareamento e transformação de sorriso" className="h-full w-full object-contain transition-transform duration-500 hover:scale-105" />
                </div>
                <h3 className="mt-3 text-sm font-bold leading-tight text-neutral-900 sm:mt-5 sm:text-xl">Clareamento Dental</h3>
                <p className="mt-2 text-[11px] leading-[1.45] text-neutral-600 sm:mt-3 sm:text-sm">Mais luminosidade com avaliação e indicação cuidadosa.</p>
              </div>
              <span className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-neutral-900 py-2.5 text-[11px] font-semibold text-white sm:mt-6 sm:py-3.5 sm:text-sm">Conhecer serviço <ArrowRight className="h-3.5 w-3.5" /></span>
            </a>
            <a href="/lentes-de-contato-dental" className="bg-white rounded-2xl p-3 shadow-xl border border-neutral-200/80 flex flex-col justify-between card-hover-effect relative overflow-hidden sm:rounded-3xl sm:p-5 lg:p-6">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C99A3A] to-[#E5C158]" />
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100 border border-neutral-100 sm:rounded-2xl"><img src="/manus-storage/service-veneers-detail_40fa3d3e.jpg" alt="Lentes de contato dental sobre bandeja clínica" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" /></div>
                <h3 className="mt-3 text-sm font-bold leading-tight text-neutral-900 sm:mt-5 sm:text-xl">Lentes de Contato Dental</h3>
                <p className="mt-2 text-[11px] leading-[1.45] text-neutral-600 sm:mt-3 sm:text-sm">Cor, formato e proporção avaliados para o seu sorriso.</p>
              </div>
              <span className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-neutral-900 py-2.5 text-[11px] font-semibold text-white sm:mt-6 sm:py-3.5 sm:text-sm">Conhecer serviço <ArrowRight className="h-3.5 w-3.5" /></span>
            </a>

          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3" aria-label="Outros serviços da clínica">
            {['Clínica geral', 'Endodontia', 'Ortodontia', 'Periodontia', 'Próteses e reabilitação oral'].map((service) => (
              <span key={service} className="px-4 py-2 rounded-full border border-[#C99A3A]/35 bg-white text-neutral-700 text-xs sm:text-sm font-medium">
                {service}
              </span>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================
          BLOCO 4: GALERIA DE SORRISOS EXCLUSIVOS (COM AS NOVAS FOTOS)
         ========================================================= */}
      <section id="nossas-lentes" className="relative w-full py-24 bg-[#141414] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="uppercase tracking-[2px] text-xs font-semibold text-[#C99A3A] mb-3 block">
              PORTFÓLIO DE TRANSFORMAÇÕES
            </span>
            <h2 className="text-[36px] lg:text-[44px] font-bold tracking-tight text-white mb-6">
              Detalhes que revelam a <span style={{ color: '#C99A3A' }}>perfeição artesanal</span>
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed">
              Veja materiais, modelos e detalhes de planejamento que ajudam a construir um sorriso natural.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-3xl overflow-hidden h-[300px] border border-[#C99A3A]/30 group relative">
              <img src="/manus-storage/1000419547_ca3336b8.jpg" alt="Sorriso com Lentes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-semibold text-base">Lentes de Porcelana Superior e Inferior</span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-[300px] border border-[#C99A3A]/30 group relative">
              <img src="/manus-storage/sorriso-angulo-alternativo_f2a1bfd6.png" alt="Sorriso com lentes em ângulo alternativo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-semibold text-base">Sorriso com lentes em outro ângulo</span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-[300px] border border-[#C99A3A]/30 group relative">
              <img src="/manus-storage/1000419555_13d183c5.jpg" alt="Sorriso Lateral" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-semibold text-base">Estética do Sorriso Lateral</span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-[300px] border border-[#C99A3A]/30 group relative lg:col-span-2">
              <img src="/manus-storage/modelagem-protetica-paisagem-v2_d1b01190.png" alt="Modelos de prótese em composição paisagem" className="w-full h-full object-contain bg-black group-hover:scale-[1.02] transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-semibold text-base">Modelagem Digital e Precisão Protética</span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-[300px] bg-[#A07828]/20 border border-[#C99A3A]/40 flex flex-col items-center justify-center p-8 text-center">
              <Sparkles className="w-10 h-10 text-[#C99A3A] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Pronto para transformar seu sorriso?</h3>
              <p className="text-sm text-neutral-300 mb-6">Agende sua avaliação em Pirituba, SP.</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          BLOCO 5: DEPOIMENTOS DE PACIENTES REAIS
         ========================================================= */}
      <section id="depoimentos" className="relative w-full py-24 bg-[#F5F5F3] text-[#1A1A1A]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="uppercase tracking-[2px] text-xs font-semibold text-[#A07828] mb-3 block">
              HISTÓRIAS REAIS
            </span>
            <h2 className="text-[36px] lg:text-[44px] font-bold tracking-tight text-neutral-900 mb-6">
              O que dizem <span style={{ color: '#A07828' }}>nossos pacientes</span>
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed">
              A maior recompensa pelo nosso trabalho é a confiança e a alegria estampada no sorriso de cada pessoa que passa pela clínica.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_.95fr]">
            <div className="rounded-3xl bg-white p-8 shadow-xl border border-neutral-200 lg:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[1.8px] text-[#A07828]">Avaliações verificadas no Google</p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-4xl font-bold text-neutral-900">5,0</span>
                    <span className="text-[#A07828]" aria-label="Cinco estrelas">★★★★★</span>
                  </div>
                </div>
                <ShieldCheck className="h-9 w-9 text-[#A07828]" strokeWidth={1.4} />
              </div>
              <p className="mt-6 max-w-[620px] text-sm leading-7 text-neutral-600">As avaliações e os comentários são publicados diretamente por pacientes na ficha pública do consultório. Consulte a fonte original para ler o conteúdo completo e atualizado.</p>
              <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A07828]">
                Ver avaliações no Google
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-3xl border border-[#C99A3A]/35 bg-[#A07828]/10 p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[1.8px] text-[#A07828]">Transparência em primeiro lugar</p>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-neutral-900">Sua experiência merece ser contada por você.</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-700">Depois do atendimento, você também pode compartilhar sua experiência diretamente no Google. Não reproduzimos comentários fora da fonte original.</p>
              <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#8c6a22] transition-colors hover:text-neutral-900">
                Abrir ficha pública <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          BLOCO 6: FAQ (PERGUNTAS FREQUENTES)
         ========================================================= */}
      <section id="faq" className="relative w-full py-24 bg-[#141414] text-white">
        <div className="max-w-[900px] mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="uppercase tracking-[2px] text-xs font-semibold text-[#C99A3A] mb-3 block">
              TIRE SUAS DÚVIDAS
            </span>
            <h2 className="text-[36px] lg:text-[42px] font-bold tracking-tight text-white mb-4">
              Perguntas <span style={{ color: '#C99A3A' }}>Frequentes</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-all">
              <button 
                onClick={() => toggleFaq(1)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-base lg:text-lg text-white"
              >
                <span>As lentes de porcelana causam dor ou desgaste excessivo?</span>
                <ChevronDown className={`w-5 h-5 text-[#C99A3A] transition-transform duration-300 ${openFaq === 1 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-5 text-neutral-400 text-sm lg:text-base leading-relaxed border-t border-neutral-800 pt-4">
                  Não. As técnicas modernas utilizam materiais ultrafinos que exigem pouquíssimo ou nenhum desgaste da estrutura dental, sendo um procedimento totalmente seguro e confortável.
                </div>
              )}
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-all">
              <button 
                onClick={() => toggleFaq(2)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-base lg:text-lg text-white"
              >
                <span>Como funciona a avaliação gratuita?</span>
                <ChevronDown className={`w-5 h-5 text-[#C99A3A] transition-transform duration-300 ${openFaq === 2 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-5 text-neutral-400 text-sm lg:text-base leading-relaxed border-t border-neutral-800 pt-4">
                  Na avaliação inicial, nossa equipe analisa suas expectativas e saúde bucal, apresentando possibilidades de cuidado e um planejamento adequado para o seu sorriso sem nenhum custo.
                </div>
              )}
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-all">
              <button 
                onClick={() => toggleFaq(3)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-base lg:text-lg text-white"
              >
                <span>Onde a clínica está localizada?</span>
                <ChevronDown className={`w-5 h-5 text-[#C99A3A] transition-transform duration-300 ${openFaq === 3 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 3 && (
                <div className="px-6 pb-5 text-neutral-400 text-sm lg:text-base leading-relaxed border-t border-neutral-800 pt-4">
                  Atendemos em Pirituba, São Paulo, em um ambiente moderno, equipado e planejado para o seu total conforto.
                </div>
              )}
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          RODAPÉ COMPLETO
         ========================================================= */}
      <footer className="w-full bg-[#0d0d0d] text-neutral-400 pt-16 pb-12 border-t border-neutral-800">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C99A3A]/40 bg-black flex items-center justify-center">
                <img src="/manus-storage/logo-ueda-simbolo_b1115bb5.png" alt="Símbolo UEDA Odontologia Integrada" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="block text-white font-bold text-lg tracking-tight">Dr. Alexandre Ueda</span>
                <span className="mt-0.5 block text-xs font-medium tracking-[1px] text-[#C99A3A]">CRO 138565-SP</span>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Odontologia estética de alto padrão e saúde bucal com excelência, tecnologia e atendimento humanizado em Pirituba, São Paulo.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-base mb-4">Navegação</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#tratamentos" className="hover:text-white transition-colors">Tratamentos</a></li>
              <li><a href="#nossas-lentes" className="hover:text-white transition-colors">Nossas Lentes</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-base mb-4">Contato & Localização</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#C99A3A] shrink-0" />
                <span>Pirituba, São Paulo</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C99A3A] shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">(11) 94715-6038</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C99A3A] shrink-0" />
                <span>Segunda a Sábado, das 8h às 19h</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-base mb-4">Avaliações públicas</h4>
            <p className="text-sm text-neutral-400 mb-4">Leia diretamente no Google as avaliações publicadas na ficha do consultório.</p>
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-white text-sm font-medium hover:border-[#C99A3A] transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-[#C99A3A]" />
              <span>Ver no Google</span>
            </a>
          </div>

        </div>

        {/* MAPA DO GOOGLE MAPS EM LARGURA TOTAL NO RODAPÉ */}
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-12">
          <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <h4 className="text-white font-semibold text-base">Nossa Localização</h4>
              <p className="text-xs text-neutral-400">Avenida Benedito de Andrade, 54A, São Paulo</p>
            </div>
            <span className="text-xs text-[#C99A3A] font-medium">Venha nos fazer uma visita</span>
          </div>
          <div className="w-full h-[220px] lg:h-[360px] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
            <MapView 
              onMapReady={(map: any) => {
                if (window.google && window.google.maps) {
                  const geocoder = new window.google.maps.Geocoder();
                  geocoder.geocode({ address: 'Avenida Benedito de Andrade, 54A, Pirituba, São Paulo' }, (results, status) => {
                    if (status === 'OK' && results?.[0]?.geometry.location) {
                      const addressLocation = results[0].geometry.location;
                      map.setCenter(addressLocation);
                      map.setZoom(17);
                      new window.google.maps.Marker({
                        position: addressLocation,
                        map: map,
                        title: 'Dr. Alexandre Ueda, Avenida Benedito de Andrade, 54A, São Paulo'
                      });
                    }
                  });
                }
              }}
            />
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500">
          <p>© 2026 Dr. Alexandre Ueda. Odontologia Integrada. Todos os direitos reservados.</p>
          <p className="mt-2 sm:mt-0">Avenida Benedito de Andrade, 54A, São Paulo</p>
        </div>
      </footer>

    </div>
  );
}
