export function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
      <defs>
        <linearGradient id="locationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      {/* Pin shape (base teardrop) */}
      <path d="M 12 2 C 7 2 3 6 3 11 C 3 16 12 22 12 22 C 12 22 21 16 21 11 C 21 6 17 2 12 2 Z" stroke="url(#locationGrad)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Center dot */}
      <circle cx="12" cy="11" r="2" fill="url(#locationGrad)" />
    </svg>
  )
}
