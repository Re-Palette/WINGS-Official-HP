export default function WingsLogo({ className = "w-24 h-12" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Central W */}
      <path 
        d="M80 30L90 70L100 50L110 70L120 30" 
        stroke="#F4C542" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* Left Wing */}
      <path 
        d="M75 40C60 30 40 35 20 50C40 55 60 60 75 55" 
        stroke="#F4C542" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      <path 
        d="M70 45C55 40 40 45 25 55" 
        stroke="#F4C542" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      
      {/* Right Wing */}
      <path 
        d="M125 40C140 30 160 35 180 50C160 55 140 60 125 55" 
        stroke="#F4C542" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      <path 
        d="M130 45C145 40 160 45 175 55" 
        stroke="#F4C542" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
    </svg>
  );
}
