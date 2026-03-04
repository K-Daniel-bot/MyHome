export function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
      <defs>
        <linearGradient id="emailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      {/* Envelope rectangle */}
      <rect x="2" y="5" width="20" height="14" rx="1.5" stroke="url(#emailGrad)" strokeWidth="1.2" />
      {/* Envelope flap (back triangle) */}
      <path d="M 2 5 L 12 13 L 22 5" stroke="url(#emailGrad)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Letter line */}
      <path d="M 2.5 5.5 L 12 11.5 L 21.5 5.5" stroke="url(#emailGrad)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
  )
}
