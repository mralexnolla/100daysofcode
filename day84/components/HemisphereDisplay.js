import React, { useState, useEffect } from 'react';
import {useGeolocation} from '../hooks/useGeolocation';

export function HemisphereDisplay() {
  
  const currentLocation = useGeolocation(); // REPLACE ME!

  if (!currentLocation) {
    return <p>{'Sorry, location is currently unavailable'}</p>
  }
  
  // currentLocation should have a .latitude property
  if (currentLocation.latitude === 0) {
    return <p>You are at the equator!</p>
  }

  const hemisphere = currentLocation.latitude > 0 ? 'northern' : 'southern';
  return (
    <p>You are in the {hemisphere} hemisphere.</p>
  );
}

