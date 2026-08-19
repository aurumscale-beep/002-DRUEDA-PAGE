/*
  Direção visual: clínica odontológica premium, humana e discreta.
  Fundo escuro e claro alternado, dourado fosco, tipografia Plus Jakarta Sans,
  linhas finas como assinatura visual e fotografias do próprio serviço, sem
  rostos em destaque, com object-contain quando o enquadramento exigir. A página evita promessas de
  prazo, preço, garantia ou resultado sem confirmação clínica.
*/
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronDown,
  ClipboardList,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  ScanLine,
  ShieldCheck,
} from 'lucide-react';
import { useEffect } from 'react';

const whatsappUrl =
  'https://wa.me/5511947156038?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20implantes%20dentários.';
const googleMapsUrl =
  'https://www.google.com/maps/search/Av.+Benedito+de+Andrade,+54A,+Pirituba,+São+Paulo';

const steps = [
  {
    icon: CalendarCheck,
    number: '01',
    title: 'Avaliação individual',
    text: 'Entendemos sua queixa, sua saúde bucal e o que você espera do tratamento.',
  },
  {
    icon: ScanLine,
    number: '02',
    title: 'Planejamento cuidadoso',
    text: 'Reunimos as informações necessárias para estudar possibilidades para o seu caso.',
  },
  {
    icon: HeartHandshake,
    number: '03',
    title: 'Acompanhamento próximo',
    text: 'Você recebe orientação clara antes de decidir e durante o acompanhamento.',
  },
];

const considerations = [
  'Perda de um ou mais dentes.',
  'Prótese sem estabilidade ou conforto.',
  'Desejo de entender opções para recuperar função e estética.',
];

