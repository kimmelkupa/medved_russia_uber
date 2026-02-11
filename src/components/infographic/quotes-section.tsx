'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface QuoteData {
  id: number
  text: string
  author: string
  year: string
  type: 'early' | 'late'
}

const quotes: QuoteData[] = [
  {
    id: 1,
    text: 'Свобода лучше, чем несвобода. Это очевидная вещь, и спорить с этим бессмысленно.',
    author: 'Дмитрий Медведев',
    year: '2008',
    type: 'early',
  },
  {
    id: 2,
    text: 'Верховенство права — это не лозунг, а основа развития нашего государства.',
    author: 'Дмитрий Медведев',
    year: '2010',
    type: 'early',
  },
  {
    id: 3,
    text: 'Россия должна стать современной, открытой страной, комфортной для жизни граждан.',
    author: 'Дмитрий Медведев',
    year: '2011',
    type: 'early',
  },
  {
    id: 4,
    text: 'Украина исчезнет как государство. Это неизбежный процесс.',
    author: 'Дмитрий Медведев',
    year: '2022',
    type: 'late',
  },
  {
    id: 5,
    text: 'Запад — лицемерная цивилизация, которая научилась красиво говорить и丑陋 действовать.',
    author: 'Дмитрий Медведев',
    year: '2023',
    type: 'late',
  },
  {
    id: 6,
    text: 'Мы готовы к любому развитию событий, включая самые худшие сценарии.',
    author: 'Дмитрий Медведев',
    year: '2024',
    type: 'late',
  },
]

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let timeout: NodeJS.Timeout
    let charIndex = 0

    const startTyping = () => {
      timeout = setInterval(() => {
        if (charIndex < text.length) {
          setDisplayedText(text.slice(0, charIndex + 1))
          charIndex++
        } else {
          setIsTyping(false)
          clearInterval(timeout)
        }
      }, 30)
    }

    const delayTimeout = setTimeout(startTyping, delay)

    return () => {
      clearTimeout(delayTimeout)
      clearInterval(timeout)
    }
  }, [text, delay, isInView])

  return (
    <div ref={ref}>
      <span>{displayedText}</span>
      {isTyping && isInView && (
        <span className="inline-block w-0.5 h-5 bg-current ml-0.5 animate-pulse" />
      )}
    </div>
  )
}

export function QuotesSection() {
  const [activeType, setActiveType] = useState<'early' | 'late'>('early')
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)

  const filteredQuotes = quotes.filter((q) => q.type === activeType)
  const currentQuote = filteredQuotes[currentQuoteIndex]

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % filteredQuotes.length)
  }

  const prevQuote = () => {
    setCurrentQuoteIndex((prev) => (prev - 1 + filteredQuotes.length) % filteredQuotes.length)
  }

  const handleTypeChange = (type: 'early' | 'late') => {
    setActiveType(type)
    setCurrentQuoteIndex(0)
  }

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Ключевые цитаты</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Контраст риторики: от правового гуманизма к конфронтации
          </p>
        </motion.div>

        {/* Type Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={activeType === 'early' ? 'default' : 'outline'}
            className={`rounded-full ${
              activeType === 'early'
                ? 'bg-green-600 hover:bg-green-700'
                : 'border-green-500/30 text-green-600 hover:bg-green-500/10'
            }`}
            onClick={() => handleTypeChange('early')}
          >
            2008-2012
          </Button>
          <Button
            variant={activeType === 'late' ? 'default' : 'outline'}
            className={`rounded-full ${
              activeType === 'late'
                ? 'bg-red-600 hover:bg-red-700'
                : 'border-red-500/30 text-red-600 hover:bg-red-500/10'
            }`}
            onClick={() => handleTypeChange('late')}
          >
            2022+
          </Button>
        </div>

        {/* Quote Card */}
        <motion.div
          key={`${activeType}-${currentQuoteIndex}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Card
            className={`relative overflow-hidden ${
              activeType === 'early'
                ? 'border-2 border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent'
                : 'border-2 border-red-500/30 bg-gradient-to-br from-red-500/5 to-transparent'
            }`}
          >
            <CardContent className="p-8 md:p-12">
              {/* Quote Icon */}
              <Quote
                className={`absolute top-4 left-4 h-16 w-16 ${
                  activeType === 'early' ? 'text-green-500/20' : 'text-red-500/20'
                }`}
              />

              {/* Quote Text */}
              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-6">
                  <TypewriterText text={currentQuote.text} />
                </p>
                <footer className="flex items-center gap-4">
                  <div
                    className={`w-12 h-0.5 ${
                      activeType === 'early' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  />
                  <div>
                    <cite className="not-italic font-medium">{currentQuote.author}</cite>
                    <p className="text-sm text-muted-foreground">{currentQuote.year}</p>
                  </div>
                </footer>
              </blockquote>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <div className="flex gap-2">
                  {filteredQuotes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentQuoteIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentQuoteIndex === index
                          ? activeType === 'early'
                            ? 'w-6 bg-green-500'
                            : 'w-6 bg-red-500'
                          : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevQuote}
                    className="rounded-full"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextQuote}
                    className="rounded-full"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Context Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-6"
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm ${
              activeType === 'early'
                ? 'bg-green-500/10 text-green-700 dark:text-green-400'
                : 'bg-red-500/10 text-red-700 dark:text-red-400'
            }`}
          >
            <span className="font-medium">
              {activeType === 'early' ? 'Проевропейский период' : 'Конфронтационный период'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
