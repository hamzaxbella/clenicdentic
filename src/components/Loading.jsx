import React, { useState, useEffect } from 'react';

// Loading screen component
export const LoadingScreen = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center text-gray-text">
      <h1>Loading...</h1>
      {/* You can add a spinner or other loading animation here */}
    </div>
  );
};
