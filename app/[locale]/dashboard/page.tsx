import { getTranslations } from "next-intl/server";
import { auth0 } from "@/lib/auth0";
import StatCard from "@/components/dashboard/StatCard";

function CardIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1.5" y="4" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1.5 7.5H16.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3.5" y="10.5" width="3" height="1.5" rx="0.75" fill="currentColor" />
    </svg>
  );
}

function VolumeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 13l4-4 3 3 4-5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ApprovalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ApiIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 9h3l2-5 2 10 2-5 1 3h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function DashboardOverviewPage() {
  const t = await getTranslations("dashboard.overview");
  const session = await auth0.getSession();

  const firstName = (session?.user.name ?? session?.user.email ?? "User").split(" ")[0];

  const stats = [
    {
      label: t("stats.activeCards"),
      value: "1,247",
      trend: t("trends.thisMonth"),
      trendPositive: true,
      icon: <CardIcon />,
    },
    {
      label: t("stats.monthlyVolume"),
      value: "$2.4M",
      trend: t("trends.vsLastMonth"),
      trendPositive: true,
      icon: <VolumeIcon />,
    },
    {
      label: t("stats.approvalRate"),
      value: "94.7%",
      trend: t("trends.stable"),
      trendPositive: false,
      icon: <ApprovalIcon />,
    },
    {
      label: t("stats.apiCalls"),
      value: "18,392",
      trend: t("trends.today"),
      trendPositive: true,
      icon: <ApiIcon />,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      {/* Page header */}
      <div>
        <h1
          style={{
            fontSize: "26px",
            fontWeight: 700,
            color: "#fff",
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          {t("welcomeBack", { name: firstName })}
        </h1>
        <p style={{ margin: "6px 0 0", fontSize: "15px", color: "rgba(255,255,255,0.5)" }}>
          {t("subtitle")}
        </p>
      </div>

      {/* Stat cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "16px",
        }}
      >
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Placeholder activity section */}
      <div
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "12px",
          padding: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "#fff" }}>
            Recent Activity
          </h2>
          <span
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.4)",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "2px 8px",
            }}
          >
            Coming soon
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {[
            { label: "Amazon · $2,450.00", time: "2m ago", status: "Approved" },
            { label: "Uber · $24.80", time: "18m ago", status: "Approved" },
            { label: "Netflix · $15.99", time: "1h ago", status: "Approved" },
            { label: "Steam · $59.99", time: "3h ago", status: "Declined" },
          ].map((tx, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none",
              }}
            >
              <div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                  {tx.label}
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", marginTop: "2px" }}>
                  {tx.time}
                </div>
              </div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: tx.status === "Approved" ? "#34d399" : "#f87171",
                  background: tx.status === "Approved" ? "rgba(52,211,153,0.08)" : "rgba(248,113,113,0.08)",
                  border: `1px solid ${tx.status === "Approved" ? "rgba(52,211,153,0.15)" : "rgba(248,113,113,0.15)"}`,
                  borderRadius: "20px",
                  padding: "3px 10px",
                }}
              >
                {tx.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
