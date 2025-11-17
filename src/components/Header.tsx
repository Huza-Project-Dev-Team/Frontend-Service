'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Header() {
  const [active, setActive] = useState('home')

  const handleClick = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setActive(id)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  

  useEffect(() => {
    const ids = ["home", "about", "features", "solutions", "contact"]

    const onScroll = () => {
      let current = "home"

      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue

        const rect = el.getBoundingClientRect()
        const middle = window.innerHeight / 2

        if (rect.top <= middle && rect.bottom >= middle) {
          current = id
          break
        }
      }

      setActive(current)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])


  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo-70.png" width={50} height={50} alt="logo" />
          <span className="font-semibold tracking-wide text-2xl">Huza</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[15px] text-white/80 border p-5 py-2.5 rounded-full bg-transparent">
          <Link
            href="#home"
            onClick={(e) => handleClick('home', e)}
            className={`px-2 py-1 rounded-full transition ${
              active === 'home'
                ? 'text-white border-b-2 border-white'
                : 'hover:text-white'
            }`}
          >
            Home
          </Link>

          <Link
            href="#about"
            onClick={(e) => handleClick('about', e)}
            className={`px-2 py-1 rounded-full transition ${
              active === 'about'
                ? 'text-white border-b-2 border-white'
                : 'hover:text-white'
            }`}
          >
            About
          </Link>

          <Link
            href="#solutions"
            onClick={(e) => handleClick('solutions', e)}
            className={`px-2 py-1 rounded-full transition ${
              active === 'solutions'
                ? 'text-white border-b-2 border-white'
                : 'hover:text-white'
            }`}
          >
            Solutions
          </Link>

          <Link
            href="#features"
            onClick={(e) => handleClick('features', e)}
            className={`px-2 py-1 rounded-full transition ${
              active === 'features'
                ? 'text-white border-b-2 border-white'
                : 'hover:text-white'
            }`}
          >
            Features
          </Link>

      
          <Link
            href="#contact"
            onClick={(e) => handleClick('contact', e)}
            className={`px-2 py-1 rounded-full transition ${
              active === 'contact'
                ? 'text-white border-b-2 border-white'
                : 'hover:text-white'
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3 text-[14.5px]">
          <Link href="/login" className="px-8 py-3 rounded-2xl border border-white/80 hover:border-white/60">
            sign in
          </Link>
          <Link href="/signup" className="w-30 py-3 text-center rounded-2xl border bg-[#010C25] hover:bg-[#12151f]">
            Get started
          </Link>
        </div>
      </div>
    </header>
  )
}
