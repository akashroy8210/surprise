import { motion, useMotionValue, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import kiss from "../assets/image/kiss.jpg";

export default function Hero() {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.width / 2);
    y.set(e.clientY - rect.height / 2);
  };

  return (
    <section
      onMouseMove={handleMouse}
      className="h-screen flex flex-col items-center justify-center text-white relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at center, #1a1a2e, #0f0f1a 60%, #000)",
      }}
    >
      {/* Mouse Glow */}
      <div className="absolute w-[400px] h-[400px] bg-pink-500 opacity-20 blur-[140px] rounded-full animate-pulse" />

      {/* Heartbeat */}
      <div className="absolute w-[250px] h-[250px] bg-red-500 rounded-full blur-[120px] opacity-30 animate-ping" />

      <motion.img
        src={kiss}
        style={{ rotateX, rotateY }}
        initial={{ scale: 1.3, filter: "blur(40px)" }}
        animate={{ scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 2 }}
        className="w-[320px] md:w-[520px] rounded-3xl shadow-2xl"
      />

      <h1 className="text-6xl mt-10 font-semibold">
        Happy Kiss Day ❤️
      </h1>

      {/* Cinematic typing */}
      <TypeAnimation
        sequence={[
          "Some moments feel like forever...",
          2000,
          "Some kisses feel like home.",
          2000,
        ]}
        speed={40}
        repeat={Infinity}
        className="mt-6 text-xl text-gray-300"
      />
    </section>
  );
}
