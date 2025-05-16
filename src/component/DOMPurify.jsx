// components/Article.js or .tsx
'use client'; // if using app directory and Next.js 13+

import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

export default function HTMLContent_Convert({ content }) {
  const [cleanHTML, setCleanHTML] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && content) {
      const sanitized = DOMPurify.sanitize(content);
      setCleanHTML(sanitized);
    }
  }, [content]);

  return (
    <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
  );
}
