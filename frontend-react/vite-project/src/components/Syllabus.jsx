import React, { useContext, useEffect } from "react";
import DownloadButton from "./DownloadButton.jsx";
import { syllabus } from "../constants.jsx";
import LoggedInContext from "../context/LoggedInContext.js";
import { Navigate } from "react-router-dom";
import axios from "../axiosConfig.js";

const Syllabus = () => {
  const { LoggedIn, setLoggedIn } = useContext(LoggedInContext);
  useEffect(() => {
    axios
      .get(axios.defaults.baseURL+"/api/auth/authMiddleware")
      .then((response) => {
        if (response.status === 200) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      })
      .catch(() => {
        setLoggedIn(false);
      });
  }, []);
  return LoggedIn ? (
    <div className="flex flex-col justify-center items-center gap-4 min-h-screen">
      <div className="flex flex-col items-center  gap-4">
        <div className="flex flex-wrap gap-8 justify-center items-center max-w-[1000px]">
          {syllabus.map((file, index) => (
            <DownloadButton
              fileName={file.fileName}
              filePath={file.filePath}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center border-b-2 gap-4"></div>
    </div>
  ) : (
    // navigate("/", { replace: true })
    <Navigate to="/" replace={true} />
  );
};

export default Syllabus;
