import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const content = {
  en: {
    heroHeadline1: "We are the card infrastructure",
    heroHeadline2: "built for Latin America.",
    badgeApproved: "$ 2,450.00 approved",
    badgeRail: "ACH · 0.3s",
    badgeCountries: "countries accepted",
    whyLabel: "WHY WE EXIST",
    whyHeadline1: "Global financial infrastructure,",
    whyHeadline2: "powered by stablecoins.",
    whyBody: "The world's financial rails were built for a different era. We're rebuilding them — connecting card networks, banks, and blockchains into a single, seamless ecosystem that moves money the way the modern world demands: instantly, borderlessly, and without friction.",
    whoLabel: "WHO WE ARE",
    whoHeadline1: "Your trusted partner",
    whoHeadline2: "in borderless finance.",
    whoBody: "We don't just provide tools. We operate the full stack: compliance, card production, BIN sponsorship, issuance, distribution, and 24/7 support. Our technology is enterprise-grade, stablecoin-native, and compliance-first — so your team can focus on building your product, not managing financial plumbing.",
    whatLabel: "WHAT WE OFFER",
    whatHeadline1: "Everything you need to run",
    whatHeadline2: "a world-class card program.",
    whatIntro: "Zelt CaaS is a turnkey embedded finance solution for platforms that want to offer stablecoin-enabled Visa credit cards to their users — without building the infrastructure from scratch.",
    contactLine1: "Let's talk about",
    contactLine2: "your Card Issuing Program.",
  },
  "pt-BR": {
    heroHeadline1: "Somos a infra de cartão feita para a",
    heroHeadline2: "América Latina.",
    badgeApproved: "R$ 2.450,00 aprovado",
    badgeRail: "PIX · 0.3s",
    badgeCountries: "países aceitos",
    whyLabel: "POR QUE EXISTIMOS",
    whyHeadline1: "Infraestrutura financeira global,",
    whyHeadline2: "movida por stablecoins.",
    whyBody: "Os trilhos financeiros do mundo foram construídos para uma era diferente. Estamos os reconstruindo — conectando redes de cartão, bancos e blockchains em um único ecossistema que move o dinheiro do jeito que o mundo moderno exige: instantaneamente, sem fronteiras e sem fricção.",
    whoLabel: "QUEM SOMOS",
    whoHeadline1: "Seu parceiro de confiança",
    whoHeadline2: "nas finanças sem fronteiras.",
    whoBody: "Não apenas fornecemos ferramentas. Operamos a stack completa: compliance, produção de cartões, patrocínio de BIN, emissão, distribuição e suporte 24/7. Nossa tecnologia é enterprise, nativa em stablecoins e compliance-first — para que seu time foque em construir o produto, não em gerenciar infraestrutura financeira.",
    whatLabel: "O QUE OFERECEMOS",
    whatHeadline1: "Tudo o que você precisa para rodar",
    whatHeadline2: "um programa de cartão de classe mundial.",
    whatIntro: "O Zelt CaaS é uma solução de embedded finance completa para plataformas que querem oferecer cartões de crédito Visa habilitados com stablecoins — sem precisar construir a infraestrutura do zero.",
    contactLine1: "Vamos falar sobre",
    contactLine2: "seu Programa de Cartão.",
  },
  es: {
    heroHeadline1: "Somos la infraestructura de tarjetas hecha para",
    heroHeadline2: "América Latina.",
    badgeApproved: "$ 2.450,00 aprobado",
    badgeRail: "SPEI · 0.3s",
    badgeCountries: "países aceptados",
    whyLabel: "POR QUÉ EXISTIMOS",
    whyHeadline1: "Infraestructura financiera global,",
    whyHeadline2: "impulsada por stablecoins.",
    whyBody: "Los rieles financieros del mundo fueron construidos para otra era. Los estamos reconstruyendo — conectando redes de tarjetas, bancos y blockchains en un único ecosistema que mueve el dinero como el mundo moderno lo exige: al instante, sin fronteras y sin fricciones.",
    whoLabel: "QUIÉNES SOMOS",
    whoHeadline1: "Tu socio de confianza",
    whoHeadline2: "en las finanzas sin fronteras.",
    whoBody: "No solo proveemos herramientas. Operamos el stack completo: compliance, producción de tarjetas, patrocinio de BIN, emisión, distribución y soporte 24/7. Nuestra tecnología es enterprise, nativa en stablecoins y compliance-first — para que tu equipo se enfoque en construir el producto, no en gestionar plomería financiera.",
    whatLabel: "QUÉ OFRECEMOS",
    whatHeadline1: "Todo lo que necesitas para operar",
    whatHeadline2: "un programa de tarjetas de clase mundial.",
    whatIntro: "Zelt CaaS es una solución de embedded finance llave en mano para plataformas que quieren ofrecer tarjetas de crédito Visa habilitadas con stablecoins — sin construir la infraestructura desde cero.",
    contactLine1: "Hablemos sobre",
    contactLine2: "tu Programa de Tarjeta.",
  },
} as const;

