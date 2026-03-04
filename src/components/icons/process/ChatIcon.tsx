export function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
      <defs>
        <linearGradient id="chatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      {/* Main chat bubble */}
      <path
        d="M 4 6 Q 4 4 6 4 L 18 4 Q 20 4 20 6 L 20 14 Q 20 16 18 16 L 8 16 L 5 19 L 6 16 L 6 16 Q 4 16 4 14 Z"
        fill="url(#chatGrad)"
        opacity="0.2"
        stroke="url(#chatGrad)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Text lines inside bubble */}
      <line x1="7" y1="8" x2="17" y2="8" stroke="url(#chatGrad)" strokeWidth="1" strokeLinecap="round" />
      <line x1="7" y1="11" x2="14" y2="11" stroke="url(#chatGrad)" strokeWidth="1" strokeLinecap="round" />
      <line x1="7" y1="14" x2="12" y2="14" stroke="url(#chatGrad)" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}
