export function RAGIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <defs>
        <linearGradient id="ragGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      {/* Top layer (smallest) */}
      <rect x="8" y="3" width="8" height="4" fill="url(#ragGrad)" rx="0.5" />
      {/* Middle layer */}
      <rect x="5" y="8" width="14" height="5" fill="url(#ragGrad)" rx="0.5" />
      {/* Bottom layer (largest) */}
      <rect x="2" y="14" width="20" height="6" fill="url(#ragGrad)" rx="0.5" />
      {/* Dividing lines for layers */}
      <line x1="8" y1="8" x2="16" y2="8" stroke="#2a2a2a" strokeWidth="0.6" opacity="0.5" />
      <line x1="5" y1="13" x2="19" y2="13" stroke="#2a2a2a" strokeWidth="0.6" opacity="0.5" />
    </svg>
  )
}
