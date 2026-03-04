import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Process from '@/components/Process'
import Stats from '@/components/Stats'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header sticky />
      <Hero />
      <Features />
      <Process />
      <Stats />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}
