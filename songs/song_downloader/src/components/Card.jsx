import React from "react";

const Card = ({ title, artist }) => {
  return (
    <div className="card-container w-full max-w-[320px] mx-auto mt-3 bg-[#EDEDED] shadow-lg rounded-lg overflow-hidden dark:bg-zinc-900">
      <div className="card-header flex justify-between items-center px-5 py-4 group relative">
        <div className="card-content flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            height={24}
            fill="none"
            className="icon h-10 w-10 text-yellow-500"
          >
            <path d="M9 18V5l12-2v13" />
            <circle r={3} cy={18} cx={6} />
            <circle r={3} cy={16} cx={18} />
          </svg>
          <div className="card-text ms-3">
            <h3
              className="cursor-pointer w-36 card-title text-base font-semibold text-gray-700 dark:text-gray-200 truncate"
            >
              {title}
            </h3>
            <div className="absolute -top-0 left-1/2 w-[250px] transform -translate-x-1/2 z-10 bg-gray-800 text-gray-100 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-80 pointer-events-none transition-opacity duration-300">
              {title}
            </div>
            <p className="text-start card-artist text-gray-500 dark:text-gray-400 text-sm">
              {artist}
            </p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          className="chart-icon h-10 w-10 pr-0"
        >
          <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-5,15c0,.552-.447,1-1,1s-1-.448-1-1v-6c0-.552.447-1,1-1s1,.448,1,1v6Zm4,3c0,.552-.447,1-1,1s-1-.448-1-1V6c0-.552.447-1,1-1s1,.448,1,1v12Zm4-2c0,.552-.447,1-1,1s-1-.448-1-1v-8c0-.552.447-1,1-1s1,.448,1,1v8Zm4-2c0,.552-.447,1-1,1s-1-.448-1-1v-3c0-.552.447-1,1-1s1,.448,1,1v3Z" />
        </svg>
      </div>
    </div>
  );
};

export default Card;
