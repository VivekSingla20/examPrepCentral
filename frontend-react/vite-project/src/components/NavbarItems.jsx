import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import DepartmentContext from "../context/DepartmentContext";

const NavbarItems = ({ onSelect }) => {
  const { selectedDepartment } = useContext(DepartmentContext);
  const { pathname } = useLocation();

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    if (onSelect) {
      onSelect(selectedValue);
    }
  };

  return (
    (pathname === "/previousYearQuestions" ||
      pathname === "/studyMaterials") && (
      <div className="flex flex-col justify-center items-center">
        <select
          value={selectedDepartment}
          onChange={handleSelect}
          className="text-white bg-gray-800 p-2 rounded-lg"
        >
          {["CSE", "IT", "ECE", "EEE", "MECHANICAL", "BIOTECH"].map(
            (department) => (
              <option key={department} value={department}>
                {department}
              </option>
            )
          )}
        </select>
      </div>
    )
  );
};

export default NavbarItems;
