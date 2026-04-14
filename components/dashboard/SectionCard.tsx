import { cardStyle, fontSize, colors } from "@/lib/design-tokens";

interface SectionCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function SectionCard({ title, description, children }: SectionCardProps) {
  return (
    <div style={cardStyle}>
      <div style={{ marginBottom: description ? "4px" : "20px" }}>
        <h3 style={{ fontSize: fontSize.xl, fontWeight: 600, color: colors.textPrimary, margin: 0 }}>
          {title}
        </h3>
        {description && (
          <p style={{ fontSize: fontSize.base, color: colors.textMuted, margin: "4px 0 20px" }}>
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
