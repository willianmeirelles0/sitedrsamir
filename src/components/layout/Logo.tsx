/**
 * Placeholder logo: infinite symbol formed by two linked circles,
 * representing bond and human presence.
 * Replace with the final SVG/PNG logo files when provided.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 32"
      className={className}
      role="img"
      aria-label="Símbolo Dr. Samir Salles"
    >
      <circle
        cx="17"
        cy="16"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
      />
      <circle
        cx="31"
        cy="16"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        opacity="0.6"
      />
    </svg>
  );
}
