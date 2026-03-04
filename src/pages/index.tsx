import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header sticky />
      <Hero />
      <Features />
      <Stats />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
