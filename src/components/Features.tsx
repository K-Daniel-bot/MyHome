import React, { useEffect, useRef } from 'react'

interface Feature {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

const PaintBrushIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const DevicePhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
)

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
)

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const defaultFeatures: Feature[] = [
  {
    id: '1',
    icon: <ZapIcon />,
    title: '극도로 빠름',
    description: 'Next.js 최적화와 엣지 캐싱으로 Lighthouse 98+ 성능 점수를 달성합니다.',
  },
  {
    id: '2',
    icon: <PaintBrushIcon />,
    title: '아름다운 디자인',
    description: '사용자 경험을 최우선으로 한 세련되고 직관적인 인터페이스를 설계합니다.',
  },
  {
    id: '3',
    icon: <ShieldIcon />,
    title: '철저한 보안',
    description: 'OWASP 기준 보안 관행, 입력 검증, 안전한 API 통신을 기본으로 구현합니다.',
  },
  {
    id: '4',
    icon: <DevicePhoneIcon />,
    title: '모바일 우선',
    description: '375px부터 4K 디스플레이까지 모든 기기에서 완벽한 경험을 제공합니다.',
  },
  {
    id: '5',
    icon: <CodeIcon />,
    title: '클린 코드',
    description: 'TypeScript, 테스트, 문서화로 유지보수 가능하고 확장 가능한 코드베이스.',
  },
  {
    id: '6',
    icon: <ChartIcon />,
    title: '데이터 기반',
    description: '분석 도구 통합으로 사용자 행동 인사이트와 비즈니스 성과를 추적합니다.',
  },
]

interface FeaturesProps {
  features?: Feature[]
}

export default function Features({ features = defaultFeatures }: FeaturesProps) {
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

  return (
    <section id="services" ref={sectionRef} className="section bg-primary">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Services</p>
          <h2 className="section-title">
            우리가 제공하는 <span className="gradient-text">서비스</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto mt-4">
            최신 기술과 창의적인 접근으로 비즈니스 목표를 달성합니다
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="animate-on-scroll card-dark group cursor-default"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/45 leading-relaxed text-sm">{feature.description}</p>
              <div className="mt-5 flex items-center gap-1.5 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>자세히 보기</span>
                <ArrowRightIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
