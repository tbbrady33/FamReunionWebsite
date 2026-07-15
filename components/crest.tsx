/**
 * The Miller family crest, redrawn as a clean scalable SVG.
 *
 * Elements: gold mantling flourishes · knight's helm · navy shield bearing
 * the Scottish saltire · rampant gold lion · MILLER scroll banner.
 * Colors track the site theme via currentColor-free explicit fills so the
 * crest reads identically on light and dark grounds.
 */
export function Crest({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 300"
      className={className}
      role="img"
      aria-label="Miller family crest — navy shield with Scottish saltire, gold lion and helm, MILLER banner"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="crest-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e3c04f" />
          <stop offset="0.5" stopColor="#c9a227" />
          <stop offset="1" stopColor="#9a7b1c" />
        </linearGradient>
        <linearGradient id="crest-navy" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#26365e" />
          <stop offset="1" stopColor="#16213f" />
        </linearGradient>
        <linearGradient id="crest-steel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d9dde5" />
          <stop offset="1" stopColor="#9aa3b2" />
        </linearGradient>
      </defs>

      {/* Mantling — symmetric gold acanthus flourishes behind the shield */}
      <g fill="url(#crest-gold)" stroke="#7c6316" strokeWidth="1.5">
        <path d="M120 52 C74 30 40 44 34 74 C29 99 44 112 38 136 C33 156 44 172 60 178 C48 160 52 148 58 132 C64 115 52 100 58 84 C64 66 88 54 120 62 Z" />
        <path d="M120 52 C166 30 200 44 206 74 C211 99 196 112 202 136 C207 156 196 172 180 178 C192 160 188 148 182 132 C176 115 188 100 182 84 C176 66 152 54 120 62 Z" />
        <path d="M46 176 C36 192 40 210 56 218 C50 204 54 194 62 186 Z" />
        <path d="M194 176 C204 192 200 210 184 218 C190 204 186 194 178 186 Z" />
      </g>

      {/* Knight's helm above the shield */}
      <g>
        <path
          d="M120 26 C104 26 94 38 94 54 L94 66 L146 66 L146 54 C146 38 136 26 120 26 Z"
          fill="url(#crest-steel)"
          stroke="#5d6673"
          strokeWidth="2"
        />
        {/* visor slits */}
        <rect x="102" y="44" width="36" height="3.5" rx="1.75" fill="#3d4552" />
        <rect x="102" y="52" width="36" height="3.5" rx="1.75" fill="#3d4552" />
        {/* plume */}
        <path
          d="M120 26 C118 14 126 8 138 8 C130 14 132 20 130 28 Z"
          fill="url(#crest-gold)"
          stroke="#7c6316"
          strokeWidth="1.5"
        />
      </g>

      {/* Shield — navy field with Scottish saltire */}
      <g>
        <path
          d="M62 66 L178 66 L178 152 C178 196 152 224 120 238 C88 224 62 196 62 152 Z"
          fill="url(#crest-navy)"
          stroke="url(#crest-gold)"
          strokeWidth="5"
        />
        {/* saltire, clipped to the shield */}
        <clipPath id="crest-shield-clip">
          <path d="M62 66 L178 66 L178 152 C178 196 152 224 120 238 C88 224 62 196 62 152 Z" />
        </clipPath>
        <g clipPath="url(#crest-shield-clip)">
          <path
            d="M52 62 L74 62 L188 234 L166 234 Z"
            fill="#f2ecdd"
            opacity="0.92"
          />
          <path
            d="M188 62 L166 62 L52 234 L74 234 Z"
            fill="#f2ecdd"
            opacity="0.92"
          />
        </g>
        {/* rampant lion over the saltire center */}
        <g
          transform="translate(96 108) scale(0.5)"
          fill="url(#crest-gold)"
          stroke="#7c6316"
          strokeWidth="3"
          strokeLinejoin="round"
        >
          {/* stylized lion rampant, facing dexter */}
          <path d="M52 12 C60 4 74 4 78 14 C82 10 90 12 90 20 C90 26 86 30 80 32 C84 40 82 50 74 56 L84 70 C90 66 98 70 96 78 C94 84 88 86 82 84 L70 74 C66 80 60 84 54 86 L60 104 C66 102 72 106 70 114 C68 120 60 122 56 118 L46 100 C42 102 38 102 34 100 L28 116 C32 120 30 128 22 128 C16 128 12 122 16 116 L24 96 C16 88 14 76 20 66 C12 62 10 52 16 46 C10 42 12 32 20 32 C18 22 28 12 40 16 C42 10 48 8 52 12 Z" />
        </g>
      </g>

      {/* Scroll banner: MILLER */}
      <g>
        <path
          d="M34 252 C48 242 72 248 120 248 C168 248 192 242 206 252 L202 276 C188 268 168 272 120 272 C72 272 52 268 38 276 Z"
          fill="url(#crest-gold)"
          stroke="#7c6316"
          strokeWidth="2"
        />
        {/* curled banner ends */}
        <path
          d="M34 252 C26 256 24 266 30 272 L38 276 Z"
          fill="#9a7b1c"
          stroke="#7c6316"
          strokeWidth="1.5"
        />
        <path
          d="M206 252 C214 256 216 266 210 272 L202 276 Z"
          fill="#9a7b1c"
          stroke="#7c6316"
          strokeWidth="1.5"
        />
        <text
          x="120"
          y="268"
          textAnchor="middle"
          fontFamily="var(--font-display), Georgia, serif"
          fontSize="19"
          fontWeight="700"
          letterSpacing="0.35em"
          fill="#1c2a4d"
        >
          MILLER
        </text>
      </g>
    </svg>
  );
}
