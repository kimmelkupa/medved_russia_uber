'use client'

import { motion } from 'framer-motion'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Data for the line chart - Pro-European Index
const proEuropeanData = [
  { year: '2008', index: 85, event: 'Начало президентства' },
  { year: '2009', index: 90, event: 'Перезагрузка с США' },
  { year: '2010', index: 88, event: 'СНВ-3, Сколково' },
  { year: '2011', index: 82, event: 'Массовые протесты' },
  { year: '2012', index: 75, event: 'ВТО, конец президентства' },
  { year: '2013', index: 60, event: 'Пост премьера' },
  { year: '2014', index: 40, event: 'Крым, санкции' },
  { year: '2015', index: 35, event: 'Сирия' },
  { year: '2016', index: 30, event: 'Продолжение санкций' },
  { year: '2017', index: 25, event: '—' },
  { year: '2018', index: 20, event: '—' },
  { year: '2019', index: 15, event: '—' },
  { year: '2020', index: 10, event: 'Отставка' },
  { year: '2021', index: 8, event: '—' },
  { year: '2022', index: 5, event: 'Начало СВО' },
  { year: '2023', index: 3, event: 'Радикализация' },
  { year: '2024', index: 2, event: '—' },
]

// Data for the bar chart - Achievements vs Conflicts
const achievementsConflictsData = [
  { period: '2008-2012', achievements: 8, conflicts: 2 },
  { period: '2012-2018', achievements: 3, conflicts: 4 },
  { period: '2018-2022', achievements: 1, conflicts: 3 },
  { period: '2022+', achievements: 0, conflicts: 8 },
]

// Data for pie chart
const focusAreasEarly = [
  { name: 'Модернизация', value: 40, color: '#1e3a5f' },
  { name: 'Дипломатия', value: 30, color: '#c9a227' },
  { name: 'Право', value: 20, color: '#4a90d9' },
  { name: 'Экономика', value: 10, color: '#6bb3a0' },
]

const focusAreasLate = [
  { name: 'Безопасность', value: 45, color: '#dc2626' },
  { name: 'Конфронтация', value: 35, color: '#991b1b' },
  { name: 'Суверенитет', value: 15, color: '#f59e0b' },
  { name: 'Пропаганда', value: 5, color: '#78716c' },
]

export function ChartsSection() {
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
            <span className="gradient-text">Визуализация эволюции</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Графическое представление трансформации политической позиции
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Line Chart - Pro-European Index */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">
                  Индекс проевропейскости
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Условный показатель от 0 до 100 по годам
                </p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={proEuropeanData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="year" 
                      className="text-xs"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <YAxis 
                      domain={[0, 100]}
                      className="text-xs"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                      labelStyle={{ color: 'hsl(var(--foreground))' }}
                      formatter={(value: number) => [`${value}`, 'Индекс']}
                    />
                    <Line
                      type="monotone"
                      dataKey="index"
                      stroke="#c9a227"
                      strokeWidth={3}
                      dot={{ fill: '#1e3a5f', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: '#c9a227', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bar Chart - Achievements vs Conflicts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">
                  Достижения vs Конфликты
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Сравнение по периодам
                </p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={achievementsConflictsData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="period"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <YAxis 
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                    <Legend />
                    <Bar 
                      dataKey="achievements" 
                      name="Достижения"
                      fill="#4ade80" 
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar 
                      dataKey="conflicts" 
                      name="Конфликты"
                      fill="#f87171" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pie Charts - Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Фокус политической риторики
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Сравнение приоритетов по периодам
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Early Period Pie */}
                  <div className="text-center">
                    <h4 className="font-medium mb-4 text-green-600 dark:text-green-400">
                      2008-2012: Проевропейский период
                    </h4>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={focusAreasEarly}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={2}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          labelLine={false}
                        >
                          {focusAreasEarly.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Late Period Pie */}
                  <div className="text-center">
                    <h4 className="font-medium mb-4 text-red-600 dark:text-red-400">
                      2022+: Конфронтационный период
                    </h4>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={focusAreasLate}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={2}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          labelLine={false}
                        >
                          {focusAreasLate.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
