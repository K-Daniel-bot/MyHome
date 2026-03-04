export function AgentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <defs>
        <linearGradient id="agentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      {/* Center circle (brain) */}
      <circle cx="12" cy="12" r="3.5" fill="url(#agentGrad)" />
      {/* Top circle (neuron) */}
      <circle cx="12" cy="4" r="1.5" fill="url(#agentGrad)" />
      {/* Right circle */}
      <circle cx="19" cy="12" r="1.5" fill="url(#agentGrad)" />
      {/* Bottom circle */}
      <circle cx="12" cy="20" r="1.5" fill="url(#agentGrad)" />
      {/* Left circle */}
      <circle cx="5" cy="12" r="1.5" fill="url(#agentGrad)" />
      {/* Connection lines */}
      <line x1="12" y1="5.5" x2="12" y2="8.5" stroke="url(#agentGrad)" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="17.5" y1="12" x2="14.5" y2="12" stroke="url(#agentGrad)" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="12" y1="18.5" x2="12" y2="15.5" stroke="url(#agentGrad)" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="6.5" y1="12" x2="9.5" y2="12" stroke="url(#agentGrad)" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  )
}
