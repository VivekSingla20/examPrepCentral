import React, { useContext, useEffect,useState } from "react";
import { academicCalendar1stYear, academicCalendar } from "../constants";
import LoggedInContext from "../context/LoggedInContext";
import { Navigate } from "react-router-dom";
import axios from "../axiosConfig";

const PuCalendar = () => {
  const { LoggedIn, setLoggedIn } = useContext(LoggedInContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(axios.defaults.baseURL+"/api/auth/authMiddleware")
      .then((response) => {
        if (response.status === 200) {
          setLoggedIn(true);
          setUser(response.data.user); // Assuming response includes user data
        } else {
          setLoggedIn(false);
        }
      })
      .catch(() => {
        setLoggedIn(false);
      });
  }, [setLoggedIn]);

  const handleSetReminder = async () => {
    const userConfirmed = window.confirm(
      "Are you sure you want to set a reminder for these events?"
    );
    if (userConfirmed) {
      const events = academicCalendar1stYear.oddSemester
        .concat(academicCalendar.evenSemester)
        .map((event) => ({
          title: event.particulars,
          date: event.from,
        }));

      try {
        const response = await axios.post("/api/auth/set-reminder", {
          email: user.email, // Assuming user is available in your context or state
          events: events,
        });

        if (response.status === 200) {
          alert("Reminders set successfully!");
        }
      } catch (error) {
        console.error("Error setting reminders:", error);
      }
    } else {
      console.log("Reminder not set.");
    }
  };

  return LoggedIn ? (
    <div className="container mx-auto p-4 bg-gradient-to-br from-sky-600 via-teal-500 to-cyan-800 bg-opacity-80">
      <div className="flex justify-between">
        <h2 className="text-center text-2xl font-bold my-4">
          Academic Calendar for B.E. 1st year 2024-25
        </h2>
        <button
          className="learn-more border-2 border-black rounded-lg"
          onClick={handleSetReminder}
        >
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text py-4">Set Reminder</span>
        </button>
      </div>

      <div className="mb-8 bg-grey">
        <h3 className="text-xl font-semibold mb-2">Odd Semester</h3>
        <table className="min-w-full border">
          <thead>
            <tr className="bg-white">
              <th className="border px-4 py-2">Particulars</th>
              <th className="border px-4 py-2">From</th>
              <th className="border px-4 py-2">To</th>
            </tr>
          </thead>
          <tbody>
            {academicCalendar1stYear.oddSemester.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.particulars}</td>
                <td className="border px-4 py-2">{item.from}</td>
                <td className="border px-4 py-2">{item.to}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Even Semester</h3>
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Particulars</th>
              <th className="border px-4 py-2">From</th>
              <th className="border px-4 py-2">To</th>
            </tr>
          </thead>
          <tbody>
            {academicCalendar.evenSemester.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.particulars}</td>
                <td className="border px-4 py-2">{item.from}</td>
                <td className="border px-4 py-2">{item.to}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between my-4">
        <h2 className="text-center text-2xl font-bold my-4">
          Academic Calendar for B.E.
        </h2>
        <button
          className="learn-more border-2 border-black rounded-lg p-4"
          onClick={handleSetReminder}
        >
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Set Reminder</span>
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-4">Odd Semester</h2>
      <table className="w-full table-auto border-collapse border border-gray-300 mb-8">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Particulars</th>
            <th className="border border-gray-300 px-4 py-2">From</th>
            <th className="border border-gray-300 px-4 py-2">To</th>
          </tr>
        </thead>
        <tbody>
          {academicCalendar.oddSemester.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {item.particulars}
              </td>
              <td className="border border-gray-300 px-4 py-2">{item.from}</td>
              <td className="border border-gray-300 px-4 py-2">{item.to}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mb-4">Even Semester</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Particulars</th>
            <th className="border border-gray-300 px-4 py-2">From</th>
            <th className="border border-gray-300 px-4 py-2">To</th>
          </tr>
        </thead>
        <tbody>
          {academicCalendar.evenSemester.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {item.particulars}
              </td>
              <td className="border border-gray-300 px-4 py-2">{item.from}</td>
              <td className="border border-gray-300 px-4 py-2">{item.to}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default PuCalendar;
