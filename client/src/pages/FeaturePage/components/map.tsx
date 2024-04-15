import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export type MapProps = {
    lat: number;
    lng: number;
    title: string;
};

export const Map = ({ lat, lng, title }: MapProps) => {
  return (
    <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>
            {title} <br /> {lat}, {lng}
        </Popup>
      </Marker>
    </MapContainer>
  );
};
