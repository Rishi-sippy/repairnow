// pages/index.tsx
'use client'
import dynamic from 'next/dynamic';
import { Shop } from './types';

const MapView = dynamic(() => import('../app/componets/MapView'), { ssr: false });

const shops: Shop[] = [
  {
    name: 'Speedy Mechanics',
    lat: 28.6139,
    lng: 77.2090,
    openingTime: '09:00',
    closingTime: '18:00',
  },
  {
    name: 'AutoFix Garage',
    lat: 28.6200,
    lng: 77.2100,
    openingTime: '10:00',
    closingTime: '20:00',
  },
];

export default function Home() {
  return <MapView mechanics={shops} />
  ;
}
