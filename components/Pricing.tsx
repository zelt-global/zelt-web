"use client";

const plans = [
  {
    name: "Starter",
    tagline: "For early-stage Web3 products",
    setup: "$10K",
    monthly: "$5K",
    rev: "0%",
    highlight: false,
    features: [
      "Shared BIN",
      "Virtual cards only",
      "Up to 1,000 cards",
      "Sumsub KYC included",
      "Webhook events",
      "Dashboard access",
      "Email support",
    ],
  },
  {
    name: "Growth",
    tagline: "For exchanges & wallets scaling fast",
    setup: "$20K",
    monthly: "$10K",
    rev: "Revenue share",
    highlight: true,
    features: [
      "Dedicated BIN ($25K one-time)",
      "Virtual + Physical cards",
      "Unlimited cards",
      "Custom KYC provider",
      "Apple Pay / Google Pay",
      "iFrame widget",
      "Priority support + SLA",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For large programs & custom needs",
    setup: "Custom",
    monthly: "Custom",
    rev: "Negotiable",
    highlight: false,
    features: [
      "White-label BIN",
      "Multi-currency programs",
      "ATM network access",
      "LATAM rails (PIX, SPEI)",
      "Dedicated compliance team",
      "Custom integrations",
      "24/7 dedicated support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3" style={{ color: "#60a5fa" }}>
            PRICING
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Transparent pricing,{" "}
            <span className="gradient-text">zero exclusivity</span>
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            No lock-in. Your clients stay yours. Scale up or down as your
            program grows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl p-8 flex flex-col"
              style={
                plan.highlight
                  ? {
                      background:
                        "linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(6,182,212,0.12) 100%)",
                      border: "1px solid rgba(59,130,246,0.3)",
                      boxShadow: "0 0 60px rgba(59,130,246,0.12)",
                    }
                  : {
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }
              }
            >
              {plan.highlight && (
                <div
                  className="text-xs font-semibold px-3 py-1 rounded-full self-start mb-4"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                    color: "#fff",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {plan.tagline}
                </p>
              </div>

              <div
                className="pb-6 mb-6"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{plan.setup}</span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
                    setup
                  </span>
                </div>
                <div className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {plan.monthly !== "Custom"
                    ? `${plan.monthly}/mo SaaS fee`
                    : "Custom monthly fee"}
                </div>
                <div className="mt-1 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {plan.rev !== "0%"
                    ? plan.rev
                    : "100% interchange retained by you"}
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="flex-shrink-0"
                    >
                      <circle cx="7" cy="7" r="7" fill={plan.highlight ? "#3b82f6" : "rgba(255,255,255,0.08)"} />
                      <path
                        d="M4 7l2 2 4-4"
                        stroke={plan.highlight ? "#fff" : "rgba(255,255,255,0.5)"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span style={{ color: "rgba(255,255,255,0.65)" }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className="block text-center py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
                style={
                  plan.highlight
                    ? {
                        background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                        color: "#fff",
                      }
                    : {
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.8)",
                      }
                }
                onMouseEnter={(e) => {
                  if (plan.highlight) {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 4px 20px rgba(59,130,246,0.4)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-1px)";
                  } else {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                  (e.currentTarget as HTMLElement).style.transform = "";
                  if (!plan.highlight) {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.06)";
                  }
                }}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started →"}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: "rgba(255,255,255,0.25)" }}>
          All plans include Chainalysis AML monitoring, Fireblocks custody integration, and PCI-DSS compliance. Collateral: 3× daily spend volume.
        </p>
      </div>
    </section>
  );
}
