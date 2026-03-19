import AnimateIn from '@/components/ui/AnimateIn'

const stats = [
  { value: '500+', label: 'Happy Pets Boarded' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '98%', label: 'Owner Satisfaction' },
  { value: '24/7', label: 'Support Available' },
]

const testimonials = [
  {
    quote: 'Furry Pet gave us complete peace of mind during our vacation. The boarding home was clean, loving, and they sent us daily photos of our Max playing happily. Coming home to a happy, well-cared-for pup made the trip even better.',
    author: 'Sarah Chen',
    role: 'Pet Parent, 2 Golden Retrievers',
    avatar: 'SC',
  },
  {
    quote: 'As first-time users of home boarding, we were nervous. But Furry Pet made everything so easy — from booking to getting matched with the perfect host family. Our Luna was treated like royalty and we will definitely use this service again.',
    author: 'Michael Tan',
    role: 'Pet Parent, 1 French Bulldog',
    avatar: 'MT',
  },
  {
    quote: 'The regular updates and transparent communication transformed how we think about pet care. We knew exactly how our cats were doing every day. Furry Pet has truly simplified pet boarding for busy pet parents like us.',
    author: 'Emily Wong',
    role: 'Pet Parent, 2 Persian Cats',
    avatar: 'EW',
  },
  {
    quote: 'Finding a trustworthy boarding service was always stressful until we discovered Furry Pet. The care standards are exceptional, and knowing our fur babies are in safe, loving hands lets us travel worry-free.',
    author: 'David Lim',
    role: 'Pet Parent, 1 Beagle',
    avatar: 'DL',
  },
]

const trustedBy = [
  'Pet Care Association',
  'Verified Hosts Network',
  'Vet-Approved Standards',
  'Pet Insurance Partners',
  'Local Vet Clinics',
  'Animal Welfare Alliance',
]

export default function SocialProof() {
  return (
    <section className="py-section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-[#F8FAFB] to-surface" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Stats Section */}
        <div className="mb-20">
          <AnimateIn className="text-center mb-10">
            <p className="text-sm text-brand-500 uppercase tracking-widest font-medium mb-4">
              Trusted by Pet Parents
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-content-primary">
              Peace of Mind, One Booking at a Time
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <div className="text-center p-6 rounded-card-lg border border-surface-border bg-surface relative group hover:border-brand-500/30 transition-all duration-300">
                  {/* Glow on hover */}
                  <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/5 rounded-card-lg transition-all duration-300" />
                  
                  {/* Top accent */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="text-4xl md:text-5xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-brand-700 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-content-muted font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Trusted By */}
        <div className="mb-20">
          <AnimateIn className="text-center mb-10">
            <p className="text-sm text-content-muted uppercase tracking-widest">
              Backed by Industry Standards
            </p>
          </AnimateIn>

          {/* Marquee */}
          <div className="relative overflow-hidden">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />
            
            <div className="flex gap-6 animate-marquee w-max">
              {[...trustedBy, ...trustedBy].map((name, i) => (
                <div
                  key={i}
                  className="whitespace-nowrap px-6 py-3 rounded-card border border-surface-border bg-surface text-content-secondary font-medium text-sm hover:border-brand-500/30 hover:text-brand-500 transition-colors duration-300"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <AnimateIn className="text-center mb-12">
            <p className="text-sm text-brand-500 uppercase tracking-widest font-medium mb-4">
              Happy Pet Parents
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-content-primary">
              Stories from Our Furry Family
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <div className="h-full p-8 rounded-card-lg border border-surface-border bg-surface relative group hover:border-brand-500/40 hover:shadow-card transition-all duration-300">
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.02] rounded-card-lg transition-all duration-500" />
                  
                  {/* Top accent line */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 text-brand-500/20 text-6xl font-serif leading-none select-none">
                    &ldquo;
                  </div>
                  
                  <div className="relative">
                    {/* Star rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <svg
                          key={j}
                          className="w-5 h-5 text-brand-500 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-content-primary leading-relaxed mb-6 text-lg font-light">
                      {t.quote}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      {/* Avatar placeholder */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-heading font-bold text-sm">
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-content-primary">{t.author}</div>
                        <div className="text-sm text-content-muted">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}