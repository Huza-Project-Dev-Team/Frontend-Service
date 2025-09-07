'use client'
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FiCpu, FiUsers, FiZap, FiShield, FiLayers, FiSmile, FiCheckCircle, FiTrendingUp, FiShare2, FiGrid, FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";


export default function LandingPage() {
  return (
    <div className="min-h-screen text-white">
      

      <main>
        {/* Hero */}
        <section id="home" className="h-screen relative overflow-hidden">
          <div className=" absolute inset-0 bg-[url('/download%20(33).png')] bg-cover bg-center" />

          <Header />
          <div className="mx-auto max-w-5xl px-4 pt-16 md:pt-50 pb-24 text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Linking dreams with innovation</h1>
            <p className="mt-10 text-white/70 max-w-2xl mx-auto text-sm md:text-base">
              connecting innovators, organizations and companies to solve real world problems through Huza
            </p>
            <div className="mt-15 flex items-center justify-center gap-4">
              <Link href="/signup" className="px-10 py-4 rounded-full bg-[#010C25] text-white text-sm font-semibold hover:bg-[#12151f]">Get started</Link>
              <Link href="/login" className=" w-36 py-3 rounded-full text-white/80 border-2 border-white/50 text-sm font-semibold hover:border-white/60">Sign in</Link>
            </div>
            <div className="mt-25 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                { label: "Product suite" },
                { label: "Why Huza?" },
                { label: "Contact Huza" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.label === "Contact Huza" ? "#contact" : "#features"}
                  className="group rounded-full border-[1.5px] border-white/40 px-6 py-3 text-sm flex items-center justify-between bg-[#021745] hover:bg-[#021745d3]"
                >
                  <span>{item.label}</span>
                  <span className="h-8 w-8 rounded-full grid place-items-center bg-white/10 border border-white/15 group-hover:bg-white/20">→</span>
                </a>
              ))}
            </div>
          </div>
          <div className="absolute inset-x-0 -bottom-40 h-80 bg-[radial-gradient(ellipse_at_bottom,_rgba(22,63,190,0.35),_transparent_65%)]" />
        </section>

        {/* Stats */}
        <section className=" bg-[#000215]">
          <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { k: "50+", v: "Problems solved" },
              { k: "200+", v: "Active innovators" },
              { k: "20+", v: "Organizations partnered" },
              { k: "100+", v: "Submitted projects" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-xl md:text-2xl font-semibold text-[#004EFF]">{s.k}</div>
                <div className="text-normal md:text-normal text-white/70 mt-2">{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About and What We Do */}
        <section id="about" className=" px-4 py-16 bg-[#000215]">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-9 py-3 rounded-full border-b-2 border-[#6e7ae5] text-md font-semibold text-white/80 mb-10 mt-4">About us</div>
            <h2 className="mt-6 text-3xl md:text-3xl font-bold">What <span className="text-blue-400">We Do</span></h2>
            <p className="mt-8 text-white/70 max-w-3xl mx-auto text-[15px]">
            Huza is a platform where bold ideas meet real opportunities.  Huza connects young innovators, creators, and changemakers with the institutions that need their solutions.  We  bridge the gap between talent and impact. Whether it’s tackling social challenges, or shaping the future of technology, Huza is here to make ideas count. 
            collaboration, and turn dreams into reality.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 mx-15">
            {[
              {
                title: "Innovation hub",
                body:
                  "  Huza provides a space where all the creative minds connect to share ideas, andbuild prototypes, and work on solutions. Through workshops and other facilities.",
              },
              {
                title: "Talent development",
                body:
                  "  Huza provides a space where all the creative minds connect to share ideas, andbuild prototypes, and work on solutions. Through workshops and other facilities.",
              },
              {
                title: "Partnerships & development",
                body:
                  "  Huza provides a space where all the creative minds connect to share ideas, andbuild prototypes, and work on solutions. Through workshops and other facilities.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border-2 border-white/50 bg-[#021745] p-6">
                <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1048C5] to-[#08235F] border border-white/20">
                  {c.title === "Innovation hub" && <FiCpu className="text-white" />}
                  {c.title === "Talent development" && <FiTrendingUp className="text-white" />}
                  {c.title === "Partnerships & development" && <FiShare2 className="text-white" />}
                </div>
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-white/70">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="features" className=" px-4 py-16 bg-gradient-to-br from-[#000215] to-[#060A2A]">
          <div className="text-center">
            <div className=" inline-flex justify-center items-center gap-2 px-9 py-3 rounded-full border-b-2 border-[#6e7ae5] text-md font-semibold text-white/80 mb-10 mt-4">Features</div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left copy block */}
            <div>
              <h3 className="text-3xl md:text-5xl font-bold leading-snug mt-8">
                Why would you
                <br /> choose <span className=""> Our</span>
                <br /> Huza Platform?
              </h3>
              
            </div>

            {/* Right grid of image cards: row1=2 cards, row2=3 cards */}
            <div className="md:col-span-2 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Speed & Efficiency", desc: "Fast, smooth, and responsive platform.", img: "/speed.png" },
                  { title: "Security", desc: "Safe login and trusted transactions.", img: "/security.png" },
                ].map((f) => (
                  <div key={f.title}>
                    <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/5">
                      <div className="aspect-[12/7] relative">1
                        <Image src={f.img} alt={f.title} fill className="object-cover" />
                      </div>
                    </div>
                    <h4 className="mt-4 text-center font-semibold">{f.title}</h4>
                    <p className="mt-1 text-center text-[15px] text-white/70">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-3 space-y-8" >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {[
                    { title: "Innovative", desc: "Grows from small groups to big projects.", img: "/innovative.png" },
                    { title: "User friendly", desc: "Simple navigation, clear layout, no tech stress.", img: "/user.png" },
                    { title: "Scalability", desc: "Grows from small groups to big projects.", img: "/sclability.png" },
                  ].map((f) => (
                    <div key={f.title}>
                      <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/5">
                        <div className="aspect-[12/7] relative">
                          <Image src={f.img} alt={f.title} fill className="object-cover" />
                        </div>
                      </div>
                      <h4 className="mt-4 text-center font-semibold">{f.title}</h4>
                      <p className="mt-1 text-center text-[15px] text-white/70">{f.desc}</p>
                    </div>
                  ))}
              </div>
            </div>
            
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className="relative px-4 py-16 bg-[#051d51]">
          <div className="relative mx-auto max-w-6xl rounded-3xl border border-white/15 bg-gradient-to-b from-[#0E1E3F] to-[#0A1530] px-6 py-14 md:px-10 md:py-14 overflow-hidden">
            {/* decorative stars */}
            <svg className="absolute left-3 top-6 h-25 w-25 text-white/80" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 3c.4 2.7 1.9 4.2 4.6 4.6-2.7.4-4.2 1.9-4.6 4.6-.4-2.7-1.9-4.2-4.6-4.6 2.7-.4 4.2-1.9 4.6-4.6z"/>
            </svg>
            <svg className="absolute right-1 bottom-[-30px] h-25 w-25 text-white/80" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 3c.4 2.7 1.9 4.2 4.6 4.6-2.7.4-4.2 1.9-4.6 4.6-.4-2.7-1.9-4.2-4.6-4.6 2.7-.4 4.2-1.9 4.6-4.6z"/>
            </svg>
            {/* decorative dots */}
            <div className="absolute right-10 top-6 flex flex-col items-center gap-3 opacity-80 rotate-45">
              <span className="h-6 w-6 rounded-full bg-blue-400" />
              <span className="h-4 w-4 rounded-full bg-blue-500" />
              <span className="h-3 w-3 rounded-full bg-blue-600 " />
            </div>

            <div className="text-center">
              <div className=" inline-flex justify-center items-center gap-2 px-9 py-3 rounded-full border-b-2 border-[#6e7ae5] text-md font-semibold text-white/80 mb-10">Our Solutions</div>
            </div>
            <h2 className="text-center mt-6 text-2xl md:text-3xl font-bold">
              Huza <span className="text-blue-400">solut</span><span className="">ions</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Innovation hub", icon: <FiCpu size={22} /> },
                { title: "Talent development", icon: <FiGrid size={22} /> },
                { title: "Partnerships & development", icon: <FiShare2 size={22} /> },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border-2 border-white/20 bg-[#0B1426]/70 p-8 text-center">
                  <div className="mx-auto mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1048C5] to-[#08235F] text-white">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="mt-3 text-sm text-white/70 max-w-sm mx-auto">
                    Huza provides a space where all the creative minds connect to share ideas.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 bg-[url('/Cool%20wallpaper.png')] bg-cover bg-center" />
          {/* Overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,102,255,0.25),_transparent_60%)]" />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold">Join our community</h3>
            <p className="mt-2 text-white/85  font-semibold text-3xl">Of young and capable innovators</p>
            <p className="mt-8 text-[15px] text-white/70">Subscribe for updates, opportunities and early event invites.</p>

            <form className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 max-w-2xl mx-auto">
              <div className="relative">
                <FiMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/70" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-full pl-11 pr-4 py-3 bg-white/10 backdrop-blur border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-transparent transition"
                />
              </div>
              <button
                type="submit"
                className="rounded-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 font-semibold shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:from-blue-400 hover:to-indigo-500 active:scale-[0.98] transition"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/70">
              <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-green-400" />No spam</span>
              <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" />Unsubscribe anytime</span>
              <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />Monthly highlights</span>
            </div>
          </div>

          {/* Glow accents */}
          <div className="pointer-events-none absolute -bottom-20 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative px-4 py-20 bg-gradient-to-br from-[#000215] via-[#051d51] to-[#000215] overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,78,255,0.15),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(104,122,229,0.1),_transparent_60%)]" />
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-500" />

          <div className="relative z-10 mx-auto max-w-7xl">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-9 py-3 rounded-full border-b-2 border-[#6e7ae5] text-md font-semibold text-white/80 mb-6">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Connect</span>?
              </h2>
              <p className="text-white/70 text-md max-w-2xl mx-auto">
                Let's discuss how Huza can help transform your ideas into reality. We're here to support your innovation journey.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information Cards */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                  <p className="text-white/70">Reach out to us through any of these channels</p>
                </div>

                <div className="space-y-6">
                  {/* Email Card */}
                  <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-[#021745]/80 to-[#0B1426]/80 p-6 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                        <FiMail className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                        <p className="text-white/70 mb-2">Send us an email anytime</p>
                        <a href="mailto:contact@huza.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                          info@huza.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-[#021745]/80 to-[#0B1426]/80 p-6 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                        <FiPhone className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                        <p className="text-white/70 mb-2">Mon-Sun from 6am to 6pm</p>
                        <a href="tel:+1234567890" className="text-blue-400 hover:text-green-300 transition-colors">
                          +250 785 805 869
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Location Card */}
                  <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-[#021745]/80 to-[#0B1426]/80 p-6 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                        <FiMapPin className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Visit Us</h4>
                        <p className="text-white/70 mb-2">Come see our innovation hub</p>
                        <p className="text-blue-400">
                          street K37, 100
                          <br />
                           Remera, Kigali, Rwanda
                        </p>
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>

              {/* Contact Form */}
              <div className="relative">
                <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-[#021745]/60 to-[#0B1426]/60 p-8 backdrop-blur-sm">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
                    <p className="text-white/70">Fill out the form below and we'll get back to you within 24 hours</p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-transparent transition-all duration-300"
                        />
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    
                    <div className="relative">
                      <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-transparent transition-all duration-300 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] active:scale-[0.98] transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative flex items-center justify-center gap-2">
                        <span>Send Message</span>
                        <FiSend className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </button>
                  </form>

                  <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/70">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      Quick Response
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      Secure & Private
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                      Professional Support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Glow Effect */}
          <div className="absolute -bottom-20 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl" />
        </section>
      </main>

      <Footer />
    </div>
  );
}


