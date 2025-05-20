'use client';
import { cn } from "@/lib/utils";
import Image from "next/image";
// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';
import { htmlToText } from 'html-to-text';
import HTMLContent_Convert from "../DOMPurify";



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
  datePublish,
  id,
  icon
}) => {
  const router = useRouter();

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

// const rawHTML = `<p>In today’s fast-paced business world, staying updated with tax regulations is crucial for success. GST Billing Software helps businesses in India manage their invoices, taxes, and returns with ease. Within the first 60 words, it becomes clear that using GST Billing Software saves time, reduces errors, and ensures businesses stay compliant with government rules. Since… <a class="more-link" href="https://bill365.app/bill365/why-is-gst-billing-software-important-for-businesses-in-india/">Continue reading</a></p>`;

// const description = htmlToText(description, { wordwrap: false });

  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-0 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}>
     
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
          {/* {title?.split(' ').slice(0, 4).join(' ')}{title?.split(' ').length > 4 ? '...' : ''} */}
          <HTMLContent_Convert content={`${title?.split(' ').slice(0, 4).join(' ')}${title?.split(' ').length > 4 ? '...' : ''}`} />
        </div>
        <div
          className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {/* {description} */}
          <span className="text-sm">
            {/* {description?.split(' ').slice(0, 8).join(' ')}{description?.split(' ').length > 8 ? '...' : ''} */}
            {htmlToText(description, { wordwrap: false })
            ?.split(' ')
            .slice(0, 8)
            .join(' ')}
            {htmlToText(description, { wordwrap: false })?.split(' ').length > 8 ? '...' : ''}
          </span>
          
        </div>
        <div className="font-sans text-xs font-bold text-indigo-900 mt-4">
        {formatDate(datePublish)}
        </div>
        <button className="bg-sky-500 hover:bg-sky-700 rounded-full px-5 py-1 mt-3 text-white cursor-pointer" 
        onClick={() => router.push(`/blog/${id}`)}
        >Read More</button>
      </div>
    </div>
  );
};
