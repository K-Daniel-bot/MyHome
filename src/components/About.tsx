import React, { useEffect, useRef } from 'react'

interface AboutProps {
  name?: string
  role?: string
  bio?: string
}

const skills = [
  'Claude API', 'OpenAI GPT-4', 'LangChain', 'LlamaIndex',
  'Pinecone', 'Python', 'TypeScript', 'Docker',
  'AWS', 'FastAPI',
]

const highlights = [
  '멀티에이전트 오케스트레이션 시스템 구축 전문',
  'RAG 파이프라인 설계 및 프로덕션 배포 경험',
  'LLM 파인튜닝 및 추론 최적화 (비용 90% 절감)',
  '스타트업·대기업 50개사 AI 도입 컨설팅',
]

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

export default function About({
  name = 'Daniel',
  role = 'AI 에이전트 솔루션 아키텍트',
  bio = 'Claude, GPT-4 등 최신 LLM 기반의 AI 에이전트 시스템을 3년간 전문적으로 개발해왔습니다. 단순 자동화를 넘어 비즈니스의 의사결정까지 보조하는 지능형 에이전트 구현이 전문 영역입니다.',
}: AboutProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(
            '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right'
          ).forEach((child) => child.classList.add('in-view'))
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Visual — Agent node diagram */}
          <div className="animate-on-scroll-left flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute -inset-4 rounded-2xl blur-xl opacity-30 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)' }}
                aria-hidden="true"
              />
              {/* Frame */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 bg-surface rounded-2xl border border-accent/20 overflow-hidden flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(212,175,55,0.5) 0%, transparent 65%)' }}
                  aria-hidden="true"
                />
                {/* Agent node visual */}
                <div className="relative flex flex-col items-center gap-4" aria-hidden="true">
                  {/* Center node */}
                  <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent/50 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  </div>
                  {/* Sub nodes */}
                  <div className="flex gap-5">
                    {['R', 'A', 'W'].map((label) => (
                      <div key={label} className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
                        <span className="text-white/40 text-xs font-mono font-bold">{label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/20 text-xs font-mono">orchestrator</p>
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-black px-4 py-2 rounded-xl font-bold text-sm shadow-xl">
                3년+ 경력
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-on-scroll-right">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">About</p>
            <h2 className="section-title mb-2">
              {name} <span className="gradient-text">소개</span>
            </h2>
            <p className="text-accent font-medium mb-5">{role}</p>
            <p className="text-white/55 text-lg leading-relaxed mb-8">{bio}</p>

            <ul className="space-y-3 mb-8">
              {highlights.map((point) => (
                <li key={point} className="flex items-start gap-3 text-white/65">
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mb-8">
              <p className="text-white/35 text-xs font-medium uppercase tracking-widest mb-3">기술 스택</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full border border-accent/20 bg-accent/5 text-white/65 hover:border-accent/50 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">프로젝트 시작하기</a>
              <a href="#services" className="btn-secondary">서비스 보기</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
