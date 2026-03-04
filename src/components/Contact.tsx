import React, { useState, useRef, useEffect } from 'react'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, '이름은 최소 2자 이상이어야 합니다'),
  email: z.string().email('유효하지 않은 이메일 주소입니다'),
  message: z.string().min(10, '메시지는 최소 10자 이상이어야 합니다'),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactProps {
  onSubmit?: (data: ContactFormData) => void
}

const contactInfo = [
  {
    id: 'email',
    label: '이메일',
    value: 'hello@daniel.dev',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    id: 'location',
    label: '위치',
    value: '서울, 대한민국',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    id: 'availability',
    label: '가용성',
    value: '프리랜서 프로젝트 가능',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function Contact({ onSubmit }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.animate-on-scroll').forEach((child) =>
            child.classList.add('in-view')
          )
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('idle')
    setErrors({})

    try {
      const validatedData = contactSchema.parse(formData)
      if (onSubmit) {
        onSubmit(validatedData)
      }
      setFormData({ name: '', email: '', message: '' })
      setStatus('success')
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          const path = err.path[0] as string
          newErrors[path] = err.message
        })
        setErrors(newErrors)
      }
      setStatus('error')
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="section bg-secondary">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
          <h2 className="section-title">
            AI 도입을 <span className="gradient-text">시작하세요</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto mt-4">
            AI 에이전트 도입을 고민 중이신가요? 무료 컨설팅으로 가능성을 확인하세요.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 animate-on-scroll space-y-6">
            {contactInfo.map((info) => (
              <div key={info.id} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-1">{info.label}</p>
                  <p className="text-white/75 font-medium">{info.value}</p>
                </div>
              </div>
            ))}

            {/* Response time badge */}
            <div className="mt-8 p-4 rounded-xl border border-accent/20 bg-accent/5">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" aria-hidden="true" />
                <span className="text-accent text-sm font-medium">빠른 응답 보장</span>
              </div>
              <p className="text-white/40 text-sm">보통 24시간 이내 답변 + 무료 상담 제공</p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 animate-on-scroll card-dark space-y-5"
            style={{ transitionDelay: '120ms' }}
            noValidate
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-white/50 text-sm font-medium mb-2">
                이름
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="홍길동"
                className={`w-full px-4 py-3 bg-surface border rounded-lg text-white placeholder-white/20
                  focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-200
                  ${errors.name ? 'border-red-500/60' : 'border-border'}`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1.5">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-white/50 text-sm font-medium mb-2">
                이메일
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full px-4 py-3 bg-surface border rounded-lg text-white placeholder-white/20
                  focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-200
                  ${errors.email ? 'border-red-500/60' : 'border-border'}`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1.5">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-white/50 text-sm font-medium mb-2">
                메시지
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="프로젝트에 대해 알려주세요..."
                className={`w-full px-4 py-3 bg-surface border rounded-lg text-white placeholder-white/20 resize-none
                  focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-200
                  ${errors.message ? 'border-red-500/60' : 'border-border'}`}
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1.5">{errors.message}</p>
              )}
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                감사합니다! 메시지가 성공적으로 전송되었습니다. 곧 연락드릴게요.
              </div>
            )}
            {status === 'error' && Object.keys(errors).length === 0 && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                오류가 발생했습니다. 다시 시도해주세요.
              </div>
            )}

            {/* Submit */}
            <button type="submit" className="btn-primary w-full py-3.5">
              메시지 보내기
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