type Locale = keyof typeof content;

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[(locale as Locale) in content ? (locale as Locale) : "en"];

  return (
    <>
      <NavbarWrapper />
      <main style={{ background: "#050d1f", minHeight: "100vh" }}>
        <section className="min-h-screen flex items-center px-6 lg:px-16 pt-24 pb-16">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left — sentence */}
            <div>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05]">
                {c.heroHeadline1}{" "}
                <span className="gradient-text">{c.heroHeadline2}</span>
              </h1>
            </div>

            {/* Right — card stack visual */}
            <div className="relative flex items-center justify-center" style={{ minHeight: "520px" }}>

              {/* Ambient glow */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 55% 50%, rgba(37,99,235,0.18) 0%, transparent 70%)" }} />

              {/* Card 3 — back */}
              <div
                className="absolute rounded-[28px]"
                style={{
                  width: "340px",
                  height: "208px",
                  background: "linear-gradient(145deg, #0a1e4a 0%, #06122e 100%)",
                  border: "1px solid rgba(96,165,250,0.07)",
                  transform: "rotate(-16deg) translate(-90px, 48px)",
                  zIndex: 1,
                  boxShadow: "0 28px 80px rgba(0,0,0,0.65)",
                }}
              />

              {/* Card 2 — middle */}
              <div
                className="absolute rounded-[28px]"
                style={{
                  width: "340px",
                  height: "208px",
                  background: "linear-gradient(145deg, #112260 0%, #0c1a45 100%)",
                  border: "1px solid rgba(96,165,250,0.1)",
                  transform: "rotate(-7deg) translate(-32px, 22px)",
                  zIndex: 2,
                  boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
                }}
              />

              {/* Card 1 — front */}
              <div
                className="relative rounded-[28px]"
                style={{
                  width: "340px",
                  height: "208px",
                  background: "linear-gradient(145deg, #2563eb 0%, #1d4ed8 55%, #1e40af 100%)",
                  border: "1px solid rgba(96,165,250,0.3)",
                  zIndex: 10,
                  boxShadow: "0 40px 100px rgba(37,99,235,0.45), 0 0 60px rgba(37,99,235,0.18)",
                }}
              >
                <div className="p-7 h-full flex flex-col justify-between">
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <div className="text-base font-black tracking-wide text-white opacity-90">Your Company</div>
                    {/* Chip */}
                    <div
                      className="w-11 h-9 rounded-lg"
                      style={{
                        background: "linear-gradient(135deg, #d4a84b 0%, #b8872a 50%, #e0b860 100%)",
                        border: "1px solid rgba(255,220,120,0.35)",
                      }}
                    />
                  </div>

                  {/* Card number */}
                  <div
                    className="font-mono text-base tracking-[0.22em]"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    •••• •••• •••• 2251
                  </div>

                  {/* Bottom row */}
                  <div className="flex items-end justify-between">
                    <div className="text-sm font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.7)" }}>
                      CARD HOLDER
                    </div>
                    {/* Visa */}
                    <svg width="58" height="20" viewBox="0 0 58 20" xmlns="http://www.w3.org/2000/svg">
                      <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="900" fontStyle="italic" fill="white" opacity="0.85" letterSpacing="-0.5">VISA</text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating badge — USDC */}
              <div
                className="absolute flex items-center gap-3 px-4 py-3 rounded-2xl"
                style={{
                  bottom: "48px",
                  left: "0px",
                  zIndex: 20,
                  background: "rgba(5,13,31,0.95)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#2775CA" }}>
                  <span className="text-xs font-black text-white">$</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">USDC / USDT</div>
                  <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>Stablecoin settlement</div>
                </div>
              </div>

              {/* Floating badge — transaction */}
              <div
                className="absolute flex items-center gap-3 px-4 py-3 rounded-2xl"
                style={{
                  top: "40px",
                  right: "-8px",
                  zIndex: 20,
                  background: "rgba(5,13,31,0.95)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.25)" }}>
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                    <path d="M1.5 5.5L5 9L12.5 1.5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">{c.badgeApproved}</div>
                  <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>{c.badgeRail}</div>
                </div>
              </div>

              {/* Floating badge — countries */}
              <div
                className="absolute flex items-center gap-2 px-4 py-2.5 rounded-2xl"
                style={{
                  bottom: "120px",
                  right: "-12px",
                  zIndex: 20,
                  background: "rgba(37,99,235,0.12)",
                  border: "1px solid rgba(59,130,246,0.25)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="text-sm font-black" style={{ color: "#60a5fa" }}>150+</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{c.badgeCountries}</div>
              </div>

            </div>

          </div>
        </section>

        {/* Why We Exist */}
        <section className="px-6 lg:px-16 pb-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-3xl mx-auto pt-24 text-center">
            <p className="section-label mb-5">{c.whyLabel}</p>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-6">
              {c.whyHeadline1}{" "}
              <span className="gradient-text">{c.whyHeadline2}</span>
            </h2>
            <p className="text-lg leading-relaxed mx-auto" style={{ color: "rgba(255,255,255,0.5)", lineHeight: "1.8", maxWidth: "680px" }}>
              {c.whyBody}
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="px-6 lg:px-16 pb-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-3xl mx-auto pt-24 text-center">
            <p className="section-label mb-5">{c.whoLabel}</p>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-6">
              {c.whoHeadline1}{" "}
              <span className="gradient-text">{c.whoHeadline2}</span>
            </h2>
            <p className="text-lg leading-relaxed mx-auto" style={{ color: "rgba(255,255,255,0.5)", lineHeight: "1.8", maxWidth: "680px" }}>
              {c.whoBody}
            </p>
          </div>
        </section>

        {/* What We Offer */}
        <section className="px-6 lg:px-16 pb-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-3xl mx-auto pt-24 text-center">
            <p className="section-label mb-5">{c.whatLabel}</p>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-6">
              {c.whatHeadline1}{" "}
              <span className="gradient-text">{c.whatHeadline2}</span>
            </h2>
            <p className="text-lg leading-relaxed mx-auto" style={{ color: "rgba(255,255,255,0.5)", lineHeight: "1.8", maxWidth: "680px" }}>
              {c.whatIntro}
            </p>
          </div>
        </section>

        {/* Contact form section */}
        <section className="px-6 lg:px-16 pb-32">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
                {c.contactLine1}{" "}
                <span className="gradient-text">{c.contactLine2}</span>
              </h2>
            </div>
            <ContactForm />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
