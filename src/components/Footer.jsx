import facebookIcon from '../icons/facebook.png'
import instagramIcon from '../icons/instagram.png'
import twitterIcon from '../icons/twitter.png'

export default function Footer() {
  return (
    <footer className="bg-[#225b49] text-white px-4 md:px-8 py-14 text-center">
      <h2 className="text-3xl md:text-5xl font-bold">KeenKeeper</h2>

      <p className="mt-4 text-xs md:text-sm text-slate-100 max-w-2xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      <div className="mt-6">
        <p className="font-semibold text-sm mb-3">Social Links</p>

        <div className="flex justify-center gap-3">
          <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <img
              src={facebookIcon}
              alt="Facebook"
              className="w-4 h-4 object-contain"
            />
          </div>

          <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-4 h-4 object-contain"
            />
          </div>

          <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <img
              src={twitterIcon}
              alt="Twitter"
              className="w-4 h-4 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-slate-200">
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-4 md:gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  )
}