/*
  Direção visual e de copy: página de implantes ultra-direta, sem enrolação,
  focada em conversão para tráfego pago (paciente que já quer resolver).
*/
import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, MessageCircle, ShieldCheck, Check } from 'lucide-react';

const whatsappUrl = 'https://wa.me/5511947156038?text=Olá,%20quero%20agendar%20uma%20avaliação%20para%20implantes%20dentários.';

export default function Implants() {
  useEffect(() => {
    document.title = 'Implantes Dentários em Pirituba | Dr. Alexandre Ueda';
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#141414] font-sans text-white selection:bg-[#C99A3A] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        .implant-cta { transition: transform .18s cubic-bezier(.23,1,.32,1), box-shadow .18s ease; }
        .implant-cta:hover { transform: translateY(-2px); box-shadow: 0 16px 30px -14px rgba(37,211,102,.7); }
        .implant-cta:active { transform: scale(.97); }
      `}</style>

      {/* Botão flutuante WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <div className="hidden sm:flex items-center bg-neutral-900/90 backdrop-blur-md text-white px-4 py-2.5 rounded-2xl shadow-xl border border-[#C99A3A]/40 text-xs font-medium animate-pulse">
          <span>Fale sobre implantes com nosso dentista</span>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale sobre implantes pelo WhatsApp"
          className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-200 hover:scale-110 active:scale-95"
        >
          <MessageCircle className="h-7 w-7 fill-current md:h-8 md:w-8" />
        </a>
      </div>

      {/* Header Fixo */}
      <header className="fixed left-1/2 top-4 z-40 w-full max-w-[1100px] -translate-x-1/2 px-4">
        <nav className="flex h-[62px] items-center justify-between rounded-full border border-white/15 bg-black/60 px-6 shadow-2xl backdrop-blur-xl">
          <a href="/" className="flex items-center gap-2.5" aria-label="Voltar para a Home">
            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-[#C99A3A]/50 bg-black">
              <img src="/manus-storage/logo-ueda-simbolo_b1115bb5.png" alt="Símbolo UEDA" className="h-full w-full object-contain" />
            </span>
            <span className="text-sm font-semibold tracking-tight text-white">Ueda Odontologia</span>
          </a>
          <a href="/" className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#C99A3A]">
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar à Home
          </a>
        </nav>
      </header>

      {/* Hero Ultra-Direto */}
      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 md:grid-cols-2 md:px-12">
          
          <div>
            <span className="inline-block rounded-full bg-[#C99A3A]/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#E5C158] mb-4">
              Implantes Dentários · Pirituba, São Paulo
            </span>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]">
              Recupere seu sorriso com <span className="text-[#C99A3A]">implantes seguros</span> e definitivos.
            </h1>
            
            <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed">
              Perdeu um ou mais dentes? O implante devolve a mastigação, a estética e a segurança ao sorrir. Atendimento especializado em Pirituba.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-neutral-200">
                <Check className="h-5 w-5 text-[#C99A3A] shrink-0" />
                <span>Avaliação individual sem enrolação</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-200">
                <Check className="h-5 w-5 text-[#C99A3A] shrink-0" />
                <span>Atendimento humanizado e estrutura completa</span>
              </div>
            </div>

            <div className="mt-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="implant-cta inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-xl"
              >
                <MessageCircle className="h-6 w-6 fill-current" />
                QUERO AGENDAR MINHA AVALIAÇÃO NO WHATSAPP
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-3 text-xs text-neutral-400">Clique para falar diretamente com nossa equipe de atendimento.</p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute -inset-3 rounded-3xl border border-[#C99A3A]/30 bg-[#C99A3A]/5 filter blur-xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-neutral-900 p-3 shadow-2xl">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-950">
                <img 
                  src="/manus-storage/implant-service-planning_04d2460f.jpg" 
                  alt="Planejamento e componentes para implante dentário" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-semibold text-white">Atendimento Direto e Transparente</p>
                <p className="mt-1 text-xs text-neutral-400">Av. Benedito de Andrade, 54A - Pirituba, São Paulo</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
