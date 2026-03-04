import React, { useState, useEffect } from 'react'

interface HeaderProps {
  sticky?: boolean
}

export default function Header({ sticky = true }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: '홈', href: '#home' },
    { label: '소개', href: '#about' },
    { label: '서비스', href: '#services' },
    { label: '통계', href: '#stats' },
    { label: '연락처', href: '#contact' },
  ]

  return (
    <header
      className={`${sticky ? 'sticky top-0 z-50' : ''} transition-all duration-300 ${
        isScrolled
          ? 'bg-black/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex justify-between items-center py-5">
        {/* Logo */}
        <a href="#home" className="font-heading text-2xl font-bold gradient-text cursor-pointer">
          MyHome
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-white/60 hover:text-white font-medium transition-colors duration-200 group"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm py-2 px-5">
            시작하기
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="메뉴 열기/닫기"
          aria-expanded={isMenuOpen}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        } bg-black/95 backdrop-blur-md border-b border-white/10`}
      >
        <nav className="container py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/60 hover:text-white font-medium px-4 py-3 rounded-lg hover:bg-white/5 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 px-4">
            <a
              href="#contact"
              className="btn-primary w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              시작하기
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
