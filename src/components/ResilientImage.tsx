import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fallbackLabel?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackLabel = 'Ale Studio'
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1612] via-[#0F0D0B] to-[#231B12] text-[#C9A25D]/80 p-6 text-center ${className}`}
      >
        <Sparkles className="w-6 h-6 mb-3 opacity-70" aria-hidden="true" />
        <span className="font-serif text-lg tracking-wide text-[#F5EFE6]/90">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
