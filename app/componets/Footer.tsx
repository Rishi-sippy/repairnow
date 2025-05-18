import { FaYoutube, FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#0f0f10] text-white px-6 md:px-20 py-10 text-sm">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & Branding */}
        <div className="flex flex-col gap-4">
        StrangyP!
        </div>

        {/* Platform */}
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-sm mb-2">PLATFORM</h3>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Host Party</a>
          <a href="#" className="hover:underline">Explore Parties</a>
        </div>

        {/* Brands */}
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-sm mb-2">BRANDS</h3>
          <a href="#" className="hover:underline">Feature Your Brand</a>
        </div>

        {/* Help */}
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-sm mb-2">HELP</h3>
          <a href="#" className="hover:underline">Terms And Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Refunds</a>
          <a href="#" className="hover:underline">Disclaimer</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-2 w-full max-w-xs">
          <h3 className="font-bold text-sm mb-1">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <div className="flex rounded-md overflow-hidden bg-[#1c1b1f] border border-neutral-700">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-3 py-2 bg-transparent text-white outline-none"
            />
            <button className="bg-[#1c1b1f] text-[#ff1e56] px-4 font-semibold hover:underline transition">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-2">Follow us on</p>
          <div className="flex items-center gap-3 text-lg">
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400">
        © All rights reserved
      </div>
    </footer>
  );
}
