'use client'

import Link from 'next/link';
import { useState } from 'react';
import { UserIcon } from '@heroicons/react/24/outline';
import AuthModal, { User } from './AuthModal';

export default function Navbar() {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    setAuthUser(null);
  };

  return (
    <>
      <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-purple-700">
          <Link href="/">Cold Strangers Party</Link>
        </div>

        <ul className="flex gap-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/trending">Trending Party</Link></li>
        </ul>

        {authUser ? (
          <div className="flex items-center gap-4">
            <span className="text-gray-700">Hi, {authUser.name}</span>
            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-red-500 text-white rounded-md"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Sign In / Register"
          >
            <UserIcon className="h-6 w-6 text-gray-700" />
          </button>
        )}
      </nav>

      <AuthModal
        open={open}
        onClose={() => setOpen(false)}
        onAuthSuccess={(user) => setAuthUser(user)}
      />
    </>
  );
}
