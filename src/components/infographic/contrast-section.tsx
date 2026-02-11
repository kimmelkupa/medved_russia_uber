'use client'

import { motion } from 'framer-motion'
import { Quote, TrendingUp, TrendingDown, MessageCircle, Globe, Shield, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const leftColumn = {
  title: 'Европейский технократ',
  period: '2008-2012',
  style: 'Business casual',
  quotes: [
    '"Свобода лучше, чем несвобода"',
    '"Верховенство права — это не лозунг, а основа развития"',
    '"Россия должна стать современной, открытой страной"',
  ],
  keywords: ['Модернизация', 'Диалог', 'Право', 'Партнёрство'],
  achievements: ['СНВ-3 с США', 'Вступление в ВТО', 'Сколково', 'Перезагрузка'],
  icon: Globe,
}

const rightColumn = {
  title: 'Государственник',
  period: '2022+',
  style: 'Строгий, милитари-эстетика',
  quotes: [
    '"Украина исчезнет как государство"',
    '"Запад — лицемерная цивилизация"',
    '"Мы готовы к любому развитию событий"',
  ],
  keywords: ['Суверенитет', 'Конфронтация', 'Безопасность', 'Сила'],
  achievements: ['Жёсткая риторика', 'Telegram-канал', 'Поддержка СВО'],
  icon: Shield,
}

export function ContrastSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Контраст трансформации</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Два образа одного политика: как изменились риторика, стиль и позиция 
            за 15 лет политической карьеры
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-4">
          {/* Left Column - European Technocrat */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border-2 border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent hover:border-green-500/50 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-green-500/20">
                      <leftColumn.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-green-700 dark:text-green-400">
                        {leftColumn.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{leftColumn.period}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/30">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Проевропейский курс
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Style */}
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Стиль:</span>
                  <span className="font-medium">{leftColumn.style}</span>
                </div>

                {/* Quotes */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-green-700 dark:text-green-400">
                    <Quote className="h-4 w-4" />
                    Ключевые цитаты
                  </div>
                  {leftColumn.quotes.map((quote, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="pl-4 border-l-2 border-green-500/30 text-sm text-muted-foreground italic"
                    >
                      {quote}
                    </motion.div>
                  ))}
                </div>

                {/* Keywords */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-green-700 dark:text-green-400">
                    Ключевые слова
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {leftColumn.keywords.map((keyword, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-500/20"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-green-700 dark:text-green-400">
                    Достижения
                  </div>
                  <ul className="space-y-1">
                    {leftColumn.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 w-full pointer-events-none" style={{ top: '50%' }}>
            <div className="w-10 h-10 rounded-full bg-background border-2 border-muted flex items-center justify-center z-10">
              <Zap className="h-5 w-5 text-[#c9a227]" />
            </div>
          </div>

          {/* Right Column - Statist */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full border-2 border-red-500/30 bg-gradient-to-br from-red-500/5 to-transparent hover:border-red-500/50 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-red-500/20">
                      <rightColumn.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-red-700 dark:text-red-400">
                        {rightColumn.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{rightColumn.period}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/30">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    Конфронтация
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Style */}
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Стиль:</span>
                  <span className="font-medium">{rightColumn.style}</span>
                </div>

                {/* Quotes */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-red-700 dark:text-red-400">
                    <Quote className="h-4 w-4" />
                    Ключевые цитаты
                  </div>
                  {rightColumn.quotes.map((quote, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="pl-4 border-l-2 border-red-500/30 text-sm text-muted-foreground italic"
                    >
                      {quote}
                    </motion.div>
                  ))}
                </div>

                {/* Keywords */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-red-700 dark:text-red-400">
                    Ключевые слова
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {rightColumn.keywords.map((keyword, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-red-500/10 text-red-700 dark:text-red-400 hover:bg-red-500/20"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-red-700 dark:text-red-400">
                    Деятельность
                  </div>
                  <ul className="space-y-1">
                    {rightColumn.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Arrow indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-muted/50">
            <span className="text-sm text-muted-foreground">От партнёрства</span>
            <div className="w-20 h-0.5 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500" />
            <span className="text-sm text-muted-foreground">к конфронтации</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
