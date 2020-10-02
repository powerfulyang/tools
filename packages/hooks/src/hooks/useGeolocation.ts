import { useCallback, useEffect, useRef } from 'react';
import { useMountedState } from './useMountedState';
import { useImmer } from './useImmer';

export interface GeoLocationSensorState {
  loading: boolean;
  accuracy: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number | null;
  longitude: number | null;
  speed: number | null;
  timestamp: number | null;
  error?: Error | PositionError;
}

const useGeolocation = (options?: PositionOptions): GeoLocationSensorState => {
  const [state, setState] = useImmer<GeoLocationSensorState>({
    loading: true,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: Date.now(),
  });
  const isMounted = useMountedState();

  const onEvent = useCallback(
    (event: any) => {
      if (isMounted()) {
        setState({
          loading: false,
          accuracy: event.coords.accuracy,
          altitude: event.coords.altitude,
          altitudeAccuracy: event.coords.altitudeAccuracy,
          heading: event.coords.heading,
          latitude: event.coords.latitude,
          longitude: event.coords.longitude,
          speed: event.coords.speed,
          timestamp: event.timestamp,
        });
      }
    },
    [isMounted, setState],
  );
  const onEventError = useCallback(
    (error: PositionError) => {
      if (isMounted()) {
        setState((draft) => {
          draft.loading = false;
          draft.error = error;
        });
      }
    },
    [isMounted, setState],
  );
  const watchId = useRef(0);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
    watchId.current = navigator.geolocation.watchPosition(onEvent, onEventError, options);

    return () => {
      navigator.geolocation.clearWatch(watchId.current);
    };
  }, [onEvent, onEventError, options]);

  return state;
};

export default useGeolocation;
