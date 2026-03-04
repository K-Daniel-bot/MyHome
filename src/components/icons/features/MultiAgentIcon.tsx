export function MultiAgentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <defs>
        <linearGradient id="multiAgentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      {/* Top left circle */}
      <circle cx="5" cy="6" r="2" fill="url(#multiAgentGrad)" />
      {/* Top right circle */}
      <circle cx="19" cy="6" r="2" fill="url(#multiAgentGrad)" />
      {/* Center circle (larger - convergence point) */}
      <circle cx="12" cy="16" r="2.5" fill="url(#multiAgentGrad)" />
      {/* Convergence lines */}
      <line x1="6" y1="8" x2="10" y2="14" stroke="url(#multiAgentGrad)" strokeWidth="1" strokeLinecap="round" />
      <line x1="18" y1="8" x2="14" y2="14" stroke="url(#multiAgentGrad)" strokeWidth="1" strokeLinecap="round" />
      {/* Additional connecting curve for collaboration feel */}
      <path d="M 8 7 Q 12 11 12 14" stroke="url(#multiAgentGrad)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
    </svg>
  )
}
