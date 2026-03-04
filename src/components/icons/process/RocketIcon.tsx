export function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
      <defs>
        <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      {/* Rocket body */}
      <path
        d="M 12 2 L 15 8 L 15 15 Q 15 17 12 17 Q 9 17 9 15 L 9 8 Z"
        fill="url(#rocketGrad)"
        opacity="0.2"
        stroke="url(#rocketGrad)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Window/porthole */}
      <circle cx="12" cy="6" r="1.5" fill="url(#rocketGrad)" opacity="0.8" />
      {/* Left fin */}
      <path
        d="M 9 14 L 6 17 L 9 17 Z"
        fill="url(#rocketGrad)"
        opacity="0.3"
        stroke="url(#rocketGrad)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Right fin */}
      <path
        d="M 15 14 L 18 17 L 15 17 Z"
        fill="url(#rocketGrad)"
        opacity="0.3"
        stroke="url(#rocketGrad)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Flame - bottom section */}
      <path
        d="M 11 17 Q 10 19 11.5 21 Q 12 19 12.5 21 Q 13 19 12 17"
        fill="url(#rocketGrad)"
        opacity="0.5"
        stroke="url(#rocketGrad)"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Flame inner glow */}
      <path
        d="M 11.5 18 Q 11 19 12 20 Q 12.5 19 12.5 18"
        fill="url(#rocketGrad)"
        opacity="0.3"
      />
    </svg>
  )
}
