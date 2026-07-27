// src/components/TypeWriter.tsx
import { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export function TypeWriter({ 
  text, 
  speed = 100, 
  delay = 500,
  className = '' 
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, ++index));
        } else {
          clearInterval(interval);
        }
      }, speed);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Texto fantasma: ocupa el espacio pero es invisible */}
      <span className="invisible" aria-hidden="true">{text}</span>
      
      {/* Texto animado: se superpone encima */}
      <span className="absolute left-0 top-0">
        {displayText}
        {displayText.length > 0 && displayText.length < text.length && (
          <span className="inline-block w-0.5 h-[1em] bg-primary ml-1 animate-pulse align-middle" />
        )}
      </span>
    </span>
  );
}