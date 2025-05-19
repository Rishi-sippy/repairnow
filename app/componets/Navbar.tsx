'use client';

import Link from 'next/link';
import { useState } from 'react';
import { UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import AuthModal, { User } from './AuthModal';

export default function Navbar() {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);

  const handleLogout = () => setAuthUser(null);

  return (
    <>

      <nav className="w-full bg-gradient-to-r from-[#1d1d1d] to-[#2b2b2b] px-6 py-4 flex items-center justify-center shadow-md nav-bg">
        <div className='flex justify-between w-[1120px]'>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-white text-xl font-semibold">Stranger's Party</span>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center bg-[#1c1c1c] border border-[#555] rounded-full px-4 py-2 w-[450px]">
          <MagnifyingGlassIcon className="h-5 w-5 text-[#ff2d55] mr-3" />
          <input
            type="text"
            placeholder="Search for house parties, hosts, etc"
            className="bg-transparent text-white placeholder-gray-400 flex-grow focus:outline-none"
          />
          <select className="bg-transparent text-white text-sm px-2 focus:outline-none">
            <option>All Cities</option>
            <option>New York</option>
            <option>Los Angeles</option>
          </select>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          {/* Host a Party */}
          <Link href="/host">
            <button className="flex items-center gap-2 border border-[#ff2d55] text-white px-4 py-2 rounded-lg bg-[#800020]/20 hover:bg-[#800020]/40 transition text-sm font-medium">
              Host A Party
              {/* <SparklesIcon className="h-4 w-4 text-[#ff2d55]" /> */}
            </button>
          </Link>

          {/* Profile / Auth */}
          {authUser ? (
            <div className="flex items-center gap-2 text-white">
              <span>Hi, {authUser.name}</span>
              <button onClick={handleLogout} className="text-red-500 text-sm">Logout</button>
            </div>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="w-10 h-10 flex items-center justify-center bg-[#2a2a2a] rounded-lg"
              aria-label="Sign In"
            >
              <UserIcon className="h-5 w-5 text-[#ff2d55]" />
            </button>
          )}
        </div>

        </div>
      </nav>

      <AuthModal
        open={open}
        onClose={() => setOpen(false)}
        onAuthSuccess={(user) => setAuthUser(user)}
      />
    </>
  );
}
