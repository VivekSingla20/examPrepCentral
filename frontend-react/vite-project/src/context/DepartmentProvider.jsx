import React, { useState } from "react";
import DepartmentContext from "./DepartmentContext";

const DepartmentProvider = ({ children }) => {
  const [selectedDepartment, setSelectedDepartment] = useState("CSE");

  return (
    <DepartmentContext.Provider
      value={{ selectedDepartment, setSelectedDepartment }}
    >
      {children}
    </DepartmentContext.Provider>
  );
};

export default DepartmentProvider;