export default function Implants() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content') ?? null;
    document.title = 'Implantes dentários em Pirituba | Dr. Alexandre Ueda';
    description?.setAttribute(
      'content',
      'Avalie possibilidades de implantes dentários com o Dr. Alexandre Ueda, em Pirituba, São Paulo. Atendimento individual, planejamento e acompanhamento próximo.'
    );
    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.setAttribute('content', previousDescription);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5F5F3] font-sans text-[#1A1A1A] selection:bg-[#C99A3A] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        .implant-line { background: linear-gradient(90deg, transparent, rgba(201,154,58,.72), transparent); }
        .implant-card { transition: transform .28s cubic-bezier(.23,1,.32,1), box-shadow .28s cubic-bezier(.23,1,.32,1); }
        .implant-card:hover { transform: translateY(-5px); box-shadow: 0 24px 48px -28px rgba(20,20,20,.48); }
        .implant-cta { transition: transform .18s cubic-bezier(.23,1,.32,1), box-shadow .18s ease, background-color .18s ease; }
        .implant-cta:hover { transform: translateY(-2px); box-shadow: 0 16px 30px -14px rgba(37,211,102,.7); }
        .implant-cta:active { transform: scale(.97); }
        @media (prefers-reduced-motion: reduce) {
          .implant-card, .implant-cta { transition: none; }
          .implant-card:hover, .implant-cta:hover { transform: none; }
        }
      `}</style>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale sobre implantes pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-200 hover:scale-110 active:scale-95 md:bottom-6 md:right-6 md:h-16 md:w-16"
      >
        <MessageCircle className="h-7 w-7 fill-current md:h-8 md:w-8" />
      </a>

      <header className="fixed left-1/2 top-4 z-40 w-full max-w-[1100px] -translate-x-1/2 px-4 md:top-6">
        <nav className="flex h-14 items-center justify-between rounded-full border border-white/70 bg-white/80 px-4 shadow-lg backdrop-blur-xl md:h-[66px] md:px-7">
          <a href="/" className="flex items-center gap-2.5" aria-label="Voltar para a Home">
            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-[#C99A3A]/50 bg-black">
              <img src="/assets/logo-ueda-simbolo_b1115bb5.png" alt="Símbolo UEDA Odontologia Integrada" className="h-full w-full object-contain" />
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-neutral-900 sm:block">Dr. Alexandre Ueda</span>
          </a>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a href="/#servicos" className="hidden rounded-full px-3 py-2 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-900/5 hover:text-black sm:inline-flex">Serviços</a>
            <a href="/#sobre" className="hidden rounded-full px-3 py-2 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-900/5 hover:text-black sm:inline-flex">Sobre Nós</a>
            <a href="/" className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#A07828] sm:px-4">
              <ArrowLeft className="h-3.5 w-3.5" />
              Home
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative isolate min-h-[760px] overflow-hidden bg-[#141414] pt-28 text-white md:min-h-[780px] md:pt-36">
          <div className="absolute inset-0 -z-20 bg-[url('/assets/implant-service-hero_7f28efa1.jpg')] bg-cover bg-[center_42%] opacity-55" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(20,20,20,.98)_0%,rgba(20,20,20,.82)_45%,rgba(20,20,20,.35)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#141414] to-transparent" />
          <div className="pointer-events-none absolute right-[-12%] top-[28%] -z-10 h-[420px] w-[420px] rounded-full border border-[#C99A3A]/25 md:h-[620px] md:w-[620px]" />
          <div className="pointer-events-none absolute right-[4%] top-[38%] -z-10 h-[280px] w-[280px] rounded-full border border-[#C99A3A]/20 md:h-[440px] md:w-[440px]" />

          <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-6 pb-20 md:grid-cols-[1.02fr_.98fr] md:gap-12 md:px-12 md:pb-28">
            <div className="max-w-[650px]">
              <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[2.4px] text-[#E5C158]">
                <span className="h-px w-10 bg-[#C99A3A]" />
                Implantes dentários
              </div>
              <h1 className="max-w-[680px] text-[42px] font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-[56px] md:text-[68px]">
                Quer saber se o <span className="text-[#C99A3A]">implante dentário</span> é para você?
              </h1>
              <p className="mt-7 max-w-[560px] text-base leading-8 text-neutral-300 sm:text-lg">
                Fale agora pelo WhatsApp e descubra as possibilidades para o seu caso, com avaliação individual em Pirituba.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="implant-cta inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 text-sm font-bold tracking-wide text-white sm:px-7">
                  <MessageCircle className="h-5 w-5 fill-current" />
                  QUERO ORÇAR MEU IMPLANTE
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#como-funciona" className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium text-white transition-colors hover:border-[#C99A3A] hover:text-[#E5C158]">
                  Entender o processo
                </a>
              </div>
              <p className="mt-5 text-xs leading-5 text-neutral-500">A indicação e o plano são definidos após avaliação clínica individual.</p>
            </div>

            <div className="relative mx-auto w-full max-w-[500px] md:ml-auto">
              <div className="absolute -inset-4 rounded-[2rem] border border-[#C99A3A]/20 md:-inset-7" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-neutral-950/70 p-3 shadow-2xl backdrop-blur-sm md:p-4">
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.1rem] bg-[#211f1c]">
                  <img src="/assets/implant-service-planning_04d2460f.jpg" alt="Materiais e modelo usados no planejamento de implantes dentários" className="h-full w-full object-cover" />
                </div>
                <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-4">
                  <div>
                    <p className="text-sm font-semibold text-white">Cada caso começa com uma conversa</p>
                    <p className="mt-1 text-xs text-neutral-400">Converse com a clínica pelo WhatsApp.</p>
                  </div>
                  <ShieldCheck className="h-6 w-6 shrink-0 text-[#C99A3A]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="relative bg-[#F5F5F3] py-24 md:py-28">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <div className="grid gap-12 md:grid-cols-[.82fr_1.18fr] md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[2px] text-[#A07828]">O começo é simples</p>
                <h2 className="mt-4 max-w-[520px] text-4xl font-semibold leading-tight tracking-[-0.035em] text-neutral-900 md:text-[48px]">Implante começa com uma boa avaliação.</h2>
              </div>
              <p className="max-w-[580px] text-base leading-8 text-neutral-600 md:justify-self-end md:text-lg">Envie uma mensagem e entenda qual é o próximo passo para o seu caso.</p>
            </div>

            <div className="implant-line mt-14 h-px w-full opacity-70" />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {steps.map(({ icon: Icon, number, title, text }) => (
                <article key={number} className="implant-card rounded-[1.4rem] border border-neutral-200 bg-white p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-[#A07828]" strokeWidth={1.4} />
                    <span className="text-xs font-semibold tracking-[2px] text-neutral-300">{number}</span>
                  </div>
                  <h3 className="mt-12 text-xl font-semibold text-neutral-900">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#141414] py-24 text-white md:py-28">
          <div className="pointer-events-none absolute left-[-160px] top-[-160px] h-[420px] w-[420px] rounded-full border border-[#C99A3A]/15" />
          <div className="mx-auto grid max-w-[1280px] gap-14 px-6 md:grid-cols-[.95fr_1.05fr] md:items-center md:px-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[2px] text-[#E5C158]">Para quem está avaliando</p>
              <h2 className="mt-4 max-w-[560px] text-4xl font-semibold leading-tight tracking-[-0.035em] md:text-[48px]">Uma avaliação para decidir com segurança.</h2>
              <p className="mt-6 max-w-[540px] text-base leading-8 text-neutral-400">A indicação depende da sua avaliação clínica. Estes são alguns motivos para conversar com a clínica:</p>
              <div className="mt-8 space-y-4">
                {considerations.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-7 text-neutral-300">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#C99A3A]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="implant-cta mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow-[0_14px_34px_rgba(37,211,102,.22)] md:px-7">
                <MessageCircle className="h-5 w-5 fill-current" />
                QUERO FALAR SOBRE MEU CASO
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#C99A3A]/30" />
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0d0d0d] p-3 shadow-2xl md:p-4">
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.2rem] bg-[#201f1c]">
                  <img src="/assets/implant-consultation-neutral_4ef450d5.jpg" alt="Modelo odontológico, componentes e materiais usados no planejamento de implantes" className="h-full w-full object-cover" />
                </div>
                <div className="flex gap-3 px-2 pb-1 pt-4">
                  <ClipboardList className="mt-0.5 h-5 w-5 shrink-0 text-[#C99A3A]" />
                  <p className="text-sm leading-6 text-neutral-300">O plano é definido com base na avaliação e, quando necessário, em exames.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F5F3] py-24 md:py-28">
          <div className="mx-auto max-w-[1000px] px-6 md:px-12">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[2px] text-[#A07828]">Dúvidas frequentes</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-neutral-900 md:text-[48px]">Antes de marcar sua avaliação</h2>
            </div>
            <div className="mt-12 divide-y divide-neutral-200 border-y border-neutral-200">
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-neutral-900 [&::-webkit-details-marker]:hidden">Implante é indicado para todo mundo?<ChevronDown className="h-5 w-5 shrink-0 text-[#A07828] transition-transform group-open:rotate-180" /></summary>
                <p className="mt-4 max-w-[780px] text-sm leading-7 text-neutral-600">Não existe uma indicação única. A possibilidade depende da avaliação da saúde bucal, das condições gerais e do planejamento definido com o profissional.</p>
              </details>
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-neutral-900 [&::-webkit-details-marker]:hidden">Como descubro qual tratamento faz sentido para mim?<ChevronDown className="h-5 w-5 shrink-0 text-[#A07828] transition-transform group-open:rotate-180" /></summary>
                <p className="mt-4 max-w-[780px] text-sm leading-7 text-neutral-600">O primeiro passo é uma avaliação. Nela, o Dr. Alexandre entende o que você busca e explica as possibilidades de forma individualizada, incluindo quando outra solução pode ser mais adequada.</p>
              </details>
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-neutral-900 [&::-webkit-details-marker]:hidden">Onde fica o atendimento?<ChevronDown className="h-5 w-5 shrink-0 text-[#A07828] transition-transform group-open:rotate-180" /></summary>
                <p className="mt-4 max-w-[780px] text-sm leading-7 text-neutral-600">O atendimento acontece em Pirituba, São Paulo, na Avenida Benedito de Andrade, 54A.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#A07828] py-20 text-white md:py-24">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.13),transparent_62%)]" />
          <div className="relative mx-auto flex max-w-[1000px] flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between md:px-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[2px] text-white/70">Orçamento pelo WhatsApp</p>
              <h2 className="mt-3 max-w-[600px] text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-[44px]">Quer saber quanto pode custar o seu caso?</h2>
              <p className="mt-4 max-w-[560px] text-sm leading-7 text-white/80">Envie uma mensagem e receba orientação sobre o próximo passo.</p>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="implant-cta inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow-lg md:px-7">
              <MessageCircle className="h-5 w-5 fill-current" />
              QUERO ORÇAR MEU IMPLANTE
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#0d0d0d] px-6 py-12 text-neutral-400 md:px-12">
        <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#C99A3A]/50 bg-black"><img src="/assets/logo-ueda-simbolo_b1115bb5.png" alt="Símbolo UEDA Odontologia Integrada" className="h-full w-full object-contain" /></span>
              <div><p className="font-semibold text-white">Dr. Alexandre Ueda</p><p className="text-xs text-neutral-500">Odontologia Integrada</p></div>
            </div>
            <p className="mt-4 max-w-[380px] text-sm leading-7">Implantes e reabilitação oral com planejamento individual, em Pirituba, São Paulo.</p>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-semibold text-white">Contato</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white"><Phone className="h-4 w-4 text-[#C99A3A]" /> +55 11 94715-6038</a>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 transition-colors hover:text-white"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C99A3A]" /> Avenida Benedito de Andrade, 54A, São Paulo</a>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-semibold text-white">Registro profissional</p>
            <p>CRO 138565-SP</p>
            <a href="/" className="inline-flex items-center gap-2 text-[#E5C158] transition-colors hover:text-white"><ArrowLeft className="h-4 w-4" /> Voltar para a Home</a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1280px] border-t border-neutral-800 pt-6 text-xs text-neutral-600">© 2026 Dr. Alexandre Ueda. Odontologia Integrada. Conteúdo informativo. A avaliação clínica individual orienta qualquer indicação de tratamento.</div>
      </footer>
    </div>
  );
}
