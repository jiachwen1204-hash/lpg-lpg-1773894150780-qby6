import AnimateIn from '@/components/ui/AnimateIn'
import { CheckCircle, Heart, Shield, Home, MessageCircle, Calendar } from 'lucide-react'

const CONTENT = {
  label: 'About Furry Pet',
  heading: 'Smart Pet Boarding,\nSimplified.',
  headingAccent: 'Simplified.',
  paragraphs: [
    'Furry Pet is a modern pet-care platform that connects pet owners with trusted home boarding services through a seamless and convenient digital experience. Designed to simplify pet care arrangements, Furry Pet enables owners to easily find safe, comfortable, and loving home environments for their pets whenever they travel or need temporary care.',
    'By combining technology with genuine love for animals, Furry Pet delivers a smarter, more personal way to arrange home-based pet boarding.',
  ],
  mission: 'Our platform focuses on quality, reliability, and peace of mind by ensuring every boarding home meets care standards that prioritize pets\' well-being, routines, and comfort.',
  values: [
    {
      icon: Shield,
      title: 'Quality Standards',
      description: 'Every boarding home meets rigorous care standards',
    },
    {
      icon: Heart,
      title: 'Loving Care',
      description: 'Safe, comfortable environments for your furry family',
    },
    {
      icon: MessageCircle,
      title: 'Transparent Updates',
      description: 'Regular communication keeps you connected',
    },
    {
      icon: Calendar,
      title: 'Easy Booking',
      description: 'Simple scheduling that fits your travel plans',
    },
  ],
  stats: [
    { value: '100%', label: 'Pet Safety Priority' },
    { value: '24/7', label: 'Owner Support' },
    { value: '5★', label: 'Owner Satisfaction' },
  ],
  cta: { label: 'Book Boarding', href: '#booking' },
}

export default function About() {
  return (
    <section id="about" className="relative py-section bg-[#0a0a14] overflow-hidden">
      {/* Background depth layers */}
      <div className="absolute inset-0">
        {/* Primary glow orb */}
        <div className="absolute top-[-30%] left-[-10%] w-[700px] h-[700px] rounded-full bg-sky-500/10 blur-[180px] animate-float pointer-events-none" />
        {/* Secondary glow orb */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-sky-600/8 blur-[150px] animate-float [animation-delay:3s] pointer-events-none" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)' }} />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '256px 256px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimateIn>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Trusted Home Boarding for Your Furry Family
            </span>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h2 className="font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.03em] text-white mb-6">
              Smart Pet Boarding,{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 bg-[length:200%_auto] animate-shimmer">
                Simplified.
              </span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="text-lg text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
              We connect pet owners with trusted home boarding services through a seamless, convenient digital experience. Every stay is designed around your pet&apos;s comfort and well-being.
            </p>
          </AnimateIn>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Visual side */}
          <AnimateIn direction="left" className="relative">
            <div className="relative">
              {/* Main card */}
              <div className="relative rounded-card-lg bg-white/[0.03] border border-white/10 p-8 backdrop-blur-sm overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
                
                {/* Pet care illustration placeholder */}
                <div className="aspect-square rounded-card bg-gradient-to-br from-sky-500/10 to-sky-600/5 flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.15),transparent_60%)]" />
                  <div className="text-center relative z-10">
                    <div className="text-6xl mb-4">🐾</div>
                    <div className="text-white/60 text-sm font-medium">Happy Pets, Happy Homes</div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                  {CONTENT.stats.map((stat, i) => (
                    <div key={i} className="text-center p-4 rounded-card bg-white/[0.03] border border-white/5">
                      <div className="font-heading font-black text-2xl text-sky-400 mb-1">{stat.value}</div>
                      <div className="text-xs text-white/40">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 card-glass p-4 animate-float rounded-card-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center">
                    <Home className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Trusted Hosts</div>
                    <div className="text-xs text-white/50">Verified & Screened</div>
                  </div>
                </div>
              </div>

              {/* Floating quote */}
              <div className="absolute -bottom-4 -left-4 card-glass p-4 animate-float [animation-delay:1.5s] rounded-card-lg max-w-[200px]">
                <div className="text-2xl text-sky-400 mb-1">&ldquo;</div>
                <div className="text-xs text-white/70 leading-relaxed">Peace of mind while we travel</div>
              </div>
            </div>
          </AnimateIn>

          {/* Content side */}
          <AnimateIn direction="right" delay={100}>
            <div className="lg:pt-8">
              <p className="text-sm font-medium tracking-widest uppercase text-sky-400 mb-4">
                {CONTENT.label}
              </p>
              
              <h3 className="font-heading font-black text-display-xl text-white mb-6 leading-tight">
                About Furry Pet
              </h3>
              
              {CONTENT.paragraphs.map((p, i) => (
                <p key={i} className="text-white/60 leading-relaxed mb-6 font-light">
                  {p}
                </p>
              ))}

              {/* Mission highlight */}
              <div className="relative p-6 rounded-card-lg bg-sky-500/5 border border-sky-500/20 mb-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-sky-600 rounded-full" />
                <p className="text-white/80 leading-relaxed pl-4 font-normal">
                  {CONTENT.mission}
                </p>
              </div>

              <a
                href={CONTENT.cta.href}
                className="inline-flex items-center gap-2 px-8 py-4 font-body font-semibold bg-sky-500 text-white rounded-card hover:bg-sky-600 hover:shadow-glow transition-all ease-expo-out group"
              >
                {CONTENT.cta.label}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </AnimateIn>
        </div>

        {/* Values grid */}
        <div className="mb-16">
          <AnimateIn>
            <h3 className="font-heading font-bold text-display-lg text-white text-center mb-12">
              What We Stand For
            </h3>
          </AnimateIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTENT.values.map((value, i) => (
              <AnimateIn key={value.title} delay={i * 100}>
                <div className="group relative p-6 rounded-card-lg bg-white/[0.02] border border-white/8 hover:border-sky-500/30 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden">
                  {/* Top accent line on hover */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/0 to-transparent group-hover:via-sky-500/60 transition-all duration-300" />
                  
                  {/* Inner glow on hover */}
                  <div className="absolute inset-0 bg-sky-500/0 group-hover:bg-sky-500/[0.03] transition-colors duration-300 rounded-card-lg" />
                  
                  <div className="relative">
                    <div className="w-12 h-12 rounded-card bg-sky-500/10 flex items-center justify-center mb-4 group-hover:bg-sky-500/20 group-hover:scale-110 transition-all duration-300">
                      <value.icon className="w-6 h-6 text-sky-400" />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-white mb-2">{value.title}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <AnimateIn>
          <div className="relative p-8 rounded-card-lg bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-sky-500/10 border border-sky-500/20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.1),transparent_70%)]" />
            <div className="relative z-10">
              <h4 className="font-heading font-bold text-display-md text-white mb-3">
                Ready to experience smarter pet boarding?
              </h4>
              <p className="text-white/60 mb-6 max-w-lg mx-auto">
                Join thousands of pet owners who trust Furry Pet for safe, loving home-based care.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#booking"
                  className="relative inline-flex items-center gap-2 px-8 py-4 font-body font-semibold bg-sky-500 text-white rounded-card hover:bg-sky-600 transition-all ease-expo-out group"
                >
                  <div className="absolute inset-0 bg-sky-500/40 blur-xl rounded-pill scale-110 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10">Book Boarding</span>
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 font-body font-medium text-white/80 border border-white/20 rounded-card hover:border-white/40 hover:bg-white/5 transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}