// components/PartyCard.tsx
import React from 'react';
import { CalendarDays, MapPin, AlertCircle } from 'lucide-react';
import Image from 'next/image';
interface PartyCardProps {
  image: string;
  category: string;
  ageRange: string;
  alertMessage: string;
  date: string;
  location: string;
  title: string;
  host: string;
  charge: string;
}

export default function PartyCard({
  image,
  category,
  ageRange,
  alertMessage,
  date,
  location,
  title,
  host,
  charge,
}: PartyCardProps) {
  return (
    <div className="w-[360px] rounded-xl overflow-hidden bg-[#1c1b1f] text-white shadow-md border border-neutral-800">
      <div className="relative">
        <Image
          src={image}
          alt="Party"
          width={800} // Replace with your desired width
          height={240} // Replace with your desired height
          className="w-full h-[240px] object-cover"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          <span className="bg-purple-600 text-white text-sm font-semibold px-2 py-1 rounded">{category}</span>
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold px-2 py-1 rounded">{ageRange}</span>
        </div>
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-2">
          <div className="flex items-center text-sm text-red-400 gap-1">
            <AlertCircle size={14} className="text-red-500" />
            {alertMessage}
          </div>
        </div>
      </div>

      <div className="px-4 py-3">
        <div className="flex items-center text-sm text-gray-400 gap-2 mb-1">
          <CalendarDays size={14} />
          <span>{date}</span>
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            {location}
          </span>
        </div>

        <h2 className="text-lg font-bold leading-tight mb-1 text-white">
          {title}
        </h2>

        <p className="text-sm text-gray-400 mb-2">Hosted by {host}</p>

        <div className="flex items-center justify-between">
          <p className="text-white font-medium text-sm">
            Cover Charges: <span className="font-bold">{charge}</span>
          </p>
          <button className="bg-[#ff1e56] hover:bg-[#e30e45] transition text-white font-semibold px-4 py-2 rounded-full text-sm">
            Book Now ❯
          </button>
        </div>
      </div>
    </div>
  );
}
