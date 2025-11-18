'use client'
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FiCpu, FiTrendingUp, FiShare2, FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { ArrowRight } from "lucide-react";


export default function LandingPage() {
  return (
    <div className="min-h-screen text-white">
      <main>
        {/* Hero */}
        <section id="home" className="h-screen relative overflow-hidden">
          <div className=" absolute inset-0 bg-[url('/download%20(33).png')] bg-cover bg-center" />
          <div className=" absolute inset-0 bg-[rgba(1,7,19,0.89)] bg-cover bg-center" />
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
                  className="group rounded-full border-[1.5px] border-white/40 px-6 py-3 text-sm flex items-center justify-between bg-[#010713] hover:bg-[#021745d3]"
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
          </div>
          <div className="flex justify-between"> 
            <div className="mx-20">
              <Image src="/iPhone 15.png" width={350} height={200} alt="iphone"></Image>
            </div>
            <div className="my-12">
              <h2 className="mt-6 text-3xl md:text-3xl font-bold">What We<span className="text-[#2453D2]"> Do</span></h2>
              <p className="mt-8 text-white/70 max-w-3xl mx-auto text-[16px]">
              Huza is a Rwandan innovation platform built to connect ideas that inspire with institutions that implement. We exist to bridge the gap between government ministries, private companies, and innovators empowering students, researchers, and startups to turn their creative solutions into national impact.Through our platform, ministries and companies can share real-world challenges, while innovators gain the opportunity to submit solutions, showcase their expertise, and collaborate with key stakeholders. By streamlining the process of discovery, evaluation, and implementation, Huza ensures that no good idea goes unnoticed
              </p>
              <button className="flex items-center gap-2 border-2 px-10 py-3 my-10 rounded-md border-[#01133C]"> Learn More <ArrowRight /></button>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-[#000215]">
          <div className="text-center">
            <div className="inline-flex justify-center items-center gap-2 px-9 py-3 rounded-full border-b-2 border-[#6e7ae5] text-md font-semibold text-white/80 mb-10 mt-4">Services</div>
            <p className="text-lg">Explore our core services that connect innovators with real-world challenges</p>
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
              <div key={c.title} className="rounded-2xl border-2 border-white/50 bg-transparent p-6">
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
          
         {/* About and What We Do */}
        <section id="solutions" className=" px-4 py-16 bg-[#000215]">
          <div className="flex justify-between"> 
            <div className="mx-20 mt-10">
              <Image src="/Galaxy Tab S8 Ultra.png" width={450} height={250} alt="iphone"></Image>
            </div>
            <div className="my-12">
              <div className="inline-flex items-center gap-2 px-9 py-3 rounded-full border-b-2 border-[#6e7ae5] text-md font-semibold text-white/80 mb-10 mt-4">Solutions</div>
              <h2 className="mt-6 text-3xl md:text-3xl font-bold">NGWINO Sales<span className="text-[#2453D2]"> App</span></h2>
              <p className="mt-8 text-white/70 max-w-3xl mr-6 text-[16px]">
              Huza is a Rwandan innovation platform built to connect ideas that inspire with institutions that implement. We exist to bridge the gap between government ministries, private companies, and innovators empowering students, researchers, and startups to turn their creative solutions into national impact.
              </p>
              <button className="flex items-center gap-2 border-2 px-10 py-3 my-10 rounded-md border-[#01133C]"> Learn More <ArrowRight /></button>
            </div>
          </div>
          
        </section>


        {/* Why Choose Us */}
        <section id="features" className=" px-4 py-16 bg-[#000215]">
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div>
              <div className="text-center">
                <div className=" inline-flex justify-center items-center gap-2 px-9 py-3 rounded-full border-b-2 border-[#6e7ae5] text-md font-semibold text-white/80 mb-10 mt-4">Features</div>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold leading-snug ">
                Why would you
                <br /> choose <span className=""> Our</span>
                <br /> Huza Platform?
              </h3>
            </div>

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
                    { title: "Scalability", desc: "Grows from small groups to big projects.", img: "/scalability.jpg" },
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

        

        {/* Newsletter */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/download%20(33).png')] bg-cover bg-center" />
          <div className=" absolute inset-0 bg-[rgba(1,7,19,0.4)] bg-cover bg-center" />

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
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative px-4 py-20 bg-[#000215] overflow-hidden">
          <div className="relative z-10 mx-auto max-w-7xl">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-9 py-3 rounded-full border-b-2 text-md font-semibold text-white/80 mb-12">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-[#2453D2]">Connect</span> ?
              </h2>
              <p className="text-white/70 text-md max-w-2xl mx-auto">
                Let&apos;s discuss how Huza can help transform your ideas into reality. We&apos;re here to support your innovation journey.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="space-y-6">
                  {/* Email Card */}
                  <div className="group relative overflow-hidden rounded-2xl border border-white/20 p-6 backdrop-blur-sm transition-all duration-300">
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2453D2] flex items-center justify-center">
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
                  <div className="group relative overflow-hidden rounded-2xl border border-white/20 p-6 backdrop-blur-sm transition-all duration-300">
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2453D2] flex items-center justify-center">
                        <FiPhone className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                        <p className="text-white/70 mb-2">Mon-Sun from 6am to 6pm</p>
                        <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-300 transition-colors">
                          +250 785 805 869
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Location Card */}
                  <div className="group relative overflow-hidden rounded-2xl border border-white/20 p-6 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300">
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2453D2] flex items-center justify-center">
                        <FiMapPin className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Visit Us</h4>
                        <p className="text-white/70 mb-2">Come see our innovation hub</p>
                        <p className="text-blue-400 hover:text-blue-300 cursor-pointer">
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
                <div className="rounded-3xl border border-white/20 p-8 backdrop-blur-sm">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
                    <p className="text-white/70">Fill out the form below and we&apos;ll get back to you within 24 hours</p>
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

                    <button type="submit" className="w-full group relative overflow-hidden rounded-xl bg-[#2453D2] px-8 py-4 font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] active:scale-[0.98] transition-all duration-300">
                      <div className="relative flex items-center justify-center gap-2">
                        <span>Send Message</span>
                        <FiSend className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


