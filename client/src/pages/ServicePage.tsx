/*
  Direção visual: páginas de serviço da clínica com fotografia documental brasileira,
  fundo escuro e creme, dourado fosco, copy curta para tráfego pago e CTA direto para
  WhatsApp. Cada imagem deve mostrar o próprio serviço, materiais ou planejamento,
  sem rostos genéricos, logos inventados ou promessas clínicas não confirmadas.
*/
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Check, ChevronDown, MapPin, MessageCircle, ShieldCheck } from "lucide-react";

type ServiceKey = "invisalign" | "clareamento" | "lentes";

type ServiceConfig = {
  key: ServiceKey;
  label: string;
  eyebrow: string;
  titleBefore: string;
  titleAccent: string;
  titleAfter: string;
  accent: string;
  description: string;
  primaryCta: string;
  heroTagline: string;
  image: string;
  imageAlt: string;
  introTitle: string;
  introText: string;
  bullets: string[];
  steps: { number: string; title: string; text: string }[];
  faq: { question: string; answer: string }[];
  whatsappText: string;
};

const configs: Record<ServiceKey, ServiceConfig> = {
  invisalign: {
    key: "invisalign",
    label: "Invisalign",
    eyebrow: "ALINHADORES TRANSPARENTES",
    titleBefore: "Alinhe o seu sorriso com ",
    titleAccent: "discrição",
    titleAfter: "?",
    accent: "Invisalign",
    description: "Converse agora pelo WhatsApp e descubra se os alinhadores transparentes podem ser indicados para o seu caso.",
    primaryCta: "QUERO COTAR MEU CASO",
    heroTagline: "Alinhadores transparentes · planejamento individual · Pirituba",
    image: "/manus-storage/service-invisalign-conversion_5e933805.jpg",
    imageAlt: "Alinhador transparente sobre modelo odontológico e materiais de planejamento",
    introTitle: "O tratamento começa antes do primeiro alinhador.",
    introText: "O planejamento considera o seu sorriso, a mordida e o resultado que você busca. A indicação é explicada com clareza antes de qualquer decisão.",
    bullets: ["Avaliação individual do alinhamento e da mordida", "Planejamento orientado pelo seu caso", "Acompanhamento durante as etapas do tratamento"],
    steps: [
      { number: "01", title: "Avaliação", text: "Conversamos sobre o que você deseja corrigir e avaliamos as possibilidades." },
      { number: "02", title: "Planejamento", text: "As etapas são explicadas de forma objetiva, conforme a indicação clínica." },
      { number: "03", title: "Acompanhamento", text: "O tratamento é acompanhado pela clínica ao longo do processo." },
    ],
    faq: [
      { question: "Alinhadores transparentes são indicados para todo mundo?", answer: "A indicação depende da avaliação do alinhamento, da mordida e das condições do seu caso." },
      { question: "Preciso usar aparelho para começar?", answer: "O primeiro passo é conversar com o profissional para entender qual opção é adequada para você." },
    ],
    whatsappText: "Olá, gostaria de saber mais sobre Invisalign.",
  },
  clareamento: {
    key: "clareamento",
    label: "Clareamento Dental",
    eyebrow: "ESTÉTICA DO SORRISO",
    titleBefore: "Mais ",
    titleAccent: "luminosidade",
    titleAfter: " no seu sorriso?",
    accent: "clareamento",
    description: "Peça uma avaliação pelo WhatsApp e entenda qual abordagem pode fazer sentido para o seu sorriso.",
    primaryCta: "QUERO ORÇAR MEU CLAREAMENTO",
    heroTagline: "Avaliação individual · orientação clara · Pirituba",
    image: "/manus-storage/clareamento-sorriso-real_e20c8b0d.jpg",
    imageAlt: "Sorriso após clareamento dental com dentes claros",
    introTitle: "Antes de clarear, é preciso avaliar.",
    introText: "A tonalidade e a saúde dos dentes orientam a escolha do tratamento. O objetivo é buscar um resultado natural, respeitando as características de cada sorriso.",
    bullets: ["Avaliação da saúde bucal e da tonalidade atual", "Orientação sobre a abordagem indicada", "Acompanhamento para cuidar do resultado"],
    steps: [
      { number: "01", title: "Análise", text: "Observamos dentes, gengiva, sensibilidade e a tonalidade atual." },
      { number: "02", title: "Indicação", text: "Explicamos as possibilidades de clareamento para o seu caso." },
      { number: "03", title: "Cuidado", text: "Você recebe orientação para preservar a saúde e a aparência do sorriso." },
    ],
    faq: [
      { question: "Qualquer pessoa pode fazer clareamento?", answer: "A possibilidade depende da saúde bucal e da avaliação profissional antes do tratamento." },
      { question: "O resultado é igual para todos?", answer: "A resposta varia de pessoa para pessoa. Por isso, a indicação e a expectativa são conversadas individualmente." },
    ],
    whatsappText: "Olá, gostaria de saber mais sobre clareamento dental.",
  },
  lentes: {
    key: "lentes",
    label: "Lentes de Contato Dental",
    eyebrow: "HARMONIA E NATURALIDADE",
    titleBefore: "Detalhes ",
    titleAccent: "planejados",
    titleAfter: " para o seu sorriso?",
    accent: "lentes de contato dental",
    description: "Envie uma mensagem e converse sobre cor, formato e proporção das lentes para o seu caso.",
    primaryCta: "QUERO ORÇAR MINHAS LENTES",
    heroTagline: "Planejamento estético · acabamento natural · Pirituba",
    image: "/manus-storage/service-veneers-conversion_d1af0474.jpg",
    imageAlt: "Lentes de contato dental de porcelana em bandeja clínica com modelo odontológico",
    introTitle: "Naturalidade começa no planejamento.",
    introText: "As lentes são avaliadas em conjunto com formato, proporção, cor e relação entre os dentes. O planejamento vem antes da decisão pelo procedimento.",
    bullets: ["Análise do formato e da proporção do sorriso", "Discussão de cor e acabamento com o profissional", "Planejamento individual antes da indicação"],
    steps: [
      { number: "01", title: "Conversa", text: "Entendemos o que incomoda e o que você gostaria de melhorar." },
      { number: "02", title: "Planejamento", text: "A proposta considera estética, função e naturalidade para o seu caso." },
      { number: "03", title: "Decisão", text: "Você conhece as possibilidades antes de decidir pelo tratamento." },
    ],
    faq: [
      { question: "Lentes de contato dental são indicadas para qualquer sorriso?", answer: "A indicação depende da avaliação da estrutura dental, da saúde bucal e do resultado desejado." },
      { question: "O primeiro passo já é colocar as lentes?", answer: "Não. O primeiro passo é uma avaliação para entender se essa é a melhor possibilidade para você." },
    ],
    whatsappText: "Olá, gostaria de saber mais sobre lentes de contato dental.",
  },
};

