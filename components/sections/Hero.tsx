import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  badge: 'Trusted by 500+ Pet Owners',
  headline: 'Smart Pet Boarding,',
  highlight: 'Simplified',
  subline: 'Furry Pet connects you with trusted home boarding hosts, giving your furry family members a safe, comfortable, and loving environment whenever you travel.',
  cta: { label: 'Book Boarding', href: '#booking' },
  secondary: { label: 'Learn More', href: '#how-it-works' },
  stats: [
    { value: '500+', label: 'Trusted Hosts' },
    { value: '2,400+', label: 'Happy Pets' },
    { value: '98%', label: 'Satisfaction Rate' },
  ],
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a14] pt-nav"
    >
      {/* Background depth layers */}
      <div className="absolute inset-0">
        {/* Primary ambient glow */}
        <div
          aria-hidden
          className="absolute top-[-20%] left-[10%] w-[700px] h-[700px] rounded-full bg-sky-500/20 blur-[180px] animate-float pointer-events-none"
        />
        {/* Secondary glow orb */}
        <div
          aria-hidden
          className="absolute bottom-[-20%] right-[10%] w-[600px] h-[600px] rounded-full bg-sky-600/15 blur-[150px] animate-float pointer-events-none"
          style={{ animationDelay: '3s' }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          }}
        />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <AnimateIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-white/10 bg-white/[0.05] text-sm text-sky-400 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {CONTENT.badge}
              </div>
            </AnimateIn>

            {/* Headline with gradient highlight */}
            <AnimateIn delay={80}>
              <h1 className="font-heading font-black text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.04em] text-white mb-6">
                {CONTENT.headline}{' '}
                <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                  {CONTENT.highlight}
                </span>
              </h1>
            </AnimateIn>

            {/* Subline */}
            <AnimateIn delay={160}>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-lg mb-10">
                {CONTENT.subline}
              </p>
            </AnimateIn>

            {/* CTAs */}
            <AnimateIn delay={240}>
              <div className="flex flex-wrap items-center gap-4">
                {/* Primary CTA with glow */}
                <div className="relative">
                  <div className="absolute inset-0 bg-sky-500/40 blur-2xl rounded-xl scale-110 pointer-events-none" />
                  <a
                    href={CONTENT.cta.href}
                    className="relative inline-flex items-center gap-2 px-8 py-4 font-body font-semibold bg-sky-500 text-white rounded-xl hover:bg-sky-400 transition-all ease-expo-out active:scale-[0.97] shadow-lg shadow-sky-500/25"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {CONTENT.cta.label}
                  </a>
                </div>
                <a
                  href={CONTENT.secondary.href}
                  className="inline-flex items-center gap-2 px-8 py-4 font-body font-medium border border-white/15 text-white/80 rounded-xl hover:border-white/30 hover:text-white transition-all ease-expo-out"
                >
                  {CONTENT.secondary.label}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </AnimateIn>

            {/* Stats */}
            <AnimateIn delay={320}>
              <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-white/10">
                {CONTENT.stats.map((stat) => (
                  <div key={stat.label} className="text-left">
                    <div className="font-heading font-black text-3xl text-sky-400 mb-0.5">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/40">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right: Floating UI mockup */}
          <AnimateIn delay={200} animation="scale-in" className="hidden lg:block relative">
            <div className="relative">
              {/* Main booking card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 shadow-card-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773894149237-ai-artificial-intelligence-improves-emai-600nw-2655586379.webp"
                      alt="Furry Pet logo"
                      className="h-8 w-auto object-contain"
                    />
                    <span className="text-sm text-white/50">Quick Booking</span>
                  </div>
                  <span className="text-xs text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                    Available Today
                  </span>
                </div>

                {/* Pet profile card */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-2xl">
                    🐕
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">Max</div>
                    <div className="text-sm text-white/40">Golden Retriever</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-sky-400 font-semibold">4.9★</div>
                    <div className="text-xs text-white/40">Top Rated</div>
                  </div>
                </div>

                {/* Host preview */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 mb-4">
                  <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 font-semibold">
                    SL
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">Sarah L.</div>
                    <div className="text-xs text-white/40">Verified Host • 2 years</div>
                  </div>
                  <div className="flex gap-1">
                    {['🐾', '🏠', '❤️'].map((emoji, i) => (
                      <span key={i} className="text-sm opacity-70">
                        {emoji}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price preview */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-sky-500/10 to-transparent border border-sky-500/20">
                  <div>
                    <div className="text-sm text-white/40">Daily Rate</div>
                    <div className="text-2xl font-heading font-bold text-white">RM 45</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-sky-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Includes Updates
                  </div>
                </div>
              </div>

              {/* Floating trust badge */}
              <div className="absolute -top-4 -right-4 rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-sm p-4 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Fully Insured</div>
                  <div className="text-xs text-white/50">Peace of mind</div>
                </div>
              </div>

              {/* Floating rating card */}
              <div className="absolute -bottom-6 -left-6 rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-sm p-4 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-xs text-white/50">
                  "Max was so happy here!"
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a14] to-transparent pointer-events-none" />
    </section>
  )
}