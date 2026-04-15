import { NavLink } from 'react-router-dom'
import { FiHome, FiClock, FiBarChart2 } from 'react-icons/fi'
import logo from '../icons/logo.png'
const navItems = [
  { to: '/', label: 'Home', icon: <FiHome size={14} /> },
  { to: '/timeline', label: 'Timeline', icon: <FiClock size={14} /> },
  { to: '/stats', label: 'Stats', icon: <FiBarChart2 size={14} /> },
]

export default function Navbar() {
  return (
    <header className="bg-white px-4 md:px-8 py-4 flex items-center justify-between border-b border-slate-200">
<header className="bg-white px-4 md:px-8 py-4 flex items-center justify-between border-b border-slate-200">
  
  <img
    src={logo}
    alt="KeenKeeper Logo"
    className="h-8 object-contain"
  />

  {/* nav links */}
</header>

      <nav className="flex items-center gap-2 md:gap-3 text-xs">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-1 rounded-md px-2 py-1.5 border transition ${
                isActive
                  ? 'bg-[#225b49] text-white border-[#225b49]'
                  : 'text-slate-500 border-transparent hover:border-slate-200 hover:bg-slate-50'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  )
}