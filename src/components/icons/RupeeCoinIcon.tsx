import { motion } from "framer-motion";

interface RupeeCoinIconProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-28 h-28",
  xl: "w-36 h-36",
};

const RupeeCoinIcon = ({ className = "", size = "lg", animated = true }: RupeeCoinIconProps) => {
  const svgContent = (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Gradients and filters */}
      <defs>
        <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="25%" stopColor="#FBBF24" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="75%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="coinInnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="rupeeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#92400E" />
          <stop offset="50%" stopColor="#78350F" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>
        <filter id="coinShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#92400E" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Main coin body */}
      <circle
        cx="60"
        cy="60"
        r="56"
        fill="url(#coinGradient)"
        filter="url(#coinShadow)"
      />

      {/* Outer decorative ring */}
      <circle
        cx="60"
        cy="60"
        r="52"
        fill="none"
        stroke="#D97706"
        strokeWidth="2"
        opacity="0.6"
      />

      {/* Inner circle */}
      <circle
        cx="60"
        cy="60"
        r="44"
        fill="url(#coinInnerGradient)"
      />

      {/* Inner ring accent */}
      <circle
        cx="60"
        cy="60"
        r="40"
        fill="none"
        stroke="#FBBF24"
        strokeWidth="1.5"
        opacity="0.5"
      />

      {/* Rocket Symbol - tilted and minimal */}
      <g transform="rotate(25, 60, 55)">
        {/* Rocket body */}
        <path
          d="M60 30 C60 30 72 42 72 56 C72 64 68 70 60 70 C52 70 48 64 48 56 C48 42 60 30 60 30Z"
          fill="url(#rupeeGradient)"
        />
        {/* Window */}
        <circle cx="60" cy="50" r="5" fill="#FBBF24" opacity="0.7" />
        {/* Left fin */}
        <path d="M48 58 L42 68 L48 65 Z" fill="url(#rupeeGradient)" />
        {/* Right fin */}
        <path d="M72 58 L78 68 L72 65 Z" fill="url(#rupeeGradient)" />
      </g>

      {/* Highlight arc for 3D effect */}
      <path
        d="M30 30 Q60 15 90 30"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.25"
        fill="none"
      />
    </svg>
  );

  if (animated) {
    return (
      <motion.div
        className={`${sizeClasses[size]} ${className}`}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {svgContent}
      </motion.div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      {svgContent}
    </div>
  );
};

export default RupeeCoinIcon;