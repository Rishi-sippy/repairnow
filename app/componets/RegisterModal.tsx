'use client'

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function RegisterModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      alert(json.message);
      if (res.ok) onClose();
    } catch {
      alert('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClose={onClose}
      >
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Dialog Panel */}
        <div className="relative bg-white rounded-xl p-6 w-full max-w-md mx-4">
          <Dialog.Title className="text-xl font-semibold mb-4">
            Create Account
          </Dialog.Title>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-800 disabled:opacity-50"
            >
              {loading ? 'Registering…' : 'Register'}
            </button>
          </form>
        </div>
      </Dialog>
    </Transition>
  );
}
