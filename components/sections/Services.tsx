import AnimateIn from '@/components/ui/AnimateIn'
import { PawPrint, Shield, Camera, Heart, Clock, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Home Boarding',
    description: 'Safe, comfortable, and loving home environments where your pet can relax and thrive while you travel. Every boarding home prioritizes your pet\'s well-being, routines, and daily comfort.',
  },
  {
    icon: Shield,
    title: 'Verified Hosts',
    description: 'Every caretaker meets rigorous care standards through our verification process. Trust that your furry family member is in experienced, loving hands with regular quality assurance.',
  },
  {
    icon: Camera,
    title: 'Real-Time Updates',
    description: 'Stay connected and confident with transparent communication and regular updates. See exactly how your pet is doing through photos, messages, and care reports.',
  },
]

const trustBadges = [
  { icon: CheckCircle, label: 'Verified Hosts' },
  { icon: Heart, label: 'Loving Care' },
  { icon: Clock, label: '24/7 Support' },
]

const HEADING = 'Why Choose Furry Pet'
const SUBTEXT = 'Smart pet boarding designed around your furry family\'s comfort, safety, and happiness.'

export default function Services() {
  return (
    <section id="services" className="relative py-section bg-surface overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-700/8 blur-[120px]" />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
             backgroundRepeat: 'repeat',
             backgroundSize: '256px 256px',
           }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateIn className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-brand-500 mb-3 font-body">
            Our Services
          </p>
          <h2 className="font-heading font-black text-display-lg text-content-primary mb-4">
            {HEADING}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-content-secondary leading-relaxed font-body">
            {SUBTEXT}
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 100}>
              <div className="group relative h-full p-8 rounded-card-lg border border-white/8 bg-white/[0.02] hover:border-brand-500/40 hover:bg-white/[0.04] transition-all duration-300 ease-expo-out overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.03] transition-colors duration-500 rounded-card-lg" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-card bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all duration-300">
                    <svc.icon className="w-7 h-7 text-brand-500" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-content-primary mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-content-secondary leading-relaxed font-body">
                    {svc.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Trust badges row */}
        <AnimateIn delay={400} className="mt-16">
          <div className="flex flex-wrap justify-center gap-8 p-6 rounded-card-lg border border-white/8 bg-white/[0.02]">
            {trustBadges.map((badge, i) => (
              <div key={badge.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center">
                  <badge.icon className="w-5 h-5 text-brand-500" />
                </div>
                <span className="text-content-secondary font-body font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}