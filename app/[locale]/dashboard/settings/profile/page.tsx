import { auth0 } from "@/lib/auth0";
import { getTranslations } from "next-intl/server";
import PageHeader from "@/components/dashboard/PageHeader";
import { colors, fontSize, radius, cardStyle, inputStyle, buttonStyle } from "@/lib/design-tokens";

function Field({
  label,
  value,
  readOnly,
  hint,
  id,
}: {
  label: string;
  value: string;
  readOnly?: boolean;
  hint?: string;
  id: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label htmlFor={id} style={{ fontSize: fontSize.sm, fontWeight: 500, color: colors.textMuted }}>
        {label}
      </label>
      <input
        id={id}
        defaultValue={value}
        readOnly={readOnly}
        style={{
          ...inputStyle,
          background: readOnly ? colors.bgInputReadonly : colors.bgInput,
          color: readOnly ? colors.textMuted : colors.textPrimary,
          cursor: readOnly ? "default" : "text",
        }}
      />
      {hint && (
        <p style={{ fontSize: fontSize.sm, color: colors.textFaint, margin: 0 }}>{hint}</p>
      )}
    </div>
  );
}

export default async function ProfilePage() {
  const session = await auth0.getSession();
  const t = await getTranslations("dashboard.settings.profile");
  const name = session?.user.name ?? session?.user.email ?? "User";
  const email = session?.user.email ?? "";
  const nameParts = name.split(" ");
  const initials =
    nameParts.length >= 2
      ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase()
      : name.slice(0, 2).toUpperCase();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", maxWidth: "600px" }}>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      {/* Avatar */}
      <div style={{ ...cardStyle, display: "flex", alignItems: "center", gap: "20px" }}>
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: radius.circle,
            background: colors.gradient,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: fontSize["5xl"],
            fontWeight: 700,
            color: colors.textPrimary,
            flexShrink: 0,
          }}
        >
          {initials}
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: fontSize.lg, fontWeight: 500, color: colors.textPrimary, margin: "0 0 4px" }}>
            {name}
          </p>
          <p style={{ fontSize: fontSize.sm, color: colors.textMuted, margin: "0 0 12px" }}>
            {email}
          </p>
          <button style={buttonStyle.ghost}>{t("changePhoto")}</button>
        </div>
      </div>

      {/* Form */}
      <div style={{ ...cardStyle, display: "flex", flexDirection: "column", gap: "18px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <Field id="profile-name" label={t("fullName")} value={name} />
          <Field id="profile-email" label={t("email")} value={email} readOnly hint={t("emailHint")} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <Field id="profile-title" label={t("jobTitle")} value="Founder & CEO" />
          <Field id="profile-company" label={t("company")} value="Zelt Inc." />
        </div>
        <Field id="profile-timezone" label={t("timezone")} value="America/Sao_Paulo (UTC-3)" />

        <div style={{ borderTop: `1px solid ${colors.borderSubtle}`, paddingTop: "16px", display: "flex", justifyContent: "flex-end" }}>
          <button style={buttonStyle.primary}>{t("save")}</button>
        </div>
      </div>
    </div>
  );
}
