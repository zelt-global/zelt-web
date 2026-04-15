import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { auth0 } from "@/lib/auth0";
import DashboardShell from "@/components/dashboard/DashboardShell";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  const session = await auth0.getSession();
  if (!session) {
    redirect(`/auth/login?returnTo=/${locale}/dashboard`);
  }

  const t = await getTranslations("dashboard.nav");

  const user = {
    name: session.user.name ?? session.user.email ?? "User",
    email: session.user.email ?? "",
    picture: session.user.picture,
  };

  const navItems = [
    { key: "overview", label: t("overview"), href: `/${locale}/dashboard` },
    { key: "cards", label: t("cards"), href: `/${locale}/dashboard/cards` },
    { key: "transactions", label: t("transactions"), href: `/${locale}/dashboard/transactions` },
    { key: "apiKeys", label: t("apiKeys"), href: `/${locale}/dashboard/api-keys` },
    { key: "settings", label: t("settings"), href: `/${locale}/dashboard/settings` },
  ];

  return (
    <DashboardShell navItems={navItems} user={user}>
      {children}
    </DashboardShell>
  );
}
