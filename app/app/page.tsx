'use client';
import dynamic from 'next/dynamic';

// Dynamically import the 3D model component (client-side only)
const Model3D = dynamic(() => import('@/components/Model3D'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-600"></div>
    </div>
  ),
});

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-red-600 via-black to-red-600 overflow-hidden">
      {/* Animated Background Lighting Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Red glow from center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/30 rounded-full blur-[120px] animate-pulse"></div>
        {/* Purple glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-100-600/20 rounded-full blur-[150px]"></div>
      </div>

      {/* Content Overlay */}
      <main className="relative z-10 flex flex-col items-center justify-center gap-8 px-8 py-16 text-center w-full max-w-7xl">
        {/* Name and 3D Model - Horizontal on Desktop, Vertical on Mobile */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full">
          {/* First Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-700 drop-shadow-2xl font-[family-name:var(--font-orbitron)] tracking-wider">
            ALMONTI
          </h1>

          {/* 3D Model in Center with Backlighting */}
          <div className="relative w-full md:w-[500px] lg:w-[600px] h-[350px] md:h-[450px] lg:h-[500px] flex-shrink-0">
            {/* Smoky shadow effects behind the model */}
            {/* <div className="absolute inset-0 -z-20"> */}
              {/* Dark smoke layers */}
              {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-black/60 rounded-full blur-[100px]"></div> */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gray-900/50 rounded-full blur-[80px] animate-pulse"></div>
              {/* <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-black/70 rounded-full blur-[60px]"></div> */}
            {/* </div> */}
            {/* Backlight glow effects */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-red-500/40 via-purple-500/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-radial from-red-600/50 via-red-900/30 to-transparent rounded-full blur-2xl animate-pulse"></div>
            </div>
            <Model3D modelPath="/dark_tesseract.glb" />
          </div>

          {/* Last Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-500 drop-shadow-2xl font-[family-name:var(--font-orbitron)] tracking-wider">
            JOURDAN
          </h1>
        </div>

        {/* <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto">
          Welcome to my creative space
        </p> */}

        {/* Portal-style Navigation */}
        <a
          href="https://portofolio.almontijourdanm.com"
          className="group relative flex items-center gap-4 transition-all duration-500 hover:scale-110"
        >
          {/* Animated Portal Circle */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            {/* Outer rotating rings */}
            <div className="absolute inset-0 border-4 border-red-500/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="absolute inset-2 border-4 border-mist-500/30 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
            <div className="absolute inset-4 border-4 border-red-400/40 rounded-full animate-spin" style={{ animationDuration: '4s' }}></div>
            
            {/* Glowing core */}
            <div className="absolute inset-6 bg-gradient-to-br from-red-600 to-black rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-8 bg-gradient-to-br from-red-500 to-black rounded-full animate-pulse"></div>
            
            {/* Center arrow - absolutely centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-white transform group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            
            {/* Energy particles */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          {/* Text */}
          <div className="flex flex-col items-start">
            <span className="text-sm text-gray-400 uppercase tracking-widest">Enter Portal</span>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-800 to-red-400 group-hover:from-red-300 group-hover:via-red-600 group-hover:to-red-600 transition-all">
              View Portfolio
            </span>
          </div>
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-mist-600/20 to-red-600/0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        </a>

        {/* Interaction Hint */}
        {/* <div className="flex gap-6 mt-4">
          <div className="text-gray-300 text-sm">
            Drag to rotate the 3D model
          </div>
        </div> */}
      </main>
    </div>
  );
}
