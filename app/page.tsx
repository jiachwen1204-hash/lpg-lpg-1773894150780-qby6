import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f13]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f13]/80 backdrop-blur-xl border-b border-[#2a2a3a]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773894149237-ai-artificial-intelligence-improves-emai-600nw-2655586379.webp"
              alt="Furry Pet logo"
              className="h-10 w-auto object-contain"
            />
            <span className="font-heading font-bold text-xl text-white">Furry Pet</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-[#8b8ba7] hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-[#8b8ba7] hover:text-white transition-colors">How It Works</a>
            <a href="#about" className="text-sm text-[#8b8ba7] hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-sm text-[#8b8ba7] hover:text-white transition-colors">Contact</a>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#0EA5E9]/30 blur-xl rounded-full" />
            <a
              href="#book"
              className="relative inline-flex items-center gap-2 bg-[#0EA5E9] hover:bg-[#0369A1] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300"
            >
              Book Boarding
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background layers */}
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] rounded-full bg-[#0EA5E9]/20 blur-[180px] animate-pulse pointer-events-none" />
          <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-[#6366f1]/15 blur-[150px] animate-pulse [animation-delay:2s] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-[#8b8ba7]">Trusted by 5,000+ pet owners</span>
            </div>

            <h1 className="font-heading font-bold text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-white mb-6">
              Smart Pet Boarding,{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5E9] via-[#38bdf8] to-[#0EA5E9] bg-[length:200%_auto] animate-shimmer">
                Simplified.
              </span>
            </h1>

            <p className="text-xl text-[#8b8ba7] font-light leading-relaxed max-w-lg mb-10">
              Connect with trusted home boarding hosts. Your furry family deserves safe, comfortable, and loving care — right in a real home.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-[#0EA5E9]/40 blur-xl rounded-xl scale-110" />
                <a
                  href="#book"
                  className="relative inline-flex items-center gap-2 bg-[#0EA5E9] hover:bg-[#0369A1] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-[#0EA5E9]/25"
                >
                  Book Boarding
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 border border-[#2a2a3a] hover:border-[#0EA5E9]/50 text-[#8b8ba7] hover:text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300"
              >
                See How It Works
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Social proof stats */}
            <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-[#2a2a3a]">
              <div>
                <div className="font-heading font-bold text-3xl text-white">5,000+</div>
                <div className="text-sm text-[#5a5a72] mt-1">Happy Pet Owners</div>
              </div>
              <div>
                <div className="font-heading font-bold text-3xl text-white">500+</div>
                <div className="text-sm text-[#5a5a72] mt-1">Verified Hosts</div>
              </div>
              <div>
                <div className="font-heading font-bold text-3xl text-white">4.9★</div>
                <div className="text-sm text-[#5a5a72] mt-1">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right - Floating UI Mockup */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Main card */}
              <div className="rounded-2xl border border-white/10 bg-[#17171f] p-6 shadow-2xl shadow-black/50">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-[#8b8ba7]">Recent Booking</span>
                  <span className="text-xs text-green-400 bg-green-400/10 px-3 py-1 rounded-full">Confirmed</span>
                </div>
                <div className="flex items-center gap-4 mb-6 p-4 bg-[#1f1f2e] rounded-xl">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] flex items-center justify-center text-3xl">
                    🐕
                  </div>
                  <div>
                    <div className="font-semibold text-white">Max</div>
                    <div className="text-sm text-[#8b8ba7]">Golden Retriever</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-sm text-[#8b8ba7]">Host</span>
                    <span className="text-sm text-white">Sarah's Home</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-sm text-[#8b8ba7]">Dates</span>
                    <span className="text-sm text-white">Jan 15 - Jan 18</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-[#8b8ba7]">Status</span>
                    <span className="text-sm text-[#0EA5E9] font-medium">Active Stay</span>
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <div className="absolute -top-4 -right-4 bg-[#1f1f2e] border border-white/10 rounded-xl p-4 animate-bounce [animation-duration:3s]">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📸</span>
                  <div>
                    <div className="text-sm font-semibold text-white">Photo Update!</div>
                    <div className="text-xs text-[#8b8ba7]">Max is happy playing</div>
                  </div>
                </div>
              </div>

              {/* Floating rating card */}
              <div className="absolute -bottom-4 -left-4 bg-[#1f1f2e] border border-white/10 rounded-xl p-3 animate-bounce [animation-duration:3s] [animation-delay:1.5s]">
                <div className="flex items-center gap-2">
                  <span className="text-lg">⭐</span>
                  <div className="text-sm font-semibold text-white">4.9</div>
                  <div className="text-xs text-[#8b8ba7]">/ 5.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="relative py-16 border-y border-[#2a2a3a] bg-[#0f0f13]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-[#5a5a72] uppercase tracking-wider mb-8">
            Trusted by pet owners across Malaysia
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['Kuala Lumpur', 'Petaling Jaya', 'Shah Alam', 'Subang Jaya', 'Johor Bahru'].map((city) => (
              <div key={city} className="text-[#8b8ba7] font-heading font-semibold text-lg">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 bg-[#17171f]">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0EA5E9]/5 blur-[180px] pointer-events-none" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-sm text-[#0EA5E9] font-medium uppercase tracking-wider mb-4">
              Features
            </span>
            <h2 className="font-heading font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-[-0.03em] text-white mb-6">
              Everything your pet needs,<br />
              <span className="text-[#0EA5E9]">nothing they don't</span>
            </h2>
            <p className="text-lg text-[#8b8ba7] max-w-2xl mx-auto">
              We focus on quality, reliability, and peace of mind — ensuring every boarding home meets care standards that prioritize pets' well-being, routines, and comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🏠',
                title: 'Verified Home Hosts',
                description: 'Every boarding home undergoes a thorough verification process, including home safety checks, background screening, and care standard assessments.'
              },
              {
                icon: '📸',
                title: 'Real-Time Updates',
                description: 'Stay connected with your furry companion through regular photo updates, daily care reports, and direct communication with your host.'
              },
              {
                icon: '📅',
                title: 'Easy Booking',
                description: 'Book trusted home boarding in minutes. Our streamlined platform makes scheduling pet care as convenient as possible.'
              },
              {
                icon: '💬',
                title: 'Transparent Communication',
                description: 'Direct messaging with hosts ensures you know exactly how your pet is being cared for, with full transparency on routines and activities.'
              },
              {
                icon: '❤️',
                title: 'Love & Comfort',
                description: 'Real home environments where your pet receives personal attention, love, and care — not a kennel or facility setting.'
              },
              {
                icon: '🛡️',
                title: 'Safety First',
                description: 'Emergency protocols, vet partnerships, and insurance coverage provide an extra layer of protection for your beloved pet.'
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-white/5 bg-[#1f1f2e] p-8 hover:border-[#0EA5E9]/30 transition-all duration-500"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0EA5E9]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[#0EA5E9]/0 group-hover:bg-[#0EA5E9]/5 transition-colors duration-500 rounded-2xl" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-[#0EA5E9]/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#8b8ba7] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-24 bg-[#0f0f13]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm text-[#0EA5E9] font-medium uppercase tracking-wider mb-4">
                How It Works
              </span>
              <h2 className="font-heading font-bold text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-white mb-6">
                Three simple steps to peace of mind
              </h2>
              <p className="text-lg text-[#8b8ba7] mb-10">
                By combining technology with genuine love for animals, Furry Pet delivers a smarter, more personal way to arrange home-based pet boarding.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Search & Compare',
                    description: 'Browse verified home boarding hosts in your area. View profiles, reviews, amenities, and daily routines to find the perfect match for your pet.'
                  },
                  {
                    step: '02',
                    title: 'Book & Connect',
                    description: 'Book directly through our secure platform. Message your chosen host, share your pet\'s needs, and prepare for a seamless drop-off.'
                  },
                  {
                    step: '03',
                    title: 'Relax & Enjoy',
                    description: 'Receive real-time updates and photos while your furry friend enjoys a safe, comfortable, and loving home stay. Travel with confidence.'
                  }
                ].map((item) => (
                  <div key={item.step} className="relative pl-20">
                    <span className="absolute left-0 top-0 font-heading font-black text-5xl text-[#0EA5E9]/10">
                      {item.step}
                    </span>
                    <div className="relative pt-2">
                      <h3 className="font-heading font-bold text-xl text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#8b8ba7]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-[#17171f] rounded-3xl border border-white/10 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#0EA5E9]/20 flex items-center justify-center">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white">Find Your Perfect Host</div>
                    <div className="text-sm text-[#8b8ba7]">Personalized matching</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#1f1f2e] rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] flex items-center justify-center text-2xl">
                      🐕
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">Sarah's Cozy Home</div>
                      <div className="text-sm text-[#8b8ba7]">Bandar Sungai Long • ★ 4.9</div>
                    </div>
                    <span className="text-xs bg-green-400/10 text-green-400 px-2 py-1 rounded-full">Available</span>
                  </div>
                  
                  <div className="bg-[#1f1f2e] rounded-xl p-4 flex items-center gap-4 border border-[#0EA5E9]/30">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#4f46e5] flex items-center justify-center text-2xl">
                      🐕‍🦺
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">Ahmad's Pet Haven</div>
                      <div className="text-sm text-[#8b8ba7]">Bandar Sunway • ★ 4.8</div>
                    </div>
                    <span className="text-xs bg-[#0EA5E9]/10 text-[#0EA5E9] px-2 py-1 rounded-full">Top Pick</span>
                  </div>
                  
                  <div className="bg-[#1f1f2e] rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#f97316] to-[#ea6c0a] flex items-center justify-center text-2xl">
                      🐩
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">Lisa's Garden Retreat</div>
                      <div className="text-sm text-[#8b8ba7]">Kajang • ★ 4.7</div>
                    </div>
                    <span className="text-xs bg-[#5a5a72]/20 text-[#8b8ba7] px-2 py-1 rounded-full">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 bg-[#17171f]">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '256px 256px',
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/20 rounded-3xl transform rotate-3" />
                <div className="relative bg-[#1f1f2e] rounded-3xl border border-white/10 p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0f0f13] rounded-2xl p-6 text-center">
                      <div className="text-4xl mb-3">🏠</div>
                      <div className="font-heading font-bold text-2xl text-white">500+</div>
                      <div className="text-sm text-[#8b8ba7]">Verified Homes</div>
                    </div>
                    <div className="bg-[#0f0f13] rounded-2xl p-6 text-center">
                      <div className="text-4xl mb-3">🐾</div>
                      <div className="font-heading font-bold text-2xl text-white">10k+</div>
                      <div className="text-sm text-[#8b8ba7]">Happy Pets</div>
                    </div>
                    <div className="bg-[#0f0f13] rounded-2xl p-6 text-center">
                      <div className="text-4xl mb-3">⭐</div>
                      <div className="font-heading font-bold text-2xl text-white">4.9</div>
                      <div className="text-sm text-[#8b8ba7]">Avg Rating</div>
                    </div>
                    <div className="bg-[#0f0f13] rounded-2xl p-6 text-center">
                      <div className="text-4xl mb-3">🗺️</div>
                      <div className="font-heading font-bold text-2xl text-white">15+</div>
                      <div className="text-sm text-[#8b8ba7]">Areas Covered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="inline-block text-sm text-[#0EA5E9] font-medium uppercase tracking-wider mb-4">
                About Furry Pet
              </span>
              <h2 className="font-heading font-bold text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-white mb-6">
                Where technology meets<br />
                <span className="text-[#0EA5E9]">genuine love for animals</span>
              </h2>
              <p className="text-lg text-[#8b8ba7] leading-relaxed mb-6">
                Furry Pet is a modern pet-care platform that connects pet owners with trusted home boarding services through a seamless and convenient digital experience. Designed to simplify pet care arrangements, Furry Pet enables owners to easily find safe, comfortable, and loving home environments for their pets whenever they travel or need temporary care.
              </p>
              <p className="text-lg text-[#8b8ba7] leading-relaxed mb-8">
                Our platform focuses on quality, reliability, and peace of mind by ensuring every boarding home meets care standards that prioritize pets' well-being, routines, and comfort. With easy booking, transparent communication, and regular updates, pet owners can stay connected and confident while their furry companions enjoy a stress-free stay.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {['🐕', '🐈', '🐕‍🦺', '🐹'].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-[#1f1f2e] border-2 border-[#17171f] flex items-center justify-center text-lg"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-[#8b8ba7]">
                  <span className="text-white font-semibold">Join 5,000+</span> happy pet owners
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 bg-[#0f0f13] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#6366f1]/10 blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-sm text-[#0EA5E9] font-medium uppercase tracking-wider mb-4">
              Testimonials
            </span>
            <h2 className="font-heading font-bold text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-white">
              Loved by pets and their parents
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Wei Lin',
                location: 'Petaling Jaya',
                avatar: '👩‍💼',
                rating: 5,
                text: 'Finally, a platform I trust to take care of Mochi when I travel for work. Sarah sends daily photos and updates — it\'s like having a second family for my pup!'
              },
              {
                name: 'Raj Kumar',
                location: 'Kuala Lumpur',
                avatar: '👨‍🔧',
                rating: 5,
                text: 'Max was anxious about boarding, but the host\'s home environment was perfect. He came back happy and relaxed. Furry Pet made the whole process so easy.'
              },
              {
                name: 'Mei Ling',
                location: 'Shah Alam',
                avatar: '👩‍🎨',
                rating: 5,
                text: 'The peace of mind knowing Bella is in a safe, loving home is priceless. The real-time updates and host communication are fantastic. Highly recommend!'
              }
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative rounded-2xl border border-white/5 bg-[#17171f] p-8 hover:border-[#0EA5E9]/30 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#0EA5E9]">★</span>
                  ))}
                </div>
                <p className="text-[#8b8ba7] leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1f1f2e] flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-[#5a5a72]">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-[#17171f] border-y border-[#2a2a3a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: '5,000+', label: 'Pet Owners', icon: '👨‍👩‍👧‍👦' },
              { value: '500+', label: 'Verified Hosts', icon: '🏠' },
              { value: '10,000+', label: 'Happy Stays', icon: '🐾' },
              { value: '4.9★', label: 'Average Rating', icon: '⭐' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-[#8b8ba7]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#0EA5E9]/15 blur-[180px] pointer-events-none" />
          <div className="absolute bottom-[-20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#6366f1]/10 blur-[150px] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.0] tracking-[-0.04em] text-white mb-6">
            Ready to book your pet's<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5E9] via-[#38bdf8] to-[#0EA5E9] bg-[length:200%_auto] animate-shimmer">
              perfect home stay?
            </span>
          </h2>
          <p className="text-xl text-[#8b8ba7] max-w-2xl mx-auto mb-10">
            Join thousands of pet owners who trust Furry Pet for safe, comfortable, and loving home boarding. Your furry family deserves the best.
          </p>
          
          <div className="relative inline-flex">
            <div className="absolute inset-0 bg-[#0EA5E9]/50 blur-2xl rounded-2xl scale-125" />
            <a
              href="#contact"
              className="relative inline-flex items-center gap-3 bg-[#0EA5E9] hover:bg-[#0369A1] text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-lg shadow-[#0EA5E9]/30"
            >
              Book Boarding Now
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          <p className="text-sm text-[#5a5a72] mt-6">
            Free to browse • No booking fees • Secure payments
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative py-16 bg-[#0f0f13] border-t border-[#2a2a3a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773894149237-ai-artificial-intelligence-improves-emai-600nw-2655586379.webp"
                  alt="Furry Pet logo"
                  className="h-10 w-auto object-contain"
                />
                <span className="font-heading font-bold text-xl text-white">Furry Pet</span>
              </div>
              <p className="text-[#8b8ba7] leading-relaxed max-w-md mb-6">
                Smart Pet Boarding, Simplified. Connecting pet owners with trusted home boarding services for safe, comfortable, and loving care.
              </p>
              <p className="text-sm text-[#5a5a72]">
                B5-1-3, Forest Green Condominium,<br />
                Bandar Sungai Long
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-[#8b8ba7] hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-[#8b8ba7] hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#about" className="text-[#8b8ba7] hover:text-white transition-colors">About Us</a></li>
                <li><a href="#book" className="text-[#8b8ba7] hover:text-white transition-colors">Book Now</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:jiachwen99@gmail.com" className="text-[#8b8ba7] hover:text-white transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    jiachwen99@gmail.com
                  </a>
                </li>
                <li className="text-[#8b8ba7] flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Bandar Sungai Long, Malaysia
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#2a2a3a] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#5a5a72]">
              © 2024 Furry Pet. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#5a5a72] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-[#5a5a72] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="text-[#5a5a72] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}