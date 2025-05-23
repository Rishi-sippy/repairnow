'use client'

import Image from 'next/image';
import { useState } from 'react';
import Navbar from './componets/Navbar';
import Link from 'next/link';
import PartyList from './componets/PartyList';
import Footer from './componets/Footer';
import NeonCarouselNumbers from './componets/CardCar';

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <main className="min-h-screen  text-white"
      style={{
        backgroundImage: "linear-gradient(176deg, #151313 29%, #b41c1c 100%)"
      }}>
      {/* Hero Section */}
      <section className="relative pt-20 px-6 md:px-20 w-full">
        {/* Sticky Navbar */}
        <div className="fixed top-0 left-0 right-0 mx-auto w-full z-50   flex justify-center">
          <Navbar />
        </div>


        {/* Hero Content */}
        <div className="w-full flex justify-center mt-10 py-20 bg-video">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://www.storyblocks.com/video/stock/group-of-friends-having-fun-at-christmas-party-together-smnmrfkfgizevpkxw"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-[1120px]">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold mb-4">Welcome to Cold Strangers Party 🎉</h1>
              <p className="mb-6 text-lg">
                Join the most thrilling parties with total strangers. Submit your details and we’ll send you party invites in your city!
              </p>
              <Link href="/host">
                <button className="flex items-center gap-2 border border-[#ff2d55] text-white px-4 py-2 rounded-lg bg-[#800020]/20 hover:bg-[#800020]/40 transition text-sm font-medium">
                  Find A Party
                  {/* <SparklesIcon className="h-4 w-4 text-[#ff2d55]" /> */}
                </button>
              </Link>
            </div>

            <div className="hidden md:block">
              <Image src="/cheers-1.jpg" alt="Party Crowd" width={500} height={500} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>

      </section>



      {/* Gallery Section */}
      <section className="bg-black text-black py-16 px-6 md:px-20">
        <PartyList />

      </section>
      <section className="bg-black text-black py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">What is happening in the Party📸</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Food', 'Drinks', 'Music', 'Dance', 'Fun', 'Singing', 'Love', 'Romance'].map((city) => (
            <div
              key={city}
              className="cursor-pointer bg-white h-48 flex items-center justify-center text-xl font-semibold rounded-lg shadow-[8px_8px_20px_rgba(0,0,0,0.15)] transform transition hover:scale-105 hover:shadow-[12px_12px_30px_rgba(0,0,0,0.2)]"
            >
              {city}
            </div>
          ))}
        </div>

      </section>
      <section className="bg-black text-black py-16 px-6 md:px-20">
      <NeonCarouselNumbers />

      </section>
      <Footer />
    </main>

  );
}
