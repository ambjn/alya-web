import { Hero } from "./components/Hero";
import { ParticleBackground } from "./components/ParticleBackground";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-100"
      >
        <source src="/video_background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <ParticleBackground />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <Hero />
      </div>
    </div>
  );
}

export default App;
