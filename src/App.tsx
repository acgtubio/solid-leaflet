import type { Component } from 'solid-js';
import LeafletMap from './components/Map';
import { MarkerIcon } from './components/markers/Icon';
import { Marker } from './components/types/Marker';

const App: Component = () => {
  const icon = MarkerIcon({
    iconUrl: "../src/assets/icons/home.png",
  });
  const markers: Marker[] = [
    {
      latlng: [51.5, -0.09],
      options: {
        icon: icon
      }
    },
    {
      latlng: [51.495011293466774, -0.07420063018798828],
      options: {
        icon: icon
      }
    },
    {
      latlng: [51.50144996202149, -0.07475852966308595],
      options: {
        icon: icon
      }
    },
  ];

  return (
    <div class='w-screen h-screen'>
      <LeafletMap markers={markers} />
    </div>
  );
};

export default App;
