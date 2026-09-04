import MediaArt from './MediaArt'

export default function Figure({
  image,
  alt = '',
  art,
  className = '',
  imgClassName = 'object-cover',
  priority = false,
  overlay = true,
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {image ? (
        <img
          src={image}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={`absolute inset-0 h-full w-full ${imgClassName}`}
        />
      ) : (
        <MediaArt name={art} className="absolute inset-0 h-full w-full object-cover" />
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
