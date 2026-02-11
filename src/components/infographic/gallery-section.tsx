'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'

interface GalleryImage {
  id: string
  src: string
  title: string
  period: string
  description: string
  style: string
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    title: 'Business casual эпохи',
    period: '2008-2012',
    description: 'Аккуратная стрижка, водолазки, кардиганы. Образ западного технократа.',
    style: 'Европейский интеллигент',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
    title: 'Модернизатор',
    period: '2010-2012',
    description: 'iPhone в руках, активный Twitter, открытость к диалогу.',
    style: 'Цифровой президент',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
    title: 'Премьер-министр',
    period: '2012-2020',
    description: 'Строгие костюмы, сдержанный стиль. Переход к государственнической риторике.',
    style: 'Чиновник',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
    title: 'Совет Безопасности',
    period: '2020-2022',
    description: 'Тёмные костюмы, строгий вид. Формирование новой роли.',
    style: 'Силовик',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
    title: 'Милитари-эстетика',
    period: '2022+',
    description: 'Длинные туники, напоминающие о советской и даже сталинской эпохе.',
    style: 'Государственник',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=500&fit=crop',
    title: 'Современный образ',
    period: '2023+',
    description: 'Жёсткая риторика, агрессивная коммуникация в Telegram.',
    style: 'Идеолог',
  },
]

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Галерея образов</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Эволюция визуального стиля: от европейского интеллигента до государственника
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl"
          >
            <div
              ref={scrollContainerRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="w-full flex-shrink-0"
                >
                  <Card className="m-2 overflow-hidden">
                    <div className="grid md:grid-cols-2">
                      <div className="relative aspect-square md:aspect-auto">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                        <Button
                          variant="secondary"
                          size="icon"
                          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm"
                          onClick={() => setIsOpen(true)}
                        >
                          <ZoomIn className="h-4 w-4" />
                        </Button>
                      </div>
                      <CardContent className="p-6 flex flex-col justify-center">
                        <span className="text-sm text-[#c9a227] font-medium mb-2">
                          {image.period}
                        </span>
                        <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                        <p className="text-muted-foreground mb-4">
                          {image.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Стиль:</span>
                          <span className="px-3 py-1 bg-[#1e3a5f]/10 dark:bg-[#c9a227]/20 rounded-full text-sm font-medium">
                            {image.style}
                          </span>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index
                  ? 'w-8 bg-[#c9a227]'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Strip */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-8">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToIndex(index)}
              className={`relative aspect-square rounded-lg overflow-hidden ${
                currentIndex === index ? 'ring-2 ring-[#c9a227]' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <span className="absolute bottom-1 left-1 text-xs text-white font-medium">
                  {image.period}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black/95">
          <div className="relative">
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].title}
              className="w-full max-h-[80vh] object-contain"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
