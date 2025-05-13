'use client';
import { cn } from "@/lib/utils";
import Image from "next/image";
// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';

export const BentoGrid = ({
  className,
  children
}) => {

  // const navigate = useNavigate();

  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  author,
  title,
  description,
  header,
  icon
}) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-0 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}>
      {/* {header} */}
     
      <img
      src={header}
      alt={author}
      width={300}
      height={200}
      className="rounded-lg w-full h-35 object-cover"
      />
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {/* {icon} */}
        <div
          className="mt-0 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {/* {title} */}
          {title?.split(' ').slice(0, 4).join(' ')}{title?.split(' ').length > 4 ? '...' : ''}
        </div>
        <div
          className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {/* {description} */}
          <span className="text-sm">{description?.split(' ').slice(0, 8).join(' ')}{description?.split(' ').length > 8 ? '...' : ''}</span>
        </div>
        {/* <button className="bg-sky-500 hover:bg-sky-700 rounded-full px-5 py-1 mt-3 text-white cursor-pointer" 
        // onClick={()=>{
        //   // navigate('/blog/product-1');
        // }}
        onClick={() => router.push('/blog/product-1')}
        >Read More</button> */}
      </div>
    </div>
  );
};
