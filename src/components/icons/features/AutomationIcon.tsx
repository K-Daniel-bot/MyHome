export function AutomationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <defs>
        <linearGradient id="automationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      {/* First arrow (left) */}
      <path d="M 3 12 L 7 12" stroke="url(#automationGrad)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 7 12 L 5.5 10.5 M 7 12 L 5.5 13.5" stroke="url(#automationGrad)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Second arrow (middle) */}
      <path d="M 10 12 L 14 12" stroke="url(#automationGrad)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 14 12 L 12.5 10.5 M 14 12 L 12.5 13.5" stroke="url(#automationGrad)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Third arrow (right) */}
      <path d="M 17 12 L 21 12" stroke="url(#automationGrad)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 21 12 L 19.5 10.5 M 21 12 L 19.5 13.5" stroke="url(#automationGrad)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
