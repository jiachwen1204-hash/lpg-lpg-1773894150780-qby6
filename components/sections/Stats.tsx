'use client'
import { useEffect, useRef, useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'

const stats = [
  { value: 2500,  suffix: '+', label: 'Happy Pet Parents' },
  { value: 150,   suffix: '+', label: 'Trusted Hosts' },
  { value: 8000,  suffix: '+', label: 'Stays Booked' },
  { value: 4.9,   suffix: '★', label: 'Average Rating' },
]

function CountUp({ target, suffix, decimals = 0 }: { target: number; suffix: string; decimals?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.unobserve(el)
      const duration = 1800
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = eased * target
        setCount(decimals > 0 ? Math.round(current * 10) / 10 : Math.round(current))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, decimals])

  return <span ref={ref}>{decimals > 0 ? count.toFixed(1) : count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="relative py-section-lg overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0f0f13]" />
      
      {/* Ambient glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-sky-500/8 blur-[180px] pointer-events-none" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <AnimateIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Trusted by Thousands of Pet Families
          </span>
          <h2 className="font-heading font-bold text-display-xl text-white max-w-2xl mx-auto">
            Numbers That Speak to{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 bg-[length:200%_auto] animate-shimmer">
              Peace of Mind
            </span>
          </h2>
        </AnimateIn>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100} className="relative group">
              {/* Card background */}
              <div className="relative rounded-2xl p-8 border border-white/8 bg-white/[0.03] overflow-hidden transition-all duration-500 hover:border-sky-500/30 hover:bg-white/[0.06]">
                {/* Top accent glow on hover */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Inner glow on hover */}
                <div className="absolute inset-0 bg-sky-500/0 group-hover:bg-sky-500/[0.02] transition-colors duration-500 rounded-2xl" />
                
                {/* Content */}
                <div className="relative">
                  {/* Large background number */}
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 font-heading font-black text-[6rem] leading-none text-sky-500/5 select-none pointer-events-none">
                    {stat.value}{stat.suffix}
                  </span>
                  
                  {/* Stat value */}
                  <div className="relative">
                    <div className="font-heading font-black text-[clamp(2.5rem,5vw,3.5rem)] leading-[1] mb-3 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                      <CountUp target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                    </div>
                    <div className="text-sm md:text-base text-white/60 font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom trust indicators */}
        <AnimateIn delay={500} className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {[
            { icon: '🛡️', text: 'Vetted Hosts' },
            { icon: '📱', text: 'Real-time Updates' },
            { icon: '💬', text: '24/7 Support' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3 text-white/50">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </AnimateIn>
      </div>
    </section>
  )
}