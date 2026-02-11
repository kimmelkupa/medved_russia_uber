'use client'

import { motion } from 'framer-motion'
import { Play, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface VideoData {
  id: string
  title: string
  description: string
  thumbnail: string
  youtubeId: string
}

const videos: VideoData[] = [
  {
    id: '1',
    title: 'Перезагрузка отношений Россия-США',
    description: ' История дипломатического потепления 2009-2010 годов. Подписание СНВ-3, встречи Медведева и Обамы.',
    thumbnail: 'https://img.youtube.com/vi/L5mCkquGCzg/maxresdefault.jpg',
    youtubeId: 'L5mCkquGCzg',
  },
  {
    id: '2',
    title: 'Сколково: российская Кремниевая долина',
    description: 'Флагманский проект модернизации. Как создавался инновационный центр и какие амбиции стояли за ним.',
    thumbnail: 'https://img.youtube.com/vi/Hp8frNF7Qs4/maxresdefault.jpg',
    youtubeId: 'Hp8frNF7Qs4',
  },
  {
    id: '3',
    title: 'Президентство Дмитрия Медведева',
    description: 'Документальный обзор ключевых событий и решений периода 2008-2012 годов.',
    thumbnail: 'https://img.youtube.com/vi/k9xXn5M5CfM/maxresdefault.jpg',
    youtubeId: 'k9xXn5M5CfM',
  },
]

export function VideoSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Видеоматериалы</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Документальные материалы и ключевые моменты эпохи
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden card-hover">
                <div className="relative aspect-video bg-muted">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = '/timeline-visual.png'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="h-8 w-8 text-[#1e3a5f] ml-1" />
                    </div>
                  </div>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0"
                  >
                    <span className="sr-only">Смотреть видео: {video.title}</span>
                  </a>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-[#c9a227] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {video.description}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-3 p-0 h-auto text-[#1e3a5f] dark:text-[#c9a227]"
                    asChild
                  >
                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Смотреть на YouTube
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
