'use client'

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export interface User {
  name: string;
  email: string;
  phone: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  onAuthSuccess: (user: User) => void;
}
interface AuthForm {
    name:     string;
    email:    string;
    phone:    string;
    password: string;
  }

export default function AuthModal({ open, onClose, onAuthSuccess }: Props) {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [form, setForm] = useState<AuthForm>({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const endpoint = mode === 'login' ? '/api/login' : '/api/register';
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message);

      // onAuthSuccess with the returned user data
      onAuthSuccess(json.user);
      onClose();
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(err.message || 'Auth failed');
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
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="relative bg-white rounded-xl p-6 w-full max-w-md mx-4">
          <Dialog.Title className="text-xl font-semibold mb-4 text-center">
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </Dialog.Title>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            )}

            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />

            {mode === 'register' && (
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                required
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            )}

            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-800 disabled:opacity-50"
            >
              {loading
                ? (mode === 'login' ? 'Signing In…' : 'Registering…')
                : (mode === 'login' ? 'Sign In' : 'Create Account')}
            </button>
          </form>

          <div className="mt-4 text-center text-sm">
            {mode === 'login' ? (
              <>
                Don’t have an account?{' '}
                <button
                  onClick={() => setMode('register')}
                  className="text-purple-600 font-medium"
                >
                  Create one
                </button>
              </>
            ) : (
              <>
                Already registered?{' '}
                <button
                  onClick={() => setMode('login')}
                  className="text-purple-600 font-medium"
                >
                  Sign in
                </button>
              </>
            )}
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
