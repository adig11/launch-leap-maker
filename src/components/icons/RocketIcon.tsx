const RocketIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M32 8C32 8 22 18 22 32C22 38 24 44 28 48L32 52L36 48C40 44 42 38 42 32C42 18 32 8 32 8Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="hsl(var(--primary))"
      fillOpacity="0.1"
    />
    <circle
      cx="32"
      cy="28"
      r="4"
      stroke="currentColor"
      strokeWidth="2"
      fill="hsl(var(--accent))"
      fillOpacity="0.3"
    />
    <path
      d="M22 36L16 42L22 44"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42 36L48 42L42 44"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28 52L26 58M32 54V60M36 52L38 58"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default RocketIcon;
