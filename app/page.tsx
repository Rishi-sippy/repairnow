'use client'

import Image from 'next/image';
import { useState } from 'react';
import Navbar from './componets/Navbar';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    houseNo: '',
    food: 'veg',
    drinks: 'all',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/party/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await res.json();
      alert(result.message || 'Submitted!');
    } catch (err) {
      console.error('Submission failed', err);
      alert('Failed to submit form');
    }
  };
  

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 text-white">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-4">Welcome to Cold Strangers Party 🎉</h1>
          <p className="mb-6 text-lg">Join the most thrilling parties with total strangers. Submit your details and we’ll send you party invites in your city!</p>

          <form onSubmit={handleSubmit} className="bg-white text-black p-6 rounded-xl shadow-lg space-y-4">
            <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} className="w-full p-2 rounded-md border" />
            <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} className="w-full p-2 rounded-md border" />
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="w-full p-2 rounded-md border" />
            <input type="text" name="city" placeholder="Party City" required onChange={handleChange} className="w-full p-2 rounded-md border" />
            <input type="text" name="houseNo" placeholder="House No" required onChange={handleChange} className="w-full p-2 rounded-md border" />

            <div className="flex flex-col md:flex-row gap-4">
              <select name="food" onChange={handleChange} className="w-full p-2 rounded-md border">
                <option value="veg">Veg</option>
                <option value="nonveg">Non-Veg</option>
                <option value="both">Both</option>
              </select>
              <select name="drinks" onChange={handleChange} className="w-full p-2 rounded-md border">
                <option value="all">All</option>
                <option value="soft">Soft Drinks Only</option>
                <option value="none">No Drinks</option>
              </select>
            </div>

            <button type="submit" className="bg-purple-700 hover:bg-purple-900 text-white w-full py-2 rounded-md">
              Submit & Get Invited
            </button>
          </form>
        </div>

        <div className="hidden md:block">
          <Image src="/crowd.jpg" alt="Party Crowd" width={500} height={500} className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white text-black py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Party Glimpses 📸</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['1', '2', '3', '4', '5', '6', '7', '8'].map((id) => (
            <div key={id} className="rounded overflow-hidden shadow-md">
              <Image
                src='/crowd.jpg'
                alt={`Party ${id}`}
                width={400}
                height={300}
                className="object-cover w-full h-48"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
    </>

  );
}
