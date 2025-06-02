import { useState, useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";
import "./loading.css";

//This code doesn't do anything at this moment. It needs to se added to pages later.

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); //Sets a spesific time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={loading ? "pageLoading" : ""}></div>

      {loading && (
        <div className="spinner">
          <DotLoader color="#FFFFFF" loading={true} size={200} /> {/*Install spinner from react*/}
          <p className="loadingText">Loading please wait...</p>
        </div>
      )}
    </>
  );
};

export default Loading;
