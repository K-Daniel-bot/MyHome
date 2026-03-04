import React, { useEffect, useRef, useState } from 'react'
import ServiceModal, { ServiceDetail } from './ServiceModal'

/* ─── Icons ─── */
const BotIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>
)
const NetworkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>
)
const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
  </svg>
)
const AutomationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)
const TuneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>
)
const MonitorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
)
const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

/* ─── Service Data ─── */
interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  detail: ServiceDetail
}

const defaultServices: Service[] = [
  {
    id: '1',
    title: '커스텀 AI 에이전트 개발',
    description: '비즈니스 목표에 맞게 설계된 AI 에이전트가 반복 업무를 자동으로 처리합니다.',
    icon: <BotIcon />,
    detail: {
      id: '1',
      title: '커스텀 AI 에이전트 개발',
      longDescription: '단순 챗봇을 넘어 실제 업무를 수행하는 AI 에이전트를 만들어 드립니다. 자연어 이해, 외부 도구 연동, 장기 메모리 관리, 다단계 추론 능력을 갖춘 에이전트가 비즈니스 프로세스를 완전 자동화합니다.',
      features: [
        '자연어 명령으로 실제 작업 수행 (이메일, 검색, 데이터 처리)',
        '외부 API·데이터베이스·SaaS 도구 연동',
        '장기 메모리 및 대화 컨텍스트 관리',
        '다단계 추론 및 계획 수립 능력',
        '실시간 스트리밍 응답 및 진행 상황 추적',
      ],
      useCases: ['고객 서비스 자동화', '데이터 분석 에이전트', '문서 처리', '내부 헬프데스크', '법률 검토 보조'],
      techStack: ['Claude API', 'OpenAI GPT-4', 'LangChain', 'Function Calling', 'Python', 'TypeScript'],
    },
  },
  {
    id: '2',
    title: '멀티에이전트 오케스트레이션',
    description: '여러 AI 에이전트가 협력하여 복잡한 비즈니스 프로세스를 병렬로 처리합니다.',
    icon: <NetworkIcon />,
    detail: {
      id: '2',
      title: '멀티에이전트 오케스트레이션',
      longDescription: '단일 에이전트의 한계를 넘어 전문화된 여러 에이전트가 팀처럼 협력하는 시스템을 구축합니다. 연구·분석·실행 에이전트가 병렬로 작동해 복잡한 업무를 5배 빠르게 처리합니다.',
      features: [
        '에이전트 간 실시간 통신 및 태스크 위임',
        '병렬 처리로 처리 시간 획기적 단축',
        '전문화된 역할 분담 (연구/분석/실행/검증)',
        '실패 시 자동 재시도 및 대체 에이전트 활성화',
        '전체 파이프라인 모니터링 대시보드',
      ],
      useCases: ['연구 자동화', '소프트웨어 개발', '콘텐츠 파이프라인', '금융 분석', '공급망 최적화'],
      techStack: ['Claude Code', 'CrewAI', 'AutoGen', 'LangGraph', 'Redis', 'Celery'],
    },
  },
  {
    id: '3',
    title: 'RAG 지식베이스 구축',
    description: '기업 내부 데이터를 AI가 즉시 활용할 수 있는 검색 증강 생성 시스템을 구축합니다.',
    icon: <DatabaseIcon />,
    detail: {
      id: '3',
      title: 'RAG 지식베이스 구축',
      longDescription: '수만 건의 사내 문서, 매뉴얼, 규정을 AI가 정확히 검색하고 인용하는 지식베이스를 구축합니다. 환각(Hallucination) 없이 신뢰할 수 있는 답변을 제공합니다.',
      features: [
        '문서 자동 파싱·청크·임베딩 파이프라인',
        '하이브리드 검색 (벡터 + 키워드 BM25)',
        '출처 인용 기반 신뢰할 수 있는 답변',
        '실시간 문서 업데이트 및 재인덱싱',
        '접근 권한 기반 데이터 필터링',
      ],
      useCases: ['사내 지식 관리', '고객 FAQ 자동화', '컴플라이언스 체크', '기술 문서 Q&A', '법률 문서 검색'],
      techStack: ['Pinecone', 'Weaviate', 'pgvector', 'LlamaIndex', 'Unstructured.io', 'FastAPI'],
    },
  },
  {
    id: '4',
    title: 'AI 워크플로우 자동화',
    description: '반복적인 비즈니스 업무를 AI 에이전트 기반 완전 자동화 파이프라인으로 전환합니다.',
    icon: <AutomationIcon />,
    detail: {
      id: '4',
      title: 'AI 워크플로우 자동화',
      longDescription: '이메일 분류부터 보고서 생성, 데이터 입력까지 반복 업무를 AI가 처리합니다. 트리거 기반으로 자동 실행되며, 예외 상황 발생 시 사람에게 알림을 보내는 스마트 자동화 시스템입니다.',
      features: [
        '이벤트·스케줄·웹훅 트리거 기반 자동 실행',
        '조건부 분기 및 복잡한 비즈니스 로직 처리',
        '오류 자동 복구 및 재시도 메커니즘',
        'Slack·이메일·SMS 알림 통합',
        '실행 이력 및 감사 로그 완전 기록',
      ],
      useCases: ['이메일 자동 분류·응답', '보고서 자동 생성', '데이터 입력 자동화', '승인 프로세스', '인보이스 처리'],
      techStack: ['n8n', 'Make', 'Zapier', 'Python', 'Webhooks', 'AWS Lambda'],
    },
  },
  {
    id: '5',
    title: 'LLM 파인튜닝 & 최적화',
    description: '특정 도메인에 최적화된 소형 언어 모델로 비용을 90% 절감하고 정확도를 높입니다.',
    icon: <TuneIcon />,
    detail: {
      id: '5',
      title: 'LLM 파인튜닝 & 최적화',
      longDescription: '범용 LLM 대신 귀사의 데이터로 훈련된 특화 모델을 만들어 드립니다. 법률, 의료, 금융 등 전문 도메인에서 GPT-4 수준의 성능을 1/10 비용으로 구현합니다.',
      features: [
        '도메인 특화 훈련 데이터 수집 및 정제',
        'LoRA/QLoRA 기반 효율적 파인튜닝',
        '성능 벤치마킹 및 A/B 테스트',
        '추론 속도 최적화 (양자화, 증류)',
        '온프레미스 또는 클라우드 배포',
      ],
      useCases: ['법률 문서 분석', '의료 기록 처리', '금융 리포트 생성', '코드 자동완성', '다국어 번역'],
      techStack: ['Hugging Face', 'LoRA/QLoRA', 'OpenAI Fine-tuning', 'vLLM', 'ONNX', 'TensorRT'],
    },
  },
  {
    id: '6',
    title: 'AI 에이전트 모니터링',
    description: '배포된 AI 에이전트의 성능·비용·품질을 실시간으로 추적하고 최적화합니다.',
    icon: <MonitorIcon />,
    detail: {
      id: '6',
      title: 'AI 에이전트 모니터링',
      longDescription: 'AI 에이전트를 배포한 후가 진짜 시작입니다. 실시간 성능 추적, 이상 감지, 비용 최적화, 품질 평가 시스템으로 에이전트가 항상 최상의 상태를 유지하도록 관리합니다.',
      features: [
        '실시간 성능 대시보드 (레이턴시, 처리량)',
        'LLM 호출 비용 추적 및 최적화 제안',
        '응답 품질 자동 평가 (LLM-as-Judge)',
        '이상 탐지 및 자동 알림',
        '사용 패턴 분석 및 최적화 인사이트',
      ],
      useCases: ['프로덕션 에이전트 모니터링', 'API 비용 최적화', '품질 보증', '이상 탐지', '성능 튜닝'],
      techStack: ['LangSmith', 'Langfuse', 'Grafana', 'Prometheus', 'OpenTelemetry', 'Sentry'],
    },
  },
]

/* ─── Component ─── */
interface FeaturesProps {
  services?: Service[]
}

export default function Features({ services = defaultServices }: FeaturesProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null)

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
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section id="services" ref={sectionRef} className="section bg-primary">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Services</p>
            <h2 className="section-title">
              우리가 제공하는 <span className="gradient-text">AI 솔루션</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto mt-4">
              아이디어 단계부터 프로덕션 배포까지, AI 에이전트의 모든 것을 책임집니다
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="animate-on-scroll card-dark group flex flex-col"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/45 leading-relaxed text-sm flex-1">{service.description}</p>

                {/* 자세히 보기 */}
                <button
                  onClick={() => setSelectedService(service.detail)}
                  className="group/btn mt-6 flex items-center gap-1.5 text-accent text-sm font-medium cursor-pointer hover:gap-2.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:ring-offset-secondary rounded"
                  aria-label={`${service.title} 자세히 보기`}
                >
                  <span>자세히 보기</span>
                  <ArrowRightIcon />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  )
}
