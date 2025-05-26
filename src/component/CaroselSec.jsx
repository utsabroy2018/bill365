import { useEffect, useState } from 'react';
import styles from '../style/Home.module.css'

export default function CarouselSec({ itemName }) {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1); // mobile
      else if (width < 768) setVisibleCount(2); // sm
      else if (width < 1024) setVisibleCount(3); // md
      else setVisibleCount(4); // lg and up
    };

    handleResize(); // initial set
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(itemName?.length - visibleCount, 0);

  const next = () => setCurrent((prev) => (prev < maxIndex ? prev + 1 : prev));
  const prev = () => setCurrent((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${(current * 100) / visibleCount}%)` }}
        >
          {itemName?.map((item, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 flex-shrink-0"
            >
              <div className="border border-gray-300 text-gray-800 rounded-lg h-13 flex items-center justify-center text-lg font-semibold shadow-xl">
                {item.our_client_text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`flex justify-end mt-4 ${styles.bottom_nav_logo}`}>
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
