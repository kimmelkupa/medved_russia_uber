'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Target, TrendingUp, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Hypothesis {
  id: number
  title: string
  subtitle: string
  icon: typeof Heart
  color: string
  content: string
  evidence: string[]
}

const hypotheses: Hypothesis[] = [
  {
    id: 1,
    title: 'Разочарование идеалиста',
    subtitle: 'Гнев обманутого человека',
    icon: Heart,
    color: 'text-rose-500',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/30',
    content: 'Именно всеобъемлющая, подлинная проевропейскость раннего Медведева (в идеях, стиле, культурных кодах) делает его нынешнюю жёсткость не тактикой, а следствием глубокого личного и идеологического разочарования.',
    evidence: [
      'Контраст между искренней верой в партнёрство и восприятием действий Запада как "предательства"',
      'Гаджеты, стиль, СНВ, ВТО — всё говорило о подлинной приверженности европейским ценностям',
      'Его нынешняя риторика — это гнев человека, который чувствует себя обманутым в своих лучших ожиданиях',
    ],
  },
  {
    id: 2,
    title: 'Прагматичная адаптация',
    subtitle: 'Следование системному курсу',
    icon: Target,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    content: 'Медведев всегда был частью системы, а его "проевропейскость" была санкционированной сверху тактикой на определённый период. После 2012 года, с возвращением Путина и сменой общего курса, его позиция изменилась соответственно.',
    evidence: [
      'Отсутствие фундаментальных либеральных реформ в его президентство',
      'Сохранение ключевых системных основ',
      'Его трансформация — не личная, а mirroring изменений во всей государственной политике',
    ],
  },
  {
    id: 3,
    title: 'Борьба за релевантность',
    subtitle: 'Внутриэлитная конкуренция',
    icon: TrendingUp,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    content: 'После 2012 года, особенно после отставки с поста премьера в 2020-м, Медведеву необходимо было найти новую нишу и доказать лояльность. Жёсткая, ультрапатриотическая риторика стала его "политическим капиталом".',
    evidence: [
      'Заметная радикализация тона именно после ухода с высоких исполнительных постов',
      'Занятие позиции "крайнего фланга" в публичном поле',
      'Это позволяет другим действовать якобы более сдержанно',
    ],
  },
]

export function HypothesesSection() {
  const [activeId, setActiveId] = useState<number | null>(null)

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
            <span className="gradient-text">Три гипотезы трансформации</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Почему произошла такая кардинальная перемена? 
            Три возможных объяснения эволюции Дмитрия Медведева
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {hypotheses.map((hypothesis, index) => (
            <motion.div
              key={hypothesis.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full cursor-pointer transition-all duration-300 ${
                  activeId === hypothesis.id
                    ? `ring-2 ${hypothesis.borderColor}`
                    : 'hover:shadow-lg'
                }`}
                onClick={() => setActiveId(activeId === hypothesis.id ? null : hypothesis.id)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${hypothesis.bgColor}`}>
                      <hypothesis.icon className={`h-6 w-6 ${hypothesis.color}`} />
                    </div>
                    <div>
                      <BadgeNumber number={hypothesis.id} />
                      <CardTitle className="text-lg mt-1">
                        {hypothesis.title}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {hypothesis.subtitle}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {hypothesis.content}
                  </p>

                  <AnimatePresence>
                    {activeId === hypothesis.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pt-4 border-t border-border"
                      >
                        <h4 className="text-sm font-medium mb-3">Доказательная база:</h4>
                        <ul className="space-y-2">
                          {hypothesis.evidence.map((item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-2 text-sm"
                            >
                              <ChevronRight className={`h-4 w-4 mt-0.5 shrink-0 ${hypothesis.color}`} />
                              <span className="text-muted-foreground">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Button
                    variant="ghost"
                    size="sm"
                    className={`mt-4 w-full ${hypothesis.color}`}
                  >
                    {activeId === hypothesis.id ? 'Скрыть детали' : 'Подробнее'}
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

function BadgeNumber({ number }: { number: number }) {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full bg-[#1e3a5f] text-white dark:bg-[#c9a227] dark:text-[#0f1a26]">
      {number}
    </span>
  )
}
