import React, { useEffect, useRef, useState } from 'react'

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
)

const faqs = [
  {
    id: '1',
    question: '개발 기간은 얼마나 걸리나요?',
    answer: '프로젝트 규모에 따라 다릅니다. 단순 AI 에이전트(단일 태스크 자동화)는 2-4주, 멀티에이전트 오케스트레이션 시스템은 6-12주가 일반적입니다. 상담 후 정확한 일정을 제공합니다.',
  },
  {
    id: '2',
    question: '비용은 어떻게 산정되나요?',
    answer: '프로젝트 범위를 기반으로 한 고정가 계약과 스프린트 단위 계약 두 가지 방식이 있습니다. 무료 상담 후 1시간 이내에 초기 견적을 드립니다. 숨겨진 추가 비용은 없습니다.',
  },
  {
    id: '3',
    question: '기업 데이터 보안은 어떻게 보장되나요?',
    answer: '온프레미스 배포 옵션을 제공하므로 데이터가 외부로 나가지 않습니다. 모든 통신은 암호화되며, NDA를 기본으로 체결합니다. LLM API에 고객 데이터가 학습 데이터로 사용되지 않도록 설정합니다.',
  },
  {
    id: '4',
    question: '어떤 LLM·기술 스택을 사용하나요?',
    answer: 'Claude API, OpenAI GPT-4, Gemini 등 요구사항에 맞는 LLM을 선택합니다. 오케스트레이션은 LangChain, LangGraph, CrewAI를 활용하며, 인프라는 AWS/GCP/온프레미스 모두 지원합니다.',
  },
  {
    id: '5',
    question: '배포 후 유지보수 및 운영 지원은 있나요?',
    answer: '배포 후 3개월간 무료 버그픽스를 제공합니다. 이후에는 월 단위 운영 지원 계약을 체결할 수 있습니다. 모니터링 대시보드를 통해 에이전트 상태를 실시간으로 직접 확인하실 수 있습니다.',
  },
  {
    id: '6',
    question: 'AI 에이전트를 도입할 준비가 됐는지 모르겠어요.',
    answer: '걱정 마세요. 무료 1시간 상담에서 현재 업무 프로세스를 분석하고 AI 도입 준비도를 진단해 드립니다. 도입이 불필요하거나 시기상조라고 판단되면 솔직하게 말씀드립니다. 모든 고객에게 AI를 권유하지 않습니다.',
  },
]

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [openId, setOpenId] = useState<string | null>(null)

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

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="faq" ref={sectionRef} className="section bg-secondary">
      <div className="container max-w-3xl">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="section-title">
            자주 묻는 <span className="gradient-text">질문</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto mt-4">
            도입 전 궁금한 점을 모았습니다. 더 있다면 직접 물어보세요.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className="animate-on-scroll overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-accent/30"
                style={{
                  transitionDelay: `${index * 70}ms`,
                  boxShadow: isOpen ? '0 0 0 1px rgba(212,175,55,0.2)' : undefined,
                }}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-white/85 text-base leading-snug">{item.question}</span>
                  <span
                    className={`text-accent transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                  >
                    <PlusIcon />
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-white/50 text-sm leading-relaxed border-t border-border/50 pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-on-scroll" style={{ transitionDelay: '480ms' }}>
          <p className="text-white/35 text-sm mb-4">해결되지 않은 질문이 있으신가요?</p>
          <a href="#contact" className="btn-secondary px-6 py-3">
            직접 문의하기
          </a>
        </div>
      </div>
    </section>
  )
}
