'use client'
import Link from 'next/link'
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi'


export default function Footer(){
    return (
        <>
            <footer className="bg-[#000325] border-t border-white/10 text-white">
                <div className="mx-auto max-w-6xl px-4 py-12">
                    {/* Brand + Social */}
                    <div className="flex items-center justify-center gap-6">
                        <span className="text-3xl font-extrabold tracking-wider">Huza</span>
                        <span className="h-6 w-px bg-white/25" />
                        <div className="flex items-center gap-5 text-white/80">
                            <a aria-label="Facebook" href="#" className="hover:text-white"><FiFacebook /></a>
                            <a aria-label="Twitter" href="#" className="hover:text-white"><FiTwitter /></a>
                            <a aria-label="LinkedIn" href="#" className="hover:text-white"><FiLinkedin /></a>
                            <a aria-label="Instagram" href="#" className="hover:text-white"><FiInstagram /></a>
                        </div>
                    </div>

                    {/* Nav */}
                    <nav className="mt-10 flex items-center justify-center gap-6 text-white/90">
                        <Link href="#home" className="hover:text-white">Home</Link>
                        <span className="text-white/30">|</span>
                        <Link href="#about" className="hover:text-white">About</Link>
                        <span className="text-white/30">|</span>
                        <Link href="#features" className="hover:text-white">Feautures</Link>
                        <span className="text-white/30">|</span>
                        <Link href="#solutions" className="hover:text-white">Solutions</Link>
                    </nav>

                    {/* Copy */}
                    <div className="mt-8 text-center text-sm text-white/70 leading-relaxed max-w-3xl mx-auto">
                        Thank you for choosing Huza. We’re more than just a store — we’re a community built on trust, quality, and care. Every product is thoughtfully selected and packaged with your satisfaction in mind. Need help? Our support team is here for you. Follow us on social media for updates, offers, and more. We appreciate your support and look forward to serving you again.
                    </div>

                    {/* Copyright */}
                    <p className="mt-8 text-center text-sm text-white/60">© 2025 Huza | Powered by Huza</p>
                </div>
            </footer>
        </>
    )
}