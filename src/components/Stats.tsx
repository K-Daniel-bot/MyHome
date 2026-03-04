import React, { useEffect, useRef, useState } from 'react'

interface Stat {
  id: string
  label: string
  value: number
  suffix: string
  description: string
}

const stats: Stat[] = [
  { id: '1', label: '배포된 AI 에이전트', value: 150, suffix: '+', description: '다양한 산업 분야' },
  { id: '2', label: '기업 고객사', value: 50, suffix: '+', description: '스타트업부터 대기업' },
  { id: '3', label: '시스템 가동률', value: 99, suffix: '.9%', description: '고가용성 SLA 보장' },
  { id: '4', label: '평균 효율 향상', value: 5, suffix: 'x', description: '기존 대비 처리 속도' },
]

function useCounter(target: number, duration: number, active: boolean): number {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])

  return count
}

function StatItem({ stat, active, delay }: { stat: Stat; active: boolean; delay: number }) {
  const count = useCounter(stat.value, 1800, active)
  return (
    <div
      className="text-center animate-on-scroll cursor-default"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-5xl md:text-6xl font-heading font-black gradient-text mb-2 tabular-nums">
        {count}{stat.suffix}
      </div>
      <div className="text-white/75 font-semibold mb-1.5">{stat.label}</div>
      <div className="text-white/30 text-sm">{stat.description}</div>
    </div>
  )
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.animate-on-scroll').forEach((child) =>
            child.classList.add('in-view')
          )
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Mesh gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 20% 50%, rgba(212,175,55,0.07) 0%, transparent 60%), ' +
            'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(212,175,55,0.05) 0%, transparent 60%), ' +
            '#0d0d0d',
        }}
        aria-hidden="true"
      />

      {/* Divider lines */}
      <div className="absolute inset-y-0 left-0 right-0 border-y border-white/5 pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, i) => (
            <StatItem key={stat.id} stat={stat} active={active} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
