
const paths = {
  mall: (
    <>
      <path d="M3 9h18l-1.5 11.5a1 1 0 0 1-1 .5H5.5a1 1 0 0 1-1-.5L3 9Z" />
      <path d="M8 9V6a4 4 0 0 1 8 0v3" />
    </>
  ),
  hoarding: (
    <>
      <rect x="2.5" y="4" width="19" height="10" rx="1.5" />
      <path d="M8 14v7M16 14v7M6 21h4M14 21h4" />
    </>
  ),
  gift: (
    <>
      <rect x="3" y="9" width="18" height="12" rx="1.5" />
      <path d="M3 13h18M12 9v12" />
      <path d="M12 9S9.5 3 7 4.5 9 9 12 9Zm0 0s2.5-6 5-4.5S15 9 12 9Z" />
    </>
  ),
  print: (
    <>
      <path d="M7 4h10v5H7z" />
      <rect x="3.5" y="9" width="17" height="7" rx="1.5" />
      <path d="M7 16h10v5H7z" />
    </>
  ),
  transit: (
    <>
      <rect x="5" y="3" width="14" height="14" rx="3" />
      <path d="M5 11h14M9 21l-2 2M15 21l2 2M8.5 21h7" />
      <circle cx="9" cy="14.5" r=".6" fill="currentColor" />
      <circle cx="15" cy="14.5" r=".6" fill="currentColor" />
    </>
  ),
  retail: (
    <>
      <path d="M3 7.5 4.5 4h15L21 7.5" />
      <path d="M3 7.5a2.2 2.2 0 0 0 4.5 0 2.2 2.2 0 0 0 4.5 0 2.2 2.2 0 0 0 4.5 0 2.2 2.2 0 0 0 4.5 0" />
      <path d="M4.5 10v10h15V10" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  digital: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </>
  ),
  bus: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2.5" />
      <path d="M3 11h18M7 17v2.5M17 17v2.5" />
      <circle cx="7.5" cy="14" r=".7" fill="currentColor" />
      <circle cx="16.5" cy="14" r=".7" fill="currentColor" />
    </>
  ),
  press: (
    <>
      <path d="M4 5h13v14a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2V5Z" />
      <path d="M17 9h3v10a2 2 0 0 1-2 2" />
      <path d="M7 8.5h7M7 12h7M7 15.5h4" />
    </>
  ),
}

export default function ServiceIcon({ name, className = 'size-7' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.hoarding}
    </svg>
  )
}
