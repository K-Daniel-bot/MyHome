import React, { useEffect, useRef } from 'react'

interface HeroProps {
  greeting?: string
  name?: string
  subtitle?: string
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export default function Hero({
  greeting = '안녕하세요,',
  name = 'Daniel입니다',
  subtitle = '웹 개발과 디자인으로 아름다운 디지털 경험을 만들어 드립니다.',
}: HeroProps) {
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

    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
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

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(212,175,55,${0.08 * (1 - dist / 130)})`
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 -left-48 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-48 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" aria-hidden="true" />
            풀스택 웹 개발자 &amp; UI/UX 디자이너
          </div>

          {/* Title */}
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-6 animate-slide-up">
            <span className="block text-white/80 text-4xl md:text-5xl font-medium mb-2">{greeting}</span>
            <span className="gradient-text">{name}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a href="#about" className="btn-primary px-8 py-4 text-base">
              저를 소개합니다
            </a>
            <a href="#contact" className="btn-secondary px-8 py-4 text-base">
              프로젝트 의뢰
            </a>
          </div>

          {/* Scroll cue */}
          <div className="mt-24 flex flex-col items-center gap-2 text-white/20 animate-fade-in" aria-hidden="true">
            <span className="text-xs font-medium tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-accent/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
