import { getTranslations } from "next-intl/server";
import SettingsSidebar from "@/components/dashboard/SettingsSidebar";

export default async function SettingsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("dashboard.settings");

  const sections = [
    { key: "profile", label: t("nav.profile"), href: `/${locale}/dashboard/settings/profile` },
    { key: "security", label: t("nav.security"), href: `/${locale}/dashboard/settings/security` },
    { key: "billing", label: t("nav.billing"), href: `/${locale}/dashboard/settings/billing` },
    { key: "team", label: t("nav.team"), href: `/${locale}/dashboard/settings/team` },
    { key: "notifications", label: t("nav.notifications"), href: `/${locale}/dashboard/settings/notifications` },
  ];

  return (
    <div
      style={{
        display: "flex",
        minHeight: "calc(100vh - 60px)",
      }}
    >
      <SettingsSidebar sections={sections} title={t("title")} />
      <div
        style={{
          flex: 1,
          padding: "32px",
          minWidth: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "800px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
