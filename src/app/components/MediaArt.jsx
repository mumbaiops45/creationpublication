
const SKY = { deep: '#04121a', mid: '#0a2f3e', soft: '#0f4456' }
const CYAN = { bright: '#67e8f9', core: '#22d3ee', deep: '#0891b2' }
const BRASS = '#e3bd75'

function Defs({ id }) {
  return (
    <defs>
      <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={SKY.soft} />
        <stop offset="55%" stopColor={SKY.mid} />
        <stop offset="100%" stopColor={SKY.deep} />
      </linearGradient>
      <linearGradient id={`${id}-panel`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={CYAN.bright} />
        <stop offset="100%" stopColor={CYAN.deep} />
      </linearGradient>
      <radialGradient id={`${id}-glow`} cx="50%" cy="45%" r="55%">
        <stop offset="0%" stopColor={CYAN.core} stopOpacity="0.5" />
        <stop offset="100%" stopColor={CYAN.core} stopOpacity="0" />
      </radialGradient>
    </defs>
  )
}

function Backdrop({ id }) {
  return (
    <>
      <rect width="400" height="250" fill={`url(#${id}-sky)`} />
      <rect width="400" height="250" fill={`url(#${id}-glow)`} />
      <g stroke={CYAN.core} strokeOpacity="0.09" strokeWidth="1">
        {[50, 100, 150, 200, 250, 300, 350].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="250" />
        ))}
        {[50, 100, 150, 200].map((y) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} />
        ))}
      </g>
    </>
  )
}


function Skyline({ opacity = 0.35 }) {
  return (
    <g fill={SKY.deep} opacity={opacity}>
      <rect x="0" y="196" width="34" height="54" />
      <rect x="38" y="182" width="26" height="68" />
      <rect x="68" y="204" width="30" height="46" />
      <rect x="300" y="190" width="30" height="60" />
      <rect x="334" y="176" width="24" height="74" />
      <rect x="362" y="200" width="38" height="50" />
    </g>
  )
}

