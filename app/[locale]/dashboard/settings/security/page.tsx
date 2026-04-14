import { getTranslations } from "next-intl/server";
import SectionCard from "@/components/dashboard/SectionCard";
import PageHeader from "@/components/dashboard/PageHeader";
import { colors, fontSize, radius, inputStyle, buttonStyle, badgeStyle } from "@/lib/design-tokens";

const sessions = [
  { device: "MacBook Pro", browser: "Chrome 123", location: "Sao Paulo, BR", lastSeen: "Active now", current: true },
  { device: "iPhone 15 Pro", browser: "Safari 17", location: "Sao Paulo, BR", lastSeen: "2 hours ago", current: false },
  { device: "Windows PC", browser: "Edge 121", location: "Rio de Janeiro, BR", lastSeen: "3 days ago", current: false },
];

export default async function SecurityPage() {
  const t = await getTranslations("dashboard.settings.security");

  const passwordFields = [
    { id: "current-password", label: t("currentPassword") },
    { id: "new-password", label: t("newPassword") },
    { id: "confirm-password", label: t("confirmPassword") },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", maxWidth: "600px" }}>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      {/* 2FA */}
      <SectionCard title={t("twoFactor")} description={t("twoFactorDesc")}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ ...badgeStyle.base, ...badgeStyle.danger, gap: "5px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: radius.circle, background: "#ef4444", display: "inline-block" }} />
              {t("notEnabled")}
            </span>
            <span style={{ fontSize: fontSize.base, color: colors.textMuted }}>{t("authenticatorApp")}</span>
          </div>
          <button style={{ ...buttonStyle.primary, flexShrink: 0 }}>{t("enable2FA")}</button>
        </div>
      </SectionCard>

      {/* Password */}
      <SectionCard title={t("password")} description={t("passwordDesc")}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {passwordFields.map((field) => (
            <div key={field.id} style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label htmlFor={field.id} style={{ fontSize: fontSize.sm, fontWeight: 500, color: "rgba(255,255,255,0.45)" }}>
                {field.label}
              </label>
              <input
                id={field.id}
                type="password"
                placeholder="••••••••"
                style={inputStyle}
              />
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: "4px" }}>
            <button style={buttonStyle.secondary}>{t("updatePassword")}</button>
          </div>
        </div>
      </SectionCard>

      {/* Sessions */}
      <SectionCard title={t("sessions")} description={t("sessionsDesc")}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {sessions.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: i < sessions.length - 1 ? `1px solid ${colors.bgInput}` : "none",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: fontSize.md, fontWeight: 500, color: colors.textPrimary }}>{s.device}</span>
                  {s.current && (
                    <span style={{ ...badgeStyle.base, ...badgeStyle.primary, padding: "1px 8px" }}>
                      {t("thisDevice")}
                    </span>
                  )}
                </div>
                <span style={{ fontSize: fontSize.sm, color: colors.textSubtle }}>
                  {s.browser} · {s.location} · {s.lastSeen}
                </span>
              </div>
              {!s.current && (
                <button style={buttonStyle.danger}>{t("revoke")}</button>
              )}
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
