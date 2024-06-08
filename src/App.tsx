import type { Component } from 'solid-js';
import LeafletMap from './components/Map';

const App: Component = () => {
  return (
    <div class='w-screen h-screen'>
      <LeafletMap />
    </div>
  );
};

export default App;
