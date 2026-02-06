import { motion } from "framer-motion";
import { useState } from "react";
import Particles from "react-tsparticles";

import img1 from "../assets/image/img1.jpg";
import img2 from "../assets/image/img2.jpg";
import img3 from "../assets/image/img3.jpg";
import img4 from "../assets/image/img4.jpg";

const memories = [
  { text: "The moment everything felt magical.", img: img1 },
  { text: "When time stopped for us.", img: img2 },
  { text: "A memory I replay forever.", img: img3 },
  { text: "I love you.", img: img4 },
];

export default function MemoryCards() {

  const [open, setOpen] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.6 }}
      className="relative min-h-screen flex flex-wrap gap-20 justify-center items-center px-10 bg-black overflow-hidden"
    >

      {/* Cursor Glow */}
      <div className="
        pointer-events-none
        absolute w-[500px] h-[500px]
        bg-pink-500/20 blur-[160px]
        rounded-full
        animate-pulse
      " />

      {/* Film Grain */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_40%,black_85%)]" />

      {memories.map((memory, i) => (

        <motion.div
          key={i}

          initial={{
            opacity: 0,
            y: 80,
            filter: "blur(20px)"
          }}

          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
          }}

          transition={{ duration: 1.2 }}

          whileHover={{
            scale: 1.07,
          }}

          className="relative w-[300px] h-[420px] rounded-3xl overflow-hidden cursor-pointer"
          onClick={() => setOpen(true)}
        >

          {/* Floating animation */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0"
          >

            {/* Heartbeat */}
            <motion.img
              src={memory.img}
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 2 }}
              style={{
                filter:
                  "contrast(1.05) saturate(1.15) sepia(0.1) brightness(0.9)"
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Glass caption */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="
                absolute bottom-6 left-1/2
                -translate-x-1/2
                backdrop-blur-xl
                bg-white/10
                border border-white/20
                px-6 py-3
                rounded-full
                text-white
                shadow-lg
              "
            >
              {memory.text}
            </motion.div>

          </motion.div>

          {/* Sparkles on hover */}
          <motion.div
            className="absolute inset-0"
            whileHover={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <Particles
              options={{
                particles: {
                  number: { value: 18 },
                  size: { value: 2 },
                  move: { speed: 0.6 },
                  opacity: { value: 0.7 },
                },
              }}
            />
          </motion.div>

        </motion.div>
      ))}

      {/* LOVE LETTER MODAL */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            fixed inset-0 bg-black/80
            flex items-center justify-center
            z-50
          "
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.6, rotate: -8 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="
              bg-white text-black
              p-10 rounded-2xl
              max-w-md text-center
              shadow-2xl
            "
          >
            💌  

            <h2 className="text-2xl font-semibold mt-4">
              For You
            </h2>

            <p className="mt-4">
              Every memory with you is my favorite story.
              And if I could live them again,
              I would choose you every single time.
            </p>

            <div className="mt-6 text-sm opacity-70">
              (tap anywhere to close)
            </div>

          </motion.div>
        </motion.div>
      )}

    </motion.section>
  );
}
