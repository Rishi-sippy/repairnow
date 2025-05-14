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
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 text-white">
    {/* Hero Section */}
    <section className="relative pt-20 px-6 md:px-20 w-full">
      {/* Sticky Navbar */}
      <div className="fixed top-4 left-0 right-0 mx-auto max-w-6xl z-50   flex justify-center rounded-xl px-4 py-2">
  <Navbar />
</div>


      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-10">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-4">Welcome to Cold Strangers Party 🎉</h1>
          <p className="mb-6 text-lg">
            Join the most thrilling parties with total strangers. Submit your details and we’ll send you party invites in your city!
          </p>

          <form onSubmit={handleSubmit} className="bg-white text-black p-6 rounded-xl shadow-lg space-y-4">
            {/* Form fields */}
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
      </div>
    </section>

    {/* Gallery Section */}
    <section className="bg-white text-black py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Party Locations 📸</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {['New York', 'Los Angeles', 'London', 'Berlin', 'Tokyo', 'Delhi', 'Paris', 'Sydney'].map((city) => (
    <div
      key={city}
      className="cursor-pointer bg-white h-48 flex items-center justify-center text-xl font-semibold rounded-lg shadow-[8px_8px_20px_rgba(0,0,0,0.15)] transform transition hover:scale-105 hover:shadow-[12px_12px_30px_rgba(0,0,0,0.2)]"
    >
      {city}
    </div>
  ))}
</div>

    </section>
  </main>

  );
}
