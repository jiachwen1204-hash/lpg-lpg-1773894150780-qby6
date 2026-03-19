import Link from 'next/link'
import { Mail, MapPin, Phone, Heart, Twitter, Instagram, Facebook } from 'lucide-react'

const BRAND = {
  name: 'Furry Pet',
  tagline: 'Trusted Home Boarding for Your Furry Family',
  email: 'jiachwen99@gmail.com',
  address: 'B5-1-3, Forest Green Condominium, Bandar Sungai Long',
  description: 'Furry Pet is a modern pet-care platform that connects pet owners with trusted home boarding services through a seamless and convenient digital experience. Designed to simplify pet care arrangements, Furry Pet enables owners to easily find safe, comfortable, and loving home environments for their pets whenever they travel or need temporary care.',
  cta: 'Book Boarding',
}

const quickLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Find Hosts', href: '#find-hosts' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Safety Standards', href: '#safety' },
]

const resources = [
  { label: 'FAQs', href: '#faq' },
  { label: 'Pet Care Tips', href: '#tips' },
  { label: 'Host Application', href: '#become-host' },
  { label: 'Contact Us', href: '#contact' },
]

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
]

const socials = [
  { label: 'Twitter', href: 'https://twitter.com/furrypet', icon: Twitter },
  { label: 'Instagram', href: 'https://instagram.com/furrypet', icon: Instagram },
  { label: 'Facebook', href: 'https://facebook.com/furrypet', icon: Facebook },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0f0f13] overflow-hidden">
      {/* Background depth layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top gradient accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
        
        {/* Ambient glow orbs */}
        <div className="absolute -top-[200px] left-[20%] w-[600px] h-[600px] rounded-full bg-brand-500/[0.06] blur-[180px]" />
        <div className="absolute -top-[200px] right-[20%] w-[500px] h-[500px] rounded-full bg-brand-700/[0.04] blur-[150px]" />
        
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
               backgroundRepeat: 'repeat',
               backgroundSize: '256px 256px',
             }} 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="relative">
                <img 
                  src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773894149237-ai-artificial-intelligence-improves-emai-600nw-2655586379.webp" 
                  alt="Furry Pet logo" 
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-brand-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="font-heading font-bold text-2xl text-content-primary">
                {BRAND.name}
              </span>
            </Link>
            
            <p className="mt-5 text-base text-content-secondary leading-relaxed max-w-sm">
              {BRAND.description}
            </p>

            {/* CTA Button */}
            <div className="relative inline-flex mt-8">
              <div className="absolute inset-0 bg-brand-500/30 blur-xl rounded-full scale-110" />
              <a 
                href="#book" 
                className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl hover:from-brand-600 hover:to-brand-700 transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5"
              >
                <span>{BRAND.cta}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-8">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 rounded-xl bg-surface-overlay border border-surface-border flex items-center justify-center hover:border-brand-500/50 hover:bg-brand-500/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-content-secondary group-hover:text-brand-500 transition-colors" />
                    <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/5 rounded-xl transition-colors duration-300" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-content-primary text-lg mb-6 relative">
              Quick Links
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-6 bg-brand-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="group inline-flex items-center text-sm text-content-secondary hover:text-brand-500 transition-colors duration-200"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold text-content-primary text-lg mb-6 relative">
              Resources
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-6 bg-brand-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="group inline-flex items-center text-sm text-content-secondary hover:text-brand-500 transition-colors duration-200"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-content-primary text-lg mb-6 relative">
              Contact Us
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-6 bg-brand-500 rounded-full" />
            </h3>
            <div className="space-y-4">
              <a
                href={`mailto:${BRAND.email}`}
                className="group flex items-start gap-3 text-sm text-content-secondary hover:text-brand-500 transition-colors duration-200"
              >
                <div className="mt-0.5 p-1.5 rounded-lg bg-brand-500/10 group-hover:bg-brand-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-brand-500" />
                </div>
                <span className="pt-1">{BRAND.email}</span>
              </a>
              
              <div className="flex items-start gap-3 text-sm text-content-secondary">
                <div className="mt-0.5 p-1.5 rounded-lg bg-brand-500/10">
                  <MapPin className="w-4 h-4 text-brand-500" />
                </div>
                <span className="pt-1 leading-relaxed">{BRAND.address}</span>
              </div>
            </div>

            {/* Trust badge */}
            <div className="mt-8 p-4 rounded-xl bg-surface-overlay border border-surface-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 border-2 border-[#0f0f13] flex items-center justify-center">
                      <span className="text-[10px] text-white font-bold">{i}</span>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-content-secondary">
                  <span className="font-semibold text-content-primary">2,500+</span> happy pets
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-xs text-content-secondary">4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="relative mb-16 p-8 rounded-2xl bg-gradient-to-br from-surface-overlay to-surface-raised border border-surface-border overflow-hidden">
          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-brand-500/10 rounded-full blur-[80px]" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-xl text-content-primary mb-1">
                Stay Updated
              </h3>
              <p className="text-sm text-content-secondary">
                Get pet care tips and exclusive boarding offers delivered to your inbox.
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 w-full md:w-64 bg-surface border border-surface-border rounded-xl text-content-primary placeholder:text-content-muted focus:outline-none focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative pt-8 border-t border-surface-border">
          {/* Gradient line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-content-muted">
              {legal.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="hover:text-brand-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-2 text-sm text-content-muted">
              <span>© {year} {BRAND.name}. All rights reserved.</span>
              <span className="mx-2">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-current animate-pulse" /> for pets
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}