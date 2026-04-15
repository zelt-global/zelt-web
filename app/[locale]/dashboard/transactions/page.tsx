import { getTranslations } from "next-intl/server";

export default async function TransactionsPage() {
  const t = await getTranslations("dashboard.transactions");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#fff", margin: 0, letterSpacing: "-0.02em" }}>
        {t("title")}
      </h1>
      <div
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "12px",
          padding: "48px 24px",
          textAlign: "center",
          color: "rgba(255,255,255,0.4)",
          fontSize: "14px",
        }}
      >
        {t("comingSoon")}
      </div>
    </div>
  );
}
