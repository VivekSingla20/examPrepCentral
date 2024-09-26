import React from "react";
import pdfImg from "../assets/images/pdfImg.png";

const DownloadButton = ({ fileName, filePath }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    link.click();
  };
  return (
    <button
      onClick={handleDownload}
      className="  rounded-lg min-w-44 p-4 "
    >
      <img src={pdfImg} alt="pdf-pic" />
      {fileName}
    </button>
  );
};

export default DownloadButton;
