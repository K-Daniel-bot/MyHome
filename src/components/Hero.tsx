import React, { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const particles: Particle[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.35 + 0.08,
    }))

    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212,175,55,${p.opacity})`
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(212,175,55,${0.07 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    window.addEventListener('resize', resize, { passive: true })
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-primary">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* Hex grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
        aria-hidden="true"
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="container relative z-10 text-center pt-24 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" aria-hidden="true" />
            AI 에이전트 솔루션 전문 기업
          </div>

          {/* Title */}
          <h1 className="font-heading font-black leading-none mb-6 animate-slide-up">
            <span className="block text-white/60 text-3xl md:text-4xl font-medium mb-3">
              반복 업무는 AI에게,
            </span>
            <span className="gradient-text text-6xl md:text-8xl lg:text-9xl">
              AgentOS
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in">
            커스텀 AI 에이전트 개발부터 멀티에이전트 오케스트레이션까지, 비즈니스를 자동화합니다.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up mb-20">
            <a href="#services" className="btn-primary px-8 py-4 text-base">
              서비스 살펴보기
            </a>
            <a href="#contact" className="btn-secondary px-8 py-4 text-base">
              무료 상담 신청
            </a>
          </div>
        </div>

        {/* Agent Terminal Dashboard */}
        <div className="relative mx-auto max-w-2xl animate-fade-in">
          {/* Outer glow */}
          <div
            className="absolute -inset-10 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.06) 0%, transparent 70%)' }}
            aria-hidden="true"
          />

          {/* Window frame */}
          <div
            className="relative rounded-2xl overflow-hidden border border-white/10"
            style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)' }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.07]" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="flex gap-1.5" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="ml-2 text-white/25 text-xs font-mono tracking-wide">AgentOS Orchestrator v2.1</span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                <span className="text-accent text-xs font-medium">Live</span>
              </div>
            </div>

            {/* Agent rows */}
            <div className="p-5 font-mono text-sm space-y-4 text-left">
              {/* Agent 1 — running */}
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-0.5 flex-shrink-0">▶</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-white/70">researcher-agent</span>
                    <span className="text-white/20">·</span>
                    <span className="text-green-400 text-xs">실행 중</span>
                  </div>
                  <div className="text-white/25 text-xs mt-1 truncate">시장 데이터 수집 중... (48/100 건)</div>
                  <div className="mt-2 h-1 bg-white/[0.07] rounded-full overflow-hidden w-48 max-w-full">
                    <div className="h-full bg-accent rounded-full" style={{ width: '48%' }} />
                  </div>
                </div>
              </div>

              {/* Agent 2 — done */}
              <div className="flex items-start gap-3">
                <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-white/50">analyst-agent</span>
                    <span className="text-white/20">·</span>
                    <span className="text-accent text-xs">완료</span>
                  </div>
                  <div className="text-white/20 text-xs mt-1">경쟁사 분석 리포트 생성 완료 (1.2s)</div>
                </div>
              </div>

              {/* Agent 3 — waiting */}
              <div className="flex items-start gap-3">
                <span className="text-white/20 mt-0.5 flex-shrink-0">◷</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-white/30">writer-agent</span>
                    <span className="text-white/15">·</span>
                    <span className="text-white/25 text-xs">대기 중</span>
                  </div>
                  <div className="text-white/15 text-xs mt-1">이전 태스크 완료 대기...</div>
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div
              className="px-5 py-3 border-t border-white/[0.07] flex items-center gap-6"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" aria-hidden="true" />
                <span className="text-white/30 text-xs font-mono">에이전트 3개</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-white/30 text-xs font-mono">태스크 12개 완료</span>
              </div>
              <div className="ml-auto text-accent/60 text-xs font-mono">99.9% uptime</div>
            </div>
          </div>

          {/* Floating chips */}
          <div className="absolute -top-3 right-4 sm:right-10 px-3 py-1.5 rounded-full bg-accent text-black text-xs font-bold shadow-xl whitespace-nowrap">
            Claude + GPT-4 Powered
          </div>
          <div className="absolute -bottom-3 left-4 sm:left-10 px-3 py-1.5 rounded-full bg-surface border border-accent/30 text-accent text-xs font-medium whitespace-nowrap">
            멀티에이전트 오케스트레이션
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 flex flex-col items-center gap-2 text-white/20 animate-fade-in" aria-hidden="true">
          <span className="text-xs font-medium tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-accent/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
