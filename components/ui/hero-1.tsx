"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  ctaLabel?: string
  ctaHref?: string
}

export function Hero({
  eyebrow = "Innovate Without Limits",
  title,
  subtitle,
  ctaLabel = "Explore Now",
  ctaHref = "#",
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-36 md:pt-40 px-6 text-center md:px-10
      min-h-[calc(100vh-48px)] overflow-hidden bg-[#000503] text-emerald-100"
    >
      {/* Ambient gradient wash */}
      <div className="pointer-events-none absolute inset-0 -z-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(51,255,179,0.18),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,204,128,0.22),transparent_60%)] blur-3xl opacity-70" />
      </div>

      {/* Animated grid */}
      <div
        className="absolute inset-0 -z-20 opacity-70
        bg-[linear-gradient(to_right,rgba(0,204,128,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,77,51,0.12)_1px,transparent_1px)]
        bg-[size:4.5rem_3.5rem]
        [mask-image:radial-gradient(ellipse_80%_55%_at_50%_-20%,rgba(0,5,3,0.95)_60%,transparent)] animate-[pulse_14s_ease-in-out_infinite]"
      />

      {/* Horizon glow */}
      <div
        className="absolute inset-x-0 bottom-[-12%] -z-10 h-[45vh] translate-y-[15%]
        bg-[radial-gradient(ellipse_at_center,rgba(0,204,128,0.45)_0%,rgba(0,5,3,0.02)_65%)]
        blur-3xl opacity-80"
      />

      {/* Circuit lines */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-28 h-48 w-48 -translate-x-1/2 rounded-full border border-emerald-400/30 blur-[1px]" />
        <div className="absolute left-[12%] top-[35%] h-32 w-px bg-gradient-to-b from-transparent via-emerald-300/60 to-transparent" />
        <div className="absolute right-[14%] top-[48%] h-32 w-px bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent" />
      </div>

      {/* Eyebrow */}
      {eyebrow && (
        <a href="#" className="group">
          <span
            className="text-sm text-emerald-200/90 font-geist mx-auto px-5 py-2 tracking-[0.2em]
            bg-[rgba(0,204,128,0.12)]/90 border border-emerald-400/30
            rounded-full w-fit uppercase flex items-center justify-center backdrop-blur-sm"
          >
            {eyebrow}
            <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </a>
      )}

      {/* Title */}
      <h1
        className="animate-fade-in -translate-y-4 text-balance
        bg-gradient-to-br from-emerald-100 via-emerald-300 to-cyan-300
        bg-clip-text py-6 text-5xl font-semibold leading-tight tracking-tight
        text-transparent opacity-0 sm:text-6xl md:text-7xl lg:text-[6.5rem]"
      >
        {title}
      </h1>

      {/* Subtitle */}
      <p
        className="animate-fade-in mb-12 -translate-y-4 text-balance
        text-lg tracking-tight text-emerald-100/75
        opacity-0 md:text-xl"
      >
        {subtitle}
      </p>

      {/* CTA */}
      {ctaLabel && (
        <div className="flex flex-col items-center gap-6">
          <Button
            asChild
            className="w-fit md:w-56 z-20 font-geist tracking-tight text-center text-lg
            bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 text-[#00110b]
            hover:from-emerald-300 hover:via-cyan-300 hover:to-emerald-400 transition-all duration-300 shadow-[0_0_38px_rgba(51,255,179,0.35)]"
          >
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          <span className="text-xs uppercase tracking-[0.4em] text-emerald-200/60">
            End-to-end encrypted · AI assisted workflows
          </span>
        </div>
      )}

      {/* Bottom Fade */}
      <div
        className="animate-fade-up relative mt-32 opacity-0 [perspective:2000px]
        after:absolute after:inset-0 after:z-50
        after:[background:linear-gradient(to_top,rgba(0,5,3,0.92)_20%,transparent)]"
      />
    </section>
  )
}
