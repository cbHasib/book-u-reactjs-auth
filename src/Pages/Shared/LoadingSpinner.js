import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
    </div>
  );
};

export default LoadingSpinner;
