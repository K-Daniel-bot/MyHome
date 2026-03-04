import React, { useEffect, useRef } from 'react'
import { ChatIcon, ArchitectIcon, CodeIcon, RocketIcon } from './icons/process'

const steps = [
  {
    id: '1',
    title: '무료 상담',
    description: '현재 업무 프로세스와 자동화 목표를 파악합니다. 상담 후 1시간 내 초기 견적을 드립니다.',
    icon: ChatIcon,
    duration: '1일',
  },
  {
    id: '2',
    title: '분석 · 설계',
    description: '기술 스택 선정, 에이전트 아키텍처 설계, 개발 로드맵 확정. 상세 기획서를 제공합니다.',
    icon: ArchitectIcon,
    duration: '3~5일',
  },
  {
    id: '3',
    title: '개발 · 테스트',
    description: '애자일 스프린트 방식으로 개발 후 스테이징 환경에서 실제 데이터로 검증합니다.',
    icon: CodeIcon,
    duration: '2~8주',
  },
  {
    id: '4',
    title: '배포 · 운영',
    description: '프로덕션 배포, 모니터링 대시보드 구성, 팀 교육, 배포 후 3개월 무료 버그픽스.',
    icon: RocketIcon,
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
                <div className="text-accent flex justify-center mb-4">
                  <step.icon />
                </div>

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
