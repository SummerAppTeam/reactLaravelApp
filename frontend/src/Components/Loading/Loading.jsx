import { useState, useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";
<<<<<<< HEAD
import "./about.css";
import "./loading.css";

=======
import "./loading.css";

//This code doesn't do anything at this moment. It needs to se added to pages later.

>>>>>>> origin/SoniaBranch
const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
<<<<<<< HEAD
    const timer = setTimeout(() => setLoading(false), 3000);
=======
    const timer = setTimeout(() => setLoading(false), 3000); //Sets a spesific time
>>>>>>> origin/SoniaBranch

    return () => clearTimeout(timer);
  }, []);

  return (
<<<<<<< HEAD
    <div>
=======
    <>
>>>>>>> origin/SoniaBranch
      <div className={loading ? "pageLoading" : ""}></div>

      {loading && (
        <div className="spinner">
<<<<<<< HEAD
          <DotLoader color="#FFFFFF" loading={true} size={200} />
          <p className="loadingText">Loading, please wait...</p>
        </div>
      )}
    </div>
=======
          <DotLoader color="#FFFFFF" loading={true} size={200} /> {/*Install spinner from react*/}
          <p className="loadingText">Loading please wait...</p>
        </div>
      )}
    </>
>>>>>>> origin/SoniaBranch
  );
};

export default Loading;
