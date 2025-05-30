import { useState, useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";
import "./about.css";
import "./loading.css";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className={loading ? "pageLoading" : ""}></div>

      {loading && (
        <div className="spinner">
          <DotLoader color="#FFFFFF" loading={true} size={200} />
          <p className="loadingText">Loading, please wait...</p>
        </div>
      )}
    </div>
  );
};

export default About;
