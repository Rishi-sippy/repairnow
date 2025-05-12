import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const MapView = dynamic(() => import('../componets/MapView'), { ssr: false });

const socket = io("http://localhost:4000");

export default function Home() {
  const [mechanics, setMechanics] = useState([]);

  useEffect(() => {
    socket.on("mechanics", (data) => setMechanics(data));

    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      const mechanicData = {
        name: "Mechanic A", // replace with user name
        lat: latitude,
        lng: longitude,
        userId: "user-123", // replace with real user ID
      };
      socket.emit("location-update", mechanicData);
    });
  }, []);

  return <MapView mechanics={mechanics} />;
}
