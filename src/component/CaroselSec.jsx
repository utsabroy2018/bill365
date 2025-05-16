// components/Carousel.js
'use client';

import { useState } from 'react';

// const items = Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`);

export default function CaroselSec({itemName}) {
  const [current, setCurrent] = useState(0);
  const visibleCount = 4;

  const maxIndex = itemName?.length - visibleCount;

  const next = () => {
    setCurrent((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prev = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* {JSON.stringify(itemName, null, 2)} */}
      {/* Wrapper */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 25}%)` }}
        >
          {itemName?.map((item, i) => (
            <div
              key={i}
              className="w-1/4 p-2 flex-shrink-0"
            >
              <div className="border-solid border-1 border-gray-300 text-gray-800 rounded-lg h-13 flex items-center justify-center text-lg font-semibold shadow-xl">
                {item.our_client_text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-end mt-4">
        <button
          onClick={prev}
          disabled={current === 0}
          className="px-4 py-1 bg-gray-300 hover:bg-gray-400 mr-2 cursor-pointer rounded disabled:opacity-50"
        >
          <i className="fa fa-angle-left" aria-hidden="true"></i>

        </button>
        <button
          onClick={next}
          disabled={current >= maxIndex}
          className="px-4 py-1 bg-gray-300 hover:bg-gray-400 ml-2 cursor-pointer rounded disabled:opacity-50"
        >
          <i className="fa fa-angle-right" aria-hidden="true"></i>

        </button>
      </div>
    </div>
  );
}
