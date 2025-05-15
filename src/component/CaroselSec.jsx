// components/Carousel.js
'use client';

import { useState } from 'react';

const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

export default function Carousel_2() {
  const [current, setCurrent] = useState(0);
  const visibleCount = 4;

  const maxIndex = items.length - visibleCount;

  const next = () => {
    setCurrent((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prev = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Wrapper */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 25}%)` }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="w-1/4 p-2 flex-shrink-0"
            >
              <div className="bg-blue-100 rounded-xl h-40 flex items-center justify-center text-lg font-semibold shadow">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={prev}
          disabled={current === 0}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
        >
          ⬅ Prev
        </button>
        <button
          onClick={next}
          disabled={current >= maxIndex}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
