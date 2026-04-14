import { getTranslations } from "next-intl/server";
import SectionCard from "@/components/dashboard/SectionCard";
import PageHeader from "@/components/dashboard/PageHeader";
import { colors, fontSize, radius, buttonStyle, badgeStyle } from "@/lib/design-tokens";

const invoices = [
  { id: "INV-2026-004", date: "Apr 1, 2026", amount: "$10,000.00", status: "Paid" },
  { id: "INV-2026-003", date: "Mar 1, 2026", amount: "$10,000.00", status: "Paid" },
  { id: "INV-2026-002", date: "Feb 1, 2026", amount: "$10,000.00", status: "Paid" },
  { id: "INV-2026-001", date: "Jan 1, 2026", amount: "$10,000.00", status: "Paid" },
];

export default async function BillingPage() {
  const t = await getTranslations("dashboard.settings.billing");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", maxWidth: "640px" }}>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      {/* Current Plan */}
      <SectionCard title={t("currentPlan")}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: fontSize["4xl"], fontWeight: 700, color: colors.textPrimary }}>Growth</span>
              <span style={{ ...badgeStyle.base, ...badgeStyle.primary, fontSize: fontSize.xs, fontWeight: 600, border: `1px solid ${colors.primaryBorder}` }}>
                {t("active")}
              </span>
            </div>
            <p style={{ fontSize: fontSize.base, color: colors.textMuted, margin: 0 }}>
              $10,000 / month · Renews May 1, 2026
            </p>
            <p style={{ fontSize: fontSize.sm, color: colors.textFaint, margin: 0 }}>
              Dedicated BIN · Unlimited cards · Virtual + Physical · Apple Pay / Google Pay
            </p>
          </div>
          <button style={{ ...buttonStyle.secondary, flexShrink: 0 }}>{t("changePlan")}</button>
        </div>
      </SectionCard>

      {/* Payment Method */}
      <SectionCard title={t("paymentMethod")} description={t("paymentMethodDesc")}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "42px",
                height: "28px",
                background: colors.bgSecondaryHover,
                borderRadius: "5px",
                border: `1px solid ${colors.borderSecondary}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
                <circle cx="10" cy="5" r="5" fill="#EB001B" fillOpacity="0.9" />
                <circle cx="18" cy="5" r="5" fill="#F79E1B" fillOpacity="0.9" />
                <ellipse cx="14" cy="5" rx="2" ry="4" fill="#FF5F00" fillOpacity="0.8" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: fontSize.md, fontWeight: 500, color: colors.textPrimary, margin: 0 }}>
                Mastercard ending in 4242
              </p>
              <p style={{ fontSize: fontSize.sm, color: colors.textSubtle, margin: 0 }}>Expires 12/2028</p>
            </div>
          </div>
          <button style={buttonStyle.ghost}>{t("update")}</button>
        </div>
      </SectionCard>

      {/* Invoice history */}
      <SectionCard title={t("invoiceHistory")} description={t("invoiceHistoryDesc")}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {invoices.map((inv, i) => (
            <div
              key={inv.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "11px 0",
                borderBottom: i < invoices.length - 1 ? `1px solid ${colors.bgInput}` : "none",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: fontSize.md, fontWeight: 500, color: colors.textPrimary }}>{inv.amount}</span>
                <span style={{ fontSize: fontSize.sm, color: colors.textSubtle }}>{inv.id} · {inv.date}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ ...badgeStyle.base, ...badgeStyle.success }}>{inv.status}</span>
                <button
                  style={{ background: "transparent", border: "none", color: colors.textMuted, cursor: "pointer", padding: "4px", display: "flex", alignItems: "center" }}
                  title="Download PDF"
                  aria-label={`Download invoice ${inv.id}`}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
