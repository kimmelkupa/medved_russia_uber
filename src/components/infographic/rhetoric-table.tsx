'use client'

import { motion } from 'framer-motion'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface RhetoricRow {
  criterion: string
  early: string
  late: string
}

const rhetoricData: RhetoricRow[] = [
  {
    criterion: 'Центральная тема',
    early: 'Модернизация, право, диалог',
    late: 'Суверенитет, безопасность, конфронтация',
  },
  {
    criterion: 'Ключевые тезисы',
    early: '"Свобода лучше несвободы", "верховенство права"',
    late: '"Исчезновение Украины", "верховный властелин Ада"',
  },
  {
    criterion: 'Образ себя',
    early: 'Технократ, модернизатор',
    late: 'Государственник, "принудитель"',
  },
  {
    criterion: 'Образ Запада',
    early: 'Партнёр (хоть и сложный)',
    late: 'Враг, "подсвинки", лицемерная цивилизация',
  },
  {
    criterion: 'Коммуникация',
    early: 'Диалоговая (Twitter, блоги)',
    late: 'Монологичная, пропагандистская (Telegram)',
  },
  {
    criterion: 'Тон высказываний',
    early: 'Сдержанный, академический',
    late: 'Эмоциональный, агрессивный',
  },
  {
    criterion: 'Целевая аудитория',
    early: 'Западные партнёры, либеральная элита',
    late: 'Патриотически настроенные граждане',
  },
]

export function RhetoricTable() {
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
            <span className="gradient-text">Трансформация риторики</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Сравнительный анализ ключевых аспектов публичной позиции 
            до и после трансформации
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-500/10 via-muted to-red-500/10 pb-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg text-green-700 dark:text-green-400">
                  2008-2012
                </CardTitle>
                <CardTitle className="text-lg text-red-700 dark:text-red-400">
                  После 2022
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50 hover:bg-muted/50">
                    <TableHead className="font-semibold w-1/3">Критерий</TableHead>
                    <TableHead className="font-semibold text-green-700 dark:text-green-400">
                      Ранняя модель
                    </TableHead>
                    <TableHead className="font-semibold text-red-700 dark:text-red-400">
                      Поздняя модель
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rhetoricData.map((row, index) => (
                    <TableRow
                      key={index}
                      className="group hover:bg-muted/30 transition-colors"
                    >
                      <TableCell className="font-medium">
                        {row.criterion}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                        {row.early}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
                        {row.late}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-8"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-500/30" />
            <span className="text-sm text-muted-foreground">Проевропейский период</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-500/30" />
            <span className="text-sm text-muted-foreground">Конфронтационный период</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
