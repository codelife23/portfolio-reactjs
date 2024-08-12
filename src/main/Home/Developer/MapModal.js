import { useTranslation } from 'react-i18next';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from 'react-leaflet';

import { Modal } from 'components';

const mapIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function MapModal({ open, handleClose }) {
  const { t } = useTranslation('developer');

  const position = [52.22983362221407, 21.011725315975642];

  return (
    <Modal
      open={open}
      onClose={handleClose}
      style={{ padding: 0, height: 600 }}
    >
      <MapContainer
        center={position}
        zoom={5}
        scrollWheelZoom={false}
        zoomControl={false}
        style={{ height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        <Marker position={position} icon={mapIcon}>
          <Popup>{t('i_am_here')}</Popup>
        </Marker>
      </MapContainer>
    </Modal>
  );
}

export default MapModal;
