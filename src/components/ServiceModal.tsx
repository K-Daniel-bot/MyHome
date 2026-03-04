import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

export interface ServiceDetail {
  id: string
  title: string
  longDescription: string
  features: string[]
  useCases: string[]
  techStack: string[]
}

interface ServiceModalProps {
  service: ServiceDetail
  onClose: () => void
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const modal = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative bg-secondary border border-border rounded-2xl p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: '0 0 60px rgba(212,175,55,0.08), 0 25px 50px rgba(0,0,0,0.7)' }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-white/40 hover:text-white hover:border-accent/40 transition-all duration-200 cursor-pointer"
          aria-label="닫기"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="pr-8">
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-2">서비스 상세</p>
          <h3 id="modal-title" className="font-heading text-2xl font-bold text-white mb-4">
            {service.title}
          </h3>
          <p className="text-white/50 leading-relaxed text-sm mb-8">{service.longDescription}</p>

          {/* Features */}
          <div className="mb-6">
            <p className="text-accent text-xs font-medium uppercase tracking-widest mb-3">핵심 기능</p>
            <ul className="space-y-2.5">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-white/65 text-sm">
                  <span className="text-accent flex-shrink-0 mt-0.5">▸</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div className="mb-6">
            <p className="text-accent text-xs font-medium uppercase tracking-widest mb-3">활용 사례</p>
            <div className="flex flex-wrap gap-2">
              {service.useCases.map((uc) => (
                <span
                  key={uc}
                  className="px-3 py-1 text-xs rounded-full bg-accent/10 border border-accent/20 text-accent/75"
                >
                  {uc}
                </span>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <p className="text-accent text-xs font-medium uppercase tracking-widest mb-3">기술 스택</p>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-surface border border-border text-white/45"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="btn-primary w-full block text-center"
          >
            프로젝트 상담하기
          </a>
        </div>
      </div>
    </div>
  )

  if (typeof window === 'undefined') return null
  return createPortal(modal, document.body)
}
