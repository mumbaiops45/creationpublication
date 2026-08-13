import Image from 'next/image'
import MediaArt from './MediaArt'


export default function Figure({
  image,
  alt = '',
  art,
  className = '',
  imgClassName = 'object-cover',
  sizes = '(max-width: 768px) 100vw, 33vw',
  priority = false,
  overlay = true,
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {image ? (
        <img
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={imgClassName}
        />
      ) : (
        <MediaArt name={art} className="size-full object-cover" />
      )}

      {overlay && (
        <span
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink-900/70 via-ink-900/10 to-transparent"
          aria-hidden="true"
        />
      )}
    </div>
  )
}
