import React, { useContext, useEffect, useState } from "react";
import DownloadButton from "./DownloadButton";
import { pdfFilesSem1, pdfFilesSem2 } from "../constants";
import DepartmentContext from "../context/DepartmentContext";
import LoggedInContext from "../context/LoggedInContext";
import { Navigate } from "react-router-dom";
import Shimmer from "./Shimmer.jsx"; // Import Shimmer component
import axios from "../axiosConfig.js";

const PreviousYearQuestions = () => {
  const { selectedDepartment } = useContext(DepartmentContext);
  const { LoggedIn, setLoggedIn } = useContext(LoggedInContext);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    axios
      .get(axios.defaults.baseURL+"/api/auth/authMiddleware")
      .then((response) => {
        if (response.status === 200) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
        setLoading(false); // Stop loading
      })
      .catch(() => {
        setLoggedIn(false);
        setLoading(false); // Stop loading on error
      });
  }, []);

  if (loading) {
    return <Shimmer className="h-screen w-screen" />; // Show shimmer while loading
  }

  return LoggedIn ? (
    <div className="flex flex-col justify-center items-center gap-4 min-h-screen bg-gradient-to-br from-sky-600 via-teal-500 to-cyan-800 bg-opacity-80">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl overflow-hidden">Sem 1</h1>
        <div className="flex flex-wrap gap-8">
          {pdfFilesSem1.map(
            (file, index) =>
              selectedDepartment === file.branch && (
                <DownloadButton
                  fileName={file.fileName}
                  filePath={file.filePath}
                  key={index}
                />
              )
          )}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl overflow-hidden">Sem 2</h1>
        <div className="flex flex-wrap gap-8">
          {pdfFilesSem2.map(
            (file, index) =>
              selectedDepartment === file.branch && (
                <DownloadButton
                  fileName={file.fileName}
                  filePath={file.filePath}
                  key={index}
                />
              )
          )}
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default PreviousYearQuestions;
