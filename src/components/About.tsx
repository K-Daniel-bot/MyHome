import React, { useEffect, useRef } from 'react'

interface AboutProps {
  name?: string
  role?: string
  bio?: string
}

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'Tailwind CSS', 'PostgreSQL', 'AWS', 'Figma',
  'GraphQL', 'Docker',
]

const highlights = [
  '최신 웹 기술 (React, Next.js, TypeScript)',
  '사용자 중심 디자인 원칙',
  '지속적인 학습과 기술 향상',
  '프리랜스 및 장기 프로젝트 가능',
]

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

export default function About({
  name = 'Daniel',
  role = '풀스택 웹 개발자 & UI/UX 디자이너',
  bio = '5년 이상의 경험을 바탕으로 비즈니스의 목표를 달성하는 웹 솔루션을 만들어 드립니다. 코드 품질과 사용자 경험 모두를 중요시하며, 최신 기술 트렌드를 항상 따라갑니다.',
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
          {/* Profile Image */}
          <div className="animate-on-scroll-left flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute -inset-4 rounded-2xl blur-xl opacity-30"
                style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)' }}
                aria-hidden="true"
              />
              {/* Frame */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 bg-surface rounded-2xl border border-accent/20 overflow-hidden flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 50% 40%, rgba(212,175,55,0.5) 0%, transparent 65%)',
                  }}
                  aria-hidden="true"
                />
                <div className="relative text-center">
                  <div className="w-24 h-24 rounded-full bg-accent/10 border-2 border-accent/25 flex items-center justify-center mx-auto mb-3">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-accent/40" aria-hidden="true">
                      <path d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" />
                    </svg>
                  </div>
                  <p className="text-white/25 text-sm">프로필 이미지</p>
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-black px-4 py-2 rounded-xl font-bold text-sm shadow-xl">
                5년+ 경력
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-on-scroll-right">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">About Me</p>
            <h2 className="section-title mb-2">
              {name} <span className="gradient-text">소개</span>
            </h2>
            <p className="text-accent font-medium mb-5">{role}</p>
            <p className="text-white/55 text-lg leading-relaxed mb-8">{bio}</p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((point) => (
                <li key={point} className="flex items-start gap-3 text-white/65">
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Skills */}
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

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">프로젝트 시작하기</a>
              <a href="#" className="btn-secondary">이력서 다운로드</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
