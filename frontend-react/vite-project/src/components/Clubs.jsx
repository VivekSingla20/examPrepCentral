import React, { useState } from "react";
import { clubs } from "../constants";

const ClubsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered clubs based on search term
  const filteredClubs = clubs.filter((club) => {
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      club.fullName.toLowerCase().includes(search) ||
      club.shortName.toLowerCase().includes(search);

    return matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#19a1b3] text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Explore Student Clubs</h1>
        <p className="text-lg mt-4">
          Connect with like-minded peers and explore your passions!
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mt-8">
        <input
          type="text"
          placeholder="Search clubs by full name or short name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Club Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        {filteredClubs.length > 0 ? (
          filteredClubs.map((club, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between "
            >
              <div>
                <div className="h-40 bg-gray-100 flex items-center justify-center">
                  {club.picture ? (
                    <a
                      href={club.website === "" ? club.instagram : club.website}
                    >
                      <img
                        src={club.picture}
                        alt={club.fullName}
                        className="h-40"
                      />
                    </a>
                  ) : (
                    <span className="text-gray-400">No Image</span>
                  )}
                </div>
                <h3 className="text-xl font-bold mt-4">{club.fullName}</h3>
                <p className="mt-2 text-gray-600">{club.description}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">Follow us on</span>
                <div className="flex space-x-2">
                  {club.instagram && (
                    <a
                      href={club.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500"
                    >
                      <i className="fab fa-instagram text-4xl p-0"></i>
                    </a>
                  )}
                  {club.linkedIn && (
                    <a
                      href={club.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700"
                    >
                      <i className="fab fa-linkedin text-4xl"></i>
                    </a>
                  )}
                  {club.website && (
                    <a
                      href={club.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      <img
                        className="h-7 rounded mt-1"
                        src={club.picture}
                        alt=""
                      />{" "}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No clubs match your search or filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default ClubsPage;
