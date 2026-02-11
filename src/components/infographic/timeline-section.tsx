'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Calendar, MapPin, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface TimelineEvent {
  year: string
  title: string
  description: string
  details: string
  type: 'achievement' | 'conflict' | 'transition' | 'milestone'
  icon?: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2008',
    title: 'Стал президентом',
    description: '"Свобода лучше, чем несвобода"',
    details: 'Дмитрий Медведев избран президентом РФ. В инаугурационной речи декларирует приоритет прав и свобод граждан, критикует "правовой нигилизм". Начало эпохи "модернизации" и активного диалога с Западом.',
    type: 'milestone',
  },
  {
    year: '2008',
    title: 'Война в Грузии',
    description: 'Первый контраст проевропейской политики',
    details: 'Пятидневная война в августе 2008 года. Решение о вводе войск и признание независимости Абхазии и Южной Осетии. Демонстрация границ "европеизации" — она не распространялась на сферу "привилегированных интересов" в ближнем зарубежье.',
    type: 'conflict',
  },
  {
    year: '2009-2010',
    title: '"Перезагрузка" с США',
    description: 'Подписание СНВ-3, потепление отношений',
    details: 'Кульминация проевропейского курса. Подписан новый договор о стратегических наступательных вооружениях (СНВ-3). Медведев и Обама символизируют новый этап партнёрства. Россия демонстрирует готовность к диалогу и сокращению ядерного потенциала.',
    type: 'achievement',
  },
  {
    year: '2010',
    title: 'Запуск Сколково',
    description: 'Российская Кремниевая долина',
    details: 'Флагманский проект модернизации. Инновационный центр "Сколково" призван стать символом интеграции России в глобальную научно-технологическую повестку. Налоговые льготы, особый правовой режим, привлечение западных экспертов.',
    type: 'achievement',
  },
  {
    year: '2012',
    title: 'Вступление в ВТО',
    description: 'Завершение 18-летних переговоров',
    details: 'Россия официально становится членом ВТО. Открытие для глобальной торговли, снижение тарифов, подтверждение курса на интеграцию в мировую экономику. Последнее крупное достижение "европейского" периода.',
    type: 'achievement',
  },
  {
    year: '2014',
    title: 'Крым и санкции',
    description: 'Начало изоляции',
    details: 'Присоединение Крыма к России, конфликт на востоке Украины. Введение западных санкций. Начало "консервативного поворота" в российской политике. Медведев, уже как премьер-министр, поддерживает курс.',
    type: 'conflict',
  },
  {
    year: '2020',
    title: 'Отставка с поста премьера',
    description: 'Конец эпохи исполнительной власти',
    details: 'После отставки правительства в январе 2020 года Медведев занимает пост заместителя председателя Совета Безопасности. Период политической неопределённости и поиска новой роли.',
    type: 'transition',
  },
  {
    year: '2022',
    title: 'Начало СВО',
    description: 'Радикализация риторики',
    details: 'Специальная военная операция на Украине. Кардинальное изменение риторики Медведева в Telegram: прогнозы "исчезновения Украины", обвинения Запада, жёсткие заявления. Переход к конфронтационной парадигме.',
    type: 'conflict',
  },
]

const typeColors = {
  achievement: 'bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30',
  conflict: 'bg-red-500/20 text-red-700 dark:text-red-400 border-red-500/30',
  transition: 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/30',
  milestone: 'bg-[#1e3a5f]/20 text-[#1e3a5f] dark:text-[#c9a227] border-[#1e3a5f]/30 dark:border-[#c9a227]/30',
}

const typeLabels = {
  achievement: 'Достижение',
  conflict: 'Конфликт',
  transition: 'Переход',
  milestone: 'Веха',
}

export function TimelineSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="timeline" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Таймлайн эволюции</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ключевые события политической карьеры Дмитрия Медведева: 
            от президента-модернизатора до идеолога конфронтации
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1e3a5f] via-[#c9a227] to-[#1e3a5f] dark:from-[#c9a227] dark:via-[#4a90d9] dark:to-[#c9a227]" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-start mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c9a227] border-4 border-background dark:bg-[#1e3a5f] z-10" />

              {/* Content card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <Card
                  className={`cursor-pointer transition-all duration-300 card-hover ${
                    expandedId === index ? 'ring-2 ring-[#c9a227] dark:ring-[#1e3a5f]' : ''
                  }`}
                  onClick={() => setExpandedId(expandedId === index ? null : index)}
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-lg font-bold bg-[#1e3a5f] text-white dark:bg-[#c9a227] dark:text-[#0f1a26]">
                          {event.year}
                        </Badge>
                        <Badge variant="outline" className={typeColors[event.type]}>
                          {typeLabels[event.type]}
                        </Badge>
                      </div>
                      {expandedId === index ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>

                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2 italic">
                      {event.description}
                    </p>

                    <AnimatePresence>
                      {expandedId === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 border-t border-border mt-4"
                        >
                          <p className="text-sm leading-relaxed">{event.details}</p>
                          
                          {event.type === 'milestone' && (
                            <div className="flex items-center gap-2 mt-4 text-muted-foreground">
                              <Quote className="h-4 w-4" />
                              <span className="text-xs">Ключевой момент трансформации</span>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
