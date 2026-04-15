import { FiPlus } from 'react-icons/fi'
import SummaryCard from '../components/SummaryCard'
import FriendCard from '../components/FriendCard'
import friends from '../data/friends.json'

export default function Home() {
  return (
    <div>
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
          Friends to keep close in your life
        </h2>

        <p className="mt-4 text-sm md:text-base text-slate-500 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#225b49] text-white px-4 py-2 text-sm font-medium shadow">
          <FiPlus />
          Add a Friend
        </button>
      </section>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        <SummaryCard value="10" label="Total Friends" />
        <SummaryCard value="3" label="On Track" />
        <SummaryCard value="6" label="Need Attention" />
        <SummaryCard value="12" label="Interactions This Month" />
      </section>

      <section className="mt-10">
        <h3 className="text-[18px] font-bold text-slate-800 mb-4">
          Your Friends
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </section>
    </div>
  )
}