export function AvailabilityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
      <defs>
        <linearGradient id="availabilityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      {/* Clock circle */}
      <circle cx="12" cy="12" r="9" stroke="url(#availabilityGrad)" strokeWidth="1.2" />
      {/* Hour hand (12 to 10) */}
      <line x1="12" y1="12" x2="12" y2="6" stroke="url(#availabilityGrad)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Minute hand (12 to 3) */}
      <line x1="12" y1="12" x2="16" y2="12" stroke="url(#availabilityGrad)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Center dot */}
      <circle cx="12" cy="12" r="1.2" fill="url(#availabilityGrad)" />
    </svg>
  )
}
