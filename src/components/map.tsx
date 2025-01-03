import {
  MapContainer,
  TileLayer,
  MapContainerProps,
  TileLayerProps,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface CustomTileLayerProps extends TileLayerProps {
  attribution: string;
}
interface MapContainerPropsProps extends MapContainerProps {
  center: [number, number];
  zoom: number;
  scrollWheelZoom: boolean;
}
export function Map() {
  const mapContainerProps: MapContainerPropsProps = {
    center: [38.9637, 35.2433],
    zoom: 16,
    scrollWheelZoom: false,
    style: {
      height: "90%",
      width: "100%",
    },
  };

  const tileLayerProps: CustomTileLayerProps = {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  };

  return (
    <MapContainer {...mapContainerProps}>
      <TileLayer {...tileLayerProps} />
    </MapContainer>
  );
}
