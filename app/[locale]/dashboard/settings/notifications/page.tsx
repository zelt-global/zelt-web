"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/dashboard/PageHeader";
import { colors, fontSize, radius, cardStyle, inputStyle, buttonStyle } from "@/lib/design-tokens";

const initialEmailGroups = [
  {
    title: "Transactions",
    items: [
      { key: "tx_approved", label: "Transaction approved", description: "When a card transaction is approved.", enabled: true },
      { key: "tx_declined", label: "Transaction declined", description: "When a card transaction is declined.", enabled: true },
      { key: "tx_dispute", label: "Dispute opened", description: "When a cardholder opens a chargeback dispute.", enabled: true },
    ],
  },
  {
    title: "Cards",
    items: [
      { key: "card_issued", label: "Card issued", description: "When a new virtual or physical card is created.", enabled: true },
      { key: "card_frozen", label: "Card frozen / blocked", description: "When a card status changes to frozen or blocked.", enabled: false },
      { key: "card_expired", label: "Card about to expire", description: "30 days before a card expiration date.", enabled: true },
    ],
  },
  {
    title: "Account",
    items: [
      { key: "new_login", label: "New login detected", description: "When your account is accessed from a new device.", enabled: true },
      { key: "api_quota", label: "API quota warning", description: "When you reach 80% of your monthly API call limit.", enabled: false },
      { key: "billing_due", label: "Invoice due", description: "3 days before your monthly invoice is due.", enabled: true },
    ],
  },
];

function Toggle({ enabled, onToggle, label }: { enabled: boolean; onToggle: () => void; label: string }) {
  return (
    <button
      role="switch"
      aria-checked={enabled}
      aria-label={label}
      onClick={onToggle}
      style={{
        width: "36px",
        height: "20px",
        borderRadius: "10px",
        background: enabled ? colors.primary : "rgba(255,255,255,0.12)",
        position: "relative",
        flexShrink: 0,
        cursor: "pointer",
        transition: "background 0.2s",
        border: "none",
        padding: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "3px",
          left: enabled ? "19px" : "3px",
          width: "14px",
          height: "14px",
          borderRadius: radius.circle,
          background: colors.textPrimary,
          transition: "left 0.2s",
        }}
      />
    </button>
  );
}

export default function NotificationsPage() {
  const t = useTranslations("dashboard.settings.notifications");
  const [groups, setGroups] = useState(initialEmailGroups);

  const toggleItem = (groupIndex: number, itemIndex: number) => {
    setGroups((prev) =>
      prev.map((group, gi) =>
        gi === groupIndex
          ? { ...group, items: group.items.map((item, ii) => (ii === itemIndex ? { ...item, enabled: !item.enabled } : item)) }
          : group
      )
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", maxWidth: "600px" }}>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      {groups.map((group, gi) => (
        <div
          key={group.title}
          style={{ background: colors.bgCard, border: `1px solid ${colors.border}`, borderRadius: radius.xl, overflow: "hidden" }}
        >
          <div style={{ padding: "14px 20px", borderBottom: `1px solid ${colors.borderSubtle}` }}>
            <span style={{ fontSize: fontSize.base, fontWeight: 600, color: colors.textMuted }}>{group.title}</span>
          </div>
          {group.items.map((item, ii) => (
            <div
              key={item.key}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                padding: "14px 20px",
                borderBottom: ii < group.items.length - 1 ? `1px solid ${colors.bgCardHover}` : "none",
              }}
            >
              <div>
                <p style={{ fontSize: fontSize.md, fontWeight: 500, color: colors.textPrimary, margin: "0 0 2px" }}>{item.label}</p>
                <p style={{ fontSize: fontSize.sm, color: colors.textSubtle, margin: 0 }}>{item.description}</p>
              </div>
              <Toggle enabled={item.enabled} onToggle={() => toggleItem(gi, ii)} label={item.label} />
            </div>
          ))}
        </div>
      ))}

      {/* Webhook */}
      <div style={{ ...cardStyle, padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
        <div>
          <h3 style={{ fontSize: fontSize.xl, fontWeight: 600, color: colors.textPrimary, margin: "0 0 4px" }}>{t("webhook")}</h3>
          <p style={{ fontSize: fontSize.base, color: colors.textMuted, margin: 0 }}>{t("webhookDesc")}</p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <label htmlFor="webhook-url" className="sr-only">{t("webhook")}</label>
          <input
            id="webhook-url"
            defaultValue="https://api.yourapp.com/webhooks/zelt"
            style={{ ...inputStyle, flex: 1, fontFamily: "monospace", minWidth: 0 }}
          />
          <button style={{ ...buttonStyle.secondary, flexShrink: 0 }}>{t("save")}</button>
        </div>
      </div>
    </div>
  );
}
