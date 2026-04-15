import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { useTimeline } from '../context/TimelineContext'

export default function Stats() {
  const { entries } = useTimeline()

  const counts = {
    text: entries.filter(item => item.type === 'text').length,
    call: entries.filter(item => item.type === 'call').length,
    video: entries.filter(item => item.type === 'video').length,
  }

  const data = [
    { name: 'Text', value: counts.text, color: '#7c3aed' },
    { name: 'Call', value: counts.call, color: '#1f7660' },
    { name: 'Video', value: counts.video, color: '#56b881' },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">Friendship Analytics</h2>

      <div className="bg-white border border-slate-200 rounded-md p-4 md:p-8 shadow-sm">
        <p className="text-sm text-slate-500 mb-6">By Interaction Type</p>

        <div className="w-full h-[320px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" innerRadius={60} outerRadius={95} paddingAngle={4}>
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-center gap-5 text-sm mt-2">
          {data.map(item => (
            <div key={item.name} className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
              <span className="text-slate-500">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}