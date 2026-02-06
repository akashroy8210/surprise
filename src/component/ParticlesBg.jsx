import Particles from "react-tsparticles";

export default function ParticlesBg() {
  return (
    <Particles
      className="fixed inset-0 -z-10 pointer-events-none"
      options={{
        fullScreen: { enable: false }, // ⭐ IMPORTANT FIX
        particles: {
          number: { value: 70 },
          size: { value: 2 },
          move: { speed: 0.4 },
          opacity: { value: 0.6 },
        },
        background: { color: "#0a0a12" },
      }}
    />
  );
}
