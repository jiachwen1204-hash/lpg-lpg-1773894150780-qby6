import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  eyebrow: 'Give Them the Care They Deserve',
  heading: 'Book Peace of Mind for Your Furry Family',
  subtext: 'Join thousands of pet parents who trust Furry Pet for safe, loving home boarding. Your companion deserves a comfortable stay while you\'re away.',
  cta: { label: 'Book Boarding', href: '#booking' },
  secondary: { label: 'See How It Works', href: '#how-it-works' },
}

export default function CTA() {
  return (
    <section className="relative py-section-lg overflow-hidden bg-[#0f0f13]">
      {/* Background depth layers */}
      <div className="absolute inset-0">
        {/* Primary ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-500/15 blur-[180px] animate-pulse-glow pointer-events-none" />
        {/* Secondary subtle glow */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-400/10 blur-[120px] pointer-events-none" />
        {/* Dot grid texture */}
        <div 
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          }}
        />
        {/* Noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />
      </div>

      {/* Gradient top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimateIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-brand-400 tracking-wide">
              Trusted by 2,500+ Pet Parents
            </span>
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-400 mb-6">
            {CONTENT.eyebrow}
          </p>
        </AnimateIn>

        <AnimateIn delay={200}>
          <h2 className="font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.03em] mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/70">
              {CONTENT.heading.split(' ').slice(0, 4).join(' ')}
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400 bg-[length:200%_auto] animate-shimmer">
              {CONTENT.heading.split(' ').slice(4).join(' ')}
            </span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={300}>
          <p className="text-lg md:text-xl text-content-secondary/80 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            {CONTENT.subtext}
          </p>
        </AnimateIn>

        <AnimateIn delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Primary CTA with glow effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500/40 blur-2xl rounded-card scale-110 pointer-events-none" />
              <a
                href={CONTENT.cta.href}
                className="relative inline-flex items-center gap-3 px-10 py-5 font-body font-semibold text-lg bg-brand-500 text-content-inverse rounded-card hover:bg-brand-600 hover:shadow-glow transition-all duration-300 ease-expo-out active:scale-[0.97]"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {CONTENT.cta.label}
              </a>
            </div>

            {/* Secondary CTA */}
            <a
              href={CONTENT.secondary.href}
              className="group inline-flex items-center gap-3 px-8 py-5 font-body font-medium text-base border border-surface-border text-content-secondary rounded-card hover:border-brand-500/40 hover:text-brand-400 hover:bg-brand-500/5 transition-all duration-300 ease-expo-out"
            >
              {CONTENT.secondary.label}
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </AnimateIn>

        {/* Trust indicators */}
        <AnimateIn delay={500}>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-10 border-t border-white/[0.06]">
            {[
              { icon: '🏠', label: 'Vetted Hosts' },
              { icon: '📸', label: 'Daily Updates' },
              { icon: '💚', label: 'Insured Care' },
              { icon: '⭐', label: '5-Star Rated' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 text-content-muted">
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
    </section>
  )
}