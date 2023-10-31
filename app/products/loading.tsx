import React from 'react';
import { ScaleLoader } from 'react-spinners';


const loading = () => {
  return (
    <div
      className="flex justify-center items-center h-screen transition-bg ease-in duration-300 bg-opacity-0 bg-slate-200"
    >
      <ScaleLoader color="#36d7b7" />
    </div>
  );
};

export default loading;
