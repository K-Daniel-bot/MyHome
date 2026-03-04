export function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <defs>
        <linearGradient id="monitorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      {/* Monitor frame */}
      <rect x="2" y="2" width="20" height="13" fill="none" stroke="url(#monitorGrad)" strokeWidth="1" rx="1" />
      {/* Monitor stand */}
      <rect x="10" y="15" width="4" height="2" fill="url(#monitorGrad)" rx="0.3" />
      {/* Stand base */}
      <rect x="6" y="17" width="12" height="1" fill="url(#monitorGrad)" rx="0.3" />
      {/* Bar chart inside monitor */}
      {/* Left bar */}
      <rect x="5" y="10" width="2.5" height="4" fill="url(#monitorGrad)" rx="0.3" />
      {/* Middle bar (taller) */}
      <rect x="10" y="7" width="2.5" height="7" fill="url(#monitorGrad)" rx="0.3" />
      {/* Right bar */}
      <rect x="15" y="9" width="2.5" height="5" fill="url(#monitorGrad)" rx="0.3" />
    </svg>
  )
}
