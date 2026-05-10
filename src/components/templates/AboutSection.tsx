import { useState, useCallback, useRef } from 'react';
import React from 'react';
import type { AboutSection as AboutSectionType } from '../../types/section';

interface UseCopyToClipboardReturn {
  copy: (text: string) => Promise<void>;
  copied: boolean;
}

export function useCopyToClipboard(): UseCopyToClipboardReturn {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
        timeoutRef.current = null;
      }, 2000);
    } catch (err) {
      // Optionally handle error (e.g., show a toast)
      console.error('Failed to copy text: ', err);
    }
  }, []);

  return { copy, copied };
}

interface AboutSectionProps {
  section: AboutSectionType;
}

const AboutSection: React.FC<AboutSectionProps> = ({ section }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
        About
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
        {section.bio}
      </p>
    </div>
  );
};

export default AboutSection;
