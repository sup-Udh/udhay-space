export default function GridBackground() {
  return (
    <>
      <div className="fixed inset-0 z-[-2] bg-[#EADACE] bg-grid-paper" />
      {/* Subtle Noise Texture */}
      <div className="pointer-events-none fixed inset-0 z-[-1] opacity-[0.25] mix-blend-overlay">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </>
  );
}
