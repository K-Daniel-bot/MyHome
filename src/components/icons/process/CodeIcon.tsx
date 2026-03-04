export function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
      <defs>
        <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      {/* Left bracket < */}
      <path
        d="M 14 6 L 8 12 L 14 18"
        stroke="url(#codeGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Right bracket > */}
      <path
        d="M 10 6 L 16 12 L 10 18"
        stroke="url(#codeGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Forward slash in the middle */}
      <line
        x1="12"
        y1="8"
        x2="12"
        y2="16"
        stroke="url(#codeGrad)"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  )
}
