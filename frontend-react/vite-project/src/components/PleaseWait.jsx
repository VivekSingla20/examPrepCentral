import React from "react";

const PleaseWait = () => {
  return (
    <div className="flex justify-center items-center h-full w-full fixed top-0 left-0 z-50 bg-black bg-opacity-50">
      <div className="text-white text-center">
        <div className="loader border-t-transparent border-solid border-4 border-white h-12 w-12 rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-xl">Please Wait...</p>
      </div>
    </div>
  );
};

export default PleaseWait;
