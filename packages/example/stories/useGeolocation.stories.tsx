import React from 'react';
import { useGeolocation } from '@powerfulyang/hooks';

export const GeoLocation = () => {
  const state = useGeolocation();
  return <div>{JSON.stringify(state)}</div>;
};

export default {
  title: 'useGeolocation',
  component: GeoLocation,
};
