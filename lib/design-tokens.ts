// ── Colors ──────────────────────────────────────────────
export const colors = {
  // Backgrounds
  bgPage: "#030b18",
  bgCard: "rgba(255,255,255,0.03)",
  bgCardHover: "rgba(255,255,255,0.04)",
  bgSidebar: "rgba(255,255,255,0.018)",
  bgInput: "rgba(255,255,255,0.05)",
  bgInputReadonly: "rgba(255,255,255,0.03)",
  bgSecondary: "rgba(255,255,255,0.06)",
  bgSecondaryHover: "rgba(255,255,255,0.08)",
  bgOverlay: "rgba(0,0,0,0.65)",

  // Borders
  border: "rgba(255,255,255,0.07)",
  borderSubtle: "rgba(255,255,255,0.06)",
  borderInput: "rgba(255,255,255,0.08)",
  borderSecondary: "rgba(255,255,255,0.1)",

  // Text
  textPrimary: "#fff",
  textSecondary: "rgba(255,255,255,0.65)",
  textMuted: "rgba(255,255,255,0.4)",
  textSubtle: "rgba(255,255,255,0.35)",
  textFaint: "rgba(255,255,255,0.3)",
  textGhost: "rgba(255,255,255,0.28)",

  // Brand / Accent
  primary: "#3b82f6",
  primaryLight: "#60a5fa",
  primaryBg: "rgba(59,130,246,0.14)",
  primaryBorder: "rgba(59,130,246,0.2)",
  cyan: "#06b6d4",
  gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",

  // Semantic
  success: "#4ade80",
  successBg: "rgba(74,222,128,0.1)",
  danger: "#f87171",
  dangerBg: "rgba(239,68,68,0.12)",
  dangerBorder: "rgba(239,68,68,0.25)",
} as const;

// ── Typography ──────────────────────────────────────────
export const fontSize = {
  xs: "12px",
  sm: "13px",
  base: "14px",
  md: "14.5px",
  lg: "15px",
  xl: "15.5px",
  "2xl": "16px",
  "3xl": "20px",
  "4xl": "22px",
  "5xl": "24px",
  "6xl": "26px",
} as const;

// ── Border Radius ───────────────────────────────────────
export const radius = {
  sm: "7px",
  md: "8px",
  lg: "10px",
  xl: "12px",
  full: "20px",
  circle: "50%",
} as const;

// ── Shared component styles ─────────────────────────────
export const cardStyle = {
  background: colors.bgCard,
  border: `1px solid ${colors.border}`,
  borderRadius: radius.xl,
  padding: "24px",
} as const;

export const inputStyle = {
  background: colors.bgInput,
  border: `1px solid ${colors.borderInput}`,
  borderRadius: radius.md,
  padding: "10px 14px",
  fontSize: fontSize.lg,
  color: colors.textPrimary,
  outline: "none",
  width: "100%",
  boxSizing: "border-box" as const,
} as const;

export const buttonStyle = {
  primary: {
    background: colors.primary,
    border: "none",
    borderRadius: radius.md,
    padding: "9px 20px",
    fontSize: fontSize.md,
    fontWeight: 500,
    color: colors.textPrimary,
    cursor: "pointer",
  },
  secondary: {
    background: colors.bgSecondary,
    border: `1px solid ${colors.borderSecondary}`,
    borderRadius: radius.md,
    padding: "8px 16px",
    fontSize: fontSize.base,
    color: colors.textSecondary,
    cursor: "pointer",
  },
  ghost: {
    background: "transparent",
    border: `1px solid ${colors.borderSecondary}`,
    borderRadius: radius.sm,
    padding: "6px 14px",
    fontSize: fontSize.sm,
    color: colors.textMuted,
    cursor: "pointer",
  },
  danger: {
    background: "transparent",
    border: `1px solid ${colors.dangerBorder}`,
    borderRadius: radius.sm,
    padding: "5px 12px",
    fontSize: fontSize.sm,
    color: colors.danger,
    cursor: "pointer",
    flexShrink: 0,
  },
} as const;

export const badgeStyle = {
  base: {
    display: "inline-flex" as const,
    alignItems: "center" as const,
    borderRadius: radius.full,
    fontWeight: 500,
  },
  primary: {
    background: colors.primaryBg,
    color: colors.primaryLight,
    fontSize: fontSize.xs,
    padding: "2px 10px",
  },
  success: {
    background: colors.successBg,
    color: colors.success,
    fontSize: fontSize.sm,
    padding: "2px 9px",
  },
  danger: {
    background: colors.dangerBg,
    color: colors.danger,
    border: `1px solid ${colors.dangerBorder}`,
    fontSize: fontSize.sm,
    padding: "3px 10px",
  },
} as const;
