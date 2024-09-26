//TODO: use it everwhere needed
import React from 'react';

const Shimmer = ({ className = '', height = 'h-48', width = 'w-full', borderRadius = 'rounded-lg' }) => {
  return (
    <div
      className={`relative ${width} ${height} ${borderRadius} bg-gray-200 overflow-hidden ${className}`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
    </div>
  );
};

export default Shimmer;

