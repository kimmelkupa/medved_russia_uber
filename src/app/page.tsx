'use client'

import { HeroSection } from '@/components/infographic/hero-section'
import { TimelineSection } from '@/components/infographic/timeline-section'
import { ContrastSection } from '@/components/infographic/contrast-section'
import { RhetoricTable } from '@/components/infographic/rhetoric-table'
import { ChartsSection } from '@/components/infographic/charts-section'
import { HypothesesSection } from '@/components/infographic/hypotheses-section'
import { VideoSection } from '@/components/infographic/video-section'
import { GallerySection } from '@/components/infographic/gallery-section'
import { QuotesSection } from '@/components/infographic/quotes-section'
import { ConclusionSection } from '@/components/infographic/conclusion-section'
import { Navigation } from '@/components/infographic/navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TimelineSection />
      <ContrastSection />
      <RhetoricTable />
      <ChartsSection />
      <HypothesesSection />
      <VideoSection />
      <GallerySection />
      <QuotesSection />
      <ConclusionSection />
    </main>
  )
}
