import callIcon from '../icons/call.png'
import textIcon from '../icons/text.png'
import videoIcon from '../icons/video.png'

const iconMap = {
  call: callIcon,
  text: textIcon,
  video: videoIcon,
}

export default function TimelineItem({ item }) {
  const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="bg-white border border-slate-200 rounded-md px-4 py-3 flex items-center gap-3 shadow-sm hover:shadow-md transition">
      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
        {item.type === 'meetup' ? (
          <span className="text-xl leading-none">🤝</span>
        ) : (
          <img
            src={iconMap[item.type]}
            alt={item.type}
            className="w-5 h-5 object-contain"
          />
        )}
      </div>

      <div>
        <h4 className="text-sm md:text-base font-semibold text-slate-700">
          {item.title}
        </h4>
        <p className="text-xs text-slate-400 mt-1">{formattedDate}</p>
      </div>
    </div>
  )
}