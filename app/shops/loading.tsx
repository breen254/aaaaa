import React from 'react';
import { PulseLoader } from 'react-spinners';

const loading = () => {
  return (
    <div
      className="flex justify-center items-center h-screen transition-bg ease-in duration-300 bg-opacity-0 bg-blue-100"
    >
      <PulseLoader color="#36d7b7" />
    </div>
  );
};

export default loading;
