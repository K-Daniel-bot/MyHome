export function TuneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <defs>
        <linearGradient id="tuneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      {/* Left lever - horizontal line */}
      <line x1="2" y1="7" x2="10" y2="7" stroke="url(#tuneGrad)" strokeWidth="1" strokeLinecap="round" />
      {/* Left control knob */}
      <circle cx="6" cy="7" r="1.5" fill="url(#tuneGrad)" />
      {/* Middle lever */}
      <line x1="8" y1="12" x2="16" y2="12" stroke="url(#tuneGrad)" strokeWidth="1" strokeLinecap="round" />
      {/* Middle control knob */}
      <circle cx="12" cy="12" r="1.5" fill="url(#tuneGrad)" />
      {/* Right lever */}
      <line x1="14" y1="17" x2="22" y2="17" stroke="url(#tuneGrad)" strokeWidth="1" strokeLinecap="round" />
      {/* Right control knob */}
      <circle cx="18" cy="17" r="1.5" fill="url(#tuneGrad)" />
      {/* Vertical guides */}
      <line x1="6" y1="4" x2="6" y2="6" stroke="url(#tuneGrad)" strokeWidth="0.6" opacity="0.6" strokeLinecap="round" />
      <line x1="12" y1="9" x2="12" y2="11" stroke="url(#tuneGrad)" strokeWidth="0.6" opacity="0.6" strokeLinecap="round" />
      <line x1="18" y1="14" x2="18" y2="16" stroke="url(#tuneGrad)" strokeWidth="0.6" opacity="0.6" strokeLinecap="round" />
    </svg>
  )
}
