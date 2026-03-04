export function ArchitectIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
      <defs>
        <linearGradient id="archGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      {/* Outer frame - large rectangle */}
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        fill="url(#archGrad)"
        opacity="0.15"
        stroke="url(#archGrad)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Vertical grid lines */}
      <line x1="9" y1="3" x2="9" y2="21" stroke="url(#archGrad)" strokeWidth="0.8" opacity="0.6" />
      <line x1="15" y1="3" x2="15" y2="21" stroke="url(#archGrad)" strokeWidth="0.8" opacity="0.6" />
      {/* Horizontal grid lines */}
      <line x1="3" y1="9" x2="21" y2="9" stroke="url(#archGrad)" strokeWidth="0.8" opacity="0.6" />
      <line x1="3" y1="15" x2="21" y2="15" stroke="url(#archGrad)" strokeWidth="0.8" opacity="0.6" />
      {/* Highlight one section (center-left) */}
      <rect
        x="3"
        y="9"
        width="6"
        height="6"
        fill="url(#archGrad)"
        opacity="0.3"
        stroke="url(#archGrad)"
        strokeWidth="1"
      />
    </svg>
  )
}
