import { fontSize, colors } from "@/lib/design-tokens";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div>
      <h2
        style={{
          fontSize: fontSize["3xl"],
          fontWeight: 600,
          color: colors.textPrimary,
          margin: "0 0 4px",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>
      <p style={{ fontSize: fontSize.md, color: colors.textMuted, margin: 0 }}>
        {subtitle}
      </p>
    </div>
  );
}
