import ReactDOM from 'react-dom';
import React from 'react';
import { LongitudeLatitudeDisplay } from './components/LongitudeLatitudeDisplay.js';
import { HemisphereDisplay } from './components/HemisphereDisplay.js';

function App() {
  return (
    <main>
      <h1>Geo Locator</h1>
      <LongitudeLatitudeDisplay />
      <HemisphereDisplay />
    </main>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);