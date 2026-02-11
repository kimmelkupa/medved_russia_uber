'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, BookOpen, Users, Globe } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function ConclusionSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Заключение</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Медведев как символ эпохи
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              {/* Hero Image */}
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src="/hero-bg.png"
                  alt="Конец эры"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Символ общего пути
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-6">
                <p className="text-lg leading-relaxed">
                  Дмитрий Медведев прошёл путь от олицетворения надежд на сближение России 
                  с Европой на основе модернизации и права до одного из главных символов 
                  ценностного и геополитического разлома.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg bg-muted/50 border border-border"
                  >
                    <Globe className="h-8 w-8 text-[#c9a227] mb-2" />
                    <h4 className="font-semibold mb-1">Селективная европеизация</h4>
                    <p className="text-sm text-muted-foreground">
                      Пределы модели: заимствование технологий при отстаивании суверенитета
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg bg-muted/50 border border-border"
                  >
                    <Users className="h-8 w-8 text-[#c9a227] mb-2" />
                    <h4 className="font-semibold mb-1">Символ трансформации</h4>
                    <p className="text-sm text-muted-foreground">
                      От "европейского джентльмена" до идеолога конфронтации
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg bg-muted/50 border border-border"
                  >
                    <BookOpen className="h-8 w-8 text-[#c9a227] mb-2" />
                    <h4 className="font-semibold mb-1">Case study</h4>
                    <p className="text-sm text-muted-foreground">
                      Ключевой пример для понимания эволюции российского курса
                    </p>
                  </motion.div>
                </div>

                <blockquote className="border-l-4 border-[#c9a227] pl-4 py-2 my-6 bg-muted/30 rounded-r-lg">
                  <p className="text-lg italic">
                    Его трансформация — это не просто личная история, а зеркало общего пути России: 
                    от попыток встроиться в "Большую Европу" к жёсткому утверждению собственной 
                    цивилизационной субъектности через конфликт.
                  </p>
                </blockquote>

                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold mb-3">Открытые вопросы:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowUpRight className="h-4 w-4 mt-1 text-[#c9a227] shrink-0" />
                      <span className="text-muted-foreground">
                        Остается ли в его позиции что-то от прежнего "европейского" этоса?
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowUpRight className="h-4 w-4 mt-1 text-[#c9a227] shrink-0" />
                      <span className="text-muted-foreground">
                        Является ли его риторика лишь публичной маской или отражает глубинные изменения?
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowUpRight className="h-4 w-4 mt-1 text-[#c9a227] shrink-0" />
                      <span className="text-muted-foreground">
                        Что может означать такая эволюция для долгосрочных траекторий российской политики?
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Интерактивная инфографика • 2024
          </p>
        </motion.div>
      </div>
    </section>
  )
}
