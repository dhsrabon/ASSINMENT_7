import TimelineItem from '../components/TimelineItem'
import { useTimeline } from '../context/TimelineContext'

export default function Timeline() {
  const { entries } = useTimeline()

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-slate-800">Timeline</h2>

      <select className="mt-6 border border-slate-200 rounded-md px-4 py-2 bg-white text-slate-400 text-sm w-full max-w-xs">
        <option>Filter timeline</option>
      </select>

      <div className="mt-6 space-y-3">
        {entries.map(item => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}