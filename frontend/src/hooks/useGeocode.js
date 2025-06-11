import { useEffect, useState } from "react";
import axios from "axios";

const useGeocode = (location) => {
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GEOCODE_API_KEY = "128a5bb7e10f42188be67a22289da6de";

  useEffect(() => {
    const fetchCoordinates = async () => {
      if (!location) return;

      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
            location
          )}&key=${GEOCODE_API_KEY}`
        );
        const { lat, lng } = response.data.results[0].geometry;
        setCoordinates({ lat, lon: lng });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCoordinates();
  }, [location]);

  return { coordinates, loading, error };
};

export default useGeocode;
