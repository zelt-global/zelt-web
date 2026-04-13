const steps = [
  {
    num: "01",
    title: "Apply & Integrate",
    desc: "Submit your company profile. Our compliance team runs KYB and onboards you in days — not months. API keys delivered instantly.",
  },
  {
    num: "02",
    title: "Configure your program",
    desc: "Set spending limits, choose virtual or physical cards, enable Apple Pay / Google Pay, and define your collateral. Full control via dashboard or API.",
  },
  {
    num: "03",
    title: "Onboard your users",
    desc: "Use our KYC-as-a-Service (powered by Sumsub) or delegate to your own KYC provider. Issue cards in seconds via a single API call.",
  },
  {
    num: "04",
    title: "Go live & scale",
    desc: "Cards accepted at 150+ countries. Stablecoin balance auto-converts at point of sale. Real-time webhooks, transaction monitoring, and chargeback management included.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3" style={{ color: "#60a5fa" }}>
            HOW IT WORKS
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Launch in{" "}
            <span className="gradient-text">four steps</span>
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            From application to first card issued — typically 90 days, including Visa certification.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="glass rounded-2xl p-7 lift relative overflow-hidden"
            >
              {/* Step number watermark */}
              <div
                className="absolute -top-3 -right-2 text-8xl font-black pointer-events-none select-none"
                style={{ color: "rgba(255,255,255,0.03)" }}
              >
                {step.num}
              </div>

              <div
                className="text-sm font-mono font-bold mb-5 inline-block px-2.5 py-1 rounded-lg"
                style={{
                  background: "rgba(59,130,246,0.12)",
                  color: "#60a5fa",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}
              >
                {step.num}
              </div>

              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                {step.desc}
              </p>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-12 -right-3 w-6 h-px"
                  style={{ background: "rgba(59,130,246,0.3)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