function whatsappUrl(message: string) {
  return `https://wa.me/5511947156038?text=${encodeURIComponent(message)}`;
}

export function ServicePage({ service }: { service: ServiceKey }) {
  const config = configs[service];
  const ctaUrl = whatsappUrl(config.whatsappText);

  useEffect(() => {
    document.title = `${config.label} | Dr. Alexandre Ueda`;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", `${config.label} em Pirituba, São Paulo. Avaliação individual e orientação clara com o Dr. Alexandre Ueda.`);
  }, [config]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5F5F3] font-sans text-neutral-900 antialiased">
      <a href={ctaUrl} target="_blank" rel="noopener noreferrer" aria-label={`Falar sobre ${config.label} pelo WhatsApp`} className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95 md:bottom-6 md:right-6 md:h-16 md:w-16">
        <MessageCircle className="h-7 w-7 fill-current" />
      </a>

      <header className="fixed left-1/2 top-4 z-40 w-full max-w-[1100px] -translate-x-1/2 px-4 md:top-6">
        <nav className="flex h-14 items-center justify-between rounded-full border border-white/70 bg-white/85 px-4 shadow-lg backdrop-blur-xl md:h-[66px] md:px-7">
          <a href="/" className="flex items-center gap-2.5" aria-label="Voltar para a Home">
            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-[#C99A3A]/50 bg-black">
              <img src="/manus-storage/logo-ueda-simbolo_b1115bb5.png" alt="Símbolo UEDA Odontologia Integrada" className="h-full w-full object-contain" />
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-neutral-900 sm:block">Dr. Alexandre Ueda</span>
          </a>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a href="/#servicos" className="hidden rounded-full px-3 py-2 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-900/5 hover:text-black sm:inline-flex">Serviços</a>
            <a href="/#sobre" className="hidden rounded-full px-3 py-2 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-900/5 hover:text-black sm:inline-flex">Sobre Nós</a>
            <a href="/" className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#A07828] sm:px-4">
              <ArrowLeft className="h-3.5 w-3.5" /> Home
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative isolate min-h-[730px] overflow-hidden bg-[#141414] pt-28 text-white md:min-h-[760px] md:pt-36">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_76%_36%,rgba(201,154,58,.18),transparent_34%),linear-gradient(120deg,#141414_0%,#1d1b18_58%,#29231c_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(20,20,20,.98)_0%,rgba(20,20,20,.86)_52%,rgba(20,20,20,.58)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#141414] to-transparent" />
          <div className="pointer-events-none absolute right-[-14%] top-[28%] -z-10 h-[420px] w-[420px] rounded-full border border-[#C99A3A]/20 md:h-[620px] md:w-[620px]" />

          <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 pb-20 md:grid-cols-[1.02fr_.98fr] md:gap-12 md:px-12 md:pb-28">
            <div className="max-w-[620px]">
              <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[2.4px] text-[#E5C158]"><span className="h-px w-10 bg-[#C99A3A]" />{config.eyebrow}</div>
              <h1 className="max-w-[680px] text-[42px] font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-[56px] md:text-[68px]">{config.titleBefore}<span className="text-[#C99A3A]">{config.titleAccent}</span>{config.titleAfter}</h1>
              <p className="mt-7 max-w-[560px] text-base leading-8 text-neutral-300 sm:text-lg">{config.description}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="service-cta inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 text-sm font-bold tracking-wide text-white shadow-[0_14px_34px_rgba(37,211,102,.22)] transition-transform hover:scale-[1.02] sm:px-7"><MessageCircle className="h-5 w-5 fill-current" />{config.primaryCta}<ArrowRight className="h-4 w-4" /></a>
                <a href="#avaliacao" className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium text-white transition-colors hover:border-[#C99A3A] hover:text-[#E5C158]">Ver como funciona</a>
              </div>
              <p className="mt-5 text-xs leading-5 text-neutral-500">{config.heroTagline}</p>
            </div>

            <div className="relative mx-auto w-full max-w-[500px] md:ml-auto">
              <div className="absolute -inset-4 rounded-[2rem] border border-[#C99A3A]/20 md:-inset-7" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-neutral-950/70 p-3 shadow-2xl backdrop-blur-sm md:p-4">
                <div className="aspect-[4/3] overflow-hidden rounded-[1.1rem] bg-[#211f1c]"><img src={config.image} alt={config.imageAlt} className="h-full w-full object-cover" /></div>
                <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-4"><div><p className="text-sm font-semibold text-white">{config.label}</p><p className="mt-1 text-xs text-neutral-400">Peça seu orçamento pelo WhatsApp.</p></div><ShieldCheck className="h-6 w-6 shrink-0 text-[#C99A3A]" /></div>
              </div>
            </div>
          </div>
        </section>

        <section id="avaliacao" className="relative bg-[#F5F5F3] py-24 md:py-28">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <div className="grid gap-12 md:grid-cols-[.82fr_1.18fr] md:items-end">
              <div><p className="text-xs font-semibold uppercase tracking-[2px] text-[#A07828]">O começo é simples</p><h2 className="mt-4 max-w-[540px] text-4xl font-semibold leading-tight tracking-[-0.035em] text-neutral-900 md:text-[48px]">{config.introTitle}</h2></div>
              <p className="max-w-[580px] text-base leading-8 text-neutral-600 md:justify-self-end md:text-lg">{config.introText}</p>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {config.bullets.map((item, index) => <article key={item} className="rounded-[1.4rem] border border-neutral-200 bg-white p-6 md:p-7"><div className="flex items-center justify-between"><Check className="h-6 w-6 text-[#A07828]" strokeWidth={1.5} /><span className="text-xs font-semibold tracking-[2px] text-neutral-300">0{index + 1}</span></div><p className="mt-10 text-base font-semibold leading-6 text-neutral-900">{item}</p></article>)}
            </div>
            <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex min-h-13 items-center gap-3 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"><MessageCircle className="h-5 w-5 fill-current" />{config.primaryCta}<ArrowRight className="h-4 w-4" /></a>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#141414] py-24 text-white md:py-28">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <div className="max-w-[640px]"><p className="text-xs font-semibold uppercase tracking-[2px] text-[#E5C158]">Como funciona</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.035em] md:text-[48px]">Uma decisão melhor começa com informação clara.</h2></div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">{config.steps.map((step) => <article key={step.number} className="rounded-[1.4rem] border border-white/10 bg-white/[.04] p-6 md:p-7"><span className="text-xs font-semibold tracking-[2px] text-[#C99A3A]">{step.number}</span><h3 className="mt-12 text-xl font-semibold text-white">{step.title}</h3><p className="mt-3 text-sm leading-7 text-neutral-400">{step.text}</p></article>)}</div>
          </div>
        </section>

        <section className="bg-[#F5F5F3] py-24 md:py-28">
          <div className="mx-auto max-w-[1000px] px-6 md:px-12"><div className="text-center"><p className="text-xs font-semibold uppercase tracking-[2px] text-[#A07828]">Dúvidas frequentes</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-neutral-900 md:text-[48px]">Antes de marcar sua avaliação</h2></div><div className="mt-12 divide-y divide-neutral-200 border-y border-neutral-200">{config.faq.map((item) => <details key={item.question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-neutral-900 [&::-webkit-details-marker]:hidden">{item.question}<ChevronDown className="h-5 w-5 shrink-0 text-[#A07828] transition-transform group-open:rotate-180" /></summary><p className="mt-4 max-w-[780px] text-sm leading-7 text-neutral-600">{item.answer}</p></details>)}</div></div>
        </section>

        <section className="relative overflow-hidden bg-[#A07828] py-20 text-white md:py-24"><div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.13),transparent_62%)]" /><div className="relative mx-auto flex max-w-[1000px] flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between md:px-12"><div><p className="text-xs font-semibold uppercase tracking-[2px] text-white/70">Fale agora com a clínica</p><h2 className="mt-3 max-w-[600px] text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-[44px]">Quer saber quanto pode custar o seu caso?</h2><p className="mt-4 max-w-[560px] text-sm leading-7 text-white/80">Envie uma mensagem no WhatsApp e receba orientação sobre o próximo passo.</p></div><a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="service-cta inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow-[0_14px_34px_rgba(0,0,0,.2)] md:px-7"><MessageCircle className="h-5 w-5 fill-current" />{config.primaryCta}</a></div></section>
      </main>

      <footer className="bg-[#0d0d0d] px-6 py-12 text-neutral-400 md:px-12"><div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-[1.2fr_1fr_1fr]"><div><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#C99A3A]/50 bg-black"><img src="/manus-storage/logo-ueda-simbolo_b1115bb5.png" alt="Símbolo UEDA Odontologia Integrada" className="h-full w-full object-contain" /></span><div><p className="font-semibold text-white">Dr. Alexandre Ueda</p><p className="text-xs text-neutral-500">Odontologia Integrada</p></div></div><p className="mt-4 max-w-[380px] text-sm leading-7">{config.label} com avaliação individual em Pirituba, São Paulo.</p></div><div className="space-y-3 text-sm"><p className="font-semibold text-white">Contato</p><a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white"><MessageCircle className="mr-2 inline h-4 w-4 text-[#C99A3A]" />WhatsApp</a><p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C99A3A]" />Avenida Benedito de Andrade, 54A, São Paulo</p></div><div className="space-y-3 text-sm"><p className="font-semibold text-white">Registro profissional</p><p>CRO 138565-SP</p><a href="/" className="inline-flex items-center gap-2 text-[#C99A3A] hover:text-white"><ArrowLeft className="h-4 w-4" />Voltar para a Home</a></div></div><p className="mx-auto mt-10 max-w-[1280px] border-t border-white/10 pt-5 text-xs text-neutral-600">© 2026 Dr. Alexandre Ueda. Conteúdo informativo sujeito à avaliação clínica individual.</p></footer>
    </div>
  );
}

export function Invisalign() { return <ServicePage service="invisalign" />; }
export function ClareamentoDental() { return <ServicePage service="clareamento" />; }
export function LentesDeContatoDental() { return <ServicePage service="lentes" />; }
