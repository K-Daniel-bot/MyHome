import React, { useEffect, useRef } from 'react'

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
)
const ArchitectIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
  </svg>
)
const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
)
const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
)

const steps = [
  {
    id: '1',
    title: '무료 상담',
    description: '현재 업무 프로세스와 자동화 목표를 파악합니다. 상담 후 1시간 내 초기 견적을 드립니다.',
    icon: <ChatIcon />,
    duration: '1일',
  },
  {
    id: '2',
    title: '분석 · 설계',
    description: '기술 스택 선정, 에이전트 아키텍처 설계, 개발 로드맵 확정. 상세 기획서를 제공합니다.',
    icon: <ArchitectIcon />,
    duration: '3~5일',
  },
  {
    id: '3',
    title: '개발 · 테스트',
    description: '애자일 스프린트 방식으로 개발 후 스테이징 환경에서 실제 데이터로 검증합니다.',
    icon: <CodeIcon />,
    duration: '2~8주',
  },
  {
    id: '4',
    title: '배포 · 운영',
    description: '프로덕션 배포, 모니터링 대시보드 구성, 팀 교육, 배포 후 3개월 무료 버그픽스.',
    icon: <RocketIcon />,
    duration: '상시',
  },
]

export default function Process() {
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
    <section id="process" ref={sectionRef} className="section bg-secondary">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Process</p>
          <h2 className="section-title">
            어떻게 <span className="gradient-text">시작하나요?</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto mt-4">
            상담부터 프로덕션 배포까지, 검증된 4단계 프로세스로 진행합니다
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.25) 20%, rgba(212,175,55,0.25) 80%, transparent)' }}
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="animate-on-scroll card-dark relative z-10 text-center"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Number badge */}
                <div className="w-11 h-11 rounded-full bg-accent text-black font-heading font-black text-sm flex items-center justify-center mx-auto mb-5 shadow-lg">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="text-accent flex justify-center mb-4">{step.icon}</div>

                {/* Text */}
                <h3 className="font-heading text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{step.description}</p>

                {/* Duration badge */}
                <span className="inline-block px-3 py-1 text-xs rounded-full border border-accent/25 bg-accent/5 text-accent/70">
                  {step.duration}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14 animate-on-scroll" style={{ transitionDelay: '480ms' }}>
          <a href="#contact" className="btn-primary px-8 py-4">
            무료 상담 신청하기
          </a>
        </div>
      </div>
    </section>
  )
}
