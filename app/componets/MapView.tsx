/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

const MapView = ({ mechanics }: { mechanics: any[] }) => {
  const center: LatLngExpression = [28.6139, 77.2090];

  return (
    <MapContainer center={center} zoom={13} style={{ height: "100vh" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {mechanics.map((m, idx) => (
        <Marker key={idx} position={[m.lat, m.lng]}>
          <Popup>{m.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