const scenes = {
  hoarding: (id) => (
    <>
      <Backdrop id={id} />
      <circle cx="318" cy="62" r="26" fill={BRASS} opacity="0.28" />
      <Skyline />
      <g>
        <rect x="96" y="176" width="10" height="74" fill={SKY.deep} />
        <rect x="252" y="176" width="10" height="74" fill={SKY.deep} />
        <rect x="72" y="52" width="214" height="128" rx="6" fill={SKY.deep} />
        <rect x="80" y="60" width="198" height="112" rx="3" fill={`url(#${id}-panel)`} />
        <rect x="94" y="76" width="86" height="10" rx="5" fill={SKY.deep} opacity="0.55" />
        <rect x="94" y="94" width="126" height="6" rx="3" fill={SKY.deep} opacity="0.32" />
        <rect x="94" y="106" width="104" height="6" rx="3" fill={SKY.deep} opacity="0.32" />
        <rect x="94" y="132" width="58" height="20" rx="10" fill={SKY.deep} opacity="0.6" />
        <circle cx="236" cy="118" r="26" fill={SKY.deep} opacity="0.25" />
      </g>
      <g fill={BRASS} opacity="0.5">
        <path d="M110 186 118 172h10l-8 14z" />
        <path d="M234 186 242 172h10l-8 14z" />
      </g>
    </>
  ),


  mall: (id) => (
    <>
      <Backdrop id={id} />
      <g>
        <rect x="52" y="34" width="296" height="216" rx="8" fill={SKY.mid} />
        <path
          d="M200 44a86 86 0 0 1 86 86v30H114v-30a86 86 0 0 1 86-86Z"
          fill={`url(#${id}-panel)`}
          opacity="0.4"
        />
        <path
          d="M200 44a86 86 0 0 1 86 86v30H114v-30a86 86 0 0 1 86-86Z"
          fill="none"
          stroke={CYAN.bright}
          strokeWidth="2.5"
          opacity="0.75"
        />
        <g stroke={CYAN.bright} strokeWidth="1.5" opacity="0.4">
          <line x1="200" y1="44" x2="200" y2="160" />
          <line x1="157" y1="52" x2="157" y2="160" />
          <line x1="243" y1="52" x2="243" y2="160" />
        </g>

        {[122, 166, 210].map((y) => (
          <g key={y}>
            <rect x="64" y={y + 8} width="272" height="24" fill={SKY.deep} opacity="0.75" />
            {[76, 122, 168, 214, 260, 300].map((x) => (
              <rect
                key={x}
                x={x}
                y={y + 13}
                width="30"
                height="14"
                rx="2"
                fill={x % 3 === 0 ? BRASS : CYAN.bright}
                opacity="0.5"
              />
            ))}
            <rect x="64" y={y} width="272" height="8" rx="4" fill={CYAN.core} opacity="0.85" />
          </g>
        ))}
        <path d="M118 238 214 156h30l-96 82z" fill={CYAN.core} opacity="0.55" />
        <path d="M118 238 214 156" stroke={CYAN.bright} strokeWidth="3.5" strokeLinecap="round" />
        <rect x="162" y="62" width="76" height="32" rx="6" fill={`url(#${id}-panel)`} />
        <rect x="174" y="72" width="52" height="6" rx="3" fill={SKY.deep} opacity="0.6" />
        <rect x="174" y="82" width="32" height="5" rx="2.5" fill={SKY.deep} opacity="0.45" />
      </g>
    </>
  ),

  bus: (id) => (
    <>
      <Backdrop id={id} />
      <Skyline opacity={0.28} />
      <g stroke={CYAN.core} strokeWidth="3" strokeLinecap="round" opacity="0.3">
        <line x1="8" y1="118" x2="52" y2="118" />
        <line x1="0" y1="140" x2="36" y2="140" />
        <line x1="14" y1="162" x2="44" y2="162" />
      </g>
      <g>
        <rect x="62" y="86" width="286" height="106" rx="18" fill={SKY.deep} />
        <rect x="70" y="94" width="270" height="90" rx="13" fill={`url(#${id}-panel)`} />
        <g fill={SKY.deep} opacity="0.62">
          <rect x="84" y="106" width="54" height="34" rx="5" />
          <rect x="146" y="106" width="54" height="34" rx="5" />
          <rect x="208" y="106" width="54" height="34" rx="5" />
          <rect x="270" y="106" width="56" height="34" rx="5" />
        </g>
        <rect x="84" y="150" width="150" height="12" rx="6" fill={SKY.deep} opacity="0.5" />
        <rect x="84" y="167" width="96" height="7" rx="3.5" fill={SKY.deep} opacity="0.32" />
        <circle cx="300" cy="163" r="17" fill={BRASS} opacity="0.75" />
      </g>
      <g fill={SKY.deep}>
        <circle cx="118" cy="196" r="20" />
        <circle cx="292" cy="196" r="20" />
      </g>
      <g fill={CYAN.bright} opacity="0.55">
        <circle cx="118" cy="196" r="8" />
        <circle cx="292" cy="196" r="8" />
      </g>
    </>
  ),


  transit: (id) => (
    <>
      <Backdrop id={id} />
      <g stroke={CYAN.core} strokeWidth="2" opacity="0.35">
        <line x1="60" y1="250" x2="176" y2="96" />
        <line x1="340" y1="250" x2="224" y2="96" />
        <line x1="24" y1="250" x2="166" y2="96" />
        <line x1="376" y1="250" x2="234" y2="96" />
      </g>
      <g>
        <path d="M150 96h100l26 128H124z" fill={SKY.deep} />
        <path d="M158 106h84l21 106H137z" fill={`url(#${id}-panel)`} />
        <path d="M170 120h60l9 40h-78z" fill={SKY.deep} opacity="0.62" />
        <circle cx="158" cy="188" r="9" fill={BRASS} opacity="0.85" />
        <circle cx="242" cy="188" r="9" fill={BRASS} opacity="0.85" />
        <rect x="150" y="172" width="100" height="8" rx="4" fill={SKY.deep} opacity="0.45" />
      </g>
      <rect x="0" y="228" width="400" height="6" fill={CYAN.core} opacity="0.4" />
    </>
  ),
  retail: (id) => (
    <>
      <Backdrop id={id} />
      <g>
        <rect x="52" y="46" width="296" height="204" rx="8" fill={SKY.deep} opacity="0.9" />
        <rect x="76" y="62" width="248" height="42" rx="7" fill={`url(#${id}-panel)`} />
        <rect x="98" y="76" width="130" height="9" rx="4.5" fill={SKY.deep} opacity="0.55" />
        <rect x="98" y="90" width="80" height="5" rx="2.5" fill={SKY.deep} opacity="0.35" />
        <circle cx="296" cy="83" r="12" fill={SKY.deep} opacity="0.4" />
        <path d="M70 112h260l-14 34H84z" fill={CYAN.deep} opacity="0.55" />
        <g fill={BRASS} opacity="0.5">
          <path d="M92 112h26l-13 34H84z" />
          <path d="M144 112h26l-13 34h-26z" />
          <path d="M196 112h26l-13 34h-26z" />
          <path d="M248 112h26l-13 34h-26z" />
        </g>
        <rect x="84" y="156" width="130" height="76" rx="4" fill={CYAN.core} opacity="0.22" />
        <rect x="226" y="156" width="90" height="76" rx="4" fill={CYAN.core} opacity="0.14" />
        <rect x="96" y="172" width="60" height="7" rx="3.5" fill={CYAN.bright} opacity="0.5" />
        <rect x="96" y="186" width="42" height="5" rx="2.5" fill={CYAN.bright} opacity="0.3" />
      </g>
    </>
  ),


  print: (id) => (
    <>
      <Backdrop id={id} />
      <g>
        <path d="M96 66h130l24 18v112l-24-14H96z" fill={SKY.deep} opacity="0.7" />
        <path d="M78 92 200 74v128L78 220z" fill={`url(#${id}-panel)`} opacity="0.9" />
        <path d="M200 74l122 18v128l-122-18z" fill={CYAN.deep} opacity="0.75" />
        <line x1="200" y1="74" x2="200" y2="202" stroke={SKY.deep} strokeWidth="2.5" opacity="0.5" />
        <g fill={SKY.deep} opacity="0.42">
          <rect x="96" y="104" width="76" height="9" rx="4.5" />
          <rect x="96" y="122" width="88" height="5" rx="2.5" />
          <rect x="96" y="134" width="70" height="5" rx="2.5" />
          <rect x="96" y="156" width="60" height="34" rx="4" />
        </g>
        <g fill={SKY.deep} opacity="0.38">
          <rect x="222" y="104" width="70" height="34" rx="4" />
          <rect x="222" y="150" width="82" height="5" rx="2.5" />
          <rect x="222" y="162" width="66" height="5" rx="2.5" />
          <rect x="222" y="174" width="74" height="5" rx="2.5" />
        </g>
      </g>
      <circle cx="330" cy="60" r="20" fill={BRASS} opacity="0.3" />
    </>
  ),

  digital: (id) => (
    <>
      <Backdrop id={id} />
      <g>
        <rect x="62" y="50" width="276" height="164" rx="10" fill={SKY.deep} />
        <rect x="72" y="60" width="256" height="144" rx="5" fill={SKY.mid} />
        <rect x="72" y="60" width="256" height="18" rx="5" fill={SKY.deep} opacity="0.8" />
        <g fill={CYAN.core} opacity="0.55">
          <circle cx="85" cy="69" r="3.5" />
          <circle cx="97" cy="69" r="3.5" />
          <circle cx="109" cy="69" r="3.5" />
        </g>
        <g fill={`url(#${id}-panel)`}>
          <rect x="92" y="150" width="22" height="40" rx="3" />
          <rect x="122" y="132" width="22" height="58" rx="3" />
          <rect x="152" y="140" width="22" height="50" rx="3" />
          <rect x="182" y="110" width="22" height="80" rx="3" />
          <rect x="212" y="120" width="22" height="70" rx="3" />
          <rect x="242" y="92" width="22" height="98" rx="3" />
        </g>
        <polyline
          points="103,144 133,126 163,134 193,104 223,114 253,86"
          fill="none"
          stroke={BRASS}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[103, 133, 163, 193, 223, 253].map((x, i) => (
          <circle key={x} cx={x} cy={[144, 126, 134, 104, 114, 86][i]} r="3.5" fill={BRASS} />
        ))}
        <rect x="92" y="92" width="54" height="7" rx="3.5" fill={CYAN.bright} opacity="0.45" />
      </g>
      <rect x="164" y="220" width="72" height="8" rx="4" fill={SKY.deep} />
    </>
  ),

  gift: (id) => (
    <>
      <Backdrop id={id} />
      <g>
        <rect x="112" y="128" width="128" height="98" rx="7" fill={`url(#${id}-panel)`} />
        <rect x="104" y="110" width="144" height="30" rx="7" fill={CYAN.bright} />
        <rect x="164" y="110" width="24" height="116" fill={BRASS} opacity="0.85" />

        <path d="M176 110c-16-4-30-16-22-26 8-9 22 6 22 26Z" fill={BRASS} />
        <path d="M176 110c16-4 30-16 22-26-8-9-22 6-22 26Z" fill={BRASS} />
        <circle cx="176" cy="108" r="7" fill={BRASS} />
        <rect x="248" y="162" width="82" height="64" rx="6" fill={CYAN.deep} />
        <rect x="242" y="150" width="94" height="20" rx="5" fill={CYAN.core} />
        <rect x="280" y="150" width="16" height="76" fill={BRASS} opacity="0.7" />
      </g>
      <g fill={BRASS} opacity="0.75">
        <path d="M74 84l5 12 12 5-12 5-5 12-5-12-12-5 12-5z" />
        <path d="M330 96l3.5 8 8 3.5-8 3.5-3.5 8-3.5-8-8-3.5 8-3.5z" />
      </g>
    </>
  ),


  press: (id) => (
    <>
      <Backdrop id={id} />
      <g>
        <rect x="70" y="56" width="256" height="164" rx="5" fill={SKY.deep} opacity="0.75" />
        <rect x="60" y="46" width="256" height="164" rx="5" fill={`url(#${id}-panel)`} opacity="0.95" />
        <rect x="78" y="62" width="140" height="14" rx="7" fill={SKY.deep} opacity="0.6" />
        <line x1="78" y1="86" x2="298" y2="86" stroke={SKY.deep} strokeWidth="2" opacity="0.4" />
        <rect x="78" y="96" width="104" height="66" rx="4" fill={SKY.deep} opacity="0.42" />
        <g fill={SKY.deep} opacity="0.34">
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x="192" y={96 + i * 14} width="106" height="6" rx="3" />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <rect key={`b${i}`} x="78" y={172 + i * 12} width={i % 2 ? 92 : 106} height="5" rx="2.5" />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <rect key={`c${i}`} x="192" y={172 + i * 12} width={i % 2 ? 80 : 106} height="5" rx="2.5" />
          ))}
        </g>
        <line x1="188" y1="46" x2="188" y2="210" stroke={SKY.deep} strokeWidth="2" opacity="0.28" />
      </g>
      <circle cx="344" cy="72" r="18" fill={BRASS} opacity="0.32" />
    </>
  ),
}

export default function MediaArt({ name, className = '' }) {
  const scene = scenes[name] ?? scenes.hoarding
  const id = `art-${name ?? 'default'}`

  return (
    <svg
      viewBox="0 0 400 250"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
    >
      <Defs id={id} />
      {scene(id)}
    </svg>
  )
}
