'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, PawPrint } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const BRAND_NAME = 'Furry Pet'
const TAGLINE = 'Trusted Home Boarding for Your Furry Family'
const CTA = { label: 'Book Boarding', href: '#contact' }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0f0f13]/95 backdrop-blur-md border-b border-[#2a2a3a] shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'bg-transparent',
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <img 
              src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773894149237-ai-artificial-intelligence-improves-emai-600nw-2655586379.webp" 
              alt="Furry Pet logo" 
              className="h-10 w-auto object-contain" 
            />
            <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/20 rounded-lg blur-lg transition-all duration-300 -z-10" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-[#f1f1f5] group-hover:text-brand-400 transition-colors">
              {BRAND_NAME}
            </span>
            <span className="text-[10px] text-[#8b8ba7] -mt-1 hidden sm:block">
              {TAGLINE}
            </span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm text-[#8b8ba7] hover:text-[#f1f1f5] rounded-lg hover:bg-[#17171f] transition-all duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-brand-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-500/30 blur-xl rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <a
              href={CTA.href}
              className="relative px-6 py-2.5 text-sm font-semibold bg-brand-500 text-white rounded-lg hover:bg-brand-700 transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
            >
              <PawPrint className="w-4 h-4" />
              {CTA.label}
            </a>
          </div>
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 rounded-lg text-[#8b8ba7] hover:text-[#f1f1f5] hover:bg-[#17171f] transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#0f0f13]/98 backdrop-blur-lg border-b border-[#2a2a3a]">
          <ul className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm text-[#8b8ba7] hover:text-[#f1f1f5] rounded-lg hover:bg-[#17171f] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3 mt-1">
              <a
                href={CTA.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-brand-500 text-white rounded-lg hover:bg-brand-700 transition-colors shadow-[0_0_20px_rgba(14,165,233,0.3)]"
              >
                <PawPrint className="w-4 h-4" />
                {CTA.label}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}