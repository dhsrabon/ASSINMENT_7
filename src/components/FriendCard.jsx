import { Link } from 'react-router-dom'

const statusClasses = {
  overdue: 'bg-red-500 text-white',
  'almost due': 'bg-amber-400 text-white',
  'on-track': 'bg-[#255b49] text-white',
}

export default function FriendCard({ friend }) {
  return (
    <Link
      to={`/friend/${friend.id}`}
      className="bg-white border border-slate-200 rounded-md px-4 py-5 text-center shadow-sm hover:shadow-md transition block min-h-[190px]"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-[54px] h-[54px] rounded-full object-cover mx-auto"
      />

      <h3 className="mt-3 text-[16px] font-bold text-slate-800 leading-none">
        {friend.name}
      </h3>

      <p className="text-[11px] text-slate-400 mt-2">
        {friend.days_since_contact}d ago
      </p>

      <div className="mt-2 flex flex-wrap justify-center gap-2">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] px-2 py-[3px] rounded-full bg-green-100 text-green-700 uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-2">
        <span
          className={`text-[10px] px-2.5 py-[4px] rounded-full font-medium capitalize ${statusClasses[friend.status]}`}
        >
          {friend.status}
        </span>
      </div>
    </Link>
  )
}