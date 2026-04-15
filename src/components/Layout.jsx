import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#eef2f3] mx-auto max-w-[1100px]">
      <Navbar />
      <main className="min-h-[60vh] px-4 md:px-6 py-6 md:py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}