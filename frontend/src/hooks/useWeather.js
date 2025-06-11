import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "b41b4e53164fa2cc887bfe6c6c0ddd4a";

const useWeather = (lat, lon) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!lat || !lon) return;

    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        const [currentRes, forecastRes] = await Promise.all([
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
          ),
          axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
          ),
        ]);

        setWeather(currentRes.data);
        setForecast(forecastRes.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [lat, lon]);

  return { weather, forecast, loading, error };
};

export default useWeather;
