import { useParams } from 'react-router-dom'
import {
  FiClock,
  FiArchive,
  FiTrash2,
  FiPhone,
  FiMessageSquare,
  FiVideo,
} from 'react-icons/fi'
import toast from 'react-hot-toast'
import friends from '../data/friends.json'
import { useTimeline } from '../context/TimelineContext'

const statusClasses = {
  overdue: 'bg-red-100 text-red-600',
  'almost due': 'bg-yellow-100 text-yellow-700',
  'on-track': 'bg-green-100 text-green-700',
}

export default function FriendDetails() {
  const { id } = useParams()
  const friend = friends.find((item) => item.id === Number(id))
  const { addEntry } = useTimeline()

  if (!friend) {
    return <p className="text-center text-red-500">Friend not found.</p>
  }

  const handleCheckIn = (type) => {
    addEntry(type, friend.name)
    toast.success(`${type} entry added to timeline`)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-white border border-slate-200 rounded-md p-6 shadow-sm">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 rounded-full object-cover mx-auto"
        />

        <h2 className="text-xl font-bold text-center mt-4 text-slate-800">
          {friend.name}
        </h2>

        <div className="text-center mt-2">
          <span
            className={`text-xs px-3 py-1 rounded-full ${statusClasses[friend.status]}`}
          >
            {friend.status}
          </span>
        </div>

        <div className="mt-3 flex justify-center flex-wrap gap-2">
          {friend.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-1 rounded-full bg-slate-100 text-slate-600 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-slate-500 text-center mt-4">
          “{friend.bio}”
        </p>

        <p className="text-sm text-slate-700 text-center mt-4">
          {friend.email}
        </p>

        <div className="mt-6 space-y-3">
          <button className="w-full border border-slate-200 rounded-md py-2 flex items-center justify-center gap-2 text-sm text-slate-700">
            <FiClock /> Snooze 2 Weeks
          </button>

          <button className="w-full border border-slate-200 rounded-md py-2 flex items-center justify-center gap-2 text-sm text-slate-700">
            <FiArchive /> Archive
          </button>

          <button className="w-full border border-slate-200 rounded-md py-2 flex items-center justify-center gap-2 text-sm text-red-500">
            <FiTrash2 /> Delete
          </button>
        </div>
      </div>

      <div className="lg:col-span-2 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-md p-5 text-center shadow-sm">
            <h3 className="text-3xl font-semibold text-[#225b49]">
              {friend.days_since_contact}
            </h3>
            <p className="text-sm text-slate-500 mt-2">Days Since Contact</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-md p-5 text-center shadow-sm">
            <h3 className="text-3xl font-semibold text-[#225b49]">
              {friend.goal}
            </h3>
            <p className="text-sm text-slate-500 mt-2">Goal (Days)</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-md p-5 text-center shadow-sm">
            <h3 className="text-2xl font-semibold text-[#225b49]">
              {new Date(friend.next_due_date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </h3>
            <p className="text-sm text-slate-500 mt-2">Next Due</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-md p-5 shadow-sm flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">Relationship Goal</p>
            <h3 className="mt-2 text-slate-700">
              Connect every <span className="font-bold">{friend.goal} days</span>
            </h3>
          </div>

          <button className="border border-slate-200 rounded-md px-4 py-2 text-sm">
            Edit
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-md p-5 shadow-sm">
          <p className="text-sm text-slate-500 mb-4">Quick Check-In</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => handleCheckIn('call')}
              className="border border-slate-200 rounded-md py-4 flex flex-col items-center gap-2 text-slate-700 hover:bg-slate-50"
            >
              <FiPhone />
              <span>Call</span>
            </button>

            <button
              onClick={() => handleCheckIn('text')}
              className="border border-slate-200 rounded-md py-4 flex flex-col items-center gap-2 text-slate-700 hover:bg-slate-50"
            >
              <FiMessageSquare />
              <span>Text</span>
            </button>

            <button
              onClick={() => handleCheckIn('video')}
              className="border border-slate-200 rounded-md py-4 flex flex-col items-center gap-2 text-slate-700 hover:bg-slate-50"
            >
              <FiVideo />
              <span>Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}